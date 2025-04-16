import React from 'react'
import { DownloadParadise } from '../components/DownloadPradise/DownloadParadise'
import { Footer } from '../components/Footer/Footer'

export const Contact = () => {
  return (
    <>
      <div className='mt-[90px] flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <div className='flex-1'>
          <DownloadParadise />
        </div>
        <div className='flex flex-col justify-center items-start md:items-center gap-6 flex-1'>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-500">
              Email: support@perfumeparadise.com
            </p>
            <p className="text-gray-500 mt-2">
              Phone: +1 234 567 890
            </p>
            <p className="text-gray-500 mt-2">
              Address: 123 Perfume St, New Delhi, DL
            </p>
            <p className='font-semibold text-xl mt-5'>
              Work With Us
            </p>
            <p className='text-sm text-gray-500 mt-2'>
              Learn more about our team and brand openings.
            </p>

            <button className='bg-black text-white px-4 py-2 mt-5'>
              Explore Brands
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}