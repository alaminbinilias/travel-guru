import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";

const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
    }
])



export default router;