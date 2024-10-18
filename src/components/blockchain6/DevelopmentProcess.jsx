import styles from "./DevelopmentProcess.module.scss";

import gather from "../../assets/blockchain6/Requirement-Gathering.png";
import analyse from "../../assets/blockchain6/Requirement-Analysis.png";
import model from "../../assets/blockchain6/Engagement-Model.png";
import deployment from "../../assets/blockchain6/Deployment.png";
import support from "../../assets/blockchain6/Support-Maintenance.png";

import dedicated from "../../assets/blockchain6/Dedicated.png";
import price from "../../assets/blockchain6/Fixed-Price.png";
import hour from "../../assets/blockchain6/Hourly.png";

import line from "../../assets/blockchain6/line.png";

const DevelopmentProcess = () => {
  const steps = [
    { title: "Requirement Gathering", img: gather },
    { title: "Requirement Analysis", img: analyse },
    { title: "Selecting Engagement Model", img: model },
    { title: "Deployment", img: deployment },
    { title: "Support & Maintenance", img: support },
  ];

  const models = [
    {
      title: "Dedicated Development Model",
      details: ["Dedicated full-time development", "Regular reporting"],
      img: dedicated,
    },
    {
      title: "Fixed Price Development Model",
      details: ["Fixed price contract", "Fixed deadlines and no setup fees"],
      img: price,
    },
    {
      title: "Hourly Development Model",
      details: ["Pay-as-you-go payment model", "Measurable work"],
      img: hour,
    },
  ];

  const featuresLeft = [
    "Mobile-friendly solution",
    "Multiple payment options",
    "Hassle-free Cryptocurrency trading",
    "Alerts & Notifications",
    "Smart deployment & configuration",
  ];

  const featuresRight = [
    "Customizations",
    "Multi-language support",
    "Smooth communication",
    "24*7 support",
    "Bug-free solution",
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Development Process</h2>
      <p className={styles.subtitle}>
        We deliver not just solutions but experiences to the clients. We are not
        your average exchange software development company, but beyond it.
      </p>

      <div className={styles.processFlow}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <img src={step.img} alt={step.title} className={styles.stepImage} />
            <p>{step.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.line}>
        <img src={line} alt="" />
      </div>

      <div className={styles.engagementModels}>
        {models.map((model, index) => (
          <div key={index} className={styles.model}>
            <img
              src={model.img}
              alt={model.title}
              className={styles.modelImage}
            />
            <h3>{model.title}</h3>
            <ul>
              {model.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className={styles.highlightTitle}>
        WHY CHOOSE RISINGMAX TO BE YOUR PARTNER AS A WHITE LABEL DECENTRALIZED
        EXCHANGE SOFTWARE DEVELOPMENT COMPANY?
      </h2>

      <div className={styles.features}>
        <ul className={styles.featuresList}>
          {featuresLeft.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <ul className={styles.featuresList}>
          {featuresRight.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
