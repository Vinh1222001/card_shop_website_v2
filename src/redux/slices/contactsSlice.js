import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllContacts } from "../../supabase/contacts"

export const CONTACTS_MIDDLEWARE_STATUSES = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECT: "rejected",
    IDLE: "idle"
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState:{
        status: CONTACTS_MIDDLEWARE_STATUSES.IDLE,
        contacts: []
    },
    reducers:{

    },
    extraReducers: builder =>{
        builder.addCase(fetchAllContacts.pending, state=>{
            state.status = CONTACTS_MIDDLEWARE_STATUSES.PENDING
        })
        .addCase(fetchAllContacts.fulfilled, (state, action)=>{
            state.status = CONTACTS_MIDDLEWARE_STATUSES.FULFILLED;
            state.contacts = action.payload
        })
    }
})

export const fetchAllContacts = createAsyncThunk("getAllContacts",()=>{
    const contacts = getAllContacts()

    return contacts;
})

export default contactsSlice;