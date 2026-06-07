//import React from 'react';

import { use } from "react";
import LoginNavSection from "../LoginNavSection/LoginNavSection";
import Context from "../Context/Context/Context";

const AvailableHotels = () => {

    const {placeName}=use(Context);
    console.log(placeName);

    return (
        <div className="w-11/12 mx-auto">
            <LoginNavSection></LoginNavSection>
        </div>
    );
};

export default AvailableHotels;