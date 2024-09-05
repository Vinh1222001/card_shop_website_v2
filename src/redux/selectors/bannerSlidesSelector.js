import { createSelector } from "@reduxjs/toolkit"

const getAllbannerSlides= (state) => state.bannerSlides.bannerSlides

export const getAllbannerSlidesSelector = createSelector(
    getAllbannerSlides,
    (bannerSlides) =>{
        // console.log(bannerSlides);
        const sortedBannerSlides = [...bannerSlides].sort((a,b)=> a.index - b.index)
        
        return sortedBannerSlides
    }
)