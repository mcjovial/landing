import React from 'react'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Gallery = () => {
  const galleryImages = []
  const gallerySetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
};

  return (
    <>
      <div className='bg-white'>
        <div className='container m-auto'>
          <div className='flex justify-between'>
            <div>
              <div className='text-left m-auto mb-10'>
                <p className='text-2xl my-2 text-gray-600'>WHY CHOOSE US</p>
                <div className='bg-amber-400 p-0.5 max-w-[80px]'></div>
                <hr />
              </div>
              <div className='w-full'>
                <div className='mb-3'>
                  <img
                    className=''
                    src='/assets/images/sliders/3.jpg'
                    alt='alt'
                  />
                </div>
                <div className='flex justify-between w-full'>
                  <div className='h-auto'>
                    <img
                      width={200}
                      className=''
                      src='/assets/images/sliders/1.jpg'
                      alt='alt'
                    />
                  </div>
                  <div className='h-auto'>
                    <img
                      width={200}
                      className=''
                      src='/assets/images/sliders/3.jpg'
                      alt='alt'
                    />
                  </div>
                  <div className='h-auto'>
                    <img
                      width={200}
                      className=''
                      src='/assets/images/sliders/5.jpg'
                      alt='alt'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery