import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';
import OurFeatured from '../OurFeatured/OurFeatured';
import ImageGallery from '../ImageGallery/ImageGallery';

const Home = () => {
    return (
        <div>
           <HeroSlider></HeroSlider>
           <OurFeatured></OurFeatured>
           <ImageGallery></ImageGallery>
        </div>
    );
};

export default Home;