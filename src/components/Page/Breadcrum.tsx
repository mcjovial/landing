import Link from 'next/link';
import React, { FC } from 'react';

interface IBreadcrum {
  title: string;
  name: string;
  sub?: string;
}

const Breadcrum: FC<IBreadcrum> = ({ title, name, sub }) => {
  return (
    <>
      <div className='container m-auto'>
        <div className='flex justify-between py-20 px-10 text-white capitalize'>
          <p className='text-3xl hover:underline'>{title}</p>
          <div className='flex space-x-1.5 items-center'>
            <Link className='hover:text-[#0497f3]' href='/'>
              Home
            </Link>
            <p> / {name}</p>
            <p> / {sub}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrum;
