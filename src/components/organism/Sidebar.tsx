import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Sidebar() {
  return (
    <aside className='w-64 h-screen bg-black rounded-xl py-7'>
      <div id='logo' className='flex justify-center gap-x-3 items-center'>
        <Image src='/images/logo.png' width={86} height={48} alt='logo' className='w-1/4 h-auto' />
        <h1 className='text-4xl text-white font-semibold'>ZOSS.</h1>
      </div>
      <div id='profile' className='mt-10 flex justify-center items-center gap-x-4'>
        <div className='h-10 w-10 rounded-full border border-sky-500'></div>
        <p className='text-white'>Robertson Darmin</p>
      </div>
      <ul className='mt-8'>
        <li className='pl-7 py-4 flex items-center gap-x-3 text-sky-500 font-medium bg-white mr-7 rounded-r-xl'>
          <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.6841 13.5071C19.5716 17.8165 15.658 21 11.001 21C5.47813 21 1.00098 16.5229 1.00098 11C1.00098 6.35991 4.16129 2.45794 8.44689 1.32913'
              stroke='#1679F3'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M21.001 11H11.001L11.001 1C16.5238 1 21.001 5.47715 21.001 11Z'
              fill='#1679F3'
              fillOpacity='0.1'
              stroke='#1679F3'
              strokeWidth='1.5'
              strokeLinejoin='round'
            />
          </svg>
          <Link href='#'>Main Dashboard</Link>
        </li>
        <li className='pl-7 py-4 mr-7 flex items-center gap-x-3  text-white hover:bg-white hover:rounded-r-xl hover:text-sky-500 hover:font-semibold duration-100'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.9495 14.7426V18.1191C20.9495 18.8831 20.646 19.6159 20.1057 20.1562C19.5654 20.6965 18.8327 21 18.0686 21H4.71254C3.94847 21 3.21569 20.6965 2.67541 20.1562C2.13513 19.6159 1.8316 18.8831 1.8316 18.1191V5.88082C1.8316 5.11675 2.13513 4.38397 2.67541 3.84369C3.21569 3.3034 3.94847 2.99988 4.71254 2.99988H18.0686C18.8327 2.99988 19.5654 3.3034 20.1057 3.84369C20.646 4.38397 20.9495 5.11675 20.9495 5.88082V9.25728'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M15.3033 9.25735H21.0652C21.3709 9.25735 21.664 9.37876 21.8801 9.59487C22.0962 9.81098 22.2176 10.1041 22.2176 10.4097V13.5903C22.2176 13.8959 22.0962 14.189 21.8801 14.4051C21.664 14.6212 21.3709 14.7427 21.0652 14.7427H15.3033C14.6921 14.7427 14.1059 14.4998 13.6736 14.0676C13.2414 13.6354 12.9986 13.0492 12.9986 12.4379V11.5621C12.9986 11.2594 13.0582 10.9597 13.174 10.6801C13.2899 10.4005 13.4596 10.1464 13.6736 9.93239C13.8877 9.71838 14.1417 9.54861 14.4214 9.43279C14.701 9.31696 15.0007 9.25735 15.3033 9.25735V9.25735Z'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16.0979 12H16.9507'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <Link href='#'>Payment</Link>
        </li>
        <li className='pl-7 py-4 mr-7 flex items-center gap-x-3  text-white hover:bg-white hover:rounded-r-xl hover:text-sky-500 hover:font-semibold duration-100'>
          <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.5699 1H1.71259V21H20.2842V6.90498L14.5699 1Z'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M6.73212 11.5966H10.8577'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M6.73212 15.2322H11.6755'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14.4812 6.91447V1.06012L20.2883 6.91447H14.4812Z'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinejoin='round'
            />
          </svg>
          <Link href='#'>Manage Stars</Link>
        </li>
        <li className='pl-7 py-4 mr-7 flex items-center gap-x-3  text-white hover:bg-white hover:rounded-r-xl hover:text-sky-500 hover:font-semibold duration-100'>
          <svg width='23' height='18' viewBox='0 0 23 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M18.8253 0.999985H3.74548C2.22902 0.999985 0.999695 2.32165 0.999695 3.95201V14.048C0.999695 15.6783 2.22902 17 3.74548 17H18.8253C20.3418 17 21.5711 15.6783 21.5711 14.048V3.95201C21.5711 2.32165 20.3418 0.999985 18.8253 0.999985Z'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M21.5711 5.26144H0.999695'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M13.1247 13.4226H18.1989'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <Link href='#'>Invoice Information</Link>
        </li>
        <li className='pl-7 py-4 mr-7 flex items-center gap-x-3  text-white hover:bg-white hover:rounded-r-xl hover:text-sky-500 hover:font-semibold duration-100'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.9495 14.7426V18.1191C20.9495 18.8831 20.646 19.6159 20.1057 20.1562C19.5654 20.6965 18.8327 21 18.0686 21H4.71254C3.94847 21 3.21569 20.6965 2.67541 20.1562C2.13513 19.6159 1.8316 18.8831 1.8316 18.1191V5.88082C1.8316 5.11675 2.13513 4.38397 2.67541 3.84369C3.21569 3.3034 3.94847 2.99988 4.71254 2.99988H18.0686C18.8327 2.99988 19.5654 3.3034 20.1057 3.84369C20.646 4.38397 20.9495 5.11675 20.9495 5.88082V9.25728'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M15.3033 9.25735H21.0652C21.3709 9.25735 21.664 9.37876 21.8801 9.59487C22.0962 9.81098 22.2176 10.1041 22.2176 10.4097V13.5903C22.2176 13.8959 22.0962 14.189 21.8801 14.4051C21.664 14.6212 21.3709 14.7427 21.0652 14.7427H15.3033C14.6921 14.7427 14.1059 14.4998 13.6736 14.0676C13.2414 13.6354 12.9986 13.0492 12.9986 12.4379V11.5621C12.9986 11.2594 13.0582 10.9597 13.174 10.6801C13.2899 10.4005 13.4596 10.1464 13.6736 9.93239C13.8877 9.71838 14.1417 9.54861 14.4214 9.43279C14.701 9.31696 15.0007 9.25735 15.3033 9.25735V9.25735Z'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16.0979 12H16.9507'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <Link href='#'>Support</Link>
        </li>
        <li className='pl-7 py-4 mr-7 flex items-center gap-x-3  text-white hover:bg-white hover:rounded-r-xl hover:text-sky-500 hover:font-semibold duration-100'>
          <svg width='22' height='24' viewBox='0 0 22 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M8.52612 2.3722C9.6687 0.5426 12.333 0.542599 13.4756 2.3722L14.2558 3.62145C14.7698 4.44461 15.6595 4.95829 16.6294 4.9919L18.1014 5.04291C20.2572 5.11762 21.5893 7.42498 20.5761 9.32929L19.8843 10.6295C19.4285 11.4863 19.4285 12.5137 19.8843 13.3705L20.5761 14.6707C21.5893 16.575 20.2572 18.8824 18.1014 18.9571L16.6294 19.0081C15.6595 19.0417 14.7698 19.5554 14.2558 20.3785L13.4756 21.6278C12.333 23.4574 9.6687 23.4574 8.52612 21.6278L7.74596 20.3785C7.2319 19.5554 6.34218 19.0417 5.37227 19.0081L3.90031 18.9571C1.74454 18.8824 0.412381 16.575 1.42557 14.6707L2.11737 13.3705C2.57322 12.5137 2.57322 11.4863 2.11737 10.6295L1.42557 9.32929C0.412382 7.42498 1.74454 5.11762 3.90031 5.04291L5.37227 4.9919C6.34218 4.95829 7.2319 4.44461 7.74596 3.62145L8.52612 2.3722Z'
              stroke='#9EA2BE'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <circle
              cx='11.001'
              cy='12'
              r='3.5'
              stroke='#D6D8DF'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <Link href='#'>Setting</Link>
        </li>
        <li className='pl-7 py-4 mr-7 flex justify-between items-center text-white'>
          <div className='flex items-center gap-x-3'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z'
                fill='#2979F2'
              />
              <path
                d='M10.0001 17.9224C10.0001 18.1295 10.1681 18.2983 10.375 18.2889C12.4392 18.1956 14.3997 17.3346 15.8672 15.8672C17.4232 14.3111 18.2974 12.2007 18.2974 10.0001C18.2974 7.79948 17.4232 5.68902 15.8672 4.13297C14.3997 2.66551 12.4392 1.80449 10.375 1.7112C10.1681 1.70185 10.0001 1.87063 10.0001 2.07774L10.0001 10.0001L10.0001 17.9224Z'
                fill='white'
              />
            </svg>
            <p>Light Mode</p>
          </div>
          <button
            className={`w-10 h-6 flex items-center rounded-full px-1 bg-[#9EA2BE] transition-colors duration-300`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300`}
            ></div>
          </button>
        </li>
      </ul>
      <div className='w-full mt-16 px-7 flex justify-center'>
        <button className='w-full bg-[#2979F2] text-white py-4 px-7 flex items-center gap-x-5 rounded-full hover:text-[#2979F2] hover:bg-white'>
          <svg width='16' height='18' viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M6.75 1H2.75C1.64543 1 0.75 1.89543 0.75 3V15C0.75 16.1046 1.64543 17 2.75 17H6.75'
              stroke='white'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <circle opacity='0.2' cx='5.63885' cy='9.44446' r='4' fill='#C2C7D5' />
            <path
              d='M3.74994 9H14.7499'
              stroke='white'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M10.7499 5L14.7499 9L10.7499 13'
              stroke='white'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='text-base font-medium'>Logout</span>
        </button>
      </div>
    </aside>
  );
}
