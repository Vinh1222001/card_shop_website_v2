import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COMMON_STATUSES } from "./commonStatuses";
import { getAllHotProducts } from "../../supabase/hotProducts";

export const HOT_PRODUCTS_MIDDLEWARE_STATUSES = {
    ...COMMON_STATUSES
}

const hotProductsSlice = createSlice({
    name: "hotProducts",

    initialState: {
        status: HOT_PRODUCTS_MIDDLEWARE_STATUSES.IDLE,
        hotProducts: []
    },

    reducers: {},

    extraReducers: builder => {
        builder.addCase(fetchAllHotProducts.pending, state =>{
            state.status = HOT_PRODUCTS_MIDDLEWARE_STATUSES.PENDING
        })
        .addCase(fetchAllHotProducts.fulfilled, (state, action) =>{
            state.status = HOT_PRODUCTS_MIDDLEWARE_STATUSES.FULFILLED

            state.hotProducts = action.payload
        })
    }

})

export const fetchAllHotProducts = createAsyncThunk("getAllHotProducts", ()=>{
    const hotNewProducts = getAllHotProducts()

    return hotNewProducts
})

export default hotProductsSlice;