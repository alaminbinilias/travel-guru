//import React from 'react';

import { use } from "react";
import NavSection from "../NavSection/NavSection";
import Context from "../Context/Context/Context";
import './BookingSection.css';
import { NavLink, useParams } from "react-router";

const BookingSection = () => {
    const { data,setPlaceName } = use(Context);
    const { id } = useParams();
    const filterData = data.find(place => place.id == id);
    //console.log(filterData);

    const hndleBookingInfo=(event)=>{
        event.preventDefault();
        const placeName=event.target.destination.value;
        console.log(placeName);
        setPlaceName(placeName);
    }

    return (
        <div>

            <div className="imgs absolute z-3 h-screen w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${filterData.image})` }}></div>

            <div className=" relative z-10 h-screen flex flex-col">
                <nav>
                    <NavSection></NavSection>
                </nav>
                <main className="h-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-70 justify-between items-center w-11/12 mx-auto">
                    <div className="col-span-1 w-full">
                        <div>
                            <div className="leftSection">
                                <p className="text-white text-center text-5xl lg:text-start">{filterData.touristPlace}</p>
                                <p className="text-gray-400 text-center text-3xl lg:text-start mt-4 text-wrap">{filterData.hotelDescription}</p>
                            </div>
                        </div >
                    </div>

                    <div>
                        <div className="h-100 justify-center">

                            <form onSubmit={hndleBookingInfo}>
                                <fieldset className="fieldset bg-[#FFFF] pt-4 border-base-300 rounded-box  w-full py-4 px-10 border h-100">

                                    <label className="label text-black pt-4 font-semibold text-[1rem]">Origin</label>
                                    <input type="text" className="input font-medium text-[1rem] w-full bg-[#F2F2F2] text-md text-black py-5" placeholder="Please Enter Your Starting Place" />

                                    <label className="label text-black font-semibold text-[1rem]">Destination</label>
                                    <input type="text" name='destination' className="input font-medium text-[1rem] w-full bg-[#F2F2F2] text-md text-black py-5" placeholder="Please place your destination" />

                                    <div className="w-full flex  gap-3 justify-between ">
                                        <div className="left text-black mt-4 w-full">
                                            <p className="text-black font-bold text-[1rem]">Form</p>
                                            <input type="date" className="input text-white bg-[#868484] validator" required placeholder="Pick a date"
                                                min="2025-01-01" max=""
                                                title="Must be valid URL" />
                                        </div>

                                        <div className="right text-black mt-4 w-full">
                                            <p className="text-black font-bold text-[1rem]">To</p>
                                            <input type="date" className="input w-full text-white bg-[#868484] validator" required placeholder="Pick a date"
                                                min="2025-01-01" max=""
                                                title="Must be valid URL" />
                                        </div>
                                    </div>

                                    <NavLink type="submit" className=" btn  border-[#F9A51A] text-black bg-[#F9A51A] mt-6">Start Booking</NavLink>
                                </fieldset>
                            </form>


                        </div>
                    </div>
                </main>

            </div>
        </div>


    );
};

export default BookingSection;