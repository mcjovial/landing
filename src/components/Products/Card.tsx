import { IProduct } from '@/data/products';
import Link from 'next/link';
import React, { FC } from 'react';

// interface IProduct {
//   id: number;
//   img: string;
//   name: string;
// }

const ProductCard: FC<IProduct> = ({ id, img, name }) => {
  return (
    <>
      <div className='w-full shadow-md'>
        <Link href={`/products/${id}`}>
          <div className='hover:border hover:border-[#0497f3]'>
            <img className='w-full' src={img} alt='' />
          </div>
          <div className='text-center py-4'>
            <p className='text-xl text-gray-600'>{name}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
