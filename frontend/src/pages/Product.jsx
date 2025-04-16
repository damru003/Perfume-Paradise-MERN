import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from './StoreProvider';
import { FaStar } from "react-icons/fa";
import { Footer } from '../components/Footer/Footer';

export const Product = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { products,cartItems,addToCart, } = useContext(StoreContext);
  
  const { id } = useParams();

  const [productData, setproductData] = useState(null);
  const [image, setimage] = useState('');

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === id);

    if (product) {
      setproductData(product);
      setimage(product.images[0])
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id, products]);

  return productData ? (
    <>
      <div className=' mt-[40px] md:mt-[70px] pt-10 transition-opacity ease-in duration-500 opacity-100 mb-10'>

        <div className='flex gap-6 md:gap-6 flex-col md:flex-row'>

          <div className='flex-1 flex flex-col-reverse gap-3 md:flex-row'>

            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18%] w-full'>

              {productData.images.map((item, index) => (
                <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-md' alt='images'
                  onClick={() => { setimage(item) }}
                />
              ))}
            </div>

            <div className='w-full sm:w-[80%]'>
              <img src={image} className=' w-full md:w-[97%] h-auto rounded-md' />
            </div>
          </div>

          <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-0 md:mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar />
              <p className='pl-2'>(135)</p>
            </div>

            <p className='mt-5 text-3xl text-red-700 font-medium'>₹ {productData.price}/-</p>
            <p className='mt-3 text-gray-700 w-5/5 md:w-4/5'>{productData.description}</p>

            <button className='bg-black text-white px-8 py-3 mt-5 text-sm active:bg-gray-700 rounded-md' onClick={() => addToCart(productData._id)}>ADD TO CART</button>

            <hr className='mt-8 w-5/5 md:w-4/5' />

            <div className='text-sm flex flex-col gap-2 mt-3 text-gray-700'>
              <p>100% Original Products</p>
              <p>Cash on Delivery is Available on this Product.</p>
              <p>Easy Return and Exchange policy within 7 Days.</p>
            </div>

          </div>


        </div>

        <div className='mt-10'>

          <div className='flex'>
            <div className='border px-5 py-3 text-sm'>Description</div>
            <div className='border px-5 py-3 text-sm'>Reviews (135)</div>
          </div>

          <div className='flex flex-col gap-10 border px-6 py-6 text- text-gray-500'>
            <p>Perfume Paradise is a premium e-commerce platform specializing in high-quality fragrances from renowned global brands. The store offers a wide range of perfumes, from luxurious designer collections to niche artisanal scents, catering to both men and women. With an elegant and user-friendly interface.</p>

            <p>Perfume Paradise provides customers with detailed product descriptions, scent profiles, and personalized recommendations. Features like secure payments, fast shipping, and an easy returns process enhance the shopping experience. Additionally, customers can explore seasonal sales, gift sets, and exclusive offers, making Perfume Paradise the ultimate destination for fragrance lovers.</p>
          </div>

        </div>

        

      </div>

      <Footer/>

    </>
  ) : null;
}