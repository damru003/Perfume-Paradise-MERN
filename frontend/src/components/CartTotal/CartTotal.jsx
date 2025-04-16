import React, { useContext, useState } from 'react';
import { StoreContext } from '../../pages/StoreProvider';
import { toast } from 'react-toastify';

export const CartTotal = () => {

  const { CartTotal,couponCode,
    discount,
    setDiscount,
    subtotal,
    shippingFee,
    gstRate,
    discountedSubtotal,
    total } = useContext(StoreContext);


  return (
    <div className='w-full mt-2 mb-10 border shadow-lg p-3'>
      <div className='text-2xl font-semibold text-gray-700'>
        <h2>CART TOTAL</h2>
      </div>

      <div className='flex flex-col gap-2 mt-5 text-md'>
        <div className='flex justify-between'>
          <p className='font-normal'>SUBTOTAL</p>
          <p className='font-normal text-gray-500'>₹ {subtotal.toFixed(2)}</p> {/* Subtotal after discount */}
        </div>


        <hr />

        <div className='flex justify-between'>
          <p className='font-normal'>GST ( 12% )</p>
          <p className='font-normal text-green-700'>₹ {(subtotal * gstRate).toFixed(2)}</p>
        </div>

        <hr />

        <div className='flex justify-between'>
          <p className='font-normal'>SHIPPING FEE</p>
          <p className='font-normal text-green-700'>₹ {shippingFee}</p>
        </div>

        <hr />

        <div className='flex justify-between mt-2'>
          <p className='font-semibold'>TOTAL</p>
          <p className='text-red-700 font-semibold'>₹ {total.toFixed(2)}</p>
        </div>

    
      </div>
    </div>
  );
};
