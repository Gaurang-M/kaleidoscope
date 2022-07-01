import React, { FunctionComponent, useContext } from "react";
import element from "../assets/element1.svg";
import cal_icon from "../assets/cal_icon.svg";
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import { kaleidoscopeAppContext } from "../context/city-context";
import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";

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
    <div className="flex flex-col w-full relative justify-end md:mx-4">
      <div className="h-[324px] w-full border-2 border-stone-300 rounded-3xl md:mx-2 drop-shadow-lg bg-white">
        <div className="h-[324px] flex flex-col justify-start">
          <img className="pt-4 h-12 w-12 mx-auto" src={cal_icon}></img>
          <p className="pt-2 text-rose-400 text-xl md:text-2xl mx-auto font-semibold">
            HOLIDAYS
          </p>
          <p className="pt-2 text-lg text-blue-400 mx-auto">
            Upcoming Holidays
          </p>
          <div className="pt-1">
            <ul>
              {upcomingHolidays &&
                upcomingHolidays.map((holiday, i) => {
                  return (
                    <li
                      key={i}
                      className="h-8 text-lg border-b-2 border-zinc-200"
                    >
                      <div className="flex justify-between">
                        <p className="px-2 md:px-8 text-zinc-500 text-sm md:text-xl">
                          {holiday.summary}
                        </p>
                        <p className="px-2 md:px-8 text-zinc-500 text-sm md:text-xl">
                          {moment(holiday.date).format("Do MMM YYYY")}
                        </p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[328px] w-full rounded-3xl md:mx-2 absolute">
        <img className="mx-auto z-40" src={element}></img>
        <div className="h-[320px] flex flex-col justify-start">
          <div
            className="w-44 flex absolute right-4 top-4 cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            <p className="pt-2 text-blue-500">View on calendar </p>
            <FaCalendarAlt className="h-8 w-8 mx-auto text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Holidays;
