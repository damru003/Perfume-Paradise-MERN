import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { StoreContext } from '../../pages/StoreProvider';


export const NewArrival = () => {

  const {products} = useContext(StoreContext);

  return (
    <>
      <div className='my-5 md:my-10'>
        <div className='py-4 md:py-8 text-slate-700'>
          <h3 className='text-2xl md:text-4xl font-bold'>New Arrival's</h3>
          <p className='text-slate-500 mt-2 text-sm md:text-lg'>Perfume Paradise is dedicated to providing the best perfumes at affordable prices. Explore our wide range of cruelty-free and luxurious scents.</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 gap-y-6'>
          {products.slice(5,11).map((item, index) => {
            return (
              <div key={index} className="h-full">
                <Link to={`product/${item._id}`}>
                  <div className="w-full h-full bg-white rounded-lg shadow flex flex-col justify-between">
                    <img className="rounded-t-lg p-2" src={item.images[0]} alt="product image"/>
                    
                    <div className="px-5 pb-5 flex flex-col flex-grow">
                      <h5 className="mt-3 text-sm md:text-lg font-semibold">
                        {item.category}
                      </h5>

                      <div className="flex items-center mt-1 md:mt-2 mb-2 text-sm md:text-md">
                        <div className="flex justify-between gap-1">
                          <FaStar className='text-yellow-500'/>
                          <FaStar className='text-yellow-500'/>
                          <FaStar className='text-yellow-500'/>
                          <FaStar className='text-yellow-500'/>
                          <FaStar className='text-gray-600'/>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
