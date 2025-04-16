import React from 'react'

export const ExploreBrand = () => {
  return (
    <>
        <div className='p-5 mt-5 bg-red-200 rounded-lg'>
            <h2 className='text-slate-700 font-bold text-2xl md:text-3xl mt-2 mx-5'>Explore More Brand's</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 mt-3'>
                <img src={'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:800/theme-image-1727432146866.jpeg'} alt='' className='p-5'/>
                <img src={'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:800/theme-image-1727432146091.jpeg'} alt='' className='p-5'/>
                <img src={'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:800/theme-image-1727099818277.jpeg'} alt='' className='p-5'/>
            </div>
        </div>
    </>
  )
}