import Moment from "moment";

export const ipLookupQuery = `
query getDataByIP($from: String!, $start_date: Date!, $end_date: Date!, $amount: Float!, $ip: String!) {
  lookupIP(ip: $ip) {
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
    }
    country {
      languages
      flags {
        png
      }
      currencies
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

export const getIpLookupVariables = async () => {
  let data = await fetch("https://api.ipify.org?format=json").then((res) =>
    res.json()
  );
  const ip = data.ip;
  return {
    from: "USD",
    start_date: Moment().subtract(6, "months").format("YYYY-MM-DD"),
    end_date: Moment().format("YYYY-MM-DD"),
    amount: 1,
    ip: ip,
  };
};
