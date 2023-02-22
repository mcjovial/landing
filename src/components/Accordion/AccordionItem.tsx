import React, { FC } from 'react'
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { Collapse } from 'react-collapse'

interface IAccordion {
  open: any;
  toggle: (arg0: any) => void;
  title: string;
  description: string;
}

const AccordionItem: FC<IAccordion> = ({ open, toggle, title, description }) => {
  // console.log(open);
  
  return (
    <div className='pb-2'>
      <div
        className={`p-4 flex justify-between items-center cursor-pointer ${open ? 'bg-amber-400 text-white': 'bg-gray-100 text-[#5d5a5a]'}`}
        onClick={toggle}
      >
        <div className='flex items-center'>
          <div className='text-lg mr-4'>
            {open ? <FaMinusSquare/> : <FaPlusSquare/>}
          </div>
          <p className='text-xl'>{title}</p>
        </div>
        <div className='text-lg'>
          <IoIosArrowDown/>
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className='bg-white px-4 p-[20px] text-[#5d5a5a]'>{description}</div>
      </Collapse>
    </div>
  )
}
// 3337260010
export default AccordionItem