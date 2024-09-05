import { createSelector } from "@reduxjs/toolkit"

const getAllContacts = (state) => state.contacts.contacts

export const getContactListSelector = createSelector(
    getAllContacts,
    (shopInfo)=>{
        const socialMediaList = shopInfo.filter((info) => info.theme === "contact")
        return socialMediaList
    }
    
)

export const getSocialMediaListSelector = createSelector(
    getAllContacts,
    (shopInfo)=>{
        const socialMediaList = shopInfo.filter((info) => info.theme === "social media")
        return socialMediaList
    }
    
)

export const getServiceListSelector = createSelector(
    getAllContacts,
    (shopInfo)=>{
        const socialMediaList = shopInfo.filter((info) => info.theme === "service")
        return socialMediaList
    }
    
)

export const getStoreInfoListSelector = createSelector(
    getAllContacts,
    (shopInfo)=>{
        const socialMediaList = shopInfo.filter((info) => info.theme === "store infor")
        return socialMediaList
    }
    
)