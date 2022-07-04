import React, { useState, useEffect } from "react";
import { kaleidoscopeAppContext } from "./context/city-context";
import { Api } from "./api/graphql-kaleidoscope";
import { KaleidoscopeData, defaultKaleidoscopeData } from "./types/types";
import LandingPage from "./components/LandingPage";

import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { useDetectAdBlock } from "adblock-detect-react";

function App() {
  const adBlockDetected = useDetectAdBlock();

  React.useEffect(() => {
    if (adBlockDetected) {
      window.alert("ad block detected");
    }
  }, []);

  const fjData = useVisitorData()?.data;
  const err = useVisitorData()?.error;

  const visitorId = fjData?.visitorId;

  const [data, setData] = useState<KaleidoscopeData>(defaultKaleidoscopeData);

  const getKaleidoscopeDataForVisitor = async (visitor: string | null) => {
    const data = await Api.getKaleidoscopeData(visitorId as string);
    setData(data);
  };

  useEffect(() => {
    if (visitorId) {
      getKaleidoscopeDataForVisitor(visitorId as string);
    }
    if (err) {
      getKaleidoscopeDataForVisitor(null);
    }
    return () => {};
  }, [visitorId, err]);

  return (
    <kaleidoscopeAppContext.Provider
      value={{
        KaleidoscopeData: data,
      }}
    >
      <LandingPage />
    </kaleidoscopeAppContext.Provider>
  );
}

export default App;
