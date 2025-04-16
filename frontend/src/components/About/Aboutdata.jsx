import React from 'react'

export const Aboutdata = () => {
    return (
        <>
            <div className='mt-5 sm:mt-10 md:mt-20 container mx-auto mb-10'>
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">

                    <div className='sm:mt-0'>
                        <img src={'assets/about_section.jpeg'} className=' xl:block w-100 h-100 sm:h-[600px] lg:h-[100%]]' alt='about_image' />
                    </div>

                    <div className='text-start'>
                        <h2 className='text-slate-700 text-2xl md:text-5xl sm:text-3xl lg:text-4xl mt-2 sm:mt-10 font-bold'>About Our Paradise</h2>
                        <p className='mt-5 text-slate-500'>Welcome to Perfume Paradise, a serene oasis dedicated to the art of fragrance, where we offer an exclusive collection of handcrafted perfumes inspired by nature’s beauty. Our offerings include signature scents, niche artisanal brands, and personalized perfume creation experiences, allowing you to craft your unique fragrance. Join our engaging workshops and masterclasses led by expert perfumers, and explore our luxurious gift sets and home fragrance products, including scented candles and diffusers. Immerse yourself in a world of enchanting aromas and discover the perfect scent that reflects your individuality at Perfume Paradise!</p>

                        <p className='mt-8 text-slate-500 hidden lg:block'>In this paradise, there are winding paths lined with blossoming plants, each contributing its unique scent to the atmosphere. Perhaps there are delicate fountains where the water sparkles in the sunlight, adding a refreshing mist that carries the fragrances even further. There might be artisans crafting perfumes from the ingredients around them, blending and bottling their creations in beautifully designed flacons. The ambiance could be tranquil, with soft music playing in the background, inviting visitors to relax and explore the sensory delights.</p>
                        <p className='mt-8 text-slate-500 hidden lg:block'>There might be artisans crafting perfumes from the ingredients around them, blending and bottling their creations in beautifully designed flacons. The ambiance could be tranquil, with soft music playing in the background, inviting visitors to relax and explore the sensory delights.</p>
                    </div>

                </div>
            </div>
        </>
    )
}
