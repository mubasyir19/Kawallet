import BarChart from '@/components/organism/BarChart';
import Header from '@/components/organism/Header';
import Image from 'next/image';
import React from 'react';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <section className='mt-10'>
        <section className='flex justify-between gap-x-7'>
          <div className='w-96'>
            <div id='cardBank' className='relative p-7 bg-[#056272] h-48 rounded-2xl items-stretch'>
              <div className='flex items-center justify-between'>
                <p className='text-white font-medium text-base'>Jajan Card</p>
                <Image src='/images/logo2.png' width={45} height={14} alt='logo2' className='w-12 h-4' />
              </div>
              <div className='mt-5 w-full flex justify-center gap-x-5'>
                <p className='text-white font-medium text-lg'>1234</p>
                <p className='text-white font-medium text-lg'>****</p>
                <p className='text-white font-medium text-lg'>****</p>
                <p className='text-white font-medium text-lg'>****</p>
              </div>
              <div className='absolute w-full h-14 py-3 px-7 bottom-0 inset-x-0 bg-white bg-opacity-40 backdrop-blur-sm flex justify-between items-center rounded-b-2xl'>
                <div className=''>
                  <p className='text-[#FEFEFE] text-[8px]'>CARD HOLDER</p>
                  <p className='text-xs font-medium text-[#F8F9F9]'>AZZAHRI ALPIANA</p>
                </div>
                <div className=''>
                  <p className='text-[#FEFEFE] text-[8px]'>EXPIRED</p>
                  <p className='text-xs font-medium text-[#F8F9F9]'>10/26</p>
                </div>
                <Image src='/images/chip.png' width={26} height={19} alt='chip' className='w-6 h-4' />
              </div>
            </div>
          </div>
          <div className='flex-grow grid grid-cols-3 gap-5'>
            <div className='card p-5 h-48 w-full bg-[#003872] rounded-2xl'>
              <Image src='/images/turbo.png' width={48} height={48} alt='turbo' className='h-12 w-12' />
              <p className='mt-2.5 text-white text-base font-semibold'>
                Holiday in Bali in 24 <br /> weeks
              </p>
              <div className='mt-4'>
                <div className='w-full bg-transparent border border-white rounded-full h-2'>
                  <div className='bg-white rounded-full h-full' style={{ width: `35%` }}></div>
                </div>
                <p className='mt-2.5 text-white text-xs'>
                  Completed <span className='font-semibold'>35%</span>
                </p>
              </div>
            </div>
            <div className='card p-5 h-48 w-full bg-[#00ACF1] rounded-2xl'>
              <Image src='/images/turbo.png' width={48} height={48} alt='turbo' className='h-12 w-12' />
              <p className='mt-2.5 text-white text-base font-semibold'>Investment in Crypto Etherium.</p>
              <div className='mt-4'>
                <div className='w-full bg-transparent border border-white rounded-full h-2'>
                  <div className='bg-white rounded-full h-full' style={{ width: `80%` }}></div>
                </div>
                <p className='mt-2.5 text-white text-xs'>
                  Completed <span className='font-semibold'>80%</span>
                </p>
              </div>
            </div>
            <div className='card p-5 h-48 w-full bg-[#2D2B2D] rounded-2xl'>
              <Image src='/images/turbo.png' width={48} height={48} alt='turbo' className='h-12 w-12' />
              <p className='mt-2.5 text-white text-base font-semibold'>Space to NASA (United States)</p>
              <div className='mt-4'>
                <div className='w-full bg-transparent border border-white rounded-full h-2'>
                  <div className='bg-white rounded-full h-full' style={{ width: `60%` }}></div>
                </div>
                <p className='mt-2.5 text-white text-xs'>
                  Completed <span className='font-semibold'>60%</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='mt-10 flex gap-x-7'>
          <div className='w-1/3 h-full py-8 px-6 border border-[#E2E3EA] rounded-2xl'>
            <h3 className='text-black font-medium text-xl'>History Transactions</h3>
            <div className='mt-5 bg-black w-full h-20 flex items-center rounded-lg'>
              <div className='w-full px-5 flex justify-between items-center'>
                <Image src='/images/logo3.png' width={66} height={14} alt='logo3' className='w-10 h-auto' />
                <p className='text-white font-semibold text-xl'>$ 10,200.00</p>
              </div>
            </div>
            <div className='mt-2'>
              <div className='account my-4 flex justify-between items-center'>
                <div className='flex gap-x-3 items-center'>
                  <div className='h-10 w-10 bg-[#D9EDFF] rounded-full'></div>
                  <p className='text-base font-semibold text-[#0F3F62]'>Fabio Vieria</p>
                </div>
                <div className=''>
                  <p className='text-base font-medium text-[#0F3F62]'>$ 1.140</p>
                </div>
              </div>
              <div className='account my-4 flex justify-between items-center'>
                <div className='flex gap-x-3 items-center'>
                  <div className='h-10 w-10 bg-[#FFDAD9] rounded-full'></div>
                  <p className='text-base font-semibold text-[#0F3F62]'>Dany Ward</p>
                </div>
                <div className=''>
                  <p className='text-base font-medium text-[#0F3F62]'>$ 114</p>
                </div>
              </div>
              <div className='account my-4 flex justify-between items-center'>
                <div className='flex gap-x-3 items-center'>
                  <div className='h-10 w-10 bg-[#FFC6B7] rounded-full'></div>
                  <p className='text-base font-semibold text-[#0F3F62]'>John Cena</p>
                </div>
                <div className=''>
                  <p className='text-base font-medium text-[#0F3F62]'>$ 114</p>
                </div>
              </div>
              <button className='border border-sky-500 py-2 w-full rounded-lg text-base font-semibold text-sky-400 transition-colors duration-150 hover:bg-sky-400 hover:text-white'>
                See All
              </button>
            </div>
          </div>
          <div className='flex-grow h-full p-7 border border-[#E2E3EA] rounded-2xl'>
            <div className='flex items-center justify-between'>
              <h3 className='text-xl font-medium text-black'>Sales Statistic</h3>
              <div className='flex gap-x-4 items-center'>
                <div className='flex gap-x-1 items-center'>
                  <div className='h-3 w-3 rounded-full bg-[#62D2FF]'></div>
                  <p className='text-black font-medium text-xs'>Income</p>
                </div>
                <div className='flex gap-x-1 items-center'>
                  <div className='h-3 w-3 rounded-full bg-[#559BED]'></div>
                  <p className='text-black font-medium text-xs'>Expense</p>
                </div>
              </div>
            </div>
            <BarChart />
          </div>
        </section>
      </section>
    </>
  );
}
