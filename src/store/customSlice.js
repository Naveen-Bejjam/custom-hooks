import { createAsyncThunk } from "@reduxjs/toolkit";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    count:0
}
export const fetchUser = createAsyncThunk("user/fetchuser",async()=>{})
const customSlice = createSlice({
    name : "custom",
    initialState,
    reducers : {
        increment : (state, action) => {
            state.count++;
        }
    },extraReducers : (builder)=>{
        builder
        .addCase(fetchUser.pending, (state, action)=>{

        })
        .addCase(fetchUser.pending, (state, action)=>{

        })
        .addCase(fetchUser.pending, (state, action)=>{

        })
    }
})

export const { increment } = customSlice.actions;
export default customSlice.reducer;