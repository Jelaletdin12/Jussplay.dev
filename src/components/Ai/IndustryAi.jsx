import React, { useEffect, useRef } from "react";
import styles from "./IndustryAi.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import dexServiceImage from "../../assets/blockchain6/page6.png";
import big from "../../assets/Ai/big.png";
import stick from "../../assets/Ai/stick.png";
import img27 from "../../assets/Ai/img27.jpg";
import img12 from "../../assets/Ai/img12.jpg";
import img11 from "../../assets/Ai/img11.jpg";
import img14 from "../../assets/Ai/img14.jpg";
import img15 from "../../assets/Ai/img15.jpg";
import img16 from "../../assets/Ai/img16.jpg";
import img17 from "../../assets/Ai/img17.jpg";
import img18 from "../../assets/Ai/img18.jpg";
import img19 from "../../assets/Ai/img19.jpg";
import page6 from "../../assets/blockchain6/page6.png";
const services = [
  {
    title: "Machine Learning",
    description:
      "We integrate cognitive technology frameworks to make your business operations future-ready, adding capabilities like data-based decision-making, risk mitigation, and performance monitoring.",
  },
  {
    title: "Robotics Processing",
    description:
      "With robotics processing, you can allow your human resources to focus on high-value tasks by eliminating repetitive tasks to enhance productivity, reduce costs, and improve operational efficiency.",
  },
  {
    title: "Business Intelligence",
    description:
      "Businesses can predict outcomes and make smarter decisions using AI software development services that utilize sophisticated algorithms to develop the best solutions to meet modern needs.",
  },
  {
    title: "Natural Language Processing",
    description:
      "We engineer smart solutions using NLP to help your business understand, analyze, and manipulate human language. You can also analyze customer feedback ",
  },
  {
    title: "Computer Vision",
    description:
      "AI-powered software solutions powered by computer vision can be fruitful for your business as they monitor and detect abnormal events from videos, images & text and automate the systems.",
  },
  {
    title: "Predictive Analysis",
    description:
      "Unravel the data pattern and predict the results with advanced machine learning capabilities. With smart forecasting and fraud detection, you can plan for the future and identify new business areas.",
  },
  {
    title: "Video, Image & Text Analytics",
    description:
      "By leveraging video, image, and text AI-based analytics business solutions, you can evaluate various forms of media exponentially and faster than traditional methods used earlier.",
  },
  {
    title: "Deep Learning",
    description:
      "We dig deeper into complex data and deliver perfect solutions with real-time deep-learning algorithms that perform just as humans do. Deep learning AI detects objects, speech & translating languages.",
  },
  {
    title: "Data Science",
    description:
      "We extract useful knowledge by processing information. The company can implement these discoveries into its strategy and major decisions to ensure success.",
  },
];
const marketPlaceCards = [
  {
    pic: img27,
    title: "Banking",
    description:
      "AI-powered software solutions empower the banking & finance sector to streamline business processes, detect frauds, and enhance decision-making capabilities.",
  },
  {
    pic: img12,
    title: "Healthcare",
    description:
      "Integrating AI-powered business solutions empowers healthcare facilities to automate processes and effectively analyze data to provide personalized care.",
  },
  {
    pic: img11,
    title: "Real estate",
    description:
      "The real estate sector can streamline property documentation and analyze data effectively with AI-powered software solutions.",
  },
  {
    pic: img14,
    title: "Travel & Tourism",
    description:
      "Our AI-based software solutions empower travel & tourism businesses to offer customers customized itineraries, flight & hotel bookings, and other services.",
  },
  {
    pic: img15,
    title: "Telecommunication",
    description:
      "With our integrated AI-powered business solutions, the telecommunication industry can automate tasks such as data entry and provide customer support 24/7. ",
  },
  {
    pic: img16,
    title: "Food industry",
    description:
      "We provide AI-based software solutions specific to the food industry to assist in automating back-end office tasks, order & manage inventory, and other operations.",
  },
  {
    pic: img17,
    title: "Automative",
    description:
      "Implementing AI software solutions in the automotive industry enables the automation of repetitive tasks to mitigate errors and enhance workplace efficiency.",
  },
  {
    pic: img18,
    title: "Human resource",
    description:
      "An AI-powered human resource software can handle recurring processes such as scheduling interviews, assigning tasks, evaluating, etc. ",
  },
  {
    pic: img19,
    title: "Education",
    description:
      "Integrating AI-powered solutions in the education sector empowers to automate setting up examinations and evaluations, create personalized study materials & others.",
  },
];

const IndustryAi = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = serviceRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setTimeout(() => {
                entry.target.classList.add(styles.fadeIn);
              }, index * 300);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h2>AI Software Development Services For Industries of Any Sizee</h2>
        <p className={styles.description}>
          Jussplay Developments, leverages its experience and domain expertise
          to build custom artificial intelligence solutions for clients in
          different business verticals. Our AI-powered solutions empower clients
          to accelerate their automation journey and become a dominating force.
        </p>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard}`}
              ref={(el) => (serviceRefs.current[index] = el)}
            >
              <div className={styles.borderTop}></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <h2 style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        AI Development Process: Bringing Your Unique Ideas To Life
      </h2>
      <p style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        Jussplay Developments, a leading Artificial Intelligence development
        company in NYC, USA, builds future-proof AI solutions for clients in
        different business verticals. Our experienced Artificial Intelligence
        software development team analyzes and evaluates clients' development
        requirements and business needs. We follow a result-driven AI
        development process that empowers us to bring your unique ideas to life.
      </p>

      <div className={styles.frame}>
        <div className={styles.header}>
          <img src={big} alt="" />
        </div>
        <div className={styles.service}>
          <div className={styles.items}>
            <div className={styles.frameTitle}>
              <img src={stick} alt="" /> <p>Project Consultation</p>
            </div>
            <div className={styles.itemsContent}>
              <p>
                We connect with our clients over a free consultation call and
                discuss their AI software development requirements in detail.
              </p>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.frameTitle}>
              <img src={stick} alt="" /> <p>Project Planning</p>
            </div>
            <div className={styles.itemsContent}>
              <p>
                Our development team creates a project development roadmap to
                streamline development and build AI software that achieves
                desired outcomes.{" "}
              </p>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.frameTitle}>
              <img src={stick} alt="" /> <p>Quality Testing</p>
            </div>
            <div className={styles.itemsContent}>
              <p>
                We follow rigorous testing methodologies to ensure our AI
                business solution is error-free and performs as intended.
              </p>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.frameTitle}>
              <img src={stick} alt="" /> <p>Project Analysis</p>
            </div>
            <div className={styles.itemsContent}>
              <p>
                Our expert AI development team carefully analyzes clients' AI
                solutions requirements and business needs to draft plans.
              </p>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.frameTitle}>
              <img src={stick} alt="" /> <p>Project Development</p>
            </div>
            <div className={styles.itemsContent}>
              <p>
                The expert AI team at RisingMax Inc. strictly follows the
                project development roadmap to build AI software that matches
                clients’ business needs in less time.
              </p>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.frameTitle}>
              <img src={stick} alt="" /> <p>Maintenance & Support</p>
            </div>
            <div className={styles.itemsContent}>
              <p>
                We provide affordable maintenance and support services to ensure
                that your AI business solution works smoothly for a long time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.marketplaceContainer}>
        <h2 className={styles.marketplaceTitle}>
          Artificial Intelligence Software Development Services We Provide
        </h2>
        <p>
          Our aim is to assist businesses across the globe to leverage
          innovative technologies like AI, machine learning and cybersecurity.
          We construct extremely sophisticated and high quality AI powered
          softwares that makes user tasks more simple and increase productivity
          of the businesses. If you are looking forward to integrate AI
          softwares into your business, then look no further! We will be glad to
          assist you with it!
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

export default IndustryAi;
