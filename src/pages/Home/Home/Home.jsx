import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';
import OurFeatured from '../OurFeatured/OurFeatured';
import ImageGallery from '../ImageGallery/ImageGallery';
import TopEngineers from '../TopEngineers/TopEngineers';
import TopEngineerCard from '../TopEngineers/TopEngineerCard';

const Home = () => {
    return (
        <div>
           <HeroSlider></HeroSlider>
           <OurFeatured></OurFeatured>
           <ImageGallery></ImageGallery>
           <TopEngineers></TopEngineers>
           {/* <TopEngineerCard></TopEngineerCard> */}
        </div>
    );
};

export default Home;