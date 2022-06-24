import {ipLookupQuery, getIpLookupVariables} from "./ipLookupPayload"
import {getKaleidoscopeDataFromIpLookup} from "./ipLookupTranformer"

export interface holidays {
    date: string
    summary: string
}

export interface currentCurrencyRate {
    base: string
    rate: number
    date: string
}

export interface covidData {
    cases: number
    deaths: number
    recovered: number
    population?: number
    date?: string
}

export interface weather {
    icon: string
    desc: string
}

export interface KaleidoscopeData {
    country: string
    region: string
    tz: string
    city?: string 
    currency?: string
    continent?: string
    lat: number
    long: number
    languages?: Array<string>
    holidays: Array<holidays>     
    currencyRate: currentCurrencyRate
    currencyRateTimeSeriese: Array<currentCurrencyRate>
    covidData: covidData
    covidDataTimeSeriese: Array<covidData>
    weather: weather
}

export const Api = {
    async getKaleidoscopeData(): Promise<KaleidoscopeData > {
        const url = process.env.REACT_APP_STEPZEN_ENDPOINT as string;
        const key = process.env.REACT_APP_STEPZEN_API_KEY as string;
        const data = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Apikey ${key}`
            },
            body: JSON.stringify({
                query: ipLookupQuery,
                variables: await getIpLookupVariables()
            })
        }).then(res => res.json());
        const transformedData : KaleidoscopeData = getKaleidoscopeDataFromIpLookup(data);
        console.log(transformedData)
        return transformedData
    }
}