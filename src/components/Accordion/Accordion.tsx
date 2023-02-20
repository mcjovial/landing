import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  const accordionData = [
    {
      title: 'We have 30 plus years in the building industry',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet dolor vel nesciunt qui unde dolorum non minima a dicta? Assumenda commodi nostrum magni harum pariatur tempore itaque quaerat ab.',
    },
    {
      title: 'Quality construction continues after the project',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet dolor vel nesciunt qui unde dolorum non minima a dicta? Assumenda commodi nostrum magni harum pariatur tempore itaque quaerat ab.',
    },
    {
      title: 'We use technology to do the job more quickly',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet dolor vel nesciunt qui unde dolorum non minima a dicta? Assumenda commodi nostrum magni harum pariatur tempore itaque quaerat ab.',
    },
    {
      title: 'Employees are continually trained on safety issues',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet dolor vel nesciunt qui unde dolorum non minima a dicta? Assumenda commodi nostrum magni harum pariatur tempore itaque quaerat ab.',
    },
  ];

  const [open, setOpen] = useState(true);

  const toggle = (index: any) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const check = () => console.log('heyssss');

  return (
    <div className='bg-white'>
      <div className='flex justify-between'>
        <div>
          <div className='text-left m-auto mb-10'>
            <p className='text-2xl my-2 text-gray-600'>WHY CHOOSE US</p>
            <div className='bg-amber-400 p-0.5 max-w-[80px]'></div>
            <hr />
          </div>
          <div>
            {accordionData.map((data, index) => (
              <AccordionItem
                key={index}
                open={index === open}
                toggle={()=>toggle(index)}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
