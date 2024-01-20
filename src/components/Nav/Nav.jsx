'use client';

import {
  Button,
  Collapse,
  IconButton,
  Navbar,
} from '@/components/MTComponents/MTComponents';
import { handleLogout } from '@/lib/actions';
import getSession from '@/utils/get-session';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import navList from './Navlist';

const Nav = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const sessionData = await getSession();
        setSession(sessionData);
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    fetchSession();
  }, []);

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto shadow-sm w-full sticky top-0 z-50">
      <div>
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link href="/" className="mr-4 cursor-pointer py-1.5 font-medium">
            Fluxify
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {!session?.user ? (
            <div className="flex items-center gap-x-1">
              <Link href="/login">
                <Button fullWidth variant="text" size="sm" className="">
                  Sign In
                </Button>
              </Link>
            </div>
          ) : (
            <Button size="sm" onClick={() => handleLogout()}>
              Sign Out
            </Button>
          )}
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Nav;
