import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const newsApiHeader = {

    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '36f58c64e1msh6454ab1482f5e8ap17f8e1jsn3e86e1342962',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'

}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: newsApiHeader})

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(
                `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=day&count=${count}`
            ) 
        })
    })
})

export const { useGetCryptoNewsQuery } = newsApi;