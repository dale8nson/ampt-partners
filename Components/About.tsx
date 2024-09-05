import { motion } from 'framer-motion'
import { scrollProps } from '@/utils';
import Image from 'next/image'


export const About = () => {
  return (
    <div className="py-16 px-16 bg-gray-900 mx-0 w-full lg:py-20">
      <div className="flex flex-col m-auto sm:text-center lg:w-1/2">
        <div className="w-full mb-10 mx-auto sm:text-center md:mb-12">
          <div className="flex justify-center w-full mx-auto">
            <motion.h2 {...{ variants: scrollProps.variants, initial: scrollProps.initial, animate: "whileInView", transition: { duration: 0.5, delay: 1.3 } }} className="lg:-translate-y-32 mb-6  md:text-5xl font-bold leading-none tracking-tight text-neutral-100 font-[masthead] text-4xl">
              ABOUT
            </motion.h2>
          </div>
          <motion.p {...{ ...scrollProps }} className="text-base text-neutral-100 w-full md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </motion.p>
        </div>
        <motion.div {...scrollProps} className="w-full relative z-[1] ">
          <Image
            width={200} height={200}
            className="object-cover object-top w-full rounded shadow-lg h-[40vw]"
            src="/S8_Louis_Litt.webp"
            alt=""
          />
        </motion.div>
        <motion.p {...scrollProps} className="relative z-[1] mb-4 text-base text-neutral-100 sm:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ullamco laboris aliquip ex ea.
        </motion.p>
        <motion.a {...{ ...scrollProps }}
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-neutral-100 hover:text-deep-purple-800"
        >
          Learn more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
};