import React, { useContext, useState, useEffect } from 'react'
import { StoreContext } from './StoreProvider';
import { Footer } from '../components/Footer/Footer';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export const Login = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { navigate, token, setToken, backendUrl } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState('LOG IN');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const onSubmitHandler = async (e) => {
  e.preventDefault();
  try {
    if (currentState === 'SIGN UP') {
      const response = await axios.post(`${backendUrl}/api/user/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      console.log(response.data.token);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        toast.success('Account created successfully!');
        navigate('/');
      } else {
        toast.error(response.data.message || 'Registration failed');
      }
    } else {
      const response = await axios.post(`${backendUrl}/api/user/login`, {
        email: formData.email,
        password: formData.password
      });
      

      if (response.data.success) {
        console.log(response.data.token);
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        toast.success('Logged in successfully!');
        
      } else {
        toast.error(response.data.message || 'Login failed');
      }
    }
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.message || 'Something went wrong');
  }
}

useEffect(()=> {
  if (token) {
    navigate('/')
  }
},[token])


  return (
    <>
      <Toaster />

      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-[120px] gap-4 text-gray-700 border p-5 shadow-lg md:mb-[200px] mb-20'>

        <div className='inline-flex items-center gap-2 mb-2 mt-5 md:mt-10'>
          <p className='text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>

        {/* Name input only for SIGN UP */}
        {currentState === 'SIGN UP' && (
          <input
            type='text'
            name='name'
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Name'
            onChange={handleInputChange}
            value={formData.name}
            required
          />
        )}

        <input
          type='email'
          name='email'
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Email'
          onChange={handleInputChange}
          value={formData.email}
          required
        />

        <input
          type='password'
          name='password'
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Password'
          onChange={handleInputChange}
          value={formData.password}
          required
        />

        <div className='w-full flex justify-between text-sm'>
          <p className='cursor-pointer'>Forgot Password ?</p>

          {currentState === 'LOG IN' ? (
            <p onClick={() => setCurrentState('SIGN UP')} className='cursor-pointer'>
              Create Account
            </p>
          ) : (
            <p onClick={() => setCurrentState('LOG IN')} className='cursor-pointer'>
              Login Here
            </p>
          )}
        </div>

        <button className='bg-black text-white px-4 py-2 w-full mb-5'>
          {currentState === 'LOG IN' ? 'LOG IN' : 'SIGN UP'}
        </button>

      </form>

      <Footer />
    </>
  )
}
