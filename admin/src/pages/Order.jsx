import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

export const Order = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(backendUrl+'/api/order/list', {}, {
        headers: { token },
      });

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async ( event ,orderId ) => {
    try {
      const response = await axios.post(backendUrl+'/api/order/status', {orderId, status:event.target.value} , {headers:{token}})
      console.log(response.data);
      if (response.data.success) {
        await fetchAllOrders()
      }
    }
    catch (error) {
      console.log(error)
      res.json({success:false, message:error.message})
    }
  }
  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-3 space-y-6">
      {orders.map((order, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <img src={assets.parcel_icon} alt="parcel" className="w-8 h-8" />
            <h3 className="sm:text-lg text-sm font-semibold">User ID: {order._id}</h3>
          </div>

          <div className="mb-2">
            <p className='font-bold'>Order Items :</p>
            {order.items.map((item, idx) => (
              <p key={idx} className='text-sm'>
                {item.name} x <span className="font-medium">{item.quantity}</span>
              </p>
            ))}
          </div>

          <p className="font-bold mt-2">User Name:</p>
          <span className="text-sm text-gray-700">{order.username}</span>

          <p className="font-bold mt-2">User Address:</p>
          <span className="text-sm text-gray-700">{order.address}</span>

          <p className="mt-2 text-sm">
            <strong>Payment:</strong> {order.payment ? 'Done' : 'Pending'} ({order.paymentMethod})
          </p>

          <div className='flex gap-5 mt-2 mb-3'>
            <p>Order Status :</p>

            <select onChange={(event) => statusHandler(event,order._id)} value={order.status}>
              <option value="Order Placed">Order Placed</option>
              <option value="Shipped">Shipped</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>

          <p className="text-sm">
            <strong>Order Date:</strong> {new Date(order.date).toLocaleDateString()}
          </p>

          <p className="mt-2 text-right font-semibold">
            Total Amount: Rs. {order.amount.toFixed(2)}/-
          </p>
        </div>
      ))}
    </div>
  );
};
