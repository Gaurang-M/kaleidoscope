import React, { FunctionComponent, useContext } from "react"
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import { kaleidoscopeAppContext } from "../context/city-context";

const Covid : FunctionComponent<{}> = () => {
    const data : KaleidoscopeData = useContext(kaleidoscopeAppContext).KaleidoscopeData;
    return (
        <>
            {data?.covidData && <div className="h-56 w-full border-2 border-stone-300 rounded-lg md:mx-2 drop-shadow-lg mt-8 md:mt-0">
                <div className="flex flex-col">
                    <div>
                        <p className=" w-1/2 mx-auto text-rose-500 text-center p-4 text-xl">
                            Covid Snapshot
                        </p>
                    </div> 
                    {!data?.covidData && <div className="flex justify-center">
                        <p className="text-xl text-zinc-500 my-auto">No Data Available</p>
                    </div>}
                    {data?.covidData && <div className="">
                        <ul>
                            <li className="h-8 text-lg border-b-2 border-zinc-200">
                                <div className="flex justify-between">
                                    <p className="px-8 text-zinc-500">
                                        Cases
                                    </p>
                                    <p className="px-8 text-zinc-500">
                                        {data.covidData?.cases.toLocaleString(undefined)}
                                    </p>
                                </div>
                            </li>
                            <li className="h-8 text-lg border-b-2 border-zinc-200">
                                <div className="flex justify-between">
                                        <p className="px-8 text-zinc-500">
                                            Deaths
                                        </p>
                                        <p className="px-8 text-zinc-500">
                                            {data.covidData?.deaths.toLocaleString(undefined)}
                                        </p>
                                    </div>
                            </li>
                            <li className="h-8 text-lg border-b-2 border-zinc-200">
                                <div className="flex justify-between">
                                        <p className="px-8 text-zinc-500">
                                            Recovered
                                        </p>
                                        <p className="px-8 text-zinc-500">
                                            {data.covidData?.recovered.toLocaleString(undefined)}
                                        </p>
                                    </div>
                            </li>
                            <li className="h-8 text-lg border-b-2 border-zinc-200">
                                <div className="flex justify-between">
                                        <p className="px-8 text-zinc-500">
                                            Population
                                        </p>
                                        <p className="px-8 text-zinc-500">
                                            {data.covidData?.population?.toLocaleString(undefined)}
                                        </p>
                                    </div>
                            </li>
                        </ul>
                    </div>}
                </div>
            </div>}
        </>
    )
}
export default Covid