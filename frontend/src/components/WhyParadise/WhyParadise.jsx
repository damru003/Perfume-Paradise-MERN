import React from 'react';

export const WhyParadise = () => {
    return (
        <section className="why-paradise overflow-hidden mt-5 md:mt-14">
            <h2 className='text-center text-2xl md:text-4xl text-slate-700 mt-5 mb-5 font-bold'>Why Perfume Paradise?</h2>

            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-14 mb-14'>
                <div className="flex flex-col items-center">
                    <img src={'https://cdn.shopify.com/s/files/1/0707/0308/7907/files/cruelty_free.webp'} alt="Cruelty Free" className='w-12' />
                    <h4 className=' text-lg md:text-2xl text-slate-700 mt-2'>CRUELTY FREE</h4>
                    <p className='text-slate-500 text-sm md:text-lg mt-2'>Caring in Every Bottle. Our Dedication to Producing Cruelty-Free Perfumes.</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={'https://cdn.shopify.com/s/files/1/0707/0308/7907/files/LUXURIOUS_1.webp'} alt="Luxurious" className='w-12' />
                    <h4 className='text-lg md:text-2xl text-slate-700 mt-2'>LUXURIOUS</h4>
                    <p className='text-slate-500 text-sm md:text-lg mt-2'>Luxurious & Imported Perfume</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={'https://cdn.shopify.com/s/files/1/0707/0308/7907/files/AFFORDABILITY_2.webp'} alt="Affordable" className='w-12' />
                    <h4 className='text-lg md:text-2xl text-slate-700 mt-2'>AFFORDABLE</h4>
                    <p className='text-slate-500 text-sm md:text-lg mt-2'>Providing Elegance and Premium Quality at a Fair Price Unit</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={'https://cdn.shopify.com/s/files/1/0707/0308/7907/files/certificate.webp'} alt="Certified" className='w-12' />
                    <h4 className='text-lg md:text-2xl text-slate-700 mt-2'>CERTIFIED</h4>
                    <p className='text-slate-500 text-sm md:text-lg mt-2'>GMP & ISO Certified</p>
                </div>
            </div>
        </section>
    );
};
