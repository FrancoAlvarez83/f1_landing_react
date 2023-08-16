import { motion } from 'framer-motion'
import { old_f1 } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

import { fadeInLeftVariant, fadeInRightVariant } from '../constants/Variants'

const CardDeal = () => 
  (
    <section className={layout.section}>
      <motion.div className={layout.sectionInfo} as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"
        whileInView="visible">
        <h2 className={styles.heading2}>Learn about our history.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>The first world championship race took place at Silverstone Circuit in the United Kingdom on 13 May 1950. Giuseppe Farina, competing for Alfa Romeo, won the first Drivers' World Championship, narrowly defeating his teammate Juan Manuel Fangio.</p>
        <Button styles="mt-10"/>
      </motion.div>

      <motion.div className={layout.sectionImg} as={motion.div}
        variants={fadeInRightVariant}
        initial="hidden"
        whileInView="visible">
        <img src={old_f1} alt="card" className='w-[100%] h-[100%]' />
      </motion.div>

      
    </section>
  )


export default CardDeal