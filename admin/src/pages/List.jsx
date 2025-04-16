import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import toast from 'react-hot-toast';

export const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Products not here");
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("🗑️ Product deleted successfully!");
        fetchList(); // refresh the product list
      } else {
        toast.error("Failed to delete product.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong while deleting!");
    }
  };




  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2 text-lg font-semibold">All Products</p>

      {/* Table Headers */}
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-4 bg-gray-100 text-sm font-semibold border-b">
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span>Action</span>
      </div>

      {list.length === 0 ? (
        <p className="text-gray-500 mt-4">No products found.</p>
      ) : (
        list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center px-4 py-3 border-b text-sm"
          >
            <img
              src={item.images?.[0]}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹ {item.price}</p>
            <button onClick={() => removeProduct(item._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        ))
      )}


    </>
  );
};
