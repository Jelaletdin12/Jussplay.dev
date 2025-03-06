import CountUp from "react-countup";
import { IoIosArrowForward } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import robot from "../../assets/Ai/pic29.jpg"
import img27 from "../../assets/Ai/img27.jpg"
import img12 from "../../assets/Ai/img12.jpg"
import img11 from "../../assets/Ai/img11.jpg"
import img14 from "../../assets/Ai/img14.jpg"
import img15 from "../../assets/Ai/img15.jpg"
import img16 from "../../assets/Ai/img16.jpg"
import img17 from "../../assets/Ai/img17.jpg"
import img18 from "../../assets/Ai/img18.jpg"
import img19 from "../../assets/Ai/img19.jpg"
import page6 from "../../assets/blockchain6/page6.png"
import styles from "./ServiceSection.module.scss";



const statsData = [
  {
    end: 50,
    suffix: "+",
    description: "AI Project Delivered",
    duration: 3,
  },
  {
    end: 100,
    suffix: "+",
    description: "Global Clients",
    duration: 3.5,
  },
  { end: 150, suffix: "+", description: "Developer Team", duration: 2.5 },
  { end: 15, suffix: "", description: "IYears in Service", duration: 2 },
];
const marketPlaceCards = [
  {
    pic: img27,
    title: "AI Technology Consulting",
    description:
      "We are here to help you sort through the jargon and create an AI strategy that aligns with your company's goals. Our methods are straightforward and work without any confusion.",
  },
  {
    pic: img12,
    title: "Custom AI Solutions Development",
    description:
      "We collaborate with you to create AI-based custom web and mobile applications, ensuring the best possible results & fulfilling your business's specific requirements. ",
  },
  {
    pic: img11,
    title: "AI Decision Making Software",
    description:
      "Protect your sensitive information from fraud, security breaches and losses with help of AI fraud prevention systems such as detection of threads, advanced authentication.",
  },
  {
    pic: img14,
    title: "AI Chatbot Development",
    description:
      "Improve customer experience with personalized AI chatbot solutions for sales, marketing, and customer support functions. Chatbots understand what users are asking, their intent, and improve service ",
  },
  {
    pic: img15,
    title: "Enterprise AI Solutions",
    description:
      "Our AI specialists will work closely with your team to develop enterprise AI solutions and implement individualized strategies to boost operational efficiency and drive innovation in your industry. ",
  },
  {
    pic: img16,
    title: "AI CRM Software",
    description:
      "Leverage our AI development services to build CRM software to improve your B2B and B2C relationships with personalized outreach, customer feedback, and actionable tools. ",
  },
  {
    pic: img17,
    title: "AI Integration Services",
    description:
      "Any successful company must integrate AI efficiently. We make AI development services that seamlessly integrate AI into your business and optimize its performance ",
  },
  {
    pic: img18,
    title: "AI Security Solutions",
    description:
      "Strengthen your security with our powerful AI security solutions that detect fraudulent patterns and take preventive measures to protect data and valuable business information. ",
  },
  {
    pic: img19,
    title: "AI based personalization ",
    description:
      "Our custom facial recognition software development services can accomplish biometric authentication, manage access control, and provide other forms of data security.",
  },
];

const ServiceSection = () => {
  const [statsRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const renderStats = () =>
    statsData.map((stat, index) => (
      <div className={styles.statItem} key={index}>
        <h2>
          {inView && (
            <CountUp
              start={0}
              end={stat.end}
              duration={stat.duration}
              separator=","
            />
          )}
          {stat.suffix}
        </h2>
        <p>{stat.description}</p>
      </div>
    ));

  return (
    < >
      <div className={styles.container}>
        <div className={styles.stats} ref={statsRef}>
          {renderStats()}
        </div>
        <section className={styles.infoSection}>
          <div className={styles.infoSection_content}>
            <h2>AI Software Development Services For Modern Business</h2>
            <p>
              We are a trusted NYC-based AI software development solutions
              provider that builds future-proof AI-based applications for your
              business. Our ingrained expertise in AI empowers us to deliver
              highly advanced AI solutions that solve real-world business
              problems. Our AI-powered software solutions enable modern
              businesses to automate processes and make businesses smarter.
              Propel your business on the path to success with our custom
              artificial intelligence development services tailored to your
              business needs.
            </p>
            <button className={styles.meetButton}>
              Meet with us <IoIosArrowForward />
            </button>
          </div>
          <div className={styles.infoSection_img}>
            <img src={robot} alt="Why Develop Android App" />
          </div>
        </section>
      </div>
      <div className={styles.marketplaceContainer}>
        <h2 className={styles.marketplaceTitle}>
        Artificial Intelligence Software Development Services We Provide
        </h2>
        <p>
        Our aim is to assist businesses across the globe to leverage innovative technologies like AI, machine learning and cybersecurity. We construct extremely sophisticated and high quality AI powered softwares that makes user tasks more simple and increase productivity of the businesses.  If you are looking forward to integrate AI softwares into your business, then look no further! We will be glad to assist you with it!
        </p>
        <div className={styles.marketplaceCards}>
          {marketPlaceCards.map((card, index) => (
            <div key={index} className={styles.marketplaceCard}>
              <div className={styles.cardIcon}>
                <img src={card.pic} alt="" />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <section className={styles.bannerSection}>
        <div className={styles.container2}>
          <div className={styles.imageWrapper}>
            <img src={page6} className={styles.image} />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Get Readymade Clone Of Exchange Development Solutions
            </h2>
            <p className={styles.description}>
              Our white label software is underpinned by the following features
              to deliver world-class performance
              <br />
              Get Started
            </p>
            <ul className={styles.featuresList}>
              <li>Binance exchange clone</li>
              <li>Coinbase exchange clone</li>
            </ul>
            <button className={styles.meetButton}>
              Meet with us <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
