import React from 'react';

const RecommendedCard = (props) => {
  const { title, description } = props;
  return (
    <div className='flex flex-col text-center items-center justify-center px-6 py-10 bg-[#2E2E2E] '>
      <h3 className='text-[#FFCC21] uppercase font-light text-2xl'>{title}</h3>
      <div className='border-t w-16 border-white my-4'></div>
      <p className='text-white'>{description}</p>
    </div>
  );
};

export default RecommendedCard;
