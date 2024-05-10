import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./State.js"
export const store =configureStore({
    reducer :todoReducer
})