//import React from 'react';
import { NavLink } from 'react-router';
import error from '../../assets/images/icons/errorss.avif'


const ErrorPage = () => {
    return (
        <div className='h-screen w-full text-center'>
            <div className='flex items-center justify-center'>
                <img src={error} alt="" />
            </div>
            <p className='text-center font-extrabold text-5xl'>Page Not Found</p>
            <NavLink to='/' className='btn mt-5 font-medium bg-[#e67e22] text-white'>Go to Home</NavLink>
        </div>
    );
};

export default ErrorPage;