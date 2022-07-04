import React, { FunctionComponent, useContext } from "react";

import { KaleidoscopeData } from "../types/types";
import { kaleidoscopeAppContext } from "../context/city-context";
import { Map, Marker } from "pigeon-maps";

const Maps: FunctionComponent<{height : number}> = ({height}) => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;

  type Point = [number, number];

  const position: Point = [data.lat as number, data.long as number];

  return (
    <Map height={height} defaultCenter={position} defaultZoom={15}>
      <Marker width={50} anchor={position} />
    </Map>
  );
};

export default Maps;
