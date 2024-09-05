import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PROVIDER_LIST, signIn, signInWithThirdProvider, signOut, signUp } from "../../supabase/auth";
import { COMMON_STATUSES } from "./commonStatuses";

export const USER_MIDDLEWARE_STATUSES = {
    ...COMMON_STATUSES
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        status: USER_MIDDLEWARE_STATUSES.IDLE,
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

export const signInWithGoogle = createAsyncThunk("signInWithGoogle", ()=>{
    signInWithThirdProvider(PROVIDER_LIST.GOOGLE)
})

export const signInWithFacebook = createAsyncThunk("signInWithFacebook", ()=>{
    signInWithThirdProvider(PROVIDER_LIST.FACEBOOK)
})

export const signInWithEmailPassword = createAsyncThunk("signInWithGoogle", (userEmail, userPassword)=>{
    signIn(userEmail, userPassword)
})

export const signUpWithEmailPassword = createAsyncThunk("signInWithGoogle", (userEmail, userPassword)=>{
    signUp(userEmail, userPassword)
})

export const signOutUser = createAsyncThunk("signOutUser", ()=>{
    signOut()
})