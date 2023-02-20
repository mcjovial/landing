import React, { FC, useEffect, useState } from 'react'
import Slider from 'react-slick'
import Card from './Card'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

interface IHSlider {
  data: any;
  title: string;
  bar?: boolean;
}

const HSlider: FC<IHSlider> = ({data, title, bar}) => {
  const [progress, setProgress] = useState(0)
  const [slideToShow, setSlideToShow] = useState(3)

  const setSlides = () => {
    if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
      setSlideToShow(3)
    } else if(window.innerWidth <= 1000 && window.innerWidth > 650) {
      setSlideToShow(2)
    } else if (window.innerWidth <= 650) {
      setSlideToShow(1)
    }
  }

  useEffect(() => {
    setSlides()
    setProgress(100 / (data.length - slideToShow + 1))
    window.addEventListener("resize", ()=> setSlides())
  }, [])

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      // {
      //   breakpoint: 1280,
      //   settings: {
      //     slidesToShow: 3,
      //   }
      // },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
    afterChange: (current: number) => {
      setProgress(100 / (data.length - slideToShow + 1) * (current + 1))
      console.log(slideToShow);
      
    }
  }

  return (
    <div className=''>
      <div className='container m-auto'>
        <div className='py-16'>
          <div className='text-left m-auto mb-10'>
            <p className='text-2xl my-2 text-gray-600 uppercase'>{title}</p>
            <div className='bg-amber-400 p-0.5 max-w-[80px]'></div>
            <hr />
          </div>
          <div className='relative'>
            <Slider {...settings}>
              {
                data.map((card: { img: string }, i: React.Key | null | undefined) => (
                  <Card key={i} img={card.img} />
                ))
              }
            </Slider>
            {bar ? <div className='h-[2px] bg-gray-400 w-[250px] absolute -top-[15px] right-0'>
              <div className='bg-amber-400 absolute h-full transition-all' style={{ width: `${progress}%` }}></div>
            </div> : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HSlider