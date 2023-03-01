import React from 'react';
import CircleIcon from '@/assets/icons/circle.svg';

const Circle = ({ children }) => {
  return (
    <div className='py-24 flex items-center justify-center bg-transparent space-x-8'>
      <img className='w-48 h-48  rounded-full z-1' src={CircleIcon} />
      <div className='rounded-full absolute  z-10 flex items-center justify-center'>
        {children}
      </div>
    </div>
  );
};

export default Circle;
