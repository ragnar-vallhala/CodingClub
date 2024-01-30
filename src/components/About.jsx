import { stats } from "../constants";
import styles from "../style";
import {date, location, problem} from "../assets"

const About = () =>{
  const aboutData = [
    // { imageSrc: date, heading:'Date' ,text: '10th of Feb 2024' },
  ];

  return (
    <section id="about" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 text-white`}>
      <h1 className={`${styles.heading2} text-center`}>
        About<br/>
      </h1>
      {aboutData.map((item, index) => (
        <div key={index} className={`${styles.flexCenter} flex-col  mb-8 max-w-[128px]`}>
          <img src={item.imageSrc} alt={`Image ${index + 1}`} className="w-[128px] h-[128px] object-cover rounded-full mb-4" />
          <div>
            <p className="text-center font-bold text-64">{item.heading}</p>
            <p className="text-center">{item.text}</p>
          </div>
        </div>
        
      ))}
      <div className={`${styles.paragraph} text-center`}>
         Welcome to Fill the Void(), an exhilarating 12-hour hackathon where the worlds of competitive programming and AI-ML challenges collide! Get ready for a coding adventure that will push your skills to the limit with three intense coding problems and three captivating machine learning tasks. Whether you're a seasoned coder or a machine learning enthusiast, Fill the Void() offers a platform for individuals and teams of up to five members to showcase their talents. Navigate seamlessly through our dedicated website, featuring real-time updates, dynamic leaderboards, and a streamlined submission process. Show respect to fellow participants, organizers, and sponsors, and remember that all work must be original to avoid plagiarism. Register now through the 'Fill the Void()' website from January 17 to February 8, 2024, and mark your calendars for the hackathon on February 10, 2024, from 11 AM to 11 PM. Compete for top spots on the leaderboard and a chance to win exciting prizes worth  ₹60K. Don't miss out on this coding extravaganza – it's not just a hackathon; it's an experience you won't forget!
      </div>
    </section>
  );
} 

export default About;
