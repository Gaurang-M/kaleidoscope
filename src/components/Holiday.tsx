import React, { FunctionComponent, useContext } from "react"
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import { kaleidoscopeAppContext } from "../context/city-context";
import moment from "moment";
import Calendar from "react-calendar";
import "../style/calendar.css";

const Holidays : FunctionComponent<{}> = () => {
    const data : KaleidoscopeData = useContext(kaleidoscopeAppContext).KaleidoscopeData;
    // let upcommingHolidays = data?.holidays?.filter(holiday => {
    //     const date = moment(holiday.date,"YYYY-MM-DD");
    //     return date.diff(moment().format('YYYY-MM-DD')) >= 0
    // });
    
    let sortedUpcommingHolidays = data?.holidays?.sort((a,b) => +moment(a.date).valueOf() - +moment(b.date).valueOf())

    const setBackgroundForHoliday = (date: moment.MomentInput) => {
        const dateobj =
          sortedUpcommingHolidays?.find((x) => {
            return (
                moment(date).format('YYYY-MM-DD') === moment(x.date).format('YYYY-MM-DD')
            );
          });
        return (dateobj)?"highlight4":"";
      };

     const setHolidaySummary = (date: moment.MomentInput) => {
        const dateobj =
          sortedUpcommingHolidays?.find((x) => {
            return (
                moment(date).format('YYYY-MM-DD') === moment(x.date).format('YYYY-MM-DD')
            );
          });
        return (dateobj)?<p>{dateobj.summary}</p>:null;
      };
    
    return (
        <>
            <div className="h-fit w-full border-2 border-stone-300 rounded-lg mx-2 drop-shadow-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <p className=" w-1/2 mx-auto text-rose-500 text-center p-4 text-xl">
                            Upcomming Holidays
                        </p>
                    </div> 
                    <div className="">
                        <Calendar className=""
                            tileClassName={({ date }) => setBackgroundForHoliday(date)}
                            tileContent={({ date }) => setHolidaySummary(date)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Holidays