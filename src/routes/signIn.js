import { crumbCreator } from "../commonFunctions/crumbCreator"
import SignIn from "../pages/SignIn"

export const signInRoutes = {
    path: process.env.REACT_APP_SIGN_IN_URL,
    element: <SignIn/>,
    handle: crumbCreator(),
    loader: ()=>{
        return{
            name: "Đăng nhập"
        }
    }
}