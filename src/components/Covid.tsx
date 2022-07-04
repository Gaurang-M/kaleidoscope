import React, { FunctionComponent, useContext } from "react";
import { KaleidoscopeData } from "../types/types";
import { kaleidoscopeAppContext } from "../context/city-context";
import element from "../assets/element1.svg";
import corona_icon from "../assets/corona_icon.svg";
import timeline_link from "../assets/timeline_link.svg";

const Covid: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;
  return (
    <>
      {data.covidData && (
        <div className="flex flex-col w-full relative justify-end md:mx-4 mt-8 md:mt-0">
          <div className="h-[320px] w-full border-2 border-stone-300 rounded-3xl md:mx-2 drop-shadow-lg bg-white">
            <div className="h-[320px] flex flex-col justify-start">
              <img className="pt-4 h-12 w-12 mx-auto" src={corona_icon}></img>
              <p className="pt-2 text-rose-400 text-xl md:text-2xl mx-auto font-semibold">
                COVID UPDATES
              </p>
              {!data?.covidData && (
                <div className="h-[320px] flex justify-center">
                  <p className="text-xl text-zinc-500 my-auto">
                    No Data Available
                  </p>
                </div>
              )}
              {data?.covidData && (
                <div className="">
                  <ul>
                    <li className="h-8 text-lg border-b-2 border-zinc-200">
                      <div className="flex justify-between">
                        <p className="px-8 text-zinc-500">Cases</p>
                        <p className="px-8 text-zinc-500">
                          {data.covidData?.cases.toLocaleString(undefined)}
                        </p>
                      </div>
                    </li>
                    <li className="h-8 text-lg border-b-2 border-zinc-200">
                      <div className="flex justify-between">
                        <p className="px-8 text-zinc-500">Deaths</p>
                        <p className="px-8 text-zinc-500">
                          {data.covidData?.deaths.toLocaleString(undefined)}
                        </p>
                      </div>
                    </li>
                    <li className="h-8 text-lg border-b-2 border-zinc-200">
                      <div className="flex justify-between">
                        <p className="px-8 text-zinc-500">Recovered</p>
                        <p className="px-8 text-zinc-500">
                          {data.covidData?.recovered.toLocaleString(undefined)}
                        </p>
                      </div>
                    </li>
                    <li className="h-8 text-lg border-b-2 border-zinc-200">
                      <div className="flex justify-between">
                        <p className="px-8 text-zinc-500">Population</p>
                        <p className="px-8 text-zinc-500">
                          {data.covidData?.population?.toLocaleString(
                            undefined
                          )}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="h-[324px] w-full rounded-3xl md:mx-2 absolute">
            <img className="mx-auto z-40" src={element}></img>
            {data.covidDataTimeSeriese && (
              <img
                className="w-28 h-16 right-4 top-2 cursor-pointer absolute"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
                src={timeline_link}
              ></img>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Covid;
