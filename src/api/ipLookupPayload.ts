import Moment from "moment";

export const ipLookupQuery = `
query getDataByVisitorID($from: String!, $start_date: Date!, $end_date: Date!, $amount: Float!, $visitorId: String!) {
  fingerprintjs_visitorHistory(id: $visitorId) {
    ip
    ipLookup {
      continent_name
      country_name
      currency
      lat
      lon
      region
      tz_id
      city
      holidays {
        items {
          start {
            date
          }
          summary
        }
      }
      covid {
        active
        deaths
        recovered
        population
      }
      historical_covid {
        timeline {
          cases
          deaths
          recovered
        }
      }
      weather {
        current {
          condition {
            icon
            text
          }
        }
        forecast {
          forecastday {
            day {
              mintemp_c
            }
          }
        }
      }
      country {
        languages
        flags {
          png
        }
        currencies
        timezones
      }
      air_quality {
        data {
          aqi
        }
      }
      nearby_cafes {
        features {
          properties {
            dist
            kinds
            name
          }
        }
      }
      nearby_malls {
        features {
          properties {
            dist
            kinds
            name
          }
        }
      }
      nearby_picnic_spots {
        features {
          properties {
            dist
            kinds
            name
          }
        }
      }
    }
  }
  currency_time_series(
    amount: $amount
    from: $from
    start_date: $start_date
    end_date: $end_date
  ) {
    base
    rates
  }
  currency_latest_rates(amount: $amount, from: $from) {
    base
    date
    rates
  }
}
`;

export const getIpLookupVariables = async (visitorId: string) => {
  // let data = await fetch("https://api.ipify.org?format=json").then((res) =>
  //   res.json()
  // );
  // const ip = data.ip;
  return {
    from: "USD",
    start_date: Moment().subtract(6, "months").format("YYYY-MM-DD"),
    end_date: Moment().format("YYYY-MM-DD"),
    amount: 1,
    visitorId,
  };
};
