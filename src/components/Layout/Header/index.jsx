import React, { useRef } from 'react';
import useToggle from '@/hooks/useToggle';
import useClickOutside from '@/hooks/useClickOutside';
import Logo from '@/assets/icons/logo.svg';
import IconMemo from '@/assets/icons/icon_memo.svg';
import IconChallenge from '@/assets/icons/icon_challenge.svg';
import IconInfo from '@/assets/icons/icon_info.svg';
import HamburgersMenu from '@/assets/icons/icon_menu.svg';
import CloseIcon from '@/assets/icons/icon_close.svg';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useToggle();

  const menuRef = useRef();
  useClickOutside(menuRef, () => isOpenMenu && setIsOpenMenu(false));

  return (
    <header>
      <nav className='bg-[#414141] shadow-[0px 3px 6px rgba(0, 0, 0, 0.160784)] border-gray-200 px-4 lg:px-6 dark:bg-gray-800'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <a href='#' className='flex items-center'>
            <img src={Logo} className='h-16' alt='Health App Logo' />
          </a>
          <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0 mr-10'>
              <li className='flex items-center'>
                <img src={IconMemo} className='mr-2' alt='Menu Item' />
                <a
                  href='#'
                  className='block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white hover:font-bold'
                  aria-current='page'
                >
                  自分の記録
                </a>
              </li>
              <li className='flex items-center'>
                <img src={IconChallenge} className='mr-2' alt='Menu Item' />
                <a
                  href='#'
                  className='block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white hover:font-bold'
                  aria-current='page'
                >
                  チャレンジ
                </a>
              </li>
              <li className='flex items-center relative'>
                <img src={IconInfo} className='mr-2' alt='Menu Item' />
                <span className='absolute top-[-6px] left-5 rounded-full w-5 h-5 bg-[#EA6C00] text-white flex items-center justify-center text-xs'>
                  1
                </span>
                <a
                  href='#'
                  className='block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white  hover:font-bold'
                  aria-current='page'
                >
                  お知らせ
                </a>
              </li>
            </ul>
            <div className='ml-10 cursor-pointer'></div>
            <div class='relative inline-block ml-10'>
              <div className='flex items-center justify-items-end'>
                <button
                  type='button'
                  id='menu-button'
                  className='focus:outline-none'
                  aria-expanded='true'
                  aria-haspopup='true'
                  onClick={setIsOpenMenu}
                >
                  <img src={HamburgersMenu} alt='Menu' />
                </button>
              </div>

              <div
                class={`right-0 z-10 mt-4 w-56 origin-top-right bg-transparent rounded-none border-none focus:outline-none ${isOpenMenu ? 'absolute' : 'hidden'
                  }`}
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='menu-button'
                tabindex='-1'
              >
                <div className='w-full flex justify-end'>
                  <button
                    type='button'
                    className='focus:outline-none bg-[#414141] hover:bg-[#c6bfb3]'
                    onClick={setIsOpenMenu}
                  >
                    <img src={CloseIcon} alt='Close Icon' />
                  </button>
                </div>

                <div
                  class='bg-[#777777] text-white text-base shadow-lg ring-black ring-opacity-5 '
                  role='none'
                  ref={menuRef}
                >
                  <a
                    href='#'
                    className=' block px-4 py-2 border-b border-[rgb(46,46,46,0.2)] hover:bg-[#c6bfb3]'
                    role='menuitem'
                    tabindex='-1'
                  >
                    自分の記録
                  </a>
                  <a
                    href='#'
                    className=' block px-4 py-2 border-b border-[rgb(46,46,46,0.2)] hover:bg-[#c6bfb3]'
                    role='menuitem'
                    tabindex='-1'
                  >
                    体重グラフ
                  </a>
                  <a
                    href='#'
                    className=' block px-4 py-2 border-b border-[rgb(46,46,46,0.2)] hover:bg-[#c6bfb3]'
                    role='menuitem'
                    tabindex='-1'
                  >
                    目標
                  </a>
                  <a
                    href='#'
                    className=' block px-4 py-2 border-b border-[rgb(46,46,46,0.2)] hover:bg-[#c6bfb3]'
                    role='menuitem'
                    tabindex='-1'
                  >
                    選択中のコース
                  </a>
                  <a
                    href='#'
                    className=' block px-4 py-2 border-b border-[rgb(46,46,46,0.2)] hover:bg-[#c6bfb3]'
                    role='menuitem'
                    tabindex='-1'
                  >
                    コラム一覧
                  </a>
                  <a
                    href='#'
                    className=' block px-4 py-2 border-b border-[rgb(46,46,46,0.2)] hover:bg-[#c6bfb3]'
                    role='menuitem'
                    tabindex='-1'
                  >
                    設定
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
