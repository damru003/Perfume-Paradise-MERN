import React, { useContext } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../pages/StoreProvider';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  className: "center",
  centerMode: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

export const TopCategory = () => {

  const {products} = useContext(StoreContext)

  return (
    <>
<div className='mt-5 md:mt-10 mb-4 container mx-auto'>
  <div className='font-bold gap-1 text-lg'>
    <p className='text-center text-2xl md:text-4xl text-slate-700'>Top Category's Brand</p>
  </div>

  <div className=''>
    <div className="slider-container mt-5">
      <Slider {...settings}>
        {products.map((item, index) => (
          <Link to="/collections" key={index}>
            <div className="w-32 h-44 md:w-60 md:h-60 bg-white border border-gray-200 rounded-lg shadow flex items-center justify-center overflow-hidden">
              <img
                className="object-contain w-full h-full p-2"
                src={item.images[2]}
                alt={`Brand ${index}`}
              />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  </div>
</div>

    </>
  )
}
