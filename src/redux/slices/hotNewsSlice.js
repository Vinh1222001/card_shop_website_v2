import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllHotNews } from "../../supabase/hotNews";
import { COMMON_STATUSES } from "./commonStatuses";

export const HOT_NEWS_MIDDLEWARE_STATUSES = {
    ...COMMON_STATUSES
}

const hotNewsSlice = createSlice({
    name: "hotNews",
    initialState: {
        status: HOT_NEWS_MIDDLEWARE_STATUSES.IDLE,
        hotNews: []
    },
    reducers:{

    },
    extraReducers :builder =>{
        builder.addCase(fetchAllHotNews.pending, state =>{
            state.status = HOT_NEWS_MIDDLEWARE_STATUSES.PENDING
        })
        .addCase(fetchAllHotNews.fulfilled, (state, action)=>{
            state.status = HOT_NEWS_MIDDLEWARE_STATUSES.fulfilled
            state.hotNews = action.payload
        })
    }
})

export const fetchAllHotNews = createAsyncThunk("getAllHotNews", ()=>{
    const hotNews = getAllHotNews();

    return hotNews
})

export default hotNewsSlice