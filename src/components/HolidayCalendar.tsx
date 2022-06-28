import React, { FunctionComponent, useContext } from "react";
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import { kaleidoscopeAppContext } from "../context/city-context";
import moment from "moment";
import Calendar from "react-calendar";
import "../style/calendar.css";

const HolidayCalendar: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;
  // let upcommingHolidays = data?.holidays?.filter(holiday => {
  //     const date = moment(holiday.date,"YYYY-MM-DD");
  //     return date.diff(moment().format('YYYY-MM-DD')) >= 0
  // });

  let sortedUpcommingHolidays = data?.holidays?.sort(
    (a, b) => +moment(a.date).valueOf() - +moment(b.date).valueOf()
  );

  const setBackgroundForHoliday = (date: moment.MomentInput) => {
    const dateobj = sortedUpcommingHolidays?.find((x) => {
      return (
        moment(date).format("YYYY-MM-DD") ===
        moment(x.date).format("YYYY-MM-DD")
      );
    });
    return dateobj ? "highlight4" : "";
  };

  const setHolidaySummary = (date: moment.MomentInput) => {
    const dateobj = sortedUpcommingHolidays?.find((x) => {
      return (
        moment(date).format("YYYY-MM-DD") ===
        moment(x.date).format("YYYY-MM-DD")
      );
    });
    return dateobj ? <p>{dateobj.summary}</p> : null;
  };

  return (
    <>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel1"
              >
                Holiday List
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <div className="h-fit w-full">
                <div className="flex flex-col justify-between">
                  <div className="">
                    <Calendar
                      className=""
                      tileClassName={({ date }) =>
                        setBackgroundForHoliday(date)
                      }
                      tileContent={({ date }) => setHolidaySummary(date)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HolidayCalendar;
