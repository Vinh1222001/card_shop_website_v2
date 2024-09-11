import { crumbCreator } from "../commonFunctions/crumbCreator"
import SignInAndSignUp from "../pages/SignInAndSignUp"

export const signInRoutes = {
    path: process.env.REACT_APP_SIGN_IN_URL,
    element: <SignInAndSignUp/>,
    handle: crumbCreator(),
    loader: ()=>{
        return{
            name: "Đăng nhập"
        }
    }
}