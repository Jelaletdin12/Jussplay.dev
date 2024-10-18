import React from 'react';
import styles from './CryptoExchangeServices.module.scss';

import cryptocurrency from "../../assets/blockchain6/label-cryptocurrency.png";
import bitcoinEx from "../../assets/blockchain6/bitcoin-exchnge.png";
import qualityCryp from "../../assets/blockchain6/qulity-crypto.png";
import decEx from "../../assets/blockchain6/Decentralized-Exchange.png";
import decEx2 from "../../assets/blockchain6/p2p-change.png";
import assurance from "../../assets/blockchain6/CentralizedCrypto.png";

const services = [
  {
    title: 'Bitcoin Exchange Development',
    description:
      'We develop Android and iOS mobile apps possessing different levels of complexity, be it a user-oriented or enterprise-level solution. We comply with all the relevant legal norms and ensure high performance.',
    icon: cryptocurrency, // You should replace this with actual icon class or component
  },
  {
    title: 'White Label Cryptocurrency',
    description:
      'We develop Android and iOS mobile apps possessing different levels of complexity, be it a user-oriented or enterprise-level solution. We comply with all the relevant legal norms and ensure high performance.',
    icon: bitcoinEx,
  },
  {
    title: 'Centralized Crypto Exchange',
    description:
      'We develop Android and iOS mobile apps possessing different levels of complexity, be it a user-oriented or enterprise-level solution. We comply with all the relevant legal norms and ensure high performance.',
    icon: qualityCryp,
  },
  {
    title: 'P2P Exchange Development',
    description:
      'We develop Android and iOS mobile apps possessing different levels of complexity, be it a user-oriented or enterprise-level solution. We comply with all the relevant legal norms and ensure high performance.',
    icon: decEx
  },
  {
    title: 'Decentralized Exchange',
    description:
      'We develop Android and iOS mobile apps possessing different levels of complexity, be it a user-oriented or enterprise-level solution. We comply with all the relevant legal norms and ensure high performance.',
    icon: decEx2
  },
  {
    title: 'Quality Assurance & Testing',
    description:
      'We develop Android and iOS mobile apps possessing different levels of complexity, be it a user-oriented or enterprise-level solution. We comply with all the relevant legal norms and ensure high performance.',
    icon: assurance
  },
];

const CryptoExchangeServices = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Take The Lead With Our Cryptocurrency Exchange Software Development</h2>
      <p className={styles.description}>
        We provide Cryptocurrency exchange software development services fortified with market-leading features and
        institutional-grade security.
      </p>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <img src={service.icon} className={service.icon}></img> {/* Replace with actual icon implementation */}
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CryptoExchangeServices;
