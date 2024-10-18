import React from 'react';
import styles from './SmartContractDevelopment.module.scss';


import architectureIcon from '../../assets/blockchain6/chat-bot-1.png';
import designIcon from '../../assets/blockchain6/chat-bot-6.png';
import optimizationIcon from '../../assets/blockchain6/chat-bot-5.png';
import dAppsIcon from '../../assets/blockchain6/chat-bot-4.png';
import dexIcon from '../../assets/blockchain6/chat-bot-3.png';
import digitalWalletsIcon from '../../assets/blockchain6/chat-bot-2.png';
import cryptoServiceImage from '../../assets/blockchain6/page2.png';


const smartContractFeatures = [
  { title: 'Digital Smart Contract Architecture', description: 'Our experts prepare a blueprint that outlines a basic architecture design to define the business logic behind a smart contract solution. We implement the best of technologies to create smart contract architecture.', icon: architectureIcon },
  { title: 'Smart Contract Design & Development', description: 'We develop custom smart contracts that can suit multiple industries. The team ensures the delivery of error-free creation and management of smart contracts on any compatible blockchain using understandable digital agreements.', icon: designIcon },
  { title: 'Smart Contract Optimization', description: 'We ensure smart contract optimization by implementing engineering improvements like short-circuiting, fixed-size byte array, and use of libraries while also reducing transaction costs and facilitating wastage reduction.', icon: optimizationIcon },
  { title: 'Smart Contract For Decentralized Applications', description: 'We develop DApps with smart contracts to facilitate direct interaction between two trading or transacting parties. We help businesses achieve objectives and streamline operations to increase the overall efficiency levels.', icon: dAppsIcon },
  { title: 'Smart Contract For DEX', description: 'Our team develops smart contract powered decentralized exchanges with Ethereum, EOS, and others. Exchange businesses can safeguard end user’s data privacy, private keys, digital assets, business logic, and data maintenance.', icon: dexIcon },
  { title: 'Smart Contract For Digital Wallets', description: 'We are a Cryptocurrency exchange software development team that lets businesses execute safe transactions without depending upon any third party. Multi-signature digital wallets with smart contracts make storage and exchange of digital assets secure.', icon: digitalWalletsIcon },
];

const SmartContractDevelopment = () => {
  return (
    <section className={styles.smartContractSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Constituents Of Our Smart Contract Development Services</h2>
        <p className={styles.description}>
          Adopt the next wave of digital business with our enterprise-grade smart contract solutions. Hire the best white label decentralized exchange software development company.
        </p>

        <div className={styles.smartContractFeatures}>
          {smartContractFeatures.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <img src={feature.icon} alt={feature.title} className={styles.icon} />
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.promoSection}>
          <img src={cryptoServiceImage} alt="Cryptocurrency Services" className={styles.promoImage} />
          <div className={styles.promoContent}>
            <h3>Get A More Resilient & Truly Global Cryptocurrency Exchange Platform Development Services</h3>
            <button className={styles.meetButton}>Meet with us {'>'}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartContractDevelopment;
