import { motion } from 'framer-motion'
import { aerodynamic } from '../assets'
import styles, {layout} from '../style'

import { fadeInLeftVariant, fadeInRightVariant } from '../constants/Variants'

const Billing = () => 
  (
    <section id='product' className={layout.sectionReverse}>
      <motion.div className={layout.sectionImgReverse}
        as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <img src={aerodynamic} alt="billing" className='w-[100%] h-[100%] relative z-[5] rounded-lg'/>

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bot-0 w-[50%] h-[50%] rounded-full pink__gradient'/>        
      </motion.div>

      <motion.div className={layout.sectionInfo} as={motion.div}
        variants={fadeInRightVariant}
        initial="hidden"
        whileInView="visible">
        <h2 className={styles.heading2}>The Aerodynamics</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>F1 cars make the most use of how aerodynamics work. They use it to create downforce in very clever ways. If the drag coefficient of an F1 car wasn't so high they'd constantly fly off the road.</p>

        {/* <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt="google_store" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
        </div> */}
      </motion.div>
    </section>
  )


export default Billing