import {restClient} from "@polygon.io/client-js";
const apiKey = import.meta.env.VITE_POLYGON_API_KEY;

const client = restClient(apiKey);

export const polygonApi = {
  get: (ticker) => client.stocks.aggregates(ticker, 1, "day", "2025-05-08", "2025-05-09")
};