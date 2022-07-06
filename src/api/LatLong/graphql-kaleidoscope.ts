import { KaleidoscopeData, Coordinates } from "../../types/types";
import {
  latLongLookupQuery,
  getLatlongLookupVariables,
} from "./latLongLookupPayload";
import { getKaleidoscopeDataFromLatLongLookup } from "./latLongLookupTranformer";

export const LatLong_Api = {
  async getKaleidoscopeData(coord: Coordinates): Promise<KaleidoscopeData> {
    const url = process.env.REACT_APP_STEPZEN_ENDPOINT as string;
    const key = process.env.REACT_APP_STEPZEN_API_KEY as string;
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${key}`,
      },
      body: JSON.stringify({
        query: latLongLookupQuery,
        variables: await getLatlongLookupVariables(coord),
      }),
    }).then((res) => res.json());
    const transformedData: KaleidoscopeData =
    getKaleidoscopeDataFromLatLongLookup(data);
    console.log(transformedData);
    return transformedData;
  },
};
