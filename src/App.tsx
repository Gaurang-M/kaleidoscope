import React, { useState, useEffect } from "react";
import { kaleidoscopeAppContext } from "./context/city-context";
import {
  Api,
  KaleidoscopeData,
  defaultKaleidoscopeData,
} from "./api/graphql-kaleidoscope";
import LandingPage from "./components/LandingPage";

import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";

function App() {
  const fjData = useVisitorData().data;
  const visitorId = fjData?.visitorId;

  const [data, setData] = useState<KaleidoscopeData>(defaultKaleidoscopeData);

  const getKaleidoscopeData = async () => {
    console.log(fjData);
    const data = await Api.getKaleidoscopeData(visitorId as string);
    setData(data);
  };

  useEffect(() => {
    if (visitorId) {
      getKaleidoscopeData();
    }
    return () => {};
  }, [visitorId]);

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
