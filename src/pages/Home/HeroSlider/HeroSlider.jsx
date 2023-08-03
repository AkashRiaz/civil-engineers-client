import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import design1 from '../../../assets/projects/design11.jpg'
import design2 from '../../../assets/projects/design14.jpg'
import design3 from '../../../assets/projects/design3.jpg'
import design4 from '../../../assets/projects/design4.jpg'
import design5 from '../../../assets/projects/design5.jpg'
// import design6 from '../../../assets/projects/design11.jpg'
// import design7 from '../../../assets/projects/design14.jpg'
// import design8 from '../../../assets/projects/design8.jpg'
// import design9 from '../../../assets/projects/design17.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import './HeroSlider.css';

const HeroSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="h-[630px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className='relative'>
          <img
            src={design1}
            alt=""
            className="image-full"
          />
         <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30 text-white p-4'>
            <h2>Overlay content for image 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, consectetur.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img
            src={design2}
            alt=""
            className="image-full"
          />
          <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30 text-white p-4'>
            <h2>Overlay content for image 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, consectetur.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img
            src={design3}
            alt=""
            className="image-full"
          />
          <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30 text-white p-4'>
            <h2>Overlay content for image 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, consectetur.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img
            src={design4}
            alt=""
            className="image-full"
          />
          <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30 text-white p-4'>
            <h2>Overlay content for image 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, consectetur.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img
            src={design5}
            alt=""
            className="image-full"
          />
          <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30 text-white p-4'>
            <h2>Overlay content for image 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, consectetur.</p>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
