import { motion } from 'framer-motion';
import { stats } from '../constants';
import styles from '../style';

import { fadeInBottomVarialnt } from '../constants/Variants'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <motion.div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} as={motion.div}
      variants={fadeInBottomVarialnt}
      initial="hidden"
      whileInView="visible">
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
      </motion.div>
    ))}
  </section>  
)

export default Stats