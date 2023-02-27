import React from 'react';
import RowExercise from './RowExercise';

const ExerciseSection = ({ data }) => {
  return (
    <div className='bg-[#414141] text-white p-6'>
      <div className='flex mb-2'>
        <p className='w-4'>MY EXERCISE</p>
        <p className='text-2xl text-light ml-24'>2021.05.21</p>
      </div>
      <div class='grid grid-cols-2 gap-4 gap-x-10  overflow-auto max-h-60 custom-scroll-1'>
        {data.map((item, index) => <RowExercise key={index} data={item} />)}
      </div>
    </div>
  );
};

export default ExerciseSection;
