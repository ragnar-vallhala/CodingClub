import styles from "../style";
import {Announcements, Rules, Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, About, Testimonials, Hero } from "./";

const Home = () => (
    <div className="bg-primary w-full overflow-hidden">\
  
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
  
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Rules />
          <Announcements />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <CTA />
          <Clients />
          
          <Footer />
        </div>
      </div>
    </div>
  );
  
  export default Home;
  