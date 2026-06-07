///import React from 'react';

import { NavLink } from "react-router";
import logo from '../../assets/images/icons/Frame.png'
import Context from "../Context/Context/Context";
import { use } from "react";

const LoginNavSection = () => {

    const { currentUser, setcurrentUser, SignOutUser } = use(Context);

    const HandleSignOut = () => {
        SignOutUser().then(() => {
            setcurrentUser(null);
        })
    }

    const links = <>
        <NavLink className='hover:underline'>News</NavLink>
        <NavLink className='hover:underline'>Destination</NavLink>
        <NavLink className='hover:underline'>Blog</NavLink>
        <NavLink className='hover:underline'>Contact</NavLink>
    </>
    return (
        <div>
            <nav className="NavSection flex items-center justify-between text-black">

                <div className="navbar bg-base-100 shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-2 shadow text-xl">
                                {links}
                            </ul>
                        </div>
                        <div className="ml-1 lg:ml-0"><NavLink to='/'><img src={logo} alt="" /></NavLink></div>
                    </div>
                    <div className="navbar-end">
                        <ul className="menu hidden menu-horizontal px-1 lg:flex gap-10 text-xl">
                            {links}
                        </ul>
                        {
                            currentUser ? <NavLink onClick={HandleSignOut} className=" bg-[#F9A51A] ml-7 px-7 py-2 rounded-[0.3rem] text-black cursor-pointer font-semibold">{currentUser.displayName}</NavLink> : <NavLink className=" bg-[#F9A51A] ml-7 px-7 py-2 rounded-[0.3rem] text-black cursor-pointer font-semibold">Login</NavLink>
                        }
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default LoginNavSection;