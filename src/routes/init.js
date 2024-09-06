import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Root from "../pages/Root";
import MainLayout from "../pages/layout/MainLayout";
import { productRoutes } from "./products";
import { crumbCreator } from "../commonFunctions/crumbCreator";
import { userRoutes } from "./user";
import { signInRoutes } from "./signIn";


const routes = createBrowserRouter([
    {
        element: <Root/>,
        
        children: [
            {
                element: <MainLayout/>,
                handle: crumbCreator(),
                loader: ()=>{
                    return{
                        name: "Trang chủ",
                    }
                },
                children:[
                    {
                        path: process.env.REACT_APP_HOME_URL,
                        element: <Home/>,
                        
                    },
                    userRoutes,
                    signInRoutes,
                    productRoutes
                ]

            }
        ]
    }
])

export default routes