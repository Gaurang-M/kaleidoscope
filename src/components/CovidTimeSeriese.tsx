import React, { FunctionComponent, useContext } from "react"
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import { kaleidoscopeAppContext } from "../context/city-context";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const CovidTimeSeriese : FunctionComponent<{}> = () => {
    const data : KaleidoscopeData = useContext(kaleidoscopeAppContext).KaleidoscopeData;
    let options = data.covidDataTimeSeriese;
    let x = options?.map(a => a.date) as string[];
    let cases = options?.map(a => a.cases) as number[];
    let deaths = options?.map(a => a.deaths) as number[];
    let recovered = options?.map(a => a.recovered) as number[];
    let HighchartOption :  Highcharts.Options = {
        chart:{
            events: {
                load() {
                    setTimeout(this.reflow.bind(this), 0);
                },
            },
        },
        title: {
            text: `Covid Time Seriese in ${data.country}`
        },
        xAxis: {
            categories: x
         },
         yAxis: {
            title: {
                text: `Value`
            }
        },
        series: [{
            name: `Active`,
            type: 'line',
            data: cases
        },
        {
            name: `Deaths`,
            type: 'line',
            data: deaths
            //visible: false,
        },{
            name: `Recovered`,
            type: 'line',
            data: recovered
            //visible: false,
        }]
    }
    return (
        <>
            {data.covidDataTimeSeriese && <div className="h-fit w-full border-2 border-stone-300 rounded-lg mx-2 drop-shadow-lg mt-8 md:mt-0">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={HighchartOption}
                />
            </div>}
        </>
    )
}
export default CovidTimeSeriese