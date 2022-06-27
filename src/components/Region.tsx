import React, { FunctionComponent, useContext } from "react"
import { kaleidoscopeAppContext } from "../context/city-context";
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import moment from "moment";

const Region : FunctionComponent<{}> = () => {
    const data : KaleidoscopeData = useContext(kaleidoscopeAppContext).KaleidoscopeData;
    return (      
        <div className="flex flex-col md:flex-row justify-evenly h-fit bg-[#05032D] border-t-4 border-rose-300 md:mx-32 rounded-b-lg drop-shadow-2xl">
            <div className="flex flex-col">
                <div className="flex">
                    <p className="p-2 text-xl md:text-2xl text-sky-400">{data.continent}</p>
                    <p className="p-2 text-xl md:text-2xl text-white">/</p>
                    <p className="p-2 text-xl md:text-2xl text-sky-400">{data.country}</p>
                    {data.city && data.region && 
                        <>
                            <p className="p-2 text-xl md:text-2xl text-white">/</p>
                            <p className="p-2 text-xl md:text-2xl text-sky-400">{data.region}</p>
                        </>
                    }
                </div>
                <ul className="flex">
                    {data.city && <p className="p-2 text-2xl md:text-4xl text-white">{data.city}</p>}
                    {!data.city && data.region && <p className="p-2 text-2xl md:text-4xl text-white">{data.region}</p>}
                    <p className="p-4 text-xs md:text-sm text-white text-end">Languages Spoken: {data.languages?.join(",")}</p>
                </ul>
                <div className="flex ">
                    <p className="pt-8 pl-2 text-xs md:text-sm text-sky-100">{data.weather?.desc}</p>
                    <img className="py-2 w-[45px] h-[65px] md:w-[50px] md:h-[70px]" src={data.weather?.icon}></img>
                </div>
            </div>
            <div className="">
                <p className="p-2 text-xl md:text-2xl text-white">{moment().format('MMMM Do YYYY')}</p>
                <p className="p-2 text-sm md:text-lg text-sky-400">{data.tz}</p>
            </div>
            <div className="flex p-2 md:p-0 md:justify-center">
                <img className="w-[73px] h-[46px] md:my-auto w-[100px] h-[73px]" src={data.flag as string}></img>
            </div>
        </div>
    )
}
export default Region