import { use } from "react";
import "swiper/css";
import { NavLink } from "react-router";
import Context from "../Context/Context/Context";
import { FaLongArrowAltRight } from "react-icons/fa";
import RightSection from "../RightSection/RightSection";


//const data = fetch("./data.json").then((res) => res.json());
const TouristPlace = () => {
    //const Data = use(data);
    //sconsole.log(Data);
    const { data, activeIndex } = use(Context);

    return (
        <div className="flex-1 w-full lg:w-11/12 mx-auto items-center h-full grid-cols-1 lg:grid lg:grid-cols-2 gap-10">
            <div className="leftSection w-full px-3 lg:px-0 text-center lg:text-start mb-6 lg:mb-0 lg:w-3/4 mx-auto">
                <p className="text-white mt-10 lg:mt-0 text-4xl text-center lg:text-7xl lg:text-start">{data[activeIndex].touristPlace}</p>
                <p className="text-gray-400 text-3xl text-center lg:text-start mt-4 text-wrap">{data[activeIndex].hotelDescription}</p>
                <NavLink to={`category/${data[activeIndex].id}`} className='btn mt-4 bg-[#F9A51A] text-black flex-none justify-center items-center py-6 text-[1.3rem] px-6'>Booking<span className="mt-1"><FaLongArrowAltRight size={17} /></span></NavLink>
            </div>
            <div className='w-full mt-10 lg:mt-0 lg:w-full pl-3 lg:px-0  '>
                <RightSection></RightSection>
            </div>
        </div >
    );
};

export default TouristPlace;
