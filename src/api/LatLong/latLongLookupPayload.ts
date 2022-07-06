import Moment from "moment";
import { Coordinates } from "../../types/types";

export const latLongLookupQuery = `
query getDataForLatLong($lat: Float, $long: Float, $from: String!, $start_date: Date!, $end_date: Date!, $amount: Float!) {
    getDataforLatLong(lat: $lat, lng: $long) {
      countryName
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
        timezones
        currencies
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
          geometry {
            coordinates
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
          geometry {
            coordinates
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
          geometry {
            coordinates
          }
        }
      }
      food {
        choices {
          text
        }
      }
      lat
      long
      currency
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
    getNearbyInfoFromLatLong(lat: $lat, lng: $long) {
      geonames {
        toponymName
        name
      }
    }
  }
`;

export const getLatlongLookupVariables = async (coord: Coordinates) => {
  return {
    from: "EUR",
    start_date: Moment().subtract(6, "months").format("YYYY-MM-DD"),
    end_date: Moment().format("YYYY-MM-DD"),
    amount: 1,
    lat: coord.lat,
    long: coord.long,
  };
};
