import React, { useState } from 'react';
import { GatheringItemCard } from '@/components/Cards';
import { GatheringData } from './dumpData';
import Button from '@/components/Button';

const GatheringSection = () => {
  const [data, setData] = useState(GatheringData);
  const [loading, setLoading] = useState(false);
  console.log({ data })
  const handleLoadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setData([...data, ...GatheringData]);
      window.scrollTo(0, document.body.scrollHeight);
    }, 1000);
  }
  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
        {data.map((item, index) => (
          <GatheringItemCard
            key={index}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
      <div className='flex justify-center items-center w-full'>
        <Button loading={loading} onClick={handleLoadMore}>記録をもっと見る</Button>
      </div>
    </>
  )
}

export default GatheringSection