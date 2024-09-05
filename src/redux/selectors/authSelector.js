import { createSelector } from "@reduxjs/toolkit"

const getUserInfo = (state) => state.user

export const getUserInfoSelector = createSelector(
    getUserInfo, 
    (userInfo)=>{
        
        const parsedUserInfo = {...userInfo}
        
        return parsedUserInfo
})