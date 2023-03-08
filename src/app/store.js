import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { cryptoApi } from "./coinSlice";

const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),

})

setupListeners(store.dispatch)

export default store