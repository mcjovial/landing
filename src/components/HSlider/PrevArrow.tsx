import React, { FC } from 'react';
import { BsChevronLeft } from 'react-icons/bs';

const PrevArrow: FC<any> = ({ onClick }) => {
  return (
    <div className='absolute right-[40px] -top-[80px]' onClick={onClick}>
      <div className='bg-[#f5f3f3] h-8 w-8 border-2 hover:text-[#0497f3] hover:border-[#0497f3] grid place-items-center cursor-pointer'>
        <BsChevronLeft />
      </div>
    </div>
  );
};

export default PrevArrow;
