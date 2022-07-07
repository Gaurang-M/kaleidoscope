import React, { FunctionComponent, useContext } from "react";
import element from "../assets/element1.svg";
import cal_icon from "../assets/cal_icon.svg";
import { KaleidoscopeData } from "../types/types";
import { kaleidoscopeAppContext } from "../context/city-context";
import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";
import cal_link from "../assets/cal_link.svg";

const Holidays: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;
  let upcommingHolidays = data?.holidays?.filter((holiday) => {
    const date = moment(holiday.date, "YYYY-MM-DD");
    return date.diff(moment().format("YYYY-MM-DD")) >= 0;
  });

  let sortedUpcommingHolidays = upcommingHolidays?.sort(
    (a, b) => +moment(a.date).valueOf() - +moment(b.date).valueOf()
  );

  let upcomingHolidays = sortedUpcommingHolidays?.slice(0, 6);

  return (
    <div className="flex flex-col w-full relative justify-end md:mr-2">
      <div className="h-[332px] w-full border-2 border-stone-300 rounded-3xl md:mx-2 drop-shadow-lg bg-white">
        <div className="h-[324px] flex flex-col justify-start">
          <img className="pt-4 h-12 w-12 mx-auto" src={cal_icon}></img>
          <p className="pt-2 text-[#DF7D76] text-xl mx-auto font-mont font-bold">
            HOLIDAYS
          </p>
          {/* <p className="pt-2 text-lg text-[#1D97DC] mx-auto font-base">
            Upcoming Holidays
          </p> */}
          <div className="pt-1">
            <ul>
              {upcomingHolidays &&
                upcomingHolidays.map((holiday, i) => {
                  return (
                    <li
                      key={i}
                      className="h-fit py-1 text-lg border-b-2 border-zinc-200 flex flex-col justify-center"
                    >
                      <div className="flex justify-start">
                        <p className="px-2 text-black text-sm font-noto">
                          {moment(holiday.date).format("Do MMM")}
                        </p>
                        <p className="px-2 text-black text-sm  font-noto">-</p>
                        <p className="px-2 text-black text-sm font-noto break-words">
                          {holiday.summary}
                        </p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[336px] w-full rounded-3xl md:mx-2 absolute">
        <img className="mx-auto z-40" src={element}></img>
        <div className="h-[320px] flex flex-col justify-end">
          <img
            className="w-24 h-12 md:w-28 md:h-16 absolute right-8 top-4 cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
            src={cal_link}
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Holidays;
