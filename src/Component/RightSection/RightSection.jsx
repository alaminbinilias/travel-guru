//import React from 'react';

import { use, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Context from "../Context/Context/Context";
import PlaceCard from "../PlaceCard/PlaceCard";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const RightSection = () => {
    const swiperRef = useRef(null);
    const { data,nextCard, PreviousCard } = use(Context);
    return (
        <div className="rightSection  overflow-hidden">

            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={-100}
                loop={false}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {
                    data.map((place, index) => (<SwiperSlide setActiveIndex={index} key={index}><PlaceCard place={place}></PlaceCard></SwiperSlide>))
                }
            </Swiper>
            <div className="flex gap-1 justify-center mt-10">
                <button onClick={() => { swiperRef.current?.slidePrev(), PreviousCard() }} className=" btn w-12 h-12 bg-white flex justify-center items-center rounded-full"><FaArrowLeft color="black" /></button>
                <button onClick={() => { swiperRef.current?.slideNext(), nextCard() }} className=" btn w-12 h-12 bg-white flex justify-center items-center rounded-full"><FaArrowRight color="black" /></button>
            </div>
        </div>
    );
};

export default RightSection;