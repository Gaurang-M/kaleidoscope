import React, { Component, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

const TAG = "ErrorBoundary";

export const ErrorBoundaryContent: React.FC<unknown> = () => {
  return (
    <h1 className="flex justify-center w-96">
      Sorry, unexpected error occured!
    </h1>
  );
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public componentDidCatch(error: Error) {
    console.log(error);
  }

  public render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <ErrorBoundaryContent />;
    }

    return children;
  }
}

export default ErrorBoundary;
