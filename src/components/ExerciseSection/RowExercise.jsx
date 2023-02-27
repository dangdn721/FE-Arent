import React from 'react';

const RowExercise = ({ data }) => {
  const { title, minute, cal } = data;
  return (
    <div className='flex mr-10 pb-1 list-disc marker:text-white border-b border-[#777777]'>
      <li></li>
      <div className='w-full'>
        <div className='flex item-center justify-between list-disc w-full'>
          <span>{title}</span>
          <span className='text-[#FFCC21] text-xl'>{minute}</span>
        </div>
        <div className='text-[#FFCC21] text-xl'>{cal}</div>
      </div>
    </div>
  );
};

export default RowExercise;
