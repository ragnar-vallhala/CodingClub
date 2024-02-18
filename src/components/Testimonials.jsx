import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { merch } from "../assets";
const Testimonials = () => (
  
  <><section id="Merchandise" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[30%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div id="editorial" className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      
      
      <h2 className={styles.heading2}>
        Editorial <br className="sm:block hidden" />
      </h2>
      
    </div>
    <div className="absolute z-[0] w-[60%] h-[30%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div id="editorial" className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        <a href="https://drive.google.com/file/d/1dKaRkKmtLVNy87SvffESI8jXf_Ifx2C1/view?usp=sharing">Click here to download the full editorial</a>
        
        </p>
        
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      
      
      <h2 className={styles.heading2}>
        Merchandise <br className="sm:block hidden" />
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>

        </p>
      </div>
    </div>
    <img
      src={merch}
      alt="merch"
      className="h-48"
      />
    <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      <p className={`${styles.paragraph}`}> Coming soon</p>
    </div>
  </section>
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Join & Explore<br className="sm:block hidden" />
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>

          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </section></>
);

export default Testimonials;
