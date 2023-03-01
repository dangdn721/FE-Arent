import React from 'react';
import { RecordCategoryCard } from '@/components/Cards';
import ExerciseSection from '@/components/ExerciseSection/index.jsx';
import BodyRecordChart from '@/components/BodyRecordChart/index.jsx';
import MyDiary from './MyDiary.jsx';

import {
  MyRecordCategoryData,
  myExerciseData,
} from './dumpData.js';

const ColumnPage = () => {
  return (
    <div className='py-10'>
      <section className='py-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
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
      <section className='py-4'>
        <BodyRecordChart />
      </section>
      <section className='py-4'>
        <ExerciseSection data={new Array(20).fill(myExerciseData)} />
      </section>
      <section className='py-4'>
        <MyDiary />
      </section>
    </div>
  );
};

export default ColumnPage;
