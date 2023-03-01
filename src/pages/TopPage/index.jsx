import React from 'react';
import GatheringSection from './GatheringSection';
import { MealCategory } from './dumpData';
import HexagonShape from '@/components/HexagonShape';
import BodyRecordChard from '@/components/BodyRecordChart';
import DinnerImage from '@/assets/images/d01.jpg';
import Circle from '@/components/Circle';

const TopPage = () => {


  return (
    <div>
      <section className='mb-4 bg-black overflow-hidden relative  w-screen flex left-[calc(-50vw+629px)] h-[312px]'>
        <div className='w-1/3 relative'>
          <img
            className='mt-[-12px] w-full'
            src={DinnerImage}
            alt='Dinner Image'
          />
          <div className='absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center'>
            <Circle>
              <div className='flex items-center text-white text-xl'>
                <span className='text-white text-xl'>05/21</span>
                <span className="text-2xl ml-2">75%</span>
              </div>
            </Circle>
          </div>
        </div>
        <div className='inline w-2/3'>
          <BodyRecordChard
            containerClassName='bg-[#2E2E2E]'
            showTitle={false}
            showFilter={false}
          />
        </div>
      </section>
      <section className='my-8'>
        <div className='flex items-center justify-center'>
          {MealCategory.map((item, index) => (
            <div key={index} className='mx-20'>
              <HexagonShape icon={item.icon} title={item.title} />
            </div>
          ))}
        </div>
      </section>
      <section className='my-8'>
        <GatheringSection />
      </section>
    </div>
  );
};

export default TopPage;
