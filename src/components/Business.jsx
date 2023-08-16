import React from 'react'
import { motion } from 'framer-motion';
import { features } from '../constants'
import { google, apple } from '../assets'
import styles, {layout} from '../style'

import { fadeInLeftVariant, fadeInRightVariant } from '../constants/Variants';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1} ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-red-600`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
      </div>
      <div className='flex-1 flex flex-col ml-3'>
          <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
          <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
      </div>
  </div>
)

const Business = () => 
  (
    <section id='features' className={layout.section}
    >
      <motion.div className={layout.sectionInfo} 
         as={motion.div}
         variants={fadeInLeftVariant}
         initial="hidden"
         whileInView="visible"
        >
        <h2 className={styles.heading2}>You enjoy the racing, <br className='sm:block hidden'/> we'll do the work.</h2>
      
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the F1 TV App you will never miss one second of action from the best drivers and enginering in the world.</p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt="google_store" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
        </div>
      </motion.div>

      <motion.div className={`${layout.sectionImg} flex-col`} as={motion.div}
         variants={fadeInRightVariant}
         initial="hidden"
         whileInView="visible">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </motion.div>
    </section>
  )


export default Business