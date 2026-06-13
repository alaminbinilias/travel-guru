import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import BookingSection from "../BookingSection/BookingSection";
import LoginSection from "../LoginSection/LoginSection";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import AvailableHotels from "../AvailableHotels/AvailableHotels";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement:<ErrorPage></ErrorPage>,
        Component: HomeLayout,
    },
    {
        path: '/category/:id',
        Component: BookingSection
    },
    {
        path: '/login',
        Component: LoginSection
    },
    {
        path: '/registration',
        Component: RegistrationSection
    },
    {
        path: '/availblehotels',
        //Component:AvailableHotels
        element: <ProtectedRoutes>
            <AvailableHotels></AvailableHotels>
        </ProtectedRoutes>
    }
])



export default router;