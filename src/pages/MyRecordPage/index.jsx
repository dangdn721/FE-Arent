import React from 'react';
import { RecordCategoryCard, MyDiaryCard } from '@/components/Cards';
import ExerciseSection from '@/components/ExerciseSection/index.jsx';
import BodyRecordChart from '@/components/BodyRecordChart/index.jsx';
import Button from '@/components/Button';

import { MyRecordCategoryData, MyDiaryData, myExerciseData } from './dumpData.js';


const ColumnPage = () => {
  return (
    <div className='py-10'>
      <section>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {MyRecordCategoryData.map((item) => (
            <RecordCategoryCard
              key={item.id}
              bgImage={item.bgImage}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section>
        <BodyRecordChart />
      </section>
      <section>
        <ExerciseSection data={new Array(20).fill(myExerciseData)} />
      </section>
      <section>
        <h3 className='text-[#414141] font-normal mb-2 mt-6 text-2xl'>
          MY DIARY
        </h3>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {MyDiaryData.map((item) => (
            <MyDiaryCard
              key={item.id}
              title={item.title}
              date={item.date}
              description={item.description}
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
