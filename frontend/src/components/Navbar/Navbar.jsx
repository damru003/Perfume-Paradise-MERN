import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StoreContext } from '../../pages/StoreProvider';

export const Navbar = () => {

  const { setshowSearch, getTotalCount, navigate, setConfirmedOrders, token, setToken, setcartItems } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setcartItems({});
    navigate('/login');
  };

  const [showMenuicon, setshowMenuicon] = useState(false);

  const storedUser = localStorage.getItem('user');
  const userName = storedUser ? storedUser.name : 'Guest';

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/')
    setshowMenuicon(false);
    toast.success('Logout successful!');
    setConfirmedOrders([]);
  };

  return (
    <>
      <div className="fixed top-[-20px] left-0 w-full p-5 md:px-10 md:py-5 z-10 bg-white flex justify-between mt-5 font-medium">

        <Link to={'/'}><img src={'assets/logo_perfume.png'} className='w-44 md:w-64' alt='logo' /></Link>

        <ul className='hidden lg:flex gap-8 text-md text-gray-700 items-center '>
          <NavLink to={'/'} className='flex flex-col items-center gap-1 text-lg'>
            <p className='mt-1'>Home</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-800 hidden' />
          </NavLink>
          <NavLink to={'about'} className='flex flex-col items-center gap-1 text-lg'>
            <p className='mt-1'>About</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to={'collections'} className='flex flex-col items-center gap-1 text-lg'>
            <p className='mt-1'>Collections</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to={'contact'} className='flex flex-col items-center gap-1 text-lg'>
            <p className='mt-1'>Contact</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-700 hidden' />
          </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
          <img src={'assets/frontend_assets/search_icon.png'} className='w-5 sm:w-6 cursor-pointer' alt='search_icon' onClick={() => { setshowSearch(true) }} />
          <div className='group relative'>
            <img onClick={() => navigate('/login')} src={'assets/frontend_assets/profile_icon.png'} className='w-5 sm:w-6 cursor-pointer' alt='profile_icon' />
            {token &&
              <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 p-5 bg-slate-100 text-gray-500 rounded text-center'>
                  
                  <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black text-sm'>My Orders</p>
                  {/* {storedUser && ( */}
                  <p className='cursor-pointer hover:text-black text-sm' onClick={logout}>Logout</p>
                  {/* )} */}
                </div>
              </div>
            }
          </div>
          <Link to={'cart'} className='relative'>
            <img src={'assets/frontend_assets/cart_icon.png'} alt='cart_icon' className='w-5 sm:w-6' />
            <p className='absolute right-[-5px] bottom-[-10px] bg-red-700 text-white text-center w-5 leading-5 text-[10px] rounded-full '>{getTotalCount()}</p>
          </Link>
          <img
            src={'assets/frontend_assets/menu_icon.png'}
            alt='menu_icon'
            className='w-7 cursor-pointer lg:hidden z-50'
            onClick={() => { setshowMenuicon(true) }}
          />
        </div>

        {/* slidebar menubar */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${showMenuicon ? 'w-full h-screen' : 'w-0'}`}>
          <div className='flex flex-col text-gray-700'>
            <div className='flex items-center gap-3 p-4 cursor-pointer' onClick={() => { setshowMenuicon(false) }}>
              <img src={'assets/frontend_assets/dropdown_icon.png'} className='w-2 rotate-180' />
              <p className='text-xl'>Back</p>
            </div>
            <NavLink to={'/'} onClick={() => { setshowMenuicon(false) }} className='py-2 pl-6 border'>Home</NavLink>
            <NavLink to={'about'} onClick={() => { setshowMenuicon(false) }} className='py-2 pl-6 border'>About</NavLink>
            <NavLink to={'collections'} onClick={() => { setshowMenuicon(false) }} className='py-2 pl-6 border'>Collections</NavLink>
            <NavLink to={'contact'} onClick={() => { setshowMenuicon(false) }} className='py-2 pl-6 border'>Contact</NavLink>
          </div>
        </div>

      </div>

    </>
  )
}