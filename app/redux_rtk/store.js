import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productapi";

export const store = configureStore({
    reducer:{
        [productApi.reducerPath]:productApi.reducer,
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productApi.middleware)
})