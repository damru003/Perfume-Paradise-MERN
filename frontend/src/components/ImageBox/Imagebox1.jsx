import React from 'react'

export const Imagebox1 = () => {
    return (
        <>
            <div className='mt-2 md:mt-12 flex grid-col-2 gap-4 md:gap-10 mb-5'>
                <div>
                    <img src={'https://thefragrancebook.com/cdn/shop/files/Him_750x_crop_center.jpg?v=1675763518'} className='rounded-md' />
                </div>
                <div>
                    <img src={'https://thefragrancebook.com/cdn/shop/files/Hers_750x_crop_center.jpg?v=1675763503'} className='rounded-md' />
                </div>
            </div>
        </>
    )
}