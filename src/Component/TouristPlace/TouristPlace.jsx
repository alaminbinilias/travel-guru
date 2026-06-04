import { use, useRef} from "react";
import PlaceCard from "../PlaceCard/PlaceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//import { Navigation } from "swiper/modules";
import { NavLink } from "react-router";
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import Context from "../Context/Context/Context";


const data = fetch("./data.json").then((res) => res.json());
const TouristPlace = () => {
    const Data = use(data);
    //sconsole.log(Data);
    const swiperRef = useRef(null);
    const {setActiveIndex,activeIndex,nextCard,PreviousCard} =use(Context);

    return (
        <div className="flex-1 w-11/12 mx-auto items-center h-full grid grid-cols-2 gap-3">
            <div className="leftSection w-3/4 mx-auto">
                <p className="text-white text-5xl text-start">{Data[activeIndex].touristPlace}</p>
                <p className="text-gray-400 text-3xl text-start mt-4 text-wrap">{Data[activeIndex].hotelDescription}</p>
                <NavLink className='btn mt-4 bg-[#F9A51A] text-black flex-none justify-center items-center py-6 text-[1.3rem] px-6'>Booking<span className="mt-1"><FaLongArrowAltRight size={17} /></span></NavLink>
            </div>
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
                        Data.map((place, index) => (<SwiperSlide setActiveIndex={index} key={index}><PlaceCard place={place}></PlaceCard></SwiperSlide>))
                    }
                </Swiper>
                <div className="flex gap-1 justify-center mt-10">
                    <button onClick={()=>{swiperRef.current?.slidePrev(),PreviousCard()}} className=" btn w-12 h-12 bg-white flex justify-center items-center rounded-full"><FaArrowLeft color="black" /></button>
                    <button onClick={()=>{swiperRef.current?.slideNext(),nextCard()}} className=" btn w-12 h-12 bg-white flex justify-center items-center rounded-full"><FaArrowRight color="black" /></button>
                </div>
            </div>
        </div >
    );
};

export default TouristPlace;
