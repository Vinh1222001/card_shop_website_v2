import UserInfo from "../pages/UserInfo";
import UserPageLayout from "../pages/layout/UserPageLayout";
import Orders from "../pages/Orders";
import Carts from "../pages/Carts";
import { crumbCreator } from "../common_funcs/crumbCreator";

export const userRoutes = {

    path: process.env.REACT_APP_USER_URL,
    element: <UserPageLayout/>,
    handle: crumbCreator(),
    loader: ()=>{
        return{
            name: "Tài khoản",
            
        }
    },
    children:[
        {
            path: process.env.REACT_APP_USER_INFO_URL,
            element: <UserInfo/>,
            handle: crumbCreator(),
            loader: ()=>{
                return {
                    name: "Thông tin tài khoản"
                }
            },
        },
        {
            path: process.env.REACT_APP_USER_ORDERS_URL,
            element: <Orders/>,
            handle: crumbCreator(),
            loader: ()=>{
                return {
                    name: "Đơn hàng"
                }
            },
        },
        {
            path: process.env.REACT_APP_USER_CARDS_URL,
            element: <Carts/>,
            handle: crumbCreator(),
            loader: ()=>{
                return {
                    name: "Giỏ hàng"
                }
            },
        }
    ]
}