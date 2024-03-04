import { configureStore } from "@reduxjs/toolkit";
import idReducer from "./id/idSlice";
import inputReducer from "./input/inputSlice";

export const store = configureStore({
    reducer: {
        id: idReducer,
        input: inputReducer
    },
})