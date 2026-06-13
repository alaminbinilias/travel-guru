//import React from 'react';

import rating from '../../assets/images/icons/star_1_.png'
const Hotels = ({ hotel }) => {
    return (
        <div className='flex'>

            <div className=" bg-gray-300 w-full lg:w-200 rounded-xl mt-2">
                <div className="p-2 w-full flex gap-2 items-center lg:gap-5">
                    <div className="leftside object-cover">
                        <img className="rounded-md h-40 lg:h-50 object-cover" src={hotel.image}></img>
                    </div>
                    <div className="rightside">
                        <div className="card-title lg:font-bold">{hotel.hotelName}</div>
                        <div>{hotel.hotelDescription}</div>
                        <div className="flex gap-2">
                            <p>{hotel.guestCapacity} guest</p>
                            <p>{hotel.bedrooms} Bath</p>
                            <p>{hotel.bathrooms} Bads</p>
                        </div>

                        <div className='flex gap-1 lg:gap-2 mt-2'>
                            {
                                hotel.facilities.map(fa => <p className='px-2 text-nowrap bg-green-400 rounded-full'>{fa}</p>)
                            }
                        </div>
                        <div className='flex items-center gap-1 mt-2'>
                            <img className=' h-3 lg:h-5' src={rating} alt="" />
                            <p className='font-semibold'>{hotel.rating}</p>
                            <p className='font-semibold'>{hotel.rentPerNight}Tk<span className='font-normal'>/night</span></p>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Hotels;