import { apple, google, aero } from '../assets'
import styles, {layout} from '../style'

const Billing = () => 
  (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={aero} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bot-0 w-[50%] h-[50%] rounded-full pink__gradient'/>        
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>The Aerodynamics</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>F1 cars make the most use of how aerodynamics work. They use it to create downforce in very clever ways. If the drag coefficient of an F1 car wasn't so high they'd constantly fly off the road.</p>

        {/* <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt="google_store" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
        </div> */}
      </div>
    </section>
  )


export default Billing