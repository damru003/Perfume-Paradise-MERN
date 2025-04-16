import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Add } from './pages/Add.jsx';
import { List } from './pages/List.jsx';
import { Order } from './pages/Order.jsx';
import { Login } from './components/Login.jsx';
import{ ToastContainer,toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';


export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(() => {
    localStorage.setItem('token',token)
  },[token]);

  return (
    <div className='min-h-screen'>
    <ToastContainer/>
    <Toaster position="top-right" />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto my-8 text-gray-600 text-base ml-[max(5vw,25px)]'>
              <Routes>
                <Route path='/add' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/orders' element={<Order token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
