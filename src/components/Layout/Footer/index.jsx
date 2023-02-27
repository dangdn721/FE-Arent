import React from 'react';

const Footer = () => {
  return (
    <footer className='p-12 bg-[#414141] text-white'>
      <div className='flex flex-wrap justify-left items-center mx-auto max-w-screen-xl text-white'>
        <span className='text-base '>
          <a href='#' className='hover:underline mr-12'>
            会員登録
          </a>
        </span>
        <span className='text-base '>
          <a href='#' className='hover:underline mr-12'>
            運営会社
          </a>
        </span>
        <span className='text-base '>
          <a href='#' className='hover:underline mr-12'>
            利用規約
          </a>
        </span>
        <span className='text-base '>
          <a href='#' className='hover:underline mr-12'>
            個人情報の取扱について
          </a>
        </span>
        <span className='text-base '>
          <a href='#' className='hover:underline mr-12'>
            特定商取引法に基づく表記
          </a>
        </span>
        <span className='text-base '>
          <a href='#' className='hover:underline mr-12'>
            お問い合わせ
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
