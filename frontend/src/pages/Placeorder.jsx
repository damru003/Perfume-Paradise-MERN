import React, { useContext, useEffect, useState } from 'react';
import { CartTotal } from '../components/CartTotal/CartTotal';
import { StoreContext } from './StoreProvider';
import { toast } from 'react-hot-toast';
import axios from 'axios';

export const Placeorder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [method, setMethod] = useState('cod');


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setorderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { cartItems, products, navigate, setConfirmedOrders, clearCart, errors, validateForm, orderData, setorderData, backendUrl, token, total, setcartItems } = useContext(StoreContext);

  const VITE_RAZORPAY_KEY_ID = 'rzp_test_kvwE4qzb2YhG3c';

  const initPay = async (order) => {
    const options = {
      key:VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Order Payment',
      description: 'Order Payment',
      order_id : order.id,
      handler: async (response) => {
        console.log(response)

        try {
          const { data } = await axios.post(backendUrl+'/api/order/verifyrazorpay', response,{headers:{token}})
          if (data.success) {
            navigate('/orders');
            toast.success("Order Place Successfully")
            setcartItems({})
          }
        }
        catch(error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }


  const onSubmitHandler = async (e) => {  
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all the required fields.');
      return;
    }

    try {
      const orderItems = Object.entries(cartItems)
        .filter(([id, quantity]) => quantity > 0)
        .map(([id, quantity]) => {
          const product = products.find(product => product._id.toString() === id.toString());
          if (product) {
            const itemInfo = structuredClone(product);
            itemInfo.quantity = quantity;
            return itemInfo;
          }
          return null;
        })
        .filter(Boolean); // remove nulls


      console.log('cartItems:', cartItems);


      const newConfirmedOrders = orderItems.map(item => ({
        ...item,
        status: 'CONFIRMED',
      }));

      let fullAddress = `${orderData.street}, ${orderData.city}, ${orderData.state}, ${orderData.zipCode}, ${orderData.country}`;

      let userName = `${orderData.firstName} ${orderData.lastName} `

      let orderDetail = {
        username: userName,
        address: fullAddress,
        items: orderItems,
        amount: total
      };


      switch (method) {


        case 'cod':

          const response = await axios.post(backendUrl + '/api/order/place', orderDetail, { headers: { token } });

          if (response.data.success) {
            setConfirmedOrders(newConfirmedOrders);
            setcartItems({})
            clearCart();
            toast.success("Order Place Successfully...");
            navigate('/orders');
          }
          else {
            toast.error(response.data.message);
          }

          break;


        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderDetail, { headers: { token } });

          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data
            window.location.replace(session_url)

          }
          else {
            toast.error(responseStripe.data.message);
          }

          break;

        case 'razorpay':
          try {
            const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderDetail, { headers: { token } });

            console.log(responseRazorpay.data.order)
            if (responseRazorpay.data.success) {
              initPay(responseRazorpay.data.order);
            }
          } catch (error) {
            console.error("Razorpay error:", error);
            toast.error("Something went wrong with Razorpay checkout.");
          }
          break;
      }

    } catch (error) {
      toast.error('Failed to place the order. Try again later.');
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between mt-20 min-h-[85vh] border-t mb-10'>
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

          <div className='text-2xl font-semibold text-gray-700 mt-5 md:mt-10'>
            <h1 className='text-gray-700'>DELIVERY INFORMATION</h1>
          </div>

          <div className='flex gap-3 mt-2 md:mt-6'>
            <div className='w-full'>
              <input
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                type='text'
                name='firstName'
                placeholder='Enter First Name'
                value={orderData.firstName}
                onChange={onChangeHandler}
              />
              {errors.firstName && <p className='text-white bg-red-500 text-sm p-2'>{errors.firstName}</p>}
            </div>

            <div className='w-full'>
              <input
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                type='text'
                name='lastName'
                placeholder='Enter Last Name'
                value={orderData.lastName}
                onChange={onChangeHandler}
              />
              {errors.lastName && <p className='text-white bg-red-500 text-sm p-2'>{errors.lastName}</p>}
            </div>
          </div>

          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='email'
            name='email'
            placeholder='Enter Email Address'
            value={orderData.email}
            onChange={onChangeHandler}
          />
          {errors.email && <p className='text-white bg-red-500 text-sm p-2'>{errors.email}</p>}

          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='text'
            name='street'
            placeholder='Enter Street'
            value={orderData.street}
            onChange={onChangeHandler}
          />
          {errors.street && <p className='text-white bg-red-500 text-sm p-2'>{errors.street}</p>}

          <div className='flex gap-3'>
            <div className='w-full'>
              <input
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                type='text'
                name='city'
                placeholder='Enter City'
                value={orderData.city}
                onChange={onChangeHandler}
              />
              {errors.city && <p className='text-white bg-red-500 text-sm p-2'>{errors.city}</p>}
            </div>

            <div className='w-full'>
              <input
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                type='text'
                name='state'
                placeholder='Enter State'
                value={orderData.state}
                onChange={onChangeHandler}
              />
              {errors.state && <p className='text-white bg-red-500 text-sm p-2'>{errors.state}</p>}
            </div>
          </div>

          <div className='flex gap-3'>
            <div className='w-full'>
              <input
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                type='number'
                name='zipCode'
                placeholder='Enter Zip Code'
                value={orderData.zipCode}
                onChange={onChangeHandler}
              />
              {errors.zipCode && <p className='text-white bg-red-500 text-sm p-2'>{errors.zipCode}</p>}
            </div>

            <div className='w-full'>
              <input
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                type='text'
                name='country'
                placeholder='Enter Country'
                value={orderData.country}
                onChange={onChangeHandler}
              />
              {errors.country && <p className='text-white bg-red-500 text-sm p-2'>{errors.country}</p>}
            </div>
          </div>

          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='number'
            name='phone'
            placeholder='Enter Phone'
            value={orderData.phone}
            onChange={onChangeHandler}
          />
          {errors.phone && <p className='text-white bg-red-500 text-sm p-2'>{errors.phone}</p>}
        </div>

        <div>
          <div className='sm:mt-5 md:mt-10 min-w-80 py-5 md:py-10'>
            <CartTotal />
          </div>

          <div>
            <div className='text-2xl font-semibold text-gray-700 border shadow-lg p-3'>
              <h1>PAYMENT METHOD</h1>
              <div className='flex flex-col gap-2 mt-5'>
                <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-gray-700' : ''}`}></p>
                  <img className='h-8' src={'assets/frontend_assets/stripe_logo.png'} alt='Stripe' />
                </div>
                <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-gray-700' : ''}`}></p>
                  <img className='h-8' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZ40xDtGQlNnEtDL2er6ICR1UMWoLcSiU0AML-DkEH616YObjoDhq-o2U_0ncsGtdOqU&usqp=CAU'} alt='razorpay' />
                </div>
                <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-gray-700' : ''}`}></p>
                  <img className='h-8' src={'assets/frontend_assets/cash_on_delivery.png'} alt='cod' />
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center mt-6'>
            <button type='submit' className='bg-black text-white px-4 py-2 hover:bg-gray-800'>Place Order</button>
          </div>
        </div>
      </form>
    </>
  );
};
