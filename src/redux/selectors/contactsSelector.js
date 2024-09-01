import { createSelector } from "@reduxjs/toolkit"

export const getAllContactsSelector = (state) => state.contacts.contacts

export const getContactListSelector = createSelector(
    getAllContactsSelector,
    (shopInfo)=>{
        const socialMediaList = shopInfo.filter((info) => info.theme === "contact")
        return socialMediaList
    }
    
)

export const getSocialMediaListSelector = createSelector(
    getAllContactsSelector,
    (shopInfo)=>{
        const socialMediaList = shopInfo.filter((info) => info.theme === "social media")
        return socialMediaList
    }
    
)

export const getServiceListSelector = createSelector(
    getAllContactsSelector,
    (shopInfo)=>{
        const socialMediaList = shopInfo.filter((info) => info.theme === "service")
        return socialMediaList
    }
    
)

export const getStoreInfoListSelector = createSelector(
    getAllContactsSelector,
    (shopInfo)=>{
        const socialMediaList = shopInfo.filter((info) => info.theme === "store infor")
        return socialMediaList
    }
    
)