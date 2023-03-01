import React from 'react';

const GatheringItem = (props) => {
  const { image = '', title = '' } = props;

  return (
    <div className='flex flex-col text-center items-center justify-center bg-[#FFCC21] relative w-full h-full pt-[100%] cursor-pointer'>
      <div className='absolute top-0 left-0 bottom-0 right-0'>
        <img
          className='w-full h-full  object-cover'
          src={image}
          alt='post item'
        />
        <span className='absolute bottom-0 left-0 bg-[#FFCC21] text-white px-2 py-1'>
          {title}
        </span>
      </div>
    </div>
  );
};

export default GatheringItem;
