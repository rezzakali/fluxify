import Link from 'next/link';

const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blogs',
    path: '/blogs',
  },
];

const navList = (
  <ul className="mt-2 mb-4 flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    {links.map((link, index) => (
      <Link key={index} href={link.path} className="flex items-center">
        {link.title}
      </Link>
    ))}
  </ul>
);

export default navList;
