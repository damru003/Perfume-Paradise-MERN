import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

export const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', {
                email,
                password,
            });
            if (response.data.success) {
                setToken(response.data.token);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Login failed:', error);
            toast.error(error.message);
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center bg-cyan-800">
            <div className='bg-cyan-900 shadow-lg rounded-lg px-10 py-10 max-w-md'>

                <h1 className='text-2xl font-bold mb-4 text-center text-white'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-white mb-2'>Email Address</p>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none bg-white'
                            type='email'
                            placeholder='your@email.com'
                            required
                        />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-white mb-2'>Password</p>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none bg-white'
                            type='password'
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                    <button
                        className='mt-2 w-full py-2 px-4 rounded-md bg-black text-white cursor-pointer'
                        type='submit'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
