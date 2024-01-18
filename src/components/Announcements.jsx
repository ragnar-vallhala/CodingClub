import React from 'react';
import styles from '../style';


const Announcements = () => {
  return (
    <section className='flex-row flex-wrap sm:mt-20 mt-6 text-white'>
        <div>
            <p className={`${styles.heading2}`}>
                Announcements
            </p>
        </div>
        <div className="scrolling-lines text-white text-32px">
        <div className="line">Announcement 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="line">Announcement 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="line">Announcement 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="line">Announcement 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="line">Announcement 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="line">Announcement 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="line">Announcement 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="line">Announcement 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="line">Announcement 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="line">Announcement 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="line">Announcement 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="line">Announcement 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="line">Announcement 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="line">Announcement 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        
        </div>
    </section>
  );
};

export default Announcements;
