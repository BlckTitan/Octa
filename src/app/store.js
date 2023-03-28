import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { newsApi } from "./newsSlice";
import { cryptoApi } from "./coinSlice";
import utilitySliceReducer from './utilitySlice'

const store = configureStore({
    reducer: {
        sidebarToggle: utilitySliceReducer,
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, newsApi.middleware),

})

setupListeners(store.dispatch)

export default store