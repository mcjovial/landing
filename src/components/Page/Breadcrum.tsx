import Link from 'next/link'
import React, { FC } from 'react'

interface IBreadcrum {
  title: string;
  name: string;
}

const Breadcrum: FC<IBreadcrum> = ({title, name}) => {
  return (
    <>
      <div className='container m-auto'>
        <div className='flex justify-between py-20 px-10 text-white capitalize'>
          <p className='text-3xl hover:underline'>{title}</p>
          <div className='flex space-x-1.5 items-center'>
            <Link className='hover:text-[#f3b004]' href='/'>Home</Link>
            <p> / {name}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Breadcrum