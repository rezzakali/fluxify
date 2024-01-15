import Layout from '@/components/Layout/Layout';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Fluxify | Home',
    template: '%s | Fluxify',
  },
  description: `Fluxify: Your all-in-one blog app, seamlessly combining intuitive content creation with dynamic features, making blogging a breeze for both writers and readers. Elevate your blogging experience with Fluxify's user-friendly interface and powerful tools for effortless expression and engagement.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
