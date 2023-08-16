import { motion } from 'framer-motion'
import { feedback } from '../constants'
import styles, {layout} from "../style"
import FeedbackCard from './FeedbackCard'

import { fadeInBottomVarialnt } from '../constants/Variants'

const Testimonials = () => 
  (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-lg blue__gradient' />

      <motion.div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]' as={motion.div}
        variants={fadeInBottomVarialnt}
        initial="hidden"
        whileInView="visible">
        <h1 className={styles.heading2}>What people are <br className='sm:block hidden' />saying about us </h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>These are some of the most important people in the world of racing.</p>
        </div>
      </motion.div>

      <motion.div className='flex flex-wrap sm:justify-start justify-center w-full feedback-containter relative z-[1]' as={motion.div}
        variants={fadeInBottomVarialnt}
        initial="hidden"
        whileInView="visible">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </motion.div>

     
    </section>
  )


export default Testimonials