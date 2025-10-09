import { configureStore } from "@reduxjs/toolkit";
import customSlice from "./customSlice";

const store = configureStore({
    reducer : {
        custom : customSlice
    }
})

export default store;