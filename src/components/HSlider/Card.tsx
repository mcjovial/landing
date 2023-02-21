import React, { FC } from 'react'

interface ICard {
  img: string;
  name?: string;
  details?: string;
  post?: boolean
}
  
const Card: FC<ICard> = ({img, name, details, post}) => {
  return (
    <div className='w-100% bg-[#f3b004] shadow-xl'>
      <div>
        <img className='h-[250px] w-[100%] object-cover' src={img} alt="dp" />
        <div className='flex flex-col gap-4 p-[20px]'>
          {name ? <div>
            <h2>{name}</h2>
          </div> : ''}
          {details ? <div>
            <p>{details}</p>
          </div> : ''}
          {post ? <div><a className='text-purple-500' href="">Read more...</a></div> : ''}
        </div>
      </div>
    </div>
  )
}

export default Card