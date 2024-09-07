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
    },
    extraReducers: builder => {
        
        // Sign in with Google
        builder.addCase(signInWithGoogle.pending, state =>{
            state.status = USER_MIDDLEWARE_STATUSES.PENDING
        })
        .addCase(signInWithGoogle.fulfilled, state =>{
            state.status = USER_MIDDLEWARE_STATUSES.FULFILLED
        })

        // Sign in with Facebook
        .addCase(signInWithFacebook.pending, state =>{
            state.status = USER_MIDDLEWARE_STATUSES.PENDING
        })
        .addCase(signInWithFacebook.fulfilled, state =>{
            state.status = USER_MIDDLEWARE_STATUSES.FULFILLED
        })

        // Sign In with email and password
        .addCase(signInWithEmailPassword.pending, state =>{
            state.status = USER_MIDDLEWARE_STATUSES.PENDING
        })
        .addCase(signInWithEmailPassword.fulfilled, state =>{
            state.status = USER_MIDDLEWARE_STATUSES.FULFILLED
        })

        // Sign Up with email and password
        .addCase(signUpWithEmailPassword.pending, state =>{
            state.status = USER_MIDDLEWARE_STATUSES.PENDING
        })
        .addCase(signUpWithEmailPassword.fulfilled, state =>{
            state.status = USER_MIDDLEWARE_STATUSES.FULFILLED
        })

        // Sign out
        .addCase(signOutUser.pending, state =>{
            state.status = USER_MIDDLEWARE_STATUSES.PENDING

        })
        .addCase(signOutUser.fulfilled, state =>{
            state.status = USER_MIDDLEWARE_STATUSES.FULFILLED
        })
    }
})

export const signInWithGoogle = createAsyncThunk("signInWithGoogle", ()=>{
    signInWithThirdProvider(PROVIDER_LIST.GOOGLE)
})

export const signInWithFacebook = createAsyncThunk("signInWithFacebook", ()=>{
    signInWithThirdProvider(PROVIDER_LIST.FACEBOOK)
})

export const signInWithEmailPassword = createAsyncThunk("signInWithEmailPassword", (user)=>{
    signIn(user)
})

export const signUpWithEmailPassword = createAsyncThunk("signUpWithEmailPassword", (user)=>{

    // console.log(user);
    
    signUp(user)
})

export const signOutUser = createAsyncThunk("signOutUser", ()=>{
    signOut()
})