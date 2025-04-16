import React, { useContext , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { StoreContext } from '../../pages/StoreProvider';


export const LatestCollection = () => {

  const {products} = useContext(StoreContext);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);


  return (
    <>
      <div className='my-0 md:my-10'>
        <div className='py-8 text-slate-700'>
          <h3 className='text-2xl md:text-4xl font-bold'>Latest Collection's</h3>
          <p className='text-slate-500 mt-2 text-sm md:text-lg'>Perfume Paradise is dedicated to providing the best perfumes at affordable prices. Explore our wide range of cruelty-free and luxurious scents.</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 gap-y-6'>
          {products.slice(0,6).map((item, index) => {
            return <Link to={`product/${item._id}`} key={index}>
              <div className="h-full">
                <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between">

                  <img className="rounded-t-lg" src={item.images[1]} alt="product image" />
                  <div className="px-5 pb-5 flex flex-col flex-grow">

                    <h5 className="mt-3 text-md md:text-xl font-semibold">
                      {item.category}
                    </h5>

                    <div className="flex items-center mt-1 md:mt-2 mb-1">
                      <div className="flex gap-1 text-sm">
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-gray-600' />
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                        4.0
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-md md:text-xl font-bold text-red-700">
                        Rs.{item.price}/-
                      </span>

                    </div>
                  </div>
                </div>

              </div>
            </Link>
          })}
        </div>
      </div>
    </>
  )
}
