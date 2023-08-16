import { old_f1 } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => 
  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Learn about our history.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>The first world championship race took place at Silverstone Circuit in the United Kingdom on 13 May 1950. Giuseppe Farina, competing for Alfa Romeo, won the first Drivers' World Championship, narrowly defeating his teammate Juan Manuel Fangio.</p>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={old_f1} alt="card" className='w-[100%] h-[100%]' />
      </div>

      
    </section>
  )


export default CardDeal