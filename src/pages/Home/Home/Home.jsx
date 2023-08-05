import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';
import OurFeatured from '../OurFeatured/OurFeatured';
import ImageGallery from '../ImageGallery/ImageGallery';
import TopEngineers from '../TopEngineers/TopEngineers';

import Countup from '../../../components/CountUp/CountUp';

const Home = () => {
    return (
        <div>
           <HeroSlider></HeroSlider>
           <OurFeatured></OurFeatured>
           <ImageGallery></ImageGallery>
           <TopEngineers></TopEngineers>
           <Countup></Countup>
        </div>
    );
};

export default Home;