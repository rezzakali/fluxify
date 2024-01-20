import getSession from '@/utils/get-session';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaBlog } from 'react-icons/fa';
import {
  MdOutlineDashboardCustomize,
  MdOutlineHealthAndSafety,
  MdOutlineStyle,
} from 'react-icons/md';
import { PiBowlFood } from 'react-icons/pi';
import { RiHotelLine } from 'react-icons/ri';
import { SiYourtraveldottv } from 'react-icons/si';
import { TbArrowGuide } from 'react-icons/tb';

const navItems = [
  {
    title: 'Home',
    icon: <AiOutlineHome />,
    link: '/',
  },
  {
    title: 'Travel',
    icon: <SiYourtraveldottv />,
    link: '/travel',
  },
  {
    title: 'Guides',
    icon: <TbArrowGuide />,
    link: '/guides',
  },
  {
    title: 'Food',
    icon: <PiBowlFood />,
    link: '/food',
  },
  {
    title: 'Hotels',
    icon: <RiHotelLine />,
    link: '/hotels',
  },
  {
    title: 'Healthy',
    icon: <MdOutlineHealthAndSafety />,
    link: '/healthy',
  },
  {
    title: 'Lifestyle',
    icon: <MdOutlineStyle />,
    link: '/lifestyle',
  },
  {
    title: 'Blogs',
    icon: <FaBlog />,
    link: '/blogs',
  },
];

const Navlist = () => {
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

  return (
    <div className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-5 text-textcolor sm:gap-y-5 sm:p-3 lg:p-0">
      {navItems.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}
            className="flex items-center sm:p-1 lg:p-0"
          >
            {item.icon}
            {item.title}
          </Link>
        );
      })}
      {session?.user?.isAdmin && (
        <Link href="/admin" className="flex items-center sm:p-1 lg:p-0">
          <MdOutlineDashboardCustomize />
          Admin
        </Link>
      )}
    </div>
  );
};

export default Navlist;
