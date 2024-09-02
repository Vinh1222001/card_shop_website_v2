import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COMMON_STATUSES } from "./commonStatuses";
import { getAllImages } from "../../supabase/images";

export const IMAGES_MIDDLEWARE_STATUSES = {
    ...COMMON_STATUSES
}

const imagesSlice = createSlice({
    name: "images",
    initialState:{
        status: IMAGES_MIDDLEWARE_STATUSES.IDLE,
        images:[]
    },
    reducers:{

    },
    extraReducers: builder => {
        builder.addCase(fetchAllImages.pending, state =>{
            state.status = IMAGES_MIDDLEWARE_STATUSES.PENDING
        })
        .addCase(fetchAllImages.fulfilled, (state, action) =>{
            state.status = IMAGES_MIDDLEWARE_STATUSES.FULFILLED;
            state.images = action.payload
        })
    }
})

export const fetchAllImages = createAsyncThunk("getAllImages", ()=>{
    const images = getAllImages();

    return images;
})

export default imagesSlice;