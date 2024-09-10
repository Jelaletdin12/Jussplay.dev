import styles from "./service.module.scss";
import transition from "../../pageTransition";
import CanvasAnimation from "./canvas";
import left from "../../assets/img2.png";
import right from "../../assets/img1.png";
import { IoIosArrowForward } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ParticleComponent from './particle'

const Service = () => {

  const ServiceCard = ({ title, description, details }) => (
    <div className={styles.serviceCard}>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
      <p className={styles.serviceDetails}>{details}</p>
    </div>
  );

  return (
    <>
  
        <Header />
    <section className={styles.service}>
      <div className={styles.up}>
        <div className={styles.bg}>
          <img src={left} alt="left image" />
          <img src={right} alt="right image" />
          <header className={styles.header}>
        <h1 className={styles.title}>Implement your <br /> ideas with Jussplay.dev</h1>
      </header>
        </div>
        <div className={styles.content}>
          <HashLink to={"#startJourney"} smooth>
            <button className={styles.button}>
              Meet with us <IoIosArrowForward />
            </button>
          </HashLink>
        </div>
      </div>
      
      <div className={styles.pageContainer}>
      <section className={styles.journeySection}>
        <h2>Start your journey with us</h2>
      </section>
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Our services</h2>
        <div className={styles.servicesList}>
          <ServiceCard 
            title="Android app development" 
            description="We develop Android applications using Java or Kotlin, ensuring compatibility across a wide range of devices for a seamless user experience."
            details="SOCIAL NETWORKING APPS, E-COMMERCE APPS, AND UTILITY APPS LIKE WEATHER OR FITNESS TRACKERS"
          />
           <ServiceCard 
            title="Web/App Development" 
            description="We build responsive, user-friendly websites and web applications, handling both front-end and back-end development."
            details="LANDING PAGES, E-COMMERCE WEBSITES, AND ONLINE BOOKING PLATFORMS"
          />
          <ServiceCard 
            title="AI (Artificial Intelligence)" 
            description="We design AI systems that enhance automation, data analysis, and user experiences through intelligent decision-making and pattern recognition"
            details="AI recommendation engines, predictive analytics for finance, and smart home assistants"
          />
          <ServiceCard 
            title="Web3 Game Development" 
            description="We develop blockchain-based games with decentralized ownership, NFTs, and play-to-earn mechanics to enhance player engagement"
            details="NFT collectible games, decentralized virtual worlds, and blockchain-enabled play-to-earn games."
          />
          <ServiceCard 
            title="UX/UI Design" 
            description="We design user-friendly and visually appealing interfaces for websites, apps, and digital products, ensuring a seamless user experience"
            details="Mobile app interfaces, website layouts, and dashboards"
          />
          <ServiceCard 
            title="Motion Design" 
            description="We bring visuals to life with engaging animations and motion graphics, adding dynamism to your brand’s storytelling"
            details="Animated logos, explainer videos, and UI animations"
          />
          <ServiceCard 
            title="SMM (Social Media Marketing)" 
            description="We boost your brand’s visibility on social media through targeted content creation, ad campaigns, and audience engagement"
            details="Instagram content creation, Facebook ad campaigns, and Twitter community management"
          />
        </div>
        <div className={styles.servicesList}>
          <ServiceCard 
            title="IOS app development" 
            description="We create high-performance, secure apps for Apple devices using Swift or Objective-C, fully integrated within the Apple ecosystem."
            details="MOBILE BANKING APPS, HEALTH AND WELLNESS APPS, AND CUSTOM ENTERPRISE APPS"
          />
          <ServiceCard 
            title="Machine Learning" 
            description="We implement machine learning solutions that improve predictions and decisions by training algorithms on relevant data"
            details="Email spam filters, e-commerce product recommendations, and predictive maintenance systems"
          />
         
          <ServiceCard 
            title="Chatbot Development" 
            description="We develop AI-powered chatbots that automate customer service, provide information, and enhance user engagement."
            details="CUSTOMER SERVICE BOTS, BOOKING ASSISTANTS, AND VIRTUAL BANKING ASSISTANTS"
          />
          <ServiceCard 
            title="Built-in System" 
            description="We integrate specialized software and hardware solutions within larger systems, enhancing functionality and efficiency"
            details="Systems in smart home devices, vehicle infotainment systems, and industrial automation controllers"
          />
          <ServiceCard 
            title="Crypto Exchange/Crypto Wallet/Crypto Token" 
            description="We create secure platforms for trading, storing, and managing cryptocurrencies, along with developing custom tokens on blockchains"
            details="Centralized and decentralized exchanges, mobile crypto wallets, and tokens for DeFi projects"
          />
          <ServiceCard 
            title="Graphic Design" 
            description="Our team creates impactful visual content, including logos, branding materials, and social media graphics, to effectively communicate your message"
            details="Logos, brochures, posters, and packaging design"
          />
          <ServiceCard 
            title="Copywriting Services" 
            description="We provide custom copywriting services tailored to your needs. Whether you need compelling website content, app descriptions, or company profiles, we craft clear and engaging texts that resonate with your audience and strengthen your brand"
            details="Website copy, app descriptions, company bios, and marketing content"
          />
        </div>
        <div className={styles.canvas}>
          {/* <CanvasAnimation /> */}
          {/* <ParticleComponent/> */}
        </div>
      </section>
      <section className={styles.chooseSection}>
        <h2 className={styles.sectionTitle}>Just choose what you need</h2>
      </section>
        
    </div>
    </section>
    <Footer />
    </>
  );
};

export default transition(Service);
