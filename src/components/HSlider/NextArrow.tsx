import React, { FC } from 'react'
import { BsChevronRight } from 'react-icons/bs'

const NextArrow: FC<any> = ({onClick}) => {
  return (
    <div className='absolute right-0 -top-[80px]' onClick={onClick}>
      <div className='bg-[#f5f3f3] h-8 w-8 border-2 hover:text-amber-400 hover:border-amber-400 grid place-items-center cursor-pointer'>
        <BsChevronRight/>
      </div>
    </div>
  )
}

export default NextArrow