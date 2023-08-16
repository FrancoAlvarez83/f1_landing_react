import { motion } from "framer-motion"
import styles from "../style"
import Button from "./Button"

import { fadeInBottomVarialnt } from '../constants/Variants'
  
const CTA = () => 
  (
    <motion.section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounde-[20px] box-shadow rounded-lg`}
        as={motion.div}
        variants={fadeInBottomVarialnt}
        initial="hidden"
        whileInView="visible"
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </motion.section>
  )


export default CTA