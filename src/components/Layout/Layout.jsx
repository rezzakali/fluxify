'use client';

import { ThemeProvider } from '@/components/MTComponents/MTComponents';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import Header from '../Header/Header';
import Navbar from '../Nav/Nav';

const Layout = ({ children }) => {
  return (
    <NextThemeProvider attribute="classs">
      <ThemeProvider>
        <Header />
        <Navbar />
        <main className="my-2 mx-8">{children}</main>
      </ThemeProvider>
    </NextThemeProvider>
  );
};

export default Layout;
