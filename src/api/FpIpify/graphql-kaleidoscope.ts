import { ipLookupQuery, getIpLookupVariables } from "./ipLookupPayload";
import {
  ipLookupQuery_Fallback,
  getIpLookupVariables_Fallback,
} from "./ipLookupPayload_Fallback";
import { getKaleidoscopeDataFromIpLookup } from "./ipLookupTranformer";
import { KaleidoscopeData } from "../../types/types";

export const Fp_Api = {
  async getKaleidoscopeData(
    visitorId: string | undefined
  ): Promise<KaleidoscopeData> {
    const url = process.env.REACT_APP_STEPZEN_ENDPOINT as string;
    const key = process.env.REACT_APP_STEPZEN_API_KEY as string;
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${key}`,
      },
      body: JSON.stringify({
        query: visitorId ? ipLookupQuery : ipLookupQuery_Fallback,
        variables: visitorId
          ? await getIpLookupVariables(visitorId as string)
          : await getIpLookupVariables_Fallback(),
      }),
    }).then((res) => res.json());
    const transformedData: KaleidoscopeData =
      getKaleidoscopeDataFromIpLookup(data);
    console.log(transformedData);
    return transformedData;
  },
};
