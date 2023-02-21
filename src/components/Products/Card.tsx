import React, { FC } from 'react'

interface IProduct {
  id: number;
  img: string;
  name: string;
}

const ProductCard: FC<IProduct> = ({id, img, name}) => {
  return (
    <>
      <div className='w-full shadow-md'>
        <div className='hover:border hover:border-[#f3b004]'>
          <img className='w-full' src="/assets/shop-item.png" alt="" />
        </div>
        <div className='text-center py-4'>
          <p className='text-xl text-gray-600'>Product Name</p>
        </div>
      </div>
    </>
  )
}

export default ProductCard