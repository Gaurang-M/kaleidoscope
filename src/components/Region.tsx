import React, { FunctionComponent, useContext } from "react"
import { kaleidoscopeAppContext } from "../context/city-context";
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import moment from "moment";

const Region : FunctionComponent<{}> = () => {
    const data : KaleidoscopeData = useContext(kaleidoscopeAppContext).KaleidoscopeData;
    return (      
        <div className="flex justify-between h-fit bg-[#05032D] border-t-4 border-rose-300 mx-32 rounded-b-lg drop-shadow-2xl">
            <div className="flex flex-col">
                <div className="flex">
                    <p className="p-2 text-2xl text-sky-400">{data.continent}</p>
                    <p className="p-2 text-2xl text-white">/</p>
                    <p className="p-2 text-2xl text-sky-400">{data.country}</p>
                    <p className="p-2 text-2xl text-white">/</p>
                    <p className="p-2 text-2xl text-sky-400">{data.region}</p>
                </div>
                <ul className="flex">
                    <p className="p-2 text-4xl text-white">{data.city}</p>
                    <p className="p-4 text-sm text-white text-end">Languages Spoken: {data.languages?.join(",")}</p>
                </ul>
                <div className="flex ">
                    <p className="p-8 text-sm text-sky-100">{data.weather?.desc}</p>
                    <img className="py-2 w-[50px] h-[70px]" src={data.weather?.icon}></img>
                </div>
            </div>
            <div className="">
                <p className="p-4 text-4xl text-white">{moment().format('MMMM Do YYYY')}</p>
                <p className="p-4 text-lg text-sky-400">Timezone: {data.tz}</p>
            </div>
            <div className="">
                <img className="p-4 w-[100px] h-[73px]" src={data.flag as string}></img>
            </div>
        </div>
    )
}
export default Region