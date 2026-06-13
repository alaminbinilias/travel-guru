//import React from 'react';

import { use, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Context from "../Context/Context/Context";
import PlaceCard from "../PlaceCard/PlaceCard";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const RightSection = () => {
    const swiperRef = useRef(null);
    const { data, nextCard, PreviousCard, searchValue, } = use(Context);

    //console.log(data);
    //console.log(filteredData);
    const purifiedData = searchValue.toLowerCase().trim().replace(/['"]/g, "").split(' ').join('');
    //console.log(purifiedData);
    const filterData = data.filter(Data => Data.touristPlace.toLowerCase().trim().replace(/['"]/g, "").split(' ').join('').includes(purifiedData));



    return (
        <div className="rightSection overflow-visible  lg:overflow-hidden">

            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={-100}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: -200,
                    },
                    640: {
                        slidesPerView: 2,
                        centeredSlides: true,
                        spaceBetween: -50,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: -100,
                    },
                }}
                loop={false}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <div>
                    {
                        filterData.length === 0 ? <p className="font-bold text-white text-center text-5xl">No Place Found</p> : filterData.map((place, index) => (<SwiperSlide setactiveindex={index} key={index}><PlaceCard place={place}></PlaceCard></SwiperSlide>))
                    }
                </div>
            </Swiper>
            {
                filterData.length !== 0 && <div className="flex gap-1 justify-center mt-10">
                    <button onClick={() => { swiperRef.current?.slidePrev(), PreviousCard() }} className=" btn w-12 h-12 bg-white flex justify-center items-center rounded-full"><FaArrowLeft color="black" /></button>
                    <button onClick={() => { swiperRef.current?.slideNext(), nextCard() }} className=" btn w-12 h-12 bg-white flex justify-center items-center rounded-full"><FaArrowRight color="black" /></button>
                </div>
            }
        </div>
    );
};

export default RightSection;