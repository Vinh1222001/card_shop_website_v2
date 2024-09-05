import { createSelector } from "@reduxjs/toolkit"

const getAllHotNews = (state) => state.hotNews.hotNews

export const getAllHotNewsSelector = createSelector(
    getAllHotNews,
    (hotNews) =>{
        // console.log(hotNews[0].index);

        const sortedHotNews = [...hotNews].sort((a,b)=> a.index - b.index)
        
        return sortedHotNews
    }
)
