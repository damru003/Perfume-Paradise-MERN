import React from 'react'

export const VideoContainer = () => {
  return (
    <>
        <div className='p-5 bg-red-200 rounded-lg mt-4 md:mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col gap-2 p-5 text-center'>
                <h2 className='text-2xl'>U.R.Lovely & U.R.Sweet</h2>
                <p className='text-slate-600'>Eau De Parfum</p>
                
                <video controls autoPlay loop muted src='https://cdn.shopify.com/videos/c/o/v/730a7165456d439595ac3bf7607d74cc.mp4' className='rounded-lg mt-4'></video>
                
            </div>

            <div className='flex flex-col gap-2 p-5 text-center'>
                <h2 className='text-2xl'>Brown Wallet</h2>
                <p className='text-slate-600'>Eau De Parfum</p>
                <video controls autoPlay loop muted src='https://cdn.shopify.com/videos/c/o/v/e674780aa0634467a3f1f3b79a45ee80.mp4' className='rounded-lg mt-4'></video>
            </div>


        </div>
        </div>
    </>
  )
}