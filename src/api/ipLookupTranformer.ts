export const getKaleidoscopeDataFromIpLookup = (responseData:any) => {
    let ipLookup = responseData.data.lookupIP;
    let data = responseData.data;
    return {
        country: ipLookup.country_name,
        region: ipLookup.region,
        tz: ipLookup.tz_id,
        city: ipLookup.city,
        currency: ipLookup.currency,
        continent: ipLookup.continent_name,
        lat: ipLookup.lat,
        long: ipLookup.lon,
        languages: Object.values(ipLookup.country[0].languages) as string[],
        holidays: ipLookup.holidays.items.map((i:any) => {
            return {
                date: i.start.date,
                summary: i.summary
            }
        }),
        currencyRate: {
            base: data.currency_latest_rates.base,
            date: data.currency_latest_rates.date,
            rate: data.currency_latest_rates.rates[ipLookup.currency]
        },
        currencyRateTimeSeriese: Object.keys(data.currency_time_series.rates).map((i:any) => {
            let date = i;
            return {
                base: data.currency_time_series.base,
                date: date,
                rate: data.currency_time_series.rates[date][ipLookup.currency]
            }
        }),
        covidData: {
            cases: ipLookup.covid.active,
            deaths: ipLookup.covid.deaths,
            recovered: ipLookup.covid.recovered,
            population: ipLookup.covid.population
        },
        covidDataTimeSeriese: Object.keys(ipLookup.historical_covid.timeline.cases).map((i:any) => {
            let date = i;
            return {
                cases: ipLookup.historical_covid.timeline.cases[date],
                deaths: ipLookup.historical_covid.timeline.deaths[date],
                recovered: ipLookup.historical_covid.timeline.recovered[date],
                date
            }
        }),
        weather: {
            icon:ipLookup.weather.current.condition.icon,
            desc:ipLookup.weather.current.condition.text,
        }

    }
}