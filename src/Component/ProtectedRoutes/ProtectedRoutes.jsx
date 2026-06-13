//import React from 'react';

import { use } from "react";
import Context from "../Context/Context/Context";
import { Navigate, useLocation } from "react-router";
import LoadingPage from "../LoadingPage/LoadingPage";

const ProtectedRoutes = ({ children }) => {

    const { currentUser, loading } = use(Context);
    const location = useLocation();
    console.log(location);

    if (loading === true) {
        return LoadingPage;
    }

    if (currentUser === null) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    else {
        return children;
    }
};

export default ProtectedRoutes;