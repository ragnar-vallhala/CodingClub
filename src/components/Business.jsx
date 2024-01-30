import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[84px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[84px] h-[84px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[52px] leading-[23.4px] mb-5">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);


const Business = () =>  (
  <section id="prizes" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Get an oppurtunity <br className="sm:block hidden" /> to win exciting prizes.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Compete for top honors in our hackathon and stand a chance to win 
      exclusive prizes! The top three performers get Amazon vouchers, 
      and Course Vouchers await teams in 4th to 10th place. Join Fill the Void() 
      for a chance to be recognized and rewarded for your coding prowess!
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
