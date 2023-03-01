import React, { useState } from 'react';
import { MyDiaryCard } from '@/components/Cards';
import Button from '@/components/Button';
import {
  MyDiaryData,
} from './dumpData.js';


const MyDiary = () => {
  const [data, setData] = useState(MyDiaryData);
  const [loading, setLoading] = useState(false);
  console.log({ data });
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData([...data, ...MyDiaryData]);
      window.scrollTo(0, document.body.scrollHeight);
    }, 1000);
  };
  return (
    <>
      <h3 className='text-[#414141] font-normal my-2 text-2xl'>MY DIARY</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {data.map((item, index) => (
          <MyDiaryCard
            key={item.index}
            title={item.title}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
      <div className='flex justify-center items-center w-full'>
        <Button loading={loading} onClick={handleLoadMore}>
          コラムをもっと見る
        </Button>
      </div>
    </>
  );
};

export default MyDiary;
