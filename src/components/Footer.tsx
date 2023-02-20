import React from 'react'
import { BsTwitter, BsPinterest } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { ImGooglePlus } from 'react-icons/im'
import { GrInstagram } from 'react-icons/gr'
import { GiLoveMystery } from 'react-icons/gi'

const Footer = () => {
  return (
    <div>
      <div className='bg-[#1c1b1b]'>
        <div className='container m-auto  bg-[url("/assets/map-small.png")] bg-no-repeat bg-center'>
          <div className='py-16 flex justify-between text-[#aeadad]'>
            <div className='pr-6 w-1/4'>
              <div className='text-left m-auto mb-10'>
                <p className='text-2xl my-2 text-white uppercase'>About Us</p>
                <div className='bg-amber-400 p-0.5 max-w-[80px]'></div>
              </div>
              <div className='flex flex-col justify-between space-y-4'>
                <div>
                  <img
                    className='mb-2'
                    width={100}
                    src='/assets/images/sliders/3.jpg'
                    alt='alt'
                  />
                </div>
                <div>
                  <p>AMASPACE is a Building Technology Service Company consisting of professionals who are nationally renowned leaders in building technology service. With a strong backbone of highly competent and proficient work force.</p>
                </div>
                <div className='flex space-x-2'>
                  <div className='p-2 bg-[#1d1d1d] border border-slate-600'>
                    <BsTwitter/>
                  </div>
                  <div className='p-2 bg-[#1d1d1d] border border-slate-600'>
                    <FaFacebookF/>
                  </div>
                  <div className='p-2 bg-[#1d1d1d] border border-slate-600'>
                    <ImGooglePlus/>
                  </div>
                  <div className='p-2 bg-[#1d1d1d] border border-slate-600'>
                    <GrInstagram/>
                  </div>
                  <div className='p-2 bg-[#1d1d1d] border border-slate-600'>
                    <BsPinterest/>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-6 w-1/4'>
              <div className='text-left m-auto mb-10'>
                <p className='text-2xl my-2 text-white uppercase'>About Us</p>
                <div className='bg-amber-400 p-0.5 max-w-[80px]'></div>
              </div>
              <div className='flex justify-between'>
                <div className=' flex flex-col justify-between space-y-4'>
                  <div className='flex mr-6 items-center'>
                    <RxDoubleArrowRight className='mr-5'/>
                    <p>Home</p>
                  </div>
                  <div className='flex mr-6 items-center'>
                    <RxDoubleArrowRight className='mr-5'/>
                    <p>About Us</p>
                  </div>
                  <div className='flex mr-6 items-center'>
                    <RxDoubleArrowRight className='mr-5'/>
                    <p>Service</p>
                  </div>
                </div>
                <div className=' flex flex-col justify-between space-y-4'>
                  <div className='flex mr-6 items-center'>
                    <RxDoubleArrowRight className='mr-5'/>
                    <p>Our Products</p>
                  </div>
                  <div className='flex mr-6 items-center'>
                    <RxDoubleArrowRight className='mr-5'/>
                    <p>Contact Us</p>
                  </div>
                  <div className='flex mr-6 items-center'>
                    <RxDoubleArrowRight className='mr-5'/>
                    <p>History</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='pl-6 w-1/4'>
              <div className='text-left m-auto mb-10'>
                <p className='text-2xl my-2 text-white uppercase'>Abuja Office</p>
                <div className='bg-amber-400 p-0.5 max-w-[80px]'></div>
              </div>
              <div className='space-y-4 leading-7'>
                <div className='flex'>
                  <p className='mr-3 w-14 font-black'>Address:</p>
                  <p className=''>Plot 8A, Golden Spring Estate, Duboyi District, Abuja</p>
                </div>
                <div className='flex'>
                  <p className='mr-3 w-14 font-black'>Phone:</p>
                  <div>
                    <p>+2347069441021</p>
                    <p>+2348079813950</p>
                  </div>
                </div>
                <div className='flex'>
                  <p className='mr-3 w-14 font-black'>E-mail:</p>
                  <p>contact@amaspace.com</p>
                </div>
              </div>
            </div>
            <div className='pl-6 w-1/4'>
              <div className='text-left m-auto mb-10'>
                <p className='text-2xl my-2 text-white uppercase'>Lagos Office</p>
                <div className='bg-amber-400 p-0.5 max-w-[80px]'></div>
              </div>
              <div className='space-y-4 leading-7'>
                <div className='flex'>
                  <p className='mr-3 w-14 font-black'>Address:</p>
                  <p className=''>C4 U6, Horizon 2 Lekki Gardens, Ikate, Lekki-Epe Expressway, Lagos State</p>
                </div>
                <div className='flex'>
                  <p className='mr-3 w-14 font-black'>Phone:</p>
                  <div>
                    <p>+2347069441021</p>
                    <p>+2348079813950</p>
                  </div>
                </div>
                <div className='flex'>
                  <p className='mr-3 w-14 font-black'>E-mail:</p>
                  <p>contact@amaspace.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* <hr /> */}
        </div>
        <div className='bg-black'>
          <div className='container m-auto'>
            <div className='flex justify-between text-[#484646] items-center py-3'>
              <p>Copyright © 2023 AmaSpace Nigeria | All Right Reserved</p>
              <div className='flex items-center space-x-1'>
                <p>with </p>
                <GiLoveMystery className='text-red-400'/>
                <p>by <b>Integer</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer