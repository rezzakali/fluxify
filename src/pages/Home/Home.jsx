import { Typography } from '@/components/MTComponents/MTComponents';
import Image from 'next/image';
import { Fragment } from 'react';
import SubscribeInput from './Elements/SubscribeInput';

const Home = () => {
  return (
    <Fragment>
      <div className="my-6 flex item-center justify-center sm:flex-col lg:flex-row w-full">
        <div className="lg:w-1/2 sm:w-full lg:space-y-3 sm:space-y-3">
          <Typography
            variant="h1"
            className="text-black dark:text-[#adb5bd] font-bold my-7"
          >
            Hello, I&apos;m
            <span className="text-[#5869da]"> Steven </span>
            <br />
            Welcome to my blog
          </Typography>
          <Typography variant="paragraph" className="text-2xl">
            Don&apos;t miss out on the latest news about Travel tips, Hotels
            review, Food guide...
          </Typography>
          <SubscribeInput />
        </div>
        <div className="lg:w-1/2 sm:w-full hidden lg:block">
          <Image
            src={`/hero_image.png`}
            width={500}
            height={500}
            alt="hero_image"
            priority
            objectFit="cover"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
