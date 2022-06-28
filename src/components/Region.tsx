import React, { FunctionComponent, useContext } from "react";
import { kaleidoscopeAppContext } from "../context/city-context";
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import moment from "moment";
import { FaLanguage } from "react-icons/fa";
import element from "../assets/element1.svg";

const Region: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;
  return (
    <div className="flex flex-col md:flex-row justify-between h-fit md:h-48 bg-[#05032D] border-t-4 border-rose-300 md:mx-16 rounded-b-lg drop-shadow-2xl">
      <div className="flex flex-col">
        <div className="flex justify-evenly md:justify-start">
          <p className="p-1 pl-6 text-xl md:text-2xl text-sky-400">
            {data.continent}
          </p>
          <p className="p-1 text-xl md:text-2xl text-white">/</p>
          <p className="p-1 text-xl md:text-2xl text-sky-400">{data.country}</p>
          {data.city && data.region && (
            <>
              <p className="p-1 text-xl md:text-2xl text-white">/</p>
              <p className="p-1 text-xl md:text-2xl text-sky-400">
                {data.region}
              </p>
            </>
          )}
          <div className="md:hidden p-2">
            <img className="w-[73px] h-[46px]" src={data.flag as string}></img>
          </div>
        </div>
        <ul className="flex">
          {data.city && (
            <p className="p-2 pl-6  text-2xl md:text-4xl text-white">
              {data.city}
            </p>
          )}
          {!data.city && data.region && (
            <p className="p-2 pl-6 text-2xl md:text-4xl text-white">
              {data.region}
            </p>
          )}
          {data?.languages && (
            <div className="flex justify-start">
              <FaLanguage className="my-auto h-8 w-8 text-cyan-500" />
              <p className="my-auto pl-2 text-xs md:text-sm text-white text-end">
                {data.languages?.join(",")}
              </p>
            </div>
          )}
        </ul>
      </div>
      <div className="flex flex-col justify-end">
        <div className="w-full md:w-[600px] h-[149px] rounded-t-3xl absolute">
          <img className="mx-auto" src={element}></img>
        </div>
        <div className="bg-white w-full md:w-[600px] h-36 rounded-t-3xl">
          <div className="flex justify-center pt-2">
            <p className="p-1 text-xl md:text-5xl text-rose-400">
              {moment().format("Do")}
            </p>
            <div className="flex flex-col pl-2">
              <p className="text-sm md:text-lg text-rose-400">
                {moment().format("MMMM")}
              </p>
              <p className="text-sm md:text-lg text-zinc-500">
                {moment().format("YYYY")}
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-6">
            <p className="text-sm md:text-sm text-black">
              {moment().format("h:mm a")}
            </p>
            <p className="text-sm text-black px-2"> | </p>
            <p className="text-sm md:text-sm text-black">{data.tz}</p>
            <p className="text-sm text-black px-1"></p>
            <p className="text-sm md:text-sm text-black">({data.timezone})</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block flex p-2 justify-center">
        <img
          className="w-[73px] h-[46px] md:p-4 md:w-[90px] md:h-[73px]"
          src={data.flag as string}
        ></img>
      </div>
    </div>
  );
};
export default Region;
