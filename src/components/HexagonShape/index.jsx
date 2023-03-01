import React from 'react';
import HexagonBg from '@/assets/icons/hexagon.svg';

const HexagonShape = (props) => {
  const { title, icon } = props;
  return (
    <div className='relative flex items-center justify-center cursor-pointer'>
      <div>
        <img src={HexagonBg} alt='bg' />
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center'>
        <img src={icon} alt='icon' />
        <span className='text-white'>{title}</span>
      </div>
    </div>
  );
};

export default HexagonShape;
