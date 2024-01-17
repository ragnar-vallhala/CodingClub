import { stats } from "../constants";
import styles from "../style";
import {date, location, problem} from "../assets"

const About = () =>{
  const aboutData = [
    { imageSrc: date, heading:'Date' ,text: '10th of Feb 2024' },
   
    { imageSrc: problem,heading:'Problem Statement' ,text: 'Real World' }
  ];

  return (
    <section id="about" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 text-white`}>
      {aboutData.map((item, index) => (
        <div key={index} className={`${styles.flexCenter} flex-col sm:mr-24 mb-8 max-w-[128px]`}>
          <img src={item.imageSrc} alt={`Image ${index + 1}`} className="w-[128px] h-[128px] object-cover rounded-full mb-4" />
          <p className="text-center font-bold text-32">{item.heading}</p>
          <p className="text-center">{item.text}</p>
        </div>
      ))}
    </section>
  );
} 

export default About;
