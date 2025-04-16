import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from './StoreProvider';
import { Footer } from '../components/Footer/Footer';

export const Collection = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const {products,search,showsearch} = useContext(StoreContext);

  const navigate = useNavigate();

  const [filterProduct, setfilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setsortType] = useState('relavent');

  const filtercategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let productCopy = products.slice();

    if (showsearch && search) {
      productCopy = productCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category && category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }

    setfilterProduct(productCopy);
  };

  const sortProduct = () => {

    let fcopy = filterProduct.slice();

    switch (sortType) {
      case 'low-high':
        setfilterProduct(fcopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setfilterProduct(fcopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(() => {
    setfilterProduct(products)
  }, []);


  useEffect(() => {
    console.log(category)
    applyFilter();
  }, [category,search,showsearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])


  return (
    <>
      <div className='flex flex-col md:flex-row mt-[90px]'>

        <div className='min-w-60'>
          <p className='my-2 text-md md:text-2xl flex items-center cursor-pointer gap-2'>FILTER</p>

          <div className='border border-gray-300 pl-5 py-3 my-5 mb-10'>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'BELLAVITA'} onChange={filtercategory} />BELLAVITA
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'ARMANI'} onChange={filtercategory} />ARMANI
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'CALVIN KLEIN'} onChange={filtercategory} />CALVIN KLEIN
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'CREED'} onChange={filtercategory} />CREED
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'DIOR'} onChange={filtercategory} />DIOR
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'GUCCI'} onChange={filtercategory} />GUCCI
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'JIMMY CHOO'} onChange={filtercategory} />JIMMY CHOO
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'MONT BLANC'} onChange={filtercategory} />MONT BLANC
              </p>

            </div>
          </div>
        </div>

        <div className='flex-1 mx-0 md:mx-10'>

          <div className='flex justify-between text-base sm:text-2xl mb-4'>

            <h2 className='font-bold text-2xl items-center'>ALL Collection's</h2>

            <select
              className='border-2 border-gray-700 text-sm p-2 rounded-md'
              onChange={(e) => {
                setsortType(e.target.value);
                sortProduct();
              }}>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>

          </div>


          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(filterProduct.length > 0 ? filterProduct : products).map(product => (
              <div key={product._id} className="border p-2 flex flex-col h-full shadow-lg rounded-lg cursor-pointer"
                onClick={() => navigate(`/product/${product._id}`)}>
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <img src={product.images[0]} alt={product.name} className="w-full object-cover h-48 mb-4" />
                </div>

                {/* Product Details */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-start">{product.name}</h3>
                    <p className="text-gray-700 text-sm my-2 text-start">{product.description.slice(0, 100)}</p>
                  </div>

                  {/* Product Price and Category */}
                  <div className="text-start mx-1 mt-4">
                    <p className="font-semibold text-xl text-red-700">₹ {product.price}/-</p>
                    <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <Footer/>
    </>
  )
}