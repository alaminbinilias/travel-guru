//import React from 'react';

import { NavLink } from "react-router";
import logo from "../../assets/images/icons/logo.png";
import { use } from "react";
import Context from "../Context/Context/Context";

const NavSection = () => {

  const { currentUser, setcurrentUser, SignOutUser } = use(Context);

  const HandleSignOut=()=>{
    SignOutUser().then(()=>{
      setcurrentUser(null);
    })
  }

  return (
    <div className=" pt-4 grid grid-cols-3 items-center justify-between w-11/12 mx-auto px-3 py-1">
      <div className="col-span-1">
        <NavLink to='/'><img src={logo} alt="" /></NavLink>
      </div>
      <div className="search col-span-1 items-center">
        <div>
          <label className="input bg-[#535455] opacity-70 text-xl outline-2 text text-white border-white">
            <svg
              className="h-[1.2em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search your Destination..."
            />
          </label>
        </div>
      </div>
      <div className="with login flex gap-5 items-center text-xl text-white justify-end">
        <NavLink className='hover:underline'>News</NavLink>
        <NavLink className='hover:underline'>Destination</NavLink>
        <NavLink className='hover:underline'>Blog</NavLink>
        <NavLink className='hover:underline'>Contact</NavLink>
        {
          currentUser ? <NavLink onClick={HandleSignOut} className=" bg-[#F9A51A] px-7 py-2 rounded-[0.3rem] text-black cursor-pointer font-semibold">{currentUser.displayName}</NavLink> : <NavLink to='/login' className=" bg-[#F9A51A] px-7 py-2 rounded-[0.3rem] text-black cursor-pointer font-semibold">Login</NavLink>
        }
      </div>
    </div>
  );
};

export default NavSection;
