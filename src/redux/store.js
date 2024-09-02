import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import productSlice from "./slices/productSlice";
import hotNewsSlice from "./slices/hotNewsSlice";
import contactsSlice from "./slices/contactsSlice";
import bannerSlidesSlice from "./slices/bannerSlidesSlice";
import imagesSlice from "./slices/imagesSlice";
import hotProductsSlice from "./slices/hotProductsSlice";

const store = configureStore({
    reducer:{
        user:           userSlice.reducer,
        products:       productSlice.reducer,
        hotProducts:    hotProductsSlice.reducer,
        hotNews :       hotNewsSlice.reducer,
        contacts:       contactsSlice.reducer,
        bannerSlides:   bannerSlidesSlice.reducer,
        images:         imagesSlice.reducer
    }
})

export default store