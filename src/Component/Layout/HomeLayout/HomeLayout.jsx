//import React from 'react';

import "./HomeLayout.css";
import NavSection from "../../NavSection/NavSection";
import TouristPlace from "../../TouristPlace/TouristPlace";
import { use } from "react";
import Context from "../../Context/Context/Context";

const HomeLayout = () => {

  const {activeIndex,data}= use(Context);

  return (
    <div>
      <div
        className="imgs absolute z-0 h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data[activeIndex].image})` }}
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
