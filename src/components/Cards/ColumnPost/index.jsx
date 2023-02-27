import React from 'react';


const ColumnPostCard = (props) => {
  const { id, image = '', content = '', hashtag = [], date = '' } = props;
  if (!id) return null;

  return (
    <div className='max-w-sm overflow-hidden m-auto'>
      <div className='relative'>
        <img
          className='w-full max-h-[150px] object-cover'
          src={image}
          alt='post item'
        />
        <span className='absolute bottom-0 left-0 bg-[#FFCC21] text-white px-2 py-1'>{date}</span>
      </div>

      <div className='pt-4 pb-1 cursor-pointer'>
        <p className='text-gray-700 text-base line-clamp-2'>
          {content}
        </p>
      </div>
      <div className='pb-2'>
        {hashtag.map((item, index) => (
          <span key={index} className='inline-block rounded-full py-1 text-sm font-normal text-[#FF963C] mr-2 cursor-pointer'>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ColumnPostCard;
