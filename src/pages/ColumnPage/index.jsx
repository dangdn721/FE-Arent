import React from 'react';
import { RecommendedCard, ColumnPostCard } from '@/components/Cards';
import { RecommendedData, ColumnData } from './dumpData';
import Button from '@/components/Button';

console.log({ ColumnData });

const ColumnPage = () => {
  return (
    <div className='py-10'>
      <section className='pt-4'>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {RecommendedData.map((item) => (
            <RecommendedCard
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section className='pb-4'>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20'>
          {ColumnData.map((item) => (
            <ColumnPostCard
              key={item.id}
              id={item.id}
              image={item.image}
              content={item.content}
              date={item.date}
              hashtag={item.hashtag}
            />
          ))}
        </div>
        <div className='flex justify-center items-center w-full'>
          <Button>コラムをもっと見る</Button>
        </div>
      </section>
    </div>
  );
};

export default ColumnPage;
