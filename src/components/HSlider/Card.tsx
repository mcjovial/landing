import Link from 'next/link';
import React, { FC } from 'react';

interface ICard {
  id?: number;
  img: string;
  title?: string;
  body?: string;
  post?: boolean;
}

const Card: FC<ICard> = ({ id, img, title, body, post }) => {
  return (
    <div className='w-100% bg-[#0497f3] shadow-xl'>
      <div>
        <img className='h-[250px] w-[100%] object-cover' src={img} alt='dp' />
        <div className='flex flex-col gap-4 p-[20px]'>
          {title ? (
            <div>
              <h2 className='text-2xl text-center text-[#363535]'>{title}</h2>
            </div>
          ) : (
            ''
          )}
          {body ? (
            <div>
              <p className='text-[#403f3f]'>{body}</p>
            </div>
          ) : (
            ''
          )}
          {post ? (
            <div>
              <Link
                className='font-semibold border-[1.5px] px-6 py-2 rounded hover:bg-white'
                href={`services/${id}`}
              >
                Read more...
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
