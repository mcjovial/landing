import Link from 'next/link'
import React from 'react'

const Breadcrum = () => {
  return (
    <>
      <div className='container m-auto'>
        <div className='flex justify-between py-20 px-10 text-white'>
          <p className='text-3xl hover:underline'>About Us</p>
          <div className='flex space-x-1.5'>
            <Link className='hover:text-[#f3b004]' href='/'>Home</Link>
            <p> /  About Us</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Breadcrum