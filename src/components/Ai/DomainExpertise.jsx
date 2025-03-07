// components/ServiceSection.jsx
import styles from "./DomainExpertise.module.scss";
import img1 from "../../assets/Ai/img1.jpg";
import img2 from "../../assets/Ai/img2.jpg";
import img3 from "../../assets/Ai/img3.jpg";
import img4 from "../../assets/Ai/img4.jpg";
import img5 from "../../assets/Ai/img5.jpg";
import img6 from "../../assets/Ai/img6.jpg";
import img7 from "../../assets/Ai/img7.jpg";
import img8 from "../../assets/Ai/img8.jpg";
import img9 from "../../assets/Ai/img9.jpg";
import icon1 from "../../assets/Ai/icon1.png";
import icon2 from "../../assets/Ai/icon2.png";
import icon3 from "../../assets/Ai/icon3.png";
import icon4 from "../../assets/Ai/icon4.png";

const services = [
  {
    id: 1,
    title: "Risk Mitigation",
    description:
      "Implementing AI solutions allows businesses to automate complex processes, mitigate bias, and conduct regular auditing to mitigate potential risks.",
    icon: img1,
  },
  {
    id: 2,
    title: "Personalized Customer",
    description:
      "By analyzing valuable customer data with AI softwares, businesses can provide personalized product recommendations, offers, and discounts.",
    icon: img2,
  },
  {
    id: 3,
    title: "Forecast Future Trends",
    description:
      "AI-powered software solutions allow businesses to find patterns and predict future trends to enhance their decision-making capabilities and strategies.",
    icon: img3,
  },
  {
    id: 4,
    title: "Better Data Management",
    description:
      "With the help of AI software, businesses can manage and categorize large data in a more structured way to drive meaningful business outcomes.",
    icon: img4,
  },
  {
    id: 5,
    title: "Gain Valuable Insights",
    description:
      "Customized AI software solutions enable businesses to analyze and evaluate data efficiently to gain valuable insights and improve decision-making..",
    icon: img5,
  },
  {
    id: 6,
    title: "Enhance Efficiency",
    description:
      "AI-based business software assists businesses in the real-time monitoring of various business-related processes and enhances efficiency.",
    icon: img6,
  },
  {
    id: 7,
    title: "Automate Repetitive Tasks",
    description:
      "Businesses can leverage AI-based solutions to automate complex or repetitive tasks to streamline processes and enhance efficiency.",
    icon: img7,
  },
  {
    id: 8,
    title: "Unbiased Decisions",
    description:
      "AI-based softwares is not driven by emotions, thus ensuring unbiased decisions and accurate making.",
    icon: img8,
  },
  {
    id: 9,
    title: "New Inventions",
    description:
      "Businesses can leverage AI data-analyzing capabilities to derive meaningful outcomes & new inventions.",
    icon: img9,
  },
];

const reasons = [
  {
    title: "Extensive Knowledge",
    description:
      "Highly skilled team members with extensive knowledge/experience in software development",
    img: icon1,
  },
  {
    title: "Privacy",
    description:
      "As a reliable software development company, we make sure to keep your privacy by sign a non-disclosure agreement to assure our clients that we never reveal any project-related information.",
    img: icon2,
  },
  {
    title: "100% satisfaction or refund",
    description:
      "We deliver top notch projects that perfectly aligns with all your requirements. It’s 100% satisfaction by customers or we will provide 100% refund!",
    img: icon3,
  },
  {
    title: "24*7 Support",
    description:
      "Post project maintenance and support available 24/7. Our support team is ready to assist our customers on any matter.",
    img: icon4,
  },
];

const DomainExpertise = () => {
  return (
    <>
      <section className={styles["service-section"]}>
        <h2>Benefits of Implementing AI Business Solutions</h2>
        <p>As a reputable AI software development company, we design custom AI solutions for our clients in various business domains. Implementing AI business solutions offer myriad of benefits for businesses that include;</p>
        <div className={styles["service-section__cards"]}>
          {services.map((service) => (
            <div key={service.id} className={styles["service-card"]}>
              <img
                src={service.icon}
                alt={service.title}
                className={styles["service-card__icon"]}
              />
              <h3 className={styles["service-card__title"]}>{service.title}</h3>
              <p className={styles["service-card__description"]}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.whyUsContainer}>
        <h2 className={styles.title}>
          What Makes Us The Best Web3 Game Development Company in NYC?
        </h2>
          <p>RisingMax Inc., a top artificial intelligence software development company, assists its clients in integrating next-gen technologies and gaining a competitive edge. Our development team leverages its expertise to build AI-based software solutions for startups and FORTUNE 500 clients.</p>
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <img src={reason.img} alt="" />
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DomainExpertise;
