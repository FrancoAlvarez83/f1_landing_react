import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import {discount, red_bull, race_start} from '../assets';
import GetStarted from './GetStarted';

import { fadeInLeftVariant, fadeInRightVariant } from '../constants/Variants';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
     <motion.div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] y-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>100%</span> Action For {" "}            
            <span className='text-white'>23</span> Races            
          </p>         
        </div>

        <div className='flex flex-row justify-between items-center w-full'
          
        >
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>Premier <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>Racing</span> {""}
          </h1>

          {/* <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div> */}
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Around The World.</h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>The FIA Formula One World Championship has been one of the premier forms of racing around the world since its inaugural season in 1950.</p>
     </motion.div>     

     <motion.div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible">  

        <img src={race_start} alt='billing' className='w-[90%] h-[80%] relative z-[5] rounded-lg'/>

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-3xl bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
     </motion.div>

     <div className={`ss:hidden ${styles.flexCenter}`}><GetStarted /></div>
  </section>  
)

export default Hero