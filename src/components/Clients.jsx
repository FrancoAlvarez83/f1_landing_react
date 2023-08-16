import { motion } from "framer-motion"
import { clients } from "../constants"
import styles from "../style"

import { fadeInBottomVarialnt } from '../constants/Variants'

const Clients = () => 
   (
    <section className={`${styles.flexCenter} my-4`}>
        <motion.div className={`${styles.flexCenter} flex-wrap w-full`} as={motion.div}
        variants={fadeInBottomVarialnt}
        initial="hidden"
        whileInView="visible">
          {clients.map((client) => (
            <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
              <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain hover:brightness-200 transition-opacity"/>
            </div>
          ))}
        </motion.div>
    </section>
  )


export default Clients