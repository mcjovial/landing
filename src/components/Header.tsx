import React from 'react'
import NavBar from '@/components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons'
import { BsTwitter, BsPinterest } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { TbClock } from 'react-icons/tb';
import { FaFacebookF, FaInstagram, FaPhoneSquareAlt, FaPinterestP } from 'react-icons/fa';


const Header = () => {
  return (
    <>
      <div className='sticky top-0 z-10 '>
        <div className='absolute w-full bg-slate-900'>
          <div className='border-b-[1px] border-gray-200 border-opacity-20 text-white'>
            <div className='hidden justify-between px-4 py-3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
              <div className='flex'>
                <BsTwitter className='mr-4'/>
                <FaFacebookF className='mr-4'/>
                <FaInstagram className='mr-4'/>
                <BsPinterest className='mr-4'/>
              </div>
              <div className='flex text-sm'>
                <div className='flex items-center mx-4'>
                  <FaPhoneSquareAlt className='mr-3'/>
                  <p>+234-706-9441-021</p>
                </div>
                <div className='flex items-center mx-4'>
                  <MdEmail className='mr-3'/>
                  <p>contact@amaspace.com</p>
                </div>
                <div className='flex items-center mx-4'>
                  <TbClock className='mr-3'/>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <NavBar />
        </div>
      </div>
    </>
  )
}

export default Header