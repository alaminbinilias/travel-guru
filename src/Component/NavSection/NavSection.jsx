//import React from 'react';

import { NavLink } from "react-router";
import logo from "../../assets/images/icons/logo.png";
import { use } from "react";
import Context from "../Context/Context/Context";

const links = <>
  <NavLink className='hover:underline'>News</NavLink>
  <NavLink className='hover:underline'>Destination</NavLink>
  <NavLink className='hover:underline'>Blog</NavLink>
  <NavLink className='hover:underline'>Contact</NavLink>
</>

const NavSection = () => {

  const { currentUser, setcurrentUser, SignOutUser,setsearchValue } = use(Context);

  const HandleSignOut = () => {
    SignOutUser().then(() => {
      setcurrentUser(null);
    });

  }

  const HandleSearch=(event)=>{
      setsearchValue(event.target.value);
    }

  return (

    <div className="max-lg:collapse w-full lg:w-11/12 mx-auto text-white mt-2 lg:mb-48 rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <NavLink className='mr-3' to='/'><img src={logo} alt="" /></NavLink>
        </div>
        <div className="navbar-center">
          <div className="lg:w-full">
            <label className="input bg-[#535455] opacity-70 text-sm lg:text-xl outline-2 text-white border-white">
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
              <input onChange={HandleSearch}
                type="search" name="srch"
                required
                placeholder="Search your Destination..."
              />
            </label>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">

          <ul className="menu menu-horizontal px-1 gap-1 lg:gap-4 text-xl">
            {links}
          </ul>

        </div>
        <div className="with login pl-2 text-nowrap flex lg:gap-5 items-center text-sm lg:text-xl text-white justify-end">
          {
            currentUser ? <NavLink onClick={HandleSignOut} className=" bg-[#F9A51A] p-2 lg:px-7 lg:py-2 rounded-[0.3rem] text-black cursor-pointer font-semibold">{currentUser.displayName}</NavLink> : <NavLink to='/login' className=" bg-[#F9A51A] px-7 py-2 rounded-[0.3rem] text-black cursor-pointer font-semibold">Login</NavLink>
          }
        </div>
      </div >

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu bg-gray-400">
          {links}
        </ul>
      </div>
    </div >



    // <div className=" pt-4 grid grid-cols-3 items-center justify-between w-11/12 mx-auto px-3 py-1">

    //   <div className="col-span-1">
    //     <NavLink to='/'><img src={logo} alt="" /></NavLink>
    //   </div>
    //   <div className="search col-span-1 items-center">
    //     <div>
    //       <label className="input bg-[#535455] opacity-70 text-xl outline-2 text text-white border-white">
    //         <svg
    //           className="h-[1.2em] opacity-50"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //         >
    //           <g
    //             strokeLinejoin="round"
    //             strokeLinecap="round"
    //             strokeWidth="2.5"
    //             fill="none"
    //             stroke="currentColor"
    //           >
    //             <circle cx="11" cy="11" r="8"></circle>
    //             <path d="m21 21-4.3-4.3"></path>
    //           </g>
    //         </svg>
    //         <input
    //           type="search"
    //           required
    //           placeholder="Search your Destination..."
    //         />
    //       </label>
    //     </div>
    //   </div>
    //   <div className="with login flex gap-5 items-center text-xl text-white justify-end">
    //     {links}
    //     {
    //       currentUser ? <NavLink onClick={HandleSignOut} className=" bg-[#F9A51A] px-7 py-2 rounded-[0.3rem] text-black cursor-pointer font-semibold">{currentUser.displayName}</NavLink> : <NavLink to='/login' className=" bg-[#F9A51A] px-7 py-2 rounded-[0.3rem] text-black cursor-pointer font-semibold">Login</NavLink>
    //     }
    //   </div>
    // </div>
  );
};

export default NavSection;
