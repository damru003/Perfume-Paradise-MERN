import React, { useEffect } from 'react';
import { HeroCrousel } from '../components/Hero_carousels/HeroCrousel';
import { TopCategory } from '../components/Top_category/TopCategory';
import { Imagebox1 } from '../components/ImageBox/Imagebox1';
import { WhyParadise } from '../components/WhyParadise/WhyParadise';
import { LatestCollection } from '../components/Latestollection/LatestCollection';
import { NewArrival } from '../components/NewArriwal/NewArrival';
import { BestofPerfume } from '../components/BestofPerfume/BestofPerfume';
import { ExploreBrand } from '../components/ExploreMore/ExploreBrand';
import { VideoContainer } from '../components/VideoContainer/VideoContainer'
import { DownloadParadise } from '../components/DownloadPradise/DownloadParadise';
import { Footer } from '../components/Footer/Footer';
export const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <div className='mt-5 sm:mt-7 z-10'>
        <HeroCrousel />
        <NewArrival />
        <Imagebox1 />
        <BestofPerfume />
        <LatestCollection />
        <ExploreBrand />
        <TopCategory />
        <VideoContainer />
        <WhyParadise />
        <DownloadParadise />
        <Footer />
      </div>
    </>
  )
}