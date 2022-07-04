import React, { FunctionComponent, useContext } from "react";
import currency_icon from "../assets/currency_icon.svg";
import timeline_link from "../assets/timeline_link.svg";
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import { kaleidoscopeAppContext } from "../context/city-context";
import element from "../assets/element1.svg";

const Currency: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;
  return (
    <>
      <div className="flex flex-col w-full md:w-2/3 relative justify-end pt-8 md:pt-0">
        <div className="h-[220px] w-full border-2 border-stone-300 rounded-3xl md:mx-2 drop-shadow-lg bg-white">
          <div className="flex flex-col justify-star">
            <p className="text-rose-400 text-xl md:text-2xl mx-auto font-semibold pt-4">
              CURRENCY
            </p>
            <div className="flex p-4">
              <img className="w-12 h-12" src={currency_icon}></img>
              <p className="pt-4 pl-4 text-black font-extrabold">
                {data?.currencyName} - {data?.currencySymbol}
              </p>
            </div>
            {data?.currencyRate && (
              <div className="p-4 text-2xl md:text-4xl text-rose-400">
                1 {data?.currency} ({data?.currencySymbol}) ={" "}
                {data?.currencyRate?.rate} {data?.currencyRate?.base}
              </div>
            )}
          </div>
        </div>
        <div className="h-56 w-full rounded-3xl md:mx-2 absolute">
          <img className="mx-auto z-40" src={element}></img>
          <div className="flex justify-end">
            <img
              className="w-24 h-12 md:w-28 md:h-16 mr-8 cursor-pointer"
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
