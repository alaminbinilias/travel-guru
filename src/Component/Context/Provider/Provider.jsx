//import React from 'react';
import Context from "../Context/Context";
import { use, useState } from "react";

const Data=fetch('./data.json').then(res=>res.json());
const Provider = ({ children }) => {
    const data=use(Data);
    const [activeIndex, setActiveIndex] = useState(0);
    //console.log(data.length);

    const nextCard=()=>{
        if(activeIndex===data.length-1){
            setActiveIndex(data.length-1);
        }
        else{
            setActiveIndex(activeIndex+1);
        }
    }

    const PreviousCard=()=>{
        if(activeIndex===0){
            setActiveIndex(0);
        }
        else{
            setActiveIndex(activeIndex-1);
        }
    }

    const value = {
        activeIndex,
        setActiveIndex,
        PreviousCard,
        nextCard,
        data
    };


    return (
        <Context value={value}>
            {children}
        </Context>
    );
};

export default Provider;