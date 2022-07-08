import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from "react";
import element from "../assets/element1.svg";
import { KaleidoscopeData } from "../types/types";
import { kaleidoscopeAppContext } from "../context/city-context";

const Weather: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;

  return (
    <div className="flex flex-col w-full md:w-1/3 relative justify-end">
      <div className="h-[150px] md:h-[220px] w-full border-2 border-stone-300 rounded-3xl drop-shadow-lg bg-white">
        <div className="">
          <div className="flex justify-center">
            <p className="font-mont font-bold text-[#DF7D76] text-xl mx-auto pt-4">
              WEATHER
            </p>
          </div>
          <div className="h-[150px] md:h-[220px] flex md:flex-col justify-evenly md:justify-start">
            <div className="flex justify-center">
              <p className="font-mont pt-2 text-5xl text-rose-400">
                {data?.tempreature}
              </p>
              <p className="pt-2 pl-2 text-2xl text-black font-noto ">&deg;C</p>
            </div>
            <div className="hidden md:block md:mx-auto flex justify-center">
              <p className="p-2 text-sm text-zinc-500">{data.weather?.desc}</p>
            </div>
            <div className="flex justify-center">
              <img className="w-fit h-fit" src={data.weather?.icon}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[154px] md:h-56 w-full rounded-3xl absolute">
        <img className="mx-auto z-40" src={element}></img>
      </div>
    </div>
  );
};
export default Weather;
