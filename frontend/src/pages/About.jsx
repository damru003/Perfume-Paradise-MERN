import React, { useEffect } from 'react';
import { Aboutdata } from '../components/About/Aboutdata';
import { WhyParadise } from '../components/WhyParadise/WhyParadise';
import { VideoContainer } from '../components/VideoContainer/VideoContainer';
import { ExploreBrand } from '../components/ExploreMore/ExploreBrand';
import { Footer } from '../components/Footer/Footer';
export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);


  return (
    <>
      <div className=' mt-[90px] md:mt-[120px]'>
        <Aboutdata />
        <ExploreBrand />
        <WhyParadise />
        <VideoContainer />
        <Footer />
      </div>
    </>
  )
}