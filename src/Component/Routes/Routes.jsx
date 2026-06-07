import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import BookingSection from "../BookingSection/BookingSection";
import LoginSection from "../LoginSection/LoginSection";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import AvailableHotels from "../AvailableHotels/AvailableHotels";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        loader:()=>fetch('/data.json')
    },
    {
        path: '/category/:id',
        Component: BookingSection
    },
    {
        path:'/login',
        Component:LoginSection
    },
    {
        path:'/registration',
        Component:RegistrationSection
    },
    {
        path:'/availblehotels',
        Component:AvailableHotels
    }
])



export default router;