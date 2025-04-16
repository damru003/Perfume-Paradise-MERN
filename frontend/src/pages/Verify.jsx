import React, { useContext, useEffect } from 'react';
import { StoreContext } from './StoreProvider';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';

export const Verify = () => {

    const { navigate, token, setcartItems , backendUrl } = useContext(StoreContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {

        try {
            if (!token) {
                return null;
            }
           const response = await axios.post( backendUrl+ '/api/order/verifystripe', {success,orderId}, {headers:{token}})

           console.log(response.data);

           if (response.data.success) {
            setcartItems({})
            navigate('/orders')
           }
           else {
            navigate('/cart')
           }
        }
        catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        verifyPayment();
    }, [token])

  return (
   <>
      <div className='mt-20'>Verify</div>
   </>
  )
}
