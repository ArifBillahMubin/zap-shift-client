import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Coverage from "../pages/Coverage/Coverage";

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
])