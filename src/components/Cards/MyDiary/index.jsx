import React from 'react'

const MyDiary = props => {
  const { title, description, date } = props
  return (
    <div className='bg-white p-4 border-[3px] border-[#D9D9D9] '>

      <p className='text-xl mb-4'>{date}</p>
      <p className=' mb-2'>{title}</p>
      <p className='line-clamp-5 mb-4'>{description}</p>
    </div>
  )
}

export default MyDiary