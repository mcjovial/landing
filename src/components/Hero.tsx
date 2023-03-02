import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Hero() {
  const progressCircle: any = useRef(null);
  const progressContent: any = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper relative"
      >
        <SwiperSlide><img src='/assets/images/sliders/1.jpg'/></SwiperSlide>
        <SwiperSlide><img src='/assets/images/sliders/3.jpg'/></SwiperSlide>
        <SwiperSlide><img src='/assets/images/sliders/5.jpg'/></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <div className='absolute z-10 -translate-x-1/2 bottom-[70%] md:bottom-1/3 left-1/2 text-center'>
        <h2 className="text-[50px] font-extrabold text-white">Welcome to Amaspace</h2>
        <p className='text-white md:block hidden text-2xl my-8'>Our experience ensures that your projects will be done right and with the upmost professionalism.</p>
        <button className='md:inline hidden uppercase cursor-pointer bg-[#f3b004] text-white px-8 py-3 text-sm rounded'>
          <a href='contact-us'>Contact Us</a>
        </button>
      </div>
    </>
  );
}
