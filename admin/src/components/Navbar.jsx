import React from 'react';
import { assets } from '../assets/assets';
import { Navigate } from 'react-router-dom';

export const Navbar = ({setToken}) => {
    return (
        <>
            <div className='flex items-center justify-between py-2 px-[5%]'>
                <img src={assets.logo} className='w-68' alt='' />
                <button onClick={() => {setToken('')}} className='bg-gray-700 text-white px-5 py-2 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer'>Logout</button>
            </div>
        </>
    )
}
