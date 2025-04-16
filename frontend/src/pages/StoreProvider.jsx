import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

export const StoreContext = createContext();

export const StoreProvider = (props) => {

  const [token,setToken] = useState('');
  
  const [search, setSearch] = useState('');
  const [showsearch, setshowSearch] = useState(false);
  const [cartItems,setcartItems] = useState({});
  
  // const backendUrl = "http://localhost:4000";

  // Because .env file is not working that's why i put the backend vercel link here for live view..
  
  const backendUrl = "https://perfume-paradise-backend.vercel.app";
  
  const [products,setProducts] = useState([])

  const navigate = useNavigate();

  const addToCart = async (id) => {
    console.log("🧪 [addToCart] Called with ID:", id); // Log this
  
    let cartData = structuredClone(cartItems);
  
    if (cartData[id]) {
      cartData[id] += 1;
      toast.success('Cart Quantity Increase');
    } else {
      cartData[id] = 1;
      toast.success('Added Successfully');
    }
  
    setcartItems(cartData);
  
    if (token) {
      try {
        console.log("🚀 Sending itemId to backend:", id);
        console.log("🔐 Token:", token);
  
        const res = await axios.post(
          backendUrl + '/api/cart/add',
          { itemId: id },
          { headers: { token } }
        );
  
        console.log("✅ Response from backend:", res.data);
      } catch (error) {
        console.log("❌ Error in addToCart:", error.response?.data || error.message);
        toast.error(error.message);
      }
    } else {
      console.warn("⚠️ Token missing from localStorage!");
    }
  };
  

  const updateQuantity = async (id, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[id] = quantity;
    if (quantity <= 0) {
      delete cartData[id];
    }
    setcartItems(cartData);
  
    if (token) {
      try {
        await axios.post(backendUrl+ '/api/cart/update', { itemId: id, quantity }, { headers: { token } });
  
        
        const response = await axios.post(backendUrl + '/api/cart/get', {} , {headers:{token}})

        if (response.data.success) {
          setcartItems(response.data.cartData);
        }
  
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };
  
  

  const getCartQuantity = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/cart/get',
        {}, // empty body
        {
          headers: { token },
        }
      );
  
      if (response.data.success) {
        setcartItems(response.data.cartData);
      }
    } catch (error) {
      console.log("❌ Error fetching cart quantity:", error);
      toast.error("Failed to load cart.");
    }
  };
  


  const getTotalCount = () => {
    let totalCount = 0;
  
    for (const id in cartItems) {
      totalCount += cartItems[id];
    }
  
    return totalCount;
  };

  const CartTotal = () => {
    let totalAmount = 0;
  
    for (const itemId in cartItems) {
      const itemQuantity = cartItems[itemId];
      
      const productInfo = products.find((product) => product._id === itemId);
      
      if (productInfo && itemQuantity > 0) {
        totalAmount += productInfo.price * itemQuantity;
      }
    }
  
    return totalAmount;
  };

  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

    const [ orderData, setorderData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      phone: ''
    })


  const [errors, setErrors] = useState({});

  
  const validateForm = () => {
    const newErrors = {};
    if (!orderData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!orderData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!orderData.email.trim() || !/\S+@\S+\.\S+/.test(orderData.email)) newErrors.email = 'Valid email is required';
    if (!orderData.street.trim()) newErrors.street = 'Street is required';
    if (!orderData.city.trim()) newErrors.city = 'City is required';
    if (!orderData.state.trim()) newErrors.state = 'State is required';
    if (!orderData.zipCode.trim()) newErrors.zipCode = 'Zip Code is required';
    if (!orderData.country.trim()) newErrors.country = 'Country is required';
    if (!orderData.phone.trim() || orderData.phone.length < 10) newErrors.phone = 'Valid Phone Number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const clearCart = () => {
    setcartItems({});
  };

  const [confirmedOrders, setConfirmedOrders] = useState([]);


  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0); 
  
  const subtotal = CartTotal();
  const shippingFee = 100;
  const gstRate = 0.12;
  const gst = subtotal * gstRate;


  // const handleApplyCoupon = () => {
  //   const validCoupon = 'SAVE10'; 
  //   if (couponCode === validCoupon) {
  //     setDiscount(10); 
  //     toast.success('Coupon Code Applied Succesfully.');
  //   } else {
  //     setDiscount(0);
  //     toast.error('Coupon Code is Invalid.');
  //   }
  // };

  // const discountedSubtotal = subtotal - (subtotal * (discount / 100));

  const total = subtotal + shippingFee + gst;
  
  const getProductdata = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setProducts(response.data.products)
      } else {
        console.log(response.data.message)
      }

    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };
  
  useEffect(() => {
    getProductdata();
  }, []);
  
  useEffect(()=> {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
      getCartQuantity(localStorage.getItem('token'));
    }
  },[])


  const value = {
      products, 
      search, 
      setSearch, 
      showsearch, 
      setshowSearch,
      cartItems,
      addToCart,
      getTotalCount,
      updateQuantity,
      CartTotal,
      navigate,
      confirmedOrders,
      setConfirmedOrders,
      clearCart,
      couponCode,
      setCouponCode,
      discount,
      setDiscount,
      subtotal,
      shippingFee,
      gstRate,
      gst,
      total,
      formData, 
      setFormData, 
      errors, 
      validateForm,
      setcartItems,
      backendUrl,
      setToken,
      token,
      orderData,
      setorderData,
      setcartItems
  };

  
  return (
      <StoreContext.Provider value={value}>
          {props.children}
      </StoreContext.Provider>
  );
};


export const useStore = () => {
    return useContext(StoreContext);
};
