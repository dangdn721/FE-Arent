import React from 'react';
import IconScroll from '@/assets/icons/component_scroll.svg';

const ScrollToTop = () => {
  const handleFnc = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className='fixed top-3/4 right-[calc((100vw-1280px)/2-100px)] bg-white cursor-pointer focus:outline-none'
      onClick={handleFnc}
    >
      <img src={IconScroll} alt='Scroll To Top' />
    </button>
  );
};

export default ScrollToTop;
