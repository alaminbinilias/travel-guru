import { use } from "react";
import "swiper/css";
import { NavLink } from "react-router";
import Context from "../Context/Context/Context";
import { FaLongArrowAltRight } from "react-icons/fa";
import RightSection from "../RightSection/RightSection";


const data = fetch("./data.json").then((res) => res.json());
const TouristPlace = () => {
    const Data = use(data);
    //sconsole.log(Data);
    const { activeIndex } = use(Context);

    return (
        <div className="flex-1 w-11/12 mx-auto items-center h-full grid grid-cols-2 gap-10">
            <div className="leftSection w-3/4 mx-auto">
                <p className="text-white text-5xl text-start">{Data[activeIndex].touristPlace}</p>
                <p className="text-gray-400 text-3xl text-start mt-4 text-wrap">{Data[activeIndex].hotelDescription}</p>
                <NavLink to={`category/${Data[activeIndex].id}`} className='btn mt-4 bg-[#F9A51A] text-black flex-none justify-center items-center py-6 text-[1.3rem] px-6'>Booking<span className="mt-1"><FaLongArrowAltRight size={17} /></span></NavLink>
            </div>
            <div className=''>
                <RightSection></RightSection>
            </div>
        </div >
    );
};

export default TouristPlace;
