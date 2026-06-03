//import React from 'react';

import "./HomeLayout.css";

import cox from "../../../assets/images/icons/Rectangle 1.png";
import NavSection from "../../NavSection/NavSection";
import TouristPlace from "../../TouristPlace/TouristPlace";

const HomeLayout = () => {
  return (
    <div>
      <div
        className="imgs absolute z-0 h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cox})` }}
      ></div>

      <div className=" relative z-10 h-screen flex flex-col">
        <nav>
          <NavSection></NavSection>
        </nav>

        <main className="h-screen flex flex-1">
          <TouristPlace></TouristPlace>
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
