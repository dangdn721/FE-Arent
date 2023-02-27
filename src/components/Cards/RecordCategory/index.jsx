import React from 'react';

const RecordCategoryCard = (props) => {
  const { title, description, bgImage } = props;
  return (
    <div className='flex flex-col text-center items-center justify-center bg-[#FFCC21] relative w-full h-full pt-[100%] cursor-pointer'>
      <div className='absolute top-0 left-0 bottom-0 right-0'>
        <div className=' absolute w-4/5 h-4/5 m-auto left-0 right-0 top-0 bottom-0'>
          <div className='w-full h-full bg-[#2E2E2E] opacity-80 absolute'></div>
          <img className='h-full w-full' src={bgImage} alt='background' />
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center '>
          <h3 className='text-[#FFCC21] uppercase text-2xl font-normal'>
            {title}
          </h3>
          <p className='text-white mt-4 bg-[#FF963C] px-2 py-1'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecordCategoryCard;
