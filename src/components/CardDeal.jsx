import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Riding the wave of <br className="sm:block hidden" /> AI-ML Innovation
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Embark on a transformative exploration of Artificial Intelligence and
        Machine Learning at Coding Club IIT Jammu, where algorithms unfold the
        future, and innovation is sculpted by the intelligence of code.
      </p>

      
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
