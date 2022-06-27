import React, { FunctionComponent, useContext } from "react"
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import { kaleidoscopeAppContext } from "../context/city-context";

const Currency : FunctionComponent<{}> = () => {
    const data : KaleidoscopeData = useContext(kaleidoscopeAppContext).KaleidoscopeData;
    return (
        <>
            <div className="h-56 w-full border-2 border-stone-300 rounded-lg mx-2 drop-shadow-lg">
                <div className="grid grid-col-2 gap-2">
                    <div>
                        <FaMoneyCheckAlt className="h-24 w-12 mx-auto text-rose-300"/>
                    </div>
                    <div className="mx-auto">{data.currencyName} - {data.currencySymbol}</div>
                    <div className="mx-auto text-2xl text-rose-500">1 {data.currency} = {data.currencyRate?.rate} {data.currencyRate?.base} </div>
                </div>
            </div>
        </>
    )
}
export default Currency