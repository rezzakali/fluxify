'use client';

import { ThemeProvider } from '@/components/MTComponents/MTComponents';
import Navbar from '../Nav/Nav';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="m-3">{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
