import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom'


export const Sidebar = () => {
    return (
        <>
            <div className='w-[18%] min-h-screen border-r-1'>

                <div className='flex flex-col gap-4 pt-6 pl-[20%] mt-10 text-[15px]'>


                    <NavLink className='flex items-center gap-3 border border-gray-700 border-r-0 px-3 py-2' to='/add'>
                        <img className='h-5 w-5' src={assets.add_icon} />
                        <p className='hidden md:block'>Add Items</p>
                    </NavLink>

                    <NavLink className='flex items-center gap-3 border border-gray-700 border-r-0 px-3 py-2' to='/list'>
                        <img className='h-5 w-5' src={assets.order_icon} />
                        <p className='hidden md:block'>List Items</p>
                    </NavLink>

                    <NavLink className='flex items-center gap-3 border border-gray-700 border-r-0 px-3 py-2' to='/orders'>
                        <img className='h-5 w-5' src={assets.parcel_icon} />
                        <p className='hidden md:block'>Orders</p>
                    </NavLink>


                </div>
            </div>
        </>
    )
}
