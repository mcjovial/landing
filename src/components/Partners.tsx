import React from 'react'
import Slider from 'react-slick';

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div>
      <div className='bg-white'>
        <div className='container m-auto'>
          <div className=''>
            {/* <div className='text-left m-auto mb-10'>
              <p className='text-2xl my-2 text-gray-600 uppercase'>Our Partners</p>
              <div className='bg-amber-400 p-0.5 max-w-[80px]'></div>
              <hr />
            </div> */}
            <Slider {...settings}>
              <div className=''>
                <img src="/assets/images/partners/1-grundfos.png" alt="" />
              </div>
              <div>
                <img src="/assets/images/partners/2-ilbagno.png" alt="" />
              </div>
              <div>
                <img src="/assets/images/partners/3-legrand.png" alt="" />
              </div>
              <div>
                <img src="/assets/images/partners/4-lg.png" alt="" />
              </div>
              <div>
                <img src="/assets/images/partners/5-rapidrop.png" alt="" />
              </div>
              <div>
                <img src="/assets/images/partners/6-schn.png" alt="" />
              </div>
              <div>
                <img src="/assets/images/partners/7-siemens.png" alt="" />
              </div>
              <div>
                <img src="/assets/images/partners/8-toa.png" alt="" />
              </div>
              <div>
                <img src="/assets/images/partners/9-vand.png" alt="" />
              </div>
              <div>
                <img src="/assets/images/partners/10-db.fw_.png" alt="" />
              </div>
              <div>
                <img src="/assets/images/partners/11-diakin.png" alt="" />
              </div>
              <div>
                <img src="/assets/images/partners/12-franke.png" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners