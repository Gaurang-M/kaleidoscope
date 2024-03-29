import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tw-elements";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";
import ErrorBoundary from "./Errorboundry";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <FpjsProvider
        loadOptions={{
          apiKey: process.env.REACT_APP_FINGERPRINTJS_API_KEY as string,
        }}
      >
        <App />
      </FpjsProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
