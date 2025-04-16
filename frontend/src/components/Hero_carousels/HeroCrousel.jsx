import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export const HeroCrousel = () => {

    const slides = [
        'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/original/theme-image-1723035551814.jpeg',
        'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:2560/theme-image-1727594304591.jpeg',
        'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:2560/theme-image-1727680117515.jpeg'
      ]

      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };


  return (
    <>
    <div className="slider-container mt-20">
      <Slider {...settings}>
        {slides.map((img) =>{
            return <Link to={'collections'}>
            <div className=''>
                <img src={img} alt=''/>
            </div>
            </Link>
        })}
      </Slider>
    </div>
    </>
  )
}