import React from 'react';

const Reviews = () => {
  return (
    <>
      <div>
        <div className='flex md:flex-row flex-col md:justify-between gap-8'>
          <div className='md:w-1/3 text-[#807e7e] space-y-4'>
            <div>
              <p className='font-bold text-[50px] text-green-600'>4.00</p>
              <div className=''>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
              <p>1 Review</p>
            </div>
            <div>
              <div className='flex items-center gap-4 text-xs'>
                <span className='inline'>5 Star</span>{' '}
                <div className='bg-gray-200 h-1.5 w-[140px] '></div>{' '}
                <span>100%</span>
              </div>
              <div className='flex items-center gap-4 text-xs'>
                <span className='inline'>4 Star</span>{' '}
                <div className='bg-gray-200 h-1.5 w-[140px] '></div>{' '}
                <span>0</span>
              </div>
              <div className='flex items-center gap-4 text-xs'>
                <span className='inline'>3 Star</span>{' '}
                <div className='bg-gray-200 h-1.5 w-[140px] '></div>{' '}
                <span>0</span>
              </div>
              <div className='flex items-center gap-4 text-xs'>
                <span className='inline'>2 Star</span>{' '}
                <div className='bg-gray-200 h-1.5 w-[140px] '></div>{' '}
                <span>0</span>
              </div>
              <div className='flex items-center gap-4 text-xs'>
                <span className='inline'>1 Star</span>{' '}
                <div className='bg-gray-200 h-1.5 w-[140px] '></div>{' '}
                <span>0</span>
              </div>
            </div>
          </div>
          <div className='md:w-2/3 text-[#807e7e] space-y-4'>
            <p className='uppercase text-sm font-bold text-[#494848]'>
              Submit your review
            </p>
            <p>
              Your email address will not be published. Required fields are
              marked*
            </p>
            <form action='' className='w-full space-y-5'>
              <div>
                <textarea
                  className='w-full border px-4 py-4 focus:outline focus:outline-[#a19f9f] focus:border-none'
                  name='message'
                  id=''
                  rows={6}
                  placeholder='Message*'
                ></textarea>
              </div>
              <div className='flex justify-between gap-5'>
                <input
                  className='w-full border px-4 py-4 focus:outline focus:outline-[#a19f9f] focus:border-none'
                  type='text'
                  placeholder='Name*'
                />
                <input
                  className='w-full border px-4 py-4 focus:outline focus:outline-[#a19f9f] focus:border-none'
                  type='email'
                  placeholder='Email*'
                />
              </div>
              <div className='text-left'>
                <button className='bg-[#0497f3] hover:bg-[#272626] py-4 px-10 uppercase text-black hover:text-white'>
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
