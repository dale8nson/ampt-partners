import { motion } from 'framer-motion'
import { scrollProps } from '@/utils';
import Image from 'next/image'


export const About = () => {
  return (
    <div className="py-16 px-16 bg-gray-900 mx-0 w-full lg:py-20">
      <div className="m-auto sm:text-center lg:w-1/2">
        <div className="w-full mb-10 mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <motion.h2 {...{variants:scrollProps.variants, initial: scrollProps.initial, animate:"whileInView", transition: {duration:0.5, delay:1.3}}} className="-translate-y-32 max-w-lg mb-6  md:text-5xl font-bold leading-none tracking-tight text-neutral-100 font-[masthead] sm:text-4xl md:mx-auto">
              ABOUT
          </motion.h2>
          <motion.p {...{...scrollProps}} className="text-base text-neutral-100 w-full md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </motion.p>
        </div>
        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
          <motion.div {...scrollProps} className="w-full h-56 sm:h-64 md:h-80 lg:h-96">
            <Image 
            width={200} height={200} 
              className="object-cover object-top w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src="/S8_Louis_Litt.webp"
              alt=""
            />
          </motion.div>
        </div>
        <motion.p {...{...scrollProps}} className="max-w-xl mb-4 text-base text-neutral-100 sm:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ullamco laboris aliquip ex ea.
        </motion.p>
        <motion.a {...{...scrollProps}} 
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