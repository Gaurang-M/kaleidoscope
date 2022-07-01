import React, { FunctionComponent, useContext } from "react";

import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import { kaleidoscopeAppContext } from "../context/city-context";
import { Map, Marker } from "pigeon-maps";

const Maps: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;

  type Point = [number, number];

  const position: Point = [data.lat as number, data.long as number];

  return (
    <Map height={300} defaultCenter={position} defaultZoom={11}>
      <Marker width={50} anchor={position} />
    </Map>
  );
};

export default Maps;
