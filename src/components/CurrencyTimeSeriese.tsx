import React, { FunctionComponent, useContext } from "react";
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import { kaleidoscopeAppContext } from "../context/city-context";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CurrencyTimeSeriese: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;
  let options = data.currencyRateTimeSeriese?.slice(-30);
  let x = options?.map((a) => a.date) as string[];
  let y = options?.map((a) => a.rate) as number[];
  let HighchartOption: Highcharts.Options = {
    chart: {
      events: {
        load() {
          //setTimeout(this.reflow.bind(this), 0);
        },
      },
    },
    title: {
      text: `${data.currency} Time Seriese against ${data.currencyRate?.base}`,
    },
    xAxis: {
      categories: x,
    },
    yAxis: {
      title: {
        text: `${data.currency}`,
      },
    },
    series: [
      {
        name: `${data.currency}`,
        type: "line",
        data: y,
      },
    ],
  };
  return (
    <>
      {data.currencyRateTimeSeriese && (
        <div className="h-fit w-full border-2 border-stone-300 rounded-lg md:mx-2 drop-shadow-lg">
          <HighchartsReact highcharts={Highcharts} options={HighchartOption} />
        </div>
      )}
    </>
  );
};
export default CurrencyTimeSeriese;
