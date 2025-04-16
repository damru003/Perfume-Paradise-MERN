import React from 'react'

export const BestofPerfume = () => {
    return (
        <>
            <div className='mt-5 md:mt-10 bg-red-200 p-5 md:p-10 rounded-lg'>
                <h2 className='text-slate-700 font-bold text-2xl md:text-4xl'>Best Of Perfume's On Offer</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10 mt-10'>

                    <div>
                        <img src={'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:800/theme-image-1727431936968.jpeg'} alt='1' className='rounded-lg' />
                        <p className='mt-1 md:mt-4 text-sm'>Flat 25% off</p>
                    </div>

                    <div>
                        <img src={'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:800/theme-image-1727431936442.jpeg'} alt='2' className='rounded-lg' />
                        <p className='mt-1 md:mt-4 text-sm'>Up to 55% off</p>
                    </div>

                    <div>
                        <img src={'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:800/theme-image-1727431935962.jpeg'} alt='3' className='rounded-lg' />
                        <p className='mt-1 md:mt-4 text-sm'>Flat 15% off</p>
                    </div>

                    <div>
                        <img src={'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:800/theme-image-1727432049306.jpeg'} alt='4' className='rounded-lg' />
                        <p className='mt-1 md:mt-4 text-sm'>Buy 2, get 1 on fragrances</p>
                    </div>


                </div>
            </div>
        </>
    )
}