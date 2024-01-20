import ThemeChanger from '@/components/Header/ThemeChanger';
import Link from 'next/link';

const Header = () => {
  return (
    <div
      className={`flex item-center justify-between border-b   border-gray-100 dark:border-gray-700 bg-[#fdfeff] dark:bg-[#1b1f22] py-3 px-8`}
    >
      <Link href="/">Fluxify</Link>
      <ThemeChanger />
    </div>
  );
};

export default Header;
