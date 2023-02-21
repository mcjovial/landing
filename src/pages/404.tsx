import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen w-full'>
      <div className='grid place-items-center text-[#5f5e5e] m-auto h-full'>
        <div className='text-center'>
          <p className='text-[150px]'>404</p>
          <p className='text-3xl tracking-wider'>Page not found</p>
          <p className='tracking-wider py-8'>The page you were looking for could not be found.</p>
          <Link className='py-2 bg-[#f3b004] px-6 text-lg rounded text-white' href='/'>Go back home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound