import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Root from "../pages/Root";
import SignIn from "../pages/SignIn";
import Main from "../pages/layout/Main";

const routes = createBrowserRouter([
    {
        element: <Root/>,
        children: [
            {
                element: <Main/>,
                children:[
                    {
                        path: "/",
                        element: <Home/>
                    },
                    {
                        path: "/:userId/user-information",
                        children:[
                            {
                                path: "user-information"
                            },
                            {
                                path: "orders"
                            },
                            {
                                path: "carts"
                            }
                        ]
                    }
                ]

            },
            {
                path: "signin",
                element: <SignIn/>
            }
        ]
    }
])

export default routes