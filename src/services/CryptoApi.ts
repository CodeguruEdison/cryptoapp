import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "d5b765e8c3mshf99b49e9d38c8adp11b6bejsndc5038d81b92",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count?:number) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const {useGetCryptosQuery} = cryptoApi;
