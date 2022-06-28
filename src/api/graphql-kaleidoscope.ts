import { ipLookupQuery, getIpLookupVariables } from "./ipLookupPayload";
import { getKaleidoscopeDataFromIpLookup } from "./ipLookupTranformer";

export interface holidays {
  date: string;
  summary: string;
}

export interface currentCurrencyRate {
  base: string;
  rate: number;
  date: string;
}

export interface covidData {
  cases: number;
  deaths: number;
  recovered: number;
  population?: number;
  date?: string;
}

export interface weather {
  icon: string;
  desc: string;
}

export interface KaleidoscopeData {
  country: string | null;
  region: string | null;
  tz: string | null;
  city?: string | null;
  currency?: string | null;
  continent?: string | null;
  lat: number | null;
  long: number | null;
  languages?: Array<string> | null;
  holidays: Array<holidays> | null;
  currencyRate: currentCurrencyRate | null;
  currencyRateTimeSeriese: Array<currentCurrencyRate> | null;
  covidData: covidData | null;
  covidDataTimeSeriese: Array<covidData> | null;
  weather: weather | null;
  flag?: String | null;
  currencyName?: String | null;
  currencySymbol?: String | null;
  timezone?: Array<string> | null;
  tempreature?: number | null;
}

export const defaultKaleidoscopeData: KaleidoscopeData = {
  country: null,
  region: null,
  tz: null,
  city: null,
  currency: null,
  continent: null,
  lat: null,
  long: null,
  languages: null,
  holidays: null,
  currencyRate: null,
  currencyRateTimeSeriese: null,
  covidData: null,
  covidDataTimeSeriese: null,
  weather: null,
  flag: null,
  currencyName: null,
  currencySymbol: null,
};

export const Api = {
  async getKaleidoscopeData(): Promise<KaleidoscopeData> {
    const url = process.env.REACT_APP_STEPZEN_ENDPOINT as string;
    const key = process.env.REACT_APP_STEPZEN_API_KEY as string;
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${key}`,
      },
      body: JSON.stringify({
        query: ipLookupQuery,
        variables: await getIpLookupVariables(),
      }),
    }).then((res) => res.json());
    const transformedData: KaleidoscopeData =
      getKaleidoscopeDataFromIpLookup(data);
    console.log(transformedData);
    return transformedData;
  },
};
