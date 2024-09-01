import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllHotNews } from "../../supabase/hotNews";

export const HOT_NEWS_MIDDLEWARE_STATUSES = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECT: "rejected",
    IDLE: "idle"
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