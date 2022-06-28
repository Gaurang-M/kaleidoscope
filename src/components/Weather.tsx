import React, { FunctionComponent, useContext } from "react";
import element from "../assets/element1.svg";
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import { kaleidoscopeAppContext } from "../context/city-context";

const Weather: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;
  return (
    <div className="flex flex-col w-full md:w-2/3 relative justify-end md:mx-4">
      <div className="h-[220px] w-full border-2 border-stone-300 rounded-3xl md:mx-2 drop-shadow-lg bg-white">
        <div className="h-[220px] flex flex-col justify-evenly">
          <p className="text-rose-400 text-xl md:text-2xl mx-auto font-semibold">
            WEATHER
          </p>
          <div className="flex justify-center">
            <p className="pt-4 text-lg text-black">{data.weather?.desc}</p>
            <img className="" src={data.weather?.icon}></img>
            <p className="pt-2 text-5xl text-blue-400">&deg;C</p>
          </div>
          <div className="flex justify-center">
            <p className="pt-2 text-5xl text-blue-400">{data?.tempreature}</p>
          </div>
        </div>
      </div>
      <div className="h-56 w-full rounded-3xl md:mx-2 absolute">
        <img className="mx-auto z-40" src={element}></img>
      </div>
    </div>
  );
};
export default Weather;
