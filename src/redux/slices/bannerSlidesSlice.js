import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllBannerSlides } from "../../supabase/bannerSlides"
import { COMMON_STATUSES } from "./commonStatuses"

export const BANNER_SLIDES_MIDDLEWARE_STATUSES = {
    ...COMMON_STATUSES
}

const bannerSlidesSlice = createSlice({
    name: "bannerSlider",
    initialState:{
        status: BANNER_SLIDES_MIDDLEWARE_STATUSES.IDLE,
        bannerSlides:[]
    },
    reducers:{

    },
    extraReducers: builder =>{
        builder.addCase(fetchAllBannerSlides.pending, state =>{
            state.status = BANNER_SLIDES_MIDDLEWARE_STATUSES.PENDING
        })
        .addCase(fetchAllBannerSlides.fulfilled, (state, action) => {
            state.status = BANNER_SLIDES_MIDDLEWARE_STATUSES.FULFILLED

            state.bannerSlides =  action.payload
        })
    }
})

export const fetchAllBannerSlides = createAsyncThunk("getAllBannerSlides", ()=>{
    const bannerSlides = getAllBannerSlides();
    return bannerSlides;
})

export default bannerSlidesSlice