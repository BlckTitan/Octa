import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '36f58c64e1msh6454ab1482f5e8ap17f8e1jsn3e86e1342962',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoCoins: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCoinById: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCoinHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/?timePeriod=${timePeriod}`)
        }),
        getCoinExchangesById: builder.query({
            query: ({coinId, count}) => createRequest(`/coin/${coinId}/exchanges?limit=${count}`)
        })
    })
})

export const { useGetCryptoCoinsQuery, useGetCoinByIdQuery, useGetCoinHistoryQuery, useGetCoinExchangesByIdQuery } = cryptoApi;