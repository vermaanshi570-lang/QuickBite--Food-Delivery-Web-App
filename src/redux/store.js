import {configureStore} from "@reduxjs/toolkit";
import cardSlice from "./cartSlice";

export const store = configureStore({
    reducer:{
        cart: cardSlice
    }
})