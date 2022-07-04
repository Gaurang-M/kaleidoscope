import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from "react";
import element from "../assets/element1.svg";
import { KaleidoscopeData } from "../types/types";
import { kaleidoscopeAppContext } from "../context/city-context";

const Pollution: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;

  const [range, setRange] = useState<any>({
    range: "0-50",
    message: "Good",
    id: 1,
  });

  const aqiStatus = [
    {
      range: "0-50",
      message: "Good",
      id: 1,
    },
    {
      range: "50-100",
      message: "Moderate",
      id: 2,
    },
    {
      range: "100-150",
      message: "Bad",
      id: 3,
    },
    {
      range: "150-200",
      message: "Unhealthy",
      id: 4,
    },
    {
      range: "200-300",
      message: "Very Unhealthy",
      id: 5,
    },
    {
      range: "300-500",
      message: "Hazardous",
      id: 6,
    },
  ];

  useEffect(() => {
    const currentAqiStatus = setAqiStatus();
    setRange(currentAqiStatus);
    return () => {};
  }, []);

  const setAqiStatus = () => {
    const range = aqiStatus.filter((status) => {
      const limit = status.range.split("-");
      if (
        (data?.aqi as number) >= parseInt(limit[0]) &&
        (data?.aqi as number) <= parseInt(limit[1])
      ) {
        return status;
      }
    });
    return range[0];
  };

  return (
    <div className="flex flex-col w-full md:w-2/5 relative justify-end pt-8 md:pt-0 md:mx-5">
      <div className="h-[220px] w-full border-2 border-stone-300 rounded-3xl md:mx-2 drop-shadow-lg bg-white">
        <div className="flex justify-evenly">
          <div className="flex flex-col">
            <p className="text-rose-400 text-xl md:text-2xl mx-auto font-semibold pt-4">
              POLLUTION
            </p>
            <div className="flex justify-start pt-2">
              <p className="text-black text-xl pt-2 font-extrabold">
                PM2.5 AQI{" "}
              </p>
              <div className="flex ml-2 border-2 border-rose-500 rounded-3xl">
                {range.id === 1 && (
                  <div className="rounded-full w-4 h-4 bg-green-500 mt-2 mx-2 "></div>
                )}
                {range.id === 2 && (
                  <div className="rounded-full w-4 h-4 bg-yellow-500 mt-2 mx-2 "></div>
                )}
                {range.id === 3 && (
                  <div className="rounded-full w-4 h-4 bg-orange-500 mt-2 mx-2 "></div>
                )}
                {range.id === 4 && (
                  <div className="rounded-full w-4 h-4 bg-red-500 mt-2 mx-2 "></div>
                )}
                {range.id === 5 && (
                  <div className="rounded-full w-4 h-4 bg-indigo-900 mt-2 mx-2 "></div>
                )}
                {range.id === 6 && (
                  <div className="rounded-full w-4 h-4 bg-orange-800 mt-2 mx-2 "></div>
                )}
                <p className="text-black text-sm mt-2 pr-2">{range?.message}</p>
              </div>
            </div>
            <div className="flex justify-start pt-2">
              <p className="text-5xl text-blue-400">{data.aqi}</p>
              <p className="text-5xl text-zinc-400 pl-2"> / </p>
              <p className="text-xl text-black pt-4 pl-2 font-extrabold">
                {" "}
                30{" "}
              </p>
              <p className="text-sm text-black pt-[22px] pl-1 font-extrabold">
                min
              </p>
            </div>
            <div className="flex justify-start pt-4">
              <div className="w-1/2 h-2 bg-green-500 mx-0.5"></div>
              <div className="w-1/2 h-2 bg-yellow-500 mx-0.5"></div>
              <div className="w-1/2 h-2 bg-orange-500 mx-0.5"></div>
              <div className="w-1/2 h-2 bg-red-500 mx-0.5"></div>
              <div className="w-1/2 h-2 bg-indigo-900 mx-0.5"></div>
              <div className="w-1/2 h-2 bg-orange-800 mx-0.5"></div>
            </div>
            <div className="pt-1">
              {range.id === 1 && (
                <div className="w-full overflow-hidden inline-block pl-[5px]">
                  <div className=" h-4 w-4 bg-green-500 rotate-45 transform origin-bottom-left"></div>
                </div>
              )}

              {range.id === 2 && (
                <div className="w-full overflow-hidden inline-block pl-[35px]">
                  <div className=" h-4 w-4 bg-yellow-500 rotate-45 transform origin-bottom-left"></div>
                </div>
              )}

              {range.id === 3 && (
                <div className="w-full overflow-hidden inline-block pl-[64px]">
                  <div className=" h-4 w-4 bg-orange-500 rotate-45 transform origin-bottom-left"></div>
                </div>
              )}

              {range.id === 4 && (
                <div className="w-full overflow-hidden inline-block pl-[94px]">
                  <div className=" h-4 w-4 bg-red-500 rotate-45 transform origin-bottom-left"></div>
                </div>
              )}

              {range.id === 5 && (
                <div className="w-full overflow-hidden inline-block pl-[125px]">
                  <div className=" h-4 w-4 bg-indigo-900 rotate-45 transform origin-bottom-left"></div>
                </div>
              )}

              {range.id === 6 && (
                <div className="w-full overflow-hidden inline-block pl-[154px]">
                  <div className=" h-4 w-4 bg-orange-800 rotate-45 transform origin-bottom-left"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-56 w-full rounded-3xl md:mx-2 absolute">
        <img className="mx-auto z-40" src={element}></img>
      </div>
    </div>
  );
};
export default Pollution;
