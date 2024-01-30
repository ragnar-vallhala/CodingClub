import React from 'react';
import styles from '../style';


const Announcements = () => {
  return (
    <section id='announcements'className='flex-row flex-wrap sm:mt-20 mt-6 text-white'>
        <div>
            <p className={`${styles.heading2}`}>
                Announcements
            </p>
        </div>
        
          <div className="scrolling-lines text-white text-32px">
            <div className='scroll-box'>
              <div className="line"> Registrations open till 8th Feb. </div>
              <div className="line"> Participate in a hackathon promising a unique blend of CP and AI-Ml. </div>
              <div className="line"> Prizes worth 60k up for grabs. </div>
            </div>       
          </div>
    </section>
  );
};

export default Announcements;
