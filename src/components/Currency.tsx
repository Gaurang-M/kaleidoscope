import React, { FunctionComponent, useContext } from "react";
import currency_icon from "../assets/currency_icon.svg";
import timeline_link from "../assets/timeline_link.svg";
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import { kaleidoscopeAppContext } from "../context/city-context";

const Currency: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;
  return (
    <>
      <div className="h-[220px] w-full border-2 border-stone-300 rounded-3xl md:mx-4 drop-shadow-lg mt-8 md:mt-0">
        <div className="flex flex-col justify-star">
          <div className="flex p-4">
            <img className="w-12 h-12" src={currency_icon}></img>
            <div className="pt-4 pl-4">
              {data?.currencyName} - {data?.currencySymbol}
            </div>
          </div>
          {data?.currencyRate && (
            <div className="p-4 text-4xl text-rose-400">
              1 {data?.currency} ({data?.currencySymbol}) ={" "}
              {data?.currencyRate?.rate} {data?.currencyRate?.base}
            </div>
          )}
          <div className="flex justify-end">
            <img
              className="w-28 h-16 mr-8 cursor-pointer"
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
