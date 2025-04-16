import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Collection } from './pages/Collection';
import { Contact } from './pages/Contact';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { Placeorder } from './pages/Placeorder';
import { Order } from './pages/Order';
import { Navbar } from './components/Navbar/Navbar';

import { Search } from './components/Search/Search';
import { StoreProvider } from './pages/StoreProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { Verify } from './pages/Verify';

function App() {
  return (
    <>
    
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] overflow-hidden'>
      
        <BrowserRouter>
        <ToastContainer/>
        <Toaster position="top-center" reverseOrder={false} />
        <StoreProvider>
          <Navbar />
          <Search/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='collections' element={<Collection />} />
            <Route path='contact' element={<Contact />} />
            <Route path='product/:id' element={<Product />} />
            <Route path='cart' element={<Cart />} />
            <Route path='login' element={<Login />} />
            <Route path='place-order' element={<Placeorder />} />
            <Route path='orders' element={<Order />} />
            <Route path='verify' element={<Verify />} />
          </Routes>
          </StoreProvider>
        </BrowserRouter>
      
    </div>
    </>
  );
}

export default App;
