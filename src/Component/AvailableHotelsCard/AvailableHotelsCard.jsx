//import React from 'react';

import Hotels from "../Hotels/Hotels";

const AvailableHotelsCard = ({ availHotels }) => {
    console.log(availHotels);
    return (
        <div className="w-11/12 mx-auto mt-4">

            <div>
                {
                    availHotels.hotels.map(hotel => <Hotels hotel={hotel}></Hotels>)
                }
            </div>


        </div>
    );
};

export default AvailableHotelsCard;