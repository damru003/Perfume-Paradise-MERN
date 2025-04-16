import React, { useContext, useEffect, useRef, useState } from 'react';
import { StoreContext } from './StoreProvider';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';

export const Order = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { confirmedOrders, formData, orderData, token, backendUrl } = useContext(StoreContext);

  const [orderDetail, setorderDetail] = useState([]);

  const loadOrderDetail = async () => {
    try {
      if (token) {
        const response = await axios.post(
          backendUrl + '/api/order/orders',
          {},
          { headers: { token } }
        );

        if (response.data.success) {
          const allorders = response.data.orders.map((item) => {
            return {
              ...item,
              status: item.status,          
              payment: item.payment,
              paymentMethod: item.paymentMethod,
              date: item.date,
            };
          });

          setorderDetail(allorders);
          console.log(allorders);
        }
      } else {
        return null;
      }
    } catch (error) {
      console.error("Failed to load order details:", error);
    }
  };

  useEffect(() => {
    loadOrderDetail();
  }, [token]);

  return (
    <>
      <div className='border-t sm:mt-10 mt-16'>
        <div>
          {token ? <h1 className='text-xl md:text-3xl font-semibold mt-3 md:mt-16'>
            Your Orders
          </h1>
            : <h1 className='text-xl md:text-3xl font-semibold mt-3 md:mt-16'>
              You need to Login first for your Orders
            </h1>}

        </div>

        <div className='mb-20 md:mb-20'>
          {orderDetail.length > 0 ? (
            orderDetail.map((order, index) => (
              <div key={index} className='mt-6 border-b pb-4'>


                {order.items.map((product, idx) => (
                  <div
                    key={idx}
                    className='py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
                  >
                    <div className='flex items-start gap-6 text-sm'>
                      <img className='w-20' src={product.images?.[0]} alt={product.name} />
                      <div>
                        <p className='text-sm font-medium'>{product.name}</p>
                        <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                          <p className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-600'>
                            <span className='text-xl font-bold'>{product.price.toFixed(2)}</span>
                            <span className="mx-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse">
                              ₹
                            </span>
                          </p>

                          <p>Quantity: {product.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}


                <div className='mt-4 mb-3 text-sm text-gray-800'>
                  <p className='text-2xl font-semibold mb-2'>Delivery Address:</p>
                  <p>{order.address}</p>
                  <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                  <p>Payment Method: {order.paymentMethod}</p>
                  <p className="mt-2 mb-2 flex items-center justify-start font-extrabold text-gray-800">
                    <span className="mr-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse">
                      ₹
                    </span>
                    <span className="ml-2 text-2xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                      {order.amount.toFixed(2)} /-
                    </span>
                  </p>

                  <p className='flex items-center gap-2 mt-2'>
                    <span className='text-gray-700 font-medium'>Status:</span>
                    <span className='px-3 py-1 rounded-full text-sm font-semibold 
    bg-green-100 text-green-700'>
                      {order.status}
                    </span>
                  </p>

                </div>
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
    </>
  );
};
