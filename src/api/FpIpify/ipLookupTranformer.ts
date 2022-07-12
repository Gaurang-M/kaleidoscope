export const getKaleidoscopeDataFromIpLookup = (responseData: any) => {
  let ipLookup = responseData.data.fingerprintjs_visitorHistory
    ? responseData.data.fingerprintjs_visitorHistory.ipLookup
    : responseData.data.lookupIP;
  let data = responseData.data;
  let countryData = responseData.data.fingerprintjs_visitorHistory
    ? responseData.data.fingerprintjs_visitorHistory.ipLookup.country[0]
    : responseData.data.lookupIP.country[0];
  return {
    country: ipLookup.country_name,
    region: ipLookup.region,
    tz: ipLookup.tz_id,
    city: ipLookup.city,
    currency: ipLookup.currency,
    continent: ipLookup.continent_name,
    lat: ipLookup.lat,
    long: ipLookup.lon,
    languages: countryData?.languages
      ? (Object.values(countryData.languages) as string[])
      : null,
    holidays: ipLookup.holidays.items.map((i: any) => {
      return {
        date: i.start.date,
        summary: i.summary,
      };
    }),
    currencyRate: data.currency_latest_rates
      ? {
          base: data.currency_latest_rates.base,
          date: data.currency_latest_rates.date,
          rate: data.currency_latest_rates.rates[ipLookup.currency],
        }
      : null,
    currencyRateTimeSeriese: data.currency_time_series
      ? Object.keys(data.currency_time_series.rates).map((i: any) => {
          let date = i;
          return {
            base: data.currency_time_series.base,
            date: date,
            rate: data.currency_time_series.rates[date][ipLookup.currency],
          };
        })
      : null,
    covidData: ipLookup?.covid
      ? {
          cases: ipLookup?.covid?.Countries.TotalConfirmed,
          deaths: ipLookup?.covid?.Countries.TotalDeaths,
          recovered: ipLookup?.covid?.Countries.TotalRecovered,
          population: ipLookup?.covid?.Countries?.population,
        }
      : null,
    covidDataTimeSeriese: ipLookup?.historical_covid
      ? Object.keys(ipLookup?.historical_covid?.timeline?.cases).map(
          (i: any) => {
            let date = i;
            return {
              cases: ipLookup.historical_covid.timeline.cases[date],
              deaths: ipLookup.historical_covid.timeline.deaths[date],
              recovered: ipLookup.historical_covid.timeline.recovered[date],
              date,
            };
          }
        )
      : null,
    weather: {
      icon: ipLookup.weather.current.condition.icon,
      desc: ipLookup.weather.current.condition.text,
    },
    flag: countryData?.flags ? countryData.flags.png : null,
    currencyName: countryData?.currencies[ipLookup.currency].name,
    currencySymbol: countryData?.currencies[ipLookup.currency].symbol,
    timezone: countryData?.timezones
      ? Array.isArray(countryData?.timezones)
        ? countryData?.timezones[0]
        : countryData?.timezones
      : null,
    tempreature: ipLookup.weather.forecast.forecastday[0].day.mintemp_c,
    aqi: ipLookup.air_quality.data.aqi,
    cafes: ipLookup.nearby_cafes.features.map((place: any) => {
      return {
        dist: place?.properties.dist,
        kinds: place?.properties.kinds,
        name: place?.properties.name,
        lat: place?.geometry.coordinates[0],
        long: place?.geometry.coordinates[1],
      };
    }),
    malls: ipLookup.nearby_malls.features.map((place: any) => {
      return {
        dist: place?.properties.dist,
        kinds: place?.properties.kinds,
        name: place?.properties.name,
        lat: place?.geometry.coordinates[0],
        long: place?.geometry.coordinates[1],
      };
    }),
    picnicSpots: ipLookup.nearby_picnic_spots.features.map((place: any) => {
      return {
        dist: place?.properties.dist,
        kinds: place?.properties.kinds,
        name: place?.properties.name,
        lat: place?.geometry.coordinates[0],
        long: place?.geometry.coordinates[1],
      };
    }),
    food: ipLookup.food.choices[0].text,
  };
};
