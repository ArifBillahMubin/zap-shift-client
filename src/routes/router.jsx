import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/coverage',
                loader: () => fetch('/warehouses.json').then(res=> res.json()),
                Component:Coverage
            }
        ]
    },
    {
        path:'/',
        Component: AuthLayout,
        children:[
            {
                path: '/login',
                Component:Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])