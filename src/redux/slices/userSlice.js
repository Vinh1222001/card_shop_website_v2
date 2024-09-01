import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        
        isAuthenticated: false,
        user: {
            id: "",
            name: "",
            email: "",
            avatar:"",
            role: "",
            last_sign_in_at:"",
            provider: ""
        }
        
    }, 
    reducers: {
        setUserInfo: (state, action) =>{
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = action.payload.user;
            
        }
    }
})