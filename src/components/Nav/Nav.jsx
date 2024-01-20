'use client';

import { Collapse, IconButton } from '@/components/MTComponents/MTComponents';
import SocialMedia from '@/ui/SocialMedia';
import { useEffect, useState } from 'react';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
import Navlist from './Navlist';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav className="sticky top-0 z-50 rounded-none shadow-none border-none dark:bg-[#1b1f22] text-xs bg-white py-3 px-8">
      <div className="flex items-center justify-between">
        <div className="hidden lg:flex h-8 items-center mt-3">
          <Navlist />
        </div>
        <div className="hidden lg:block">
          <SocialMedia />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-[#626c7d] dark:text-[#687385]"
          ripple={false}
        >
          {!openNav && (
            <HiMiniBars3BottomRight
              className="w-5 h-5"
              onClick={() => setOpenNav(true)}
            />
          )}
        </IconButton>
      </div>
      <div className="ml-auto">
        <Collapse
          open={openNav}
          className="fixed right-0 top-[40px] overflow-y-auto bg-white dark:bg-darkbg w-52 z-50"
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          {openNav && (
            <div className="flex items-center justify-center m-2 w-6 h-6 bg-gray-200 rounded ">
              <IoMdClose
                className="w-5 h-5 cursor-pointer"
                onClick={() => setOpenNav(false)}
              />
            </div>
          )}
          <Navlist />
        </Collapse>
      </div>
    </nav>
  );
};

export default Nav;
