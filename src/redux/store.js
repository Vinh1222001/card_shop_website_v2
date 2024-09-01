import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import productSlice from "./slices/productSlice";
import hotNewsSlice from "./slices/hotNewsSlice";
import contactsSlice from "./slices/contactsSlice";

const store = configureStore({
    reducer:{
        user:       userSlice.reducer,
        products:   productSlice.reducer,
        hotNews :   hotNewsSlice.reducer,
        contacts:   contactsSlice.reducer
    }
})

export default store