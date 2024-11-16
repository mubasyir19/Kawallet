import React from 'react';

export default function Header() {
  return (
    <section className='flex justify-between items-center'>
      <div className=''>
        <h2 className='text-black font-semibold text-3xl'>Welcome to Kawallet.</h2>
        <p className='mt-2.5 text-sm text-[#9EA3AF]'>Time to explore your investment & journey this landing page.</p>
      </div>
      <div className='flex items-center gap-x-6'>
        <div className=''>
          <input
            type='text'
            name='search'
            placeholder='Search Anything...'
            className='border border-[#E2E3EA] rounded-full py-3 px-5 placeholder:text-sm placeholder:text-[#6B738E] focus:outline-none'
          />
        </div>
        <div className='relative'>
          <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <ellipse
              cx='12.4076'
              cy='19.2196'
              rx='10.8053'
              ry='4.78043'
              stroke='#27343B'
              strokeWidth='1.3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <ellipse
              cx='12.4079'
              cy='17.1422'
              rx='2.38173'
              ry='2.31818'
              stroke='#27343B'
              strokeWidth='1.3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M21.7512 16.7093L20.2437 10.3319C19.3836 6.69312 16.1349 4.12283 12.3958 4.12283V4.12283C8.66742 4.12283 5.42511 6.67871 4.55453 10.304L3.02375 16.6786'
              stroke='#27343B'
              strokeWidth='1.3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14.0694 4.22165C14.2515 3.93315 14.3565 3.59361 14.3565 3.23021C14.3565 2.1826 13.4839 1.33334 12.4076 1.33334C11.3313 1.33334 10.4587 2.1826 10.4587 3.23021C10.4587 3.55819 10.5443 3.86673 10.6948 4.13585'
              stroke='#27343B'
              strokeWidth='1.3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <div className='absolute z-10 top-0 right-0 h-2 w-2 rounded-full bg-[#2979F2]'></div>
        </div>
      </div>
    </section>
  );
}
