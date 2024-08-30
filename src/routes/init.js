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
                    }
                ]

            },
            {
                path: "login",
                element: <SignIn/>
            }
        ]
    }
])

export default routes