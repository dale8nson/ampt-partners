import { motion } from 'framer-motion'
import { scrollProps } from '@/utils'
import Image  from 'next/image'

export const TeamProfiles = () => {
  return (
    <section className="bg-gray-900" >
      <div className="container px-6 py-8 mx-auto">
        <motion.h2 {...scrollProps} className="text-2xl font-semibold text-center capitalize lg:text-3xl text-white font-[masthead]">Our Team</motion.h2>
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="w-full max-w-xs text-center">
            <motion.img {...scrollProps} className="object-cover w-full h-48 mx-auto rounded-lg object-top" src="/S8_Louis_Litt.webp" alt="avatar" />
            <div className="mt-2">
              <motion.h3 {...scrollProps} className="text-lg font-medium text-gray-700 dark:text-gray-200">Louis Litt</motion.h3>
              <motion.h4 {...scrollProps} className="mt-1 font-medium text-gray-600 dark:text-gray-300">Chief Executive Partner</motion.h4>
            </div>
          </div>
        <div className="w-full max-w-xs text-center">
            <motion.img {...scrollProps} className="object-cover object-top w-full h-48 mx-auto rounded-lg" src="/Julianna-Margulies-The-Good-Wife.avif" alt="avatar" />
            <div className="mt-2">
              <motion.h3 {...scrollProps} className="text-lg font-medium text-gray-700 dark:text-gray-200">Alicia Florrick</motion.h3>
              <motion.h4 {...scrollProps} className="mt-1 font-medium text-gray-600 dark:text-gray-300">Managing Partner</motion.h4>
            </div>
          </div>
          
          <div className="w-full max-w-xs text-center">
            <motion.img {...scrollProps} className="object-cover w-full h-48 mx-auto rounded-lg object-top" src="/Clarence_Darrow.webp" alt="avatar" />
            <div className="mt-2">
              <motion.h3 {...scrollProps} className="text-lg font-medium text-gray-700 dark:text-gray-200">Clarence Darrow</motion.h3>
              <motion.h4 {...scrollProps} className="mt-1 font-medium text-gray-600 dark:text-gray-300">Managing Partner</motion.h4>
            </div>
          </div>
          <div className="w-full max-w-xs text-center">
            <motion.img {...scrollProps} className="object-cover object-right w-full h-48 mx-auto rounded-lg" src="/ee673e8472521baf4c69ef50d3c2077c_1280x720.webp" alt="avatar" />
            <div className="mt-2">
              <motion.h3 {...scrollProps} className="text-lg font-medium text-gray-700 dark:text-gray-200">Ally McBeal</motion.h3>
              <motion.h4 {...scrollProps} className="mt-1 font-medium text-gray-600 dark:text-gray-300">Senior Partner</motion.h4>
            </div>
          </div>
          <div className="w-full max-w-xs text-center">
            <motion.div {...scrollProps} ><Image width={200} height={200} className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="/96987637.jpg.0.webp" alt="avatar" /></motion.div>
            <div className="mt-2">
              <motion.h3 {...scrollProps} className="text-lg font-medium text-gray-700 dark:text-gray-200">Atticus Finch</motion.h3>
              <motion.h4 {...scrollProps} className="mt-1 font-medium text-gray-600 dark:text-gray-300">Senior Partner</motion.h4>
            </div>
          </div>
          <div className="w-full max-w-xs text-center">
            <motion.img {...scrollProps} className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="/qfadd70b8-d6b2-4534-9544-f598d2066f4a_perry-ma_jvkzCgl.webp" alt="avatar" />
            <div className="mt-2">
              <motion.h3 {...scrollProps} className="text-lg font-medium text-gray-700 dark:text-gray-200">Perry Mason</motion.h3>
              <motion.h4 {...scrollProps} className="mt-1 font-medium text-gray-600 dark:text-gray-300">Partner</motion.h4>
            </div>
          </div>
          <div className="w-full max-w-xs text-center">
            <motion.div {...scrollProps} className="w-full h-48 mx-auto">
              <Image width={200} height={200} className="object-cover object-top w-full h-48 mx-auto rounded-lg" src="/1e83cf51c8012a56c3dc145dbd611c5f.webp" alt="avatar" /></motion.div>
            <div className="mt-2">
              <motion.h3 {...scrollProps} className="text-lg font-medium text-gray-700 dark:text-gray-200">Mike Ross</motion.h3>
              <motion.h4 {...scrollProps} className="mt-1 font-medium text-gray-600 dark:text-gray-300">1st-Year Associate</motion.h4>
            </div>
          </div>
        </div>
      </div>
</section>
  )
}