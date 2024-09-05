import { motion } from 'framer-motion'
import { scrollProps } from '@/utils'

export const Footer = () => {
  return (
    <motion.div {...scrollProps} className="border-t px-0 pt-16 mx-0 w-full bg-gray-900">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 w-full mx-0">
        <motion.div {...scrollProps} className="sm:col-span-2 px-5">
          <motion.a {...scrollProps}
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
            >
            <h6 className='text-neutral-100 text-4xl font-[powerr]'>AP</h6>
            <span className="ml-2 text-xl font-bold tracking-wide text-neutral-100 uppercase">
              Ampt Partners
            </span>
          </motion.a>
          <div className="mt-6 w-full">
            <motion.p {...scrollProps} className="text-sm text-neutral-100">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </motion.p>
            <motion.p {...scrollProps} className="mt-4 text-sm text-neutral-100">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </motion.p>
          </div>
        </motion.div>
        <div className="space-y-2 text-sm px-4">
          <motion.p {...scrollProps} className="text-base font-bold tracking-wide text-neutral-100">
            Contacts
          </motion.p>
          <div className="flex">
            <motion.p {...scrollProps} className="mr-1 text-neutral-100">Phone:</motion.p>
            <motion.a {...scrollProps}
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-neutral-100"
            >
              850-123-5021
            </motion.a>
          </div>
          <div className="flex">
            <motion.p {...scrollProps} className="mr-1 text-neutral-100">Email:</motion.p>
            <motion.a {...scrollProps}
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-neutral-100 hover:scale-110"
            >
              <h4>info@amptpartners.com.au</h4>
            </motion.a>
          </div>
          <div className="flex">
            <motion.p {...scrollProps} className="mr-1 text-neutral-100">Address:</motion.p>
            <motion.a {...scrollProps}
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-neutral-100 "
            >
              312 Collins Street, Melbourne 3000
            </motion.a>
          </div>
        </div>
        <div className="px-4">
          <motion.h4 {...scrollProps} className="text-base font-bold tracking-wide text-neutral-100">
            Social
          </motion.h4>
          <div className="flex items-center mt-1 space-x-3">
            <motion.a {...scrollProps}
              href="/"
              className="text-neutral-100 transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </motion.a>
            <motion.a {...scrollProps}
              href="/"
              className="text-neutral-100 transition-colors duration-300"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </motion.a>
            <motion.a {...scrollProps}
              href="/"
              className="text-neutral-100 transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </motion.a>
          </div>
          <motion.p {...scrollProps} className="mt-4 text-sm text-neutral-100">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami.
          </motion.p>
        </div>
      </div>
      <motion.div  className="flex justify-between pt-5 pb-10 px-0 border-t lg:flex-row !w-full !mx-0">
        <motion.p {...scrollProps} className="text-sm px-5 text-neutral-100 w-full">
          © Copyright {new Date().getFullYear()} Ampt Partners. All rights reserved.
        </motion.p>
        <ul className="flex !w-full !mx-0 px-5 mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <motion.a {...scrollProps}
              href="/"
              className="text-sm text-neutral-100 transition-colors duration-300"
            >
              F.A.Q
            </motion.a>
          </li>
          <li>
            <motion.a {...scrollProps}
              href="/"
              className="text-sm text-neutral-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </motion.a>
          </li>
          <li>
            <motion.a {...scrollProps}
              href="/"
              className="text-sm text-neutral-100 transition-colors duration-300"
            >
              Terms &amp; Conditions
            </motion.a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};