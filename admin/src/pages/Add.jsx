import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { backendUrl } from '../App';
import toast from 'react-hot-toast';

export const Add = ({token}) => {

  const [image1,setImage1] = useState(false);
  const [image2,setImage2] = useState(false);
  const [image3,setImage3] = useState(false);
  const [image4,setImage4] = useState(false);

  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');
  const [category,setCategory] = useState('GUCCI');
  const [bestseller,setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name",name)
      formData.append("description", description)
      formData.append("price",price)
      formData.append("category", category)
      formData.append("bestseller", bestseller)

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData,{headers:{token}})
      console.log(response.data);

      if (response.data.success) {
        toast.success("🎉 Product added successfully!");
        setName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setBestseller(false);
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
      } else {
        toast.error("Failed to add product: " + response.data.message);
      }

    }
    catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start'>
        <div>
          <p className='mb-3'>Upload Image</p>
          <div className='flex gap-2'>
            <label htmlFor='image1'>
              <img className='w-20' src={image1 ? URL.createObjectURL(image1) : assets.upload_area}  alt='' />
              <input onChange={(e)=> setImage1(e.target.files[0]) } type='file' id='image1' hidden />
            </label>
            <label htmlFor='image2'>
              <img className='w-20' src={image2 ? URL.createObjectURL(image2) : assets.upload_area} alt='' />
              <input onChange={(e)=> setImage2(e.target.files[0]) } type='file' id='image2' hidden />
            </label>
            <label htmlFor='image3'>
              <img className='w-20' src={image3 ? URL.createObjectURL(image3) : assets.upload_area} alt='' />
              <input onChange={(e)=> setImage3(e.target.files[0]) } type='file' id='image3' hidden />
            </label>
            <label htmlFor='image4'>
              <img className='w-20' src={image4 ? URL.createObjectURL(image4) : assets.upload_area} alt='' />
              <input onChange={(e)=> setImage4(e.target.files[0]) } type='file' id='image4' hidden />
            </label>
          </div>
        </div>

        <div className='w-full mt-3'>
          <p className='mb-3'>Product Name</p>
          <input onChange={(e)=> setName(e.target.value)} value={name} className='bg-gray-100 w-full max-w-[500px] px-3 py-2' type='text' placeholder='Enter Product Name' required />
        </div>

        <div className='w-full mt-3'>
          <p className='mb-3'>Product Description</p>
          <textarea onChange={(e)=> setDescription(e.target.value)} value={description} className='bg-gray-100 w-full max-w-[500px] px-3 py-2' type='text' placeholder='Enter Product Description' required />
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

          <div className='mt-3'>
            <p>Product Brand</p>
            <select onChange={(e)=> setCategory(e.target.value)} value={category} className='w-full px-3 py-2 bg-gray-100 mt-2'>
              <option value="BELLAVITA">BELLAVITA</option>
              <option value="ARMANI">ARMANI</option>
              <option value="CALVIN KLEIN">CALVIN KLEIN</option>
              <option value="CREED">CREED</option>
              <option value="DIOR">DIOR</option>
              <option value="GUCCI">GUCCI</option>
              <option value="JIMMY CHOO">JIMMY CHOO</option>
              <option value="MONT BLANC">MONT BLANC</option>
            </select>
          </div>

          <div className='mt-3'>
            <p>Product Price</p>
            <input onChange={(e)=> setPrice(e.target.value)} value={price} className='bg-gray-100 w-full max-w-[500px] px-3 py-2 mt-2' type='Number' placeholder='Enter Price of product' />
          </div>

        </div>

        <div className='flex gap-2 mt-3'>
          <input onChange={()=> setBestseller(prev=> !prev)} value={bestseller} checked={bestseller} type='checkbox' id='bestseller'/>
          <label className='cursor-pointer' htmlFor='bestseller'>
            Add to Bestseller
          </label>
        </div>

        <button className='px-3 py-3 mt-6 bg-gray-700 text-white cursor-pointer' type='submit'>Submit Product</button>

      </form>
    </>
  )
}
