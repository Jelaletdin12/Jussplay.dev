import React from "react";
import styles from "./CryptoSecurityFeatures.module.scss";


import httpAuthIcon from "../../assets/blockchain6/HTTP.png";
import encryptionIcon from "../../assets/blockchain6/Data-Encryption.png";
import jailLoginIcon from "../../assets/blockchain6/jail-login.png";
import dosProtectionIcon from "../../assets/blockchain6/protection.png";
import forgeryIcon from "../../assets/blockchain6/server-side.png";
import csrfIcon from "../../assets/blockchain6/crosssite.png";
import ddosIcon from "../../assets/blockchain6/distributor.png";
import pollutionIcon from "../../assets/blockchain6/parameter.png";


import bankingIcon from "../../assets/blockchain6/Banking-Finance.png";
import communicationIcon from "../../assets/blockchain6/Communication2222.png";
import manufacturingIcon from "../../assets/blockchain6/Manufacturing.png";
import insuranceIcon from "../../assets/blockchain6/Insurance.png";
import retailIcon from "../../assets/blockchain6/Retail.png";
import lifeSciencesIcon from "../../assets/blockchain6/Life-Sciences.png";
import infoServicesIcon from "../../assets/blockchain6/Information-Services.png";
import mediaIcon from "../../assets/blockchain6/Media.png";
import advisoryIcon from "../../assets/blockchain6/Advisory.png";
import tourismIcon from "../../assets/blockchain6/Tourism.png";


const securityFeatures = [
  {
    title: "HTTP Authentication",
    description: "We make sure to secure data with HTTP authentication.",
    icon: httpAuthIcon,
  },
  {
    title: "Data Encryption",
    description:
      "Our cryptocurrency exchange software provides DDoS protection for your application.",
    icon: encryptionIcon,
  },
  {
    title: "Jail Login",
    description:
      "To avoid multiple failed attempts for a certain amount of time & provide customer satisfaction.",
    icon: jailLoginIcon,
  },
  {
    title: "Anti Denial Of Service",
    description:
      "Our cryptocurrency exchange software provides DDoS protection for your application.",
    icon: dosProtectionIcon,
  },
  {
    title: "Server-side request forgery prevention",
    description:
      "Defend the exchange from overwhelming traffic originating from multiple sources.",
    icon: forgeryIcon,
  },
  {
    title: "Cross-Site Request Forgery prevention",
    description: "To protect user credentials and encrypt all data.",
    icon: csrfIcon,
  },
  {
    title: "Anti-distributed denial of service (DDoS)",
    description:
      "Avoid multiple failed attempts over time to provide satisfaction.",
    icon: ddosIcon,
  },
  {
    title: "HTTP Parameter Pollution Protection",
    description: "Dissuades web attacks to retrieve confidential information.",
    icon: pollutionIcon,
  },
];


const industries = [
  { title: "Banking & Finance", icon: bankingIcon },
  { title: "Communication", icon: communicationIcon },
  { title: "Manufacturing", icon: manufacturingIcon },
  { title: "Insurance", icon: insuranceIcon },
  { title: "Retail", icon: retailIcon },
  { title: "Life Sciences", icon: lifeSciencesIcon },
  { title: "Information Services", icon: infoServicesIcon },
  { title: "Media & Entertainment", icon: mediaIcon },
  { title: "Technical Advisory", icon: advisoryIcon },
  { title: "Travel & Tourism", icon: tourismIcon },
];

const CryptoSecurityFeatures = () => {
  return (
    <section className={styles.cryptoSecuritySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          High-Security Features Of Our Cryptocurrency Exchange Software
          Development
        </h2>
        <p className={styles.description}>
          Our team of experts has contributed their wisdom to the
          institutional-grade security of your white label decentralized
          exchange software.
        </p>

        <div className={styles.featuresGrid}>
          {securityFeatures.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <img
                src={feature.icon}
                alt={feature.title}
                className={styles.icon}
              />
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <h3 className={styles.industryTitle}>
          One Solution, Usage In Multiple Industries
        </h3>

        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <div key={index} className={styles.industryItem}>
              <img
                src={industry.icon}
                alt={industry.title}
                className={styles.industryIcon}
              />
              <h4 className={styles.industryTitle}>{industry.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoSecurityFeatures;
