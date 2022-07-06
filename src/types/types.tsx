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

export interface places {
  dist: number;
  kinds: string;
  name: string;
  lat: number;
  long: number;
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
  aqi?: number | null;
  malls?: Array<places> | null;
  cafes?: Array<places> | null;
  picnicSpots?: Array<places> | null;
  food?: string | null;
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
  timezone: null,
  tempreature: null,
  aqi: null,
  malls: null,
  cafes: null,
  picnicSpots: null,
  food: null,
};

export interface Coordinates {
  lat: number | null;
  long: number | null;
}
