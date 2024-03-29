import React, { FunctionComponent, useContext } from "react";
import currency_icon from "../assets/currency_icon.svg";
import timeline_link from "../assets/timeline_link.svg";
import { KaleidoscopeData } from "../types/types";
import { kaleidoscopeAppContext } from "../context/city-context";
import element from "../assets/element1.svg";

const Currency: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;
  return (
    <>
      <div className="flex flex-col w-full md:w-2/3 relative justify-end pt-8 md:pt-0">
        <div className="h-[220px] w-full border-2 border-stone-300 rounded-3xl drop-shadow-lg bg-white">
          <div className="flex justify-center">
            <p className="text-[#DF7D76] text-xl font-mont font-bold pt-4">
              CURRENCY
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <img className="w-12 h-12" src={currency_icon}></img>
            </div>
            <div className="flex justify-center">
              <p className="pt-4 pl-4 text-black font-extrabold">
                {data?.currencyName} - {data?.currencySymbol}
              </p>
            </div>
            {data?.currencyRate && (
              <div className="flex justify-center">
                <div className="pt-3 text-2xl text-[#DF7D76] font-mont font-bold">
                  {data?.currencyRate?.rate.toFixed(2)} {data?.currency} (
                  {data?.currencySymbol}) = 1 {data?.currencyRate?.base}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="h-56 w-full rounded-3xl absolute">
          <img className="mx-auto z-40" src={element}></img>
          <div className="flex justify-end">
            <img
              className="w-24 h-12 mr-8 cursor-pointer"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              src={timeline_link}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default Currency;
