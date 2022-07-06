import React, { useState, useEffect } from "react";
import { kaleidoscopeAppContext } from "./context/city-context";
import { Fp_Api } from "./api/FpIpify/graphql-kaleidoscope";
import { LatLong_Api } from "./api/LatLong/graphql-kaleidoscope";
import {
  KaleidoscopeData,
  defaultKaleidoscopeData,
  Coordinates,
} from "./types/types";
import LandingPage from "./components/LandingPage";

import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import bgImage from "./assets/bg1.svg";

function App() {
  const [coord, setCoord] = useState<Coordinates | null>(null);

  function showPosition(position: any) {
    console.log(
      "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude
    );
    setCoord({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  }

  function errHandler(err: any) {
    console.log(err);
    setCoord({ lat: null, long: null });
  }

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, errHandler);
    } else {
      setCoord({ lat: null, long: null });
    }
  }, []);

  const fjData = useVisitorData()?.data;
  const err = useVisitorData()?.error;

  let visitorId: string | undefined = undefined;

  if (coord?.lat === null) {
    visitorId = fjData?.visitorId;
  }

  const [data, setData] = useState<KaleidoscopeData>(defaultKaleidoscopeData);

  const getKaleidoscopeDataForVisitor = async (visitor: string | null) => {
    const data = await Fp_Api.getKaleidoscopeData(visitorId as string);
    setData(data);
  };

  const getKaleidoscopeDataForLatLong = async (coord: Coordinates) => {
    const data = await LatLong_Api.getKaleidoscopeData(coord);
    setData(data);
  };

  useEffect(() => {
    console.log(coord);
    console.log(visitorId);
    console.log(err);
    if (coord?.lat && coord?.long) {
      getKaleidoscopeDataForLatLong(coord);
    } else if (visitorId) {
      getKaleidoscopeDataForVisitor(visitorId as string);
    } else if (err) {
      getKaleidoscopeDataForVisitor(null);
    }
    return () => {};
  }, [visitorId, err, coord]);

  return (
    //style={{ backgroundImage: `url(${bgImage})` }}
    <div className="bg-zinc-200">
      <kaleidoscopeAppContext.Provider
        value={{
          KaleidoscopeData: data,
        }}
      >
        <LandingPage />
      </kaleidoscopeAppContext.Provider>
    </div>
  );
}

export default App;
