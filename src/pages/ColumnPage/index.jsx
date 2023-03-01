import React from 'react';
import { RecommendedCard } from '@/components/Cards';
import { RecommendedData } from './dumpData';
import ColumnPost from './ColumnPost';


const ColumnPage = () => {
  return (
    <div className='py-10'>
      <section className='pt-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
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
        <ColumnPost />
      </section>
    </div>
  );
};

export default ColumnPage;
