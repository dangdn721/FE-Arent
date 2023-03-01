import React, { useState } from 'react';
import { ColumnPostCard } from '@/components/Cards';
import { ColumnData } from './dumpData';
import Button from '@/components/Button';

const ColumnPost = () => {
  const [data, setData] = useState(ColumnData);
  const [loading, setLoading] = useState(false);
  console.log({ data });
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData([...data, ...ColumnData]);
      window.scrollTo(0, document.body.scrollHeight);
    }, 1000);
  };
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20'>
        {data.map((item, index) => (
          <ColumnPostCard
            key={item.index}
            id={item.id}
            image={item.image}
            content={item.content}
            date={item.date}
            hashtag={item.hashtag}
          />
        ))}
      </div>
      <div className='flex justify-center items-center w-full'>
        <Button loading={loading} onClick={handleLoadMore}>
          {' '}
          コラムをもっと見る
        </Button>
      </div>
    </>
  );
};

export default ColumnPost;
