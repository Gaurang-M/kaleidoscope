import React, { FunctionComponent, useContext } from "react";
import { KaleidoscopeData } from "../types/types";
import { kaleidoscopeAppContext } from "../context/city-context";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CovidTimeSeriese: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;
  let options = data.covidDataTimeSeriese;
  let x = options?.map((a) => a.date) as string[];
  let cases = options?.map((a) => a.cases) as number[];
  let deaths = options?.map((a) => a.deaths) as number[];
  let recovered = options?.map((a) => a.recovered) as number[];
  let HighchartOption: Highcharts.Options = {
    chart: {
      events: {
        load() {
          //setTimeout(this.reflow.bind(this), 0);
        },
      },
    },
    title: {
      text: `Covid Time Seriese in ${data.country}`,
    },
    xAxis: {
      categories: x,
    },
    yAxis: {
      title: {
        text: `Value`,
      },
    },
    series: [
      {
        name: `Active`,
        type: "line",
        data: cases,
      },
      {
        name: `Deaths`,
        type: "line",
        data: deaths,
        //visible: false,
      },
      {
        name: `Recovered`,
        type: "line",
        data: recovered,
        //visible: false,
      },
    ],
  };
  return (
    <>
      <div
        className="font-noto modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal3"
        aria-labelledby="exampleModalLabel3"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel3"
              >
                Timeline
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              {data.covidDataTimeSeriese && (
                <div className="h-fit w-full border-2 border-stone-300 rounded-lg md:mx-2 drop-shadow-lg mt-8 md:mt-0">
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={HighchartOption}
                  />
                </div>
              )}
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
export default CovidTimeSeriese;
