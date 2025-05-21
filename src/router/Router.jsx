import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <Error/>,
        children: [
            {
                path: 'signin',
                Component: Signin
            },
            {
                path: 'signup',
                Component: Signup
            },
        ]
    }
])