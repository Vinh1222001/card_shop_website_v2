import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../supabase/products";
import { COMMON_STATUSES } from "./commonStatuses";

export const PRODUCTS_MIDDLEWARE_STATUSES = {
    ...COMMON_STATUSES
}

const productSlice = createSlice({
    name: "products",
    initialState:{
        status: PRODUCTS_MIDDLEWARE_STATUSES.IDLE,
        products:[]
    },
    reducers:{

    },
    extraReducers: builder => {
        builder.addCase(fetchAllProducts.pending, state =>{
            state.status = PRODUCTS_MIDDLEWARE_STATUSES.PENDING
        })
        .addCase(fetchAllProducts.fulfilled, (state, action) =>{
            state.status = PRODUCTS_MIDDLEWARE_STATUSES.FULFILLED;
            state.products = action.payload
        })
    }
})

export const fetchAllProducts = createAsyncThunk("getAllProducts", ()=>{
    const products = getAllProducts();

    return products;
})

export default productSlice;