//import React from 'react';

import { use } from "react";
import LoginNavSection from "../LoginNavSection/LoginNavSection";
import Context from "../Context/Context/Context";
import AvailableHotelsCard from "../AvailableHotelsCard/AvailableHotelsCard";
import mps from '../../assets/images/icons/mps.png'


const AvailableHotels = () => {

    const { data, placeName } = use(Context);
    //console.log(placeName);
    //console.log(data);

    const filterPlace = placeName.toLowerCase().trim().replace(/['"]/g, "").split(' ').join('');
    console.log(filterPlace);

    const filterData = data.filter(hotels => hotels.touristPlace.toLowerCase().trim().replace(/['"]/g, "").split(' ').join('') == filterPlace);

    //console.log(filterData);

    return (
        <div className=" w-full lg:w-11/12 mx-auto">
            <LoginNavSection></LoginNavSection>

            <div>
                {/* hotels */}
                <div className="flex">
                    <div>
                        {
                            filterData.map(availHotels => <AvailableHotelsCard availHotels={availHotels}></AvailableHotelsCard>)
                        }
                    </div>
                    <div className='mps hidden lg:flex mt-3'>
                        <img src={mps} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableHotels;