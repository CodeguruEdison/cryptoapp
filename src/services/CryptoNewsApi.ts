import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "d5b765e8c3mshf99b49e9d38c8adp11b6bejsndc5038d81b92",
};
const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const createRequest = (url: string) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: (searchParam: { newsCategory: string; count: number }) =>
        createRequest(
          `/news/search?q=${searchParam.newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${searchParam.count}`
        ),
    }),
  }),
});

export const { useGetCryptosNewsQuery } = cryptoNewsApi;
