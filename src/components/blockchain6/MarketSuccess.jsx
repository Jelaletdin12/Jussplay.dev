import React from 'react';
import styles from './MarketSuccess.module.scss';

// İkonları import et
import marketResearchIcon from '../../assets/blockchain6/computer_solution_technology.png';
import bugFreeIcon from '../../assets/blockchain6/market_research_shopping_chart.png';
import maintenanceIcon from '../../assets/blockchain6/configurationdevelopment.png';
import crypto from '../../assets/blockchain6/crypto.png'; 

const marketFeatures = [
  {
    title: 'Market Research Analysis',
    description: 'We conduct smart market research and analysis in addition to latest trends, features & functionalities that can make the solution outshine others.',
    image: marketResearchIcon,
  },
  {
    title: 'Robust & Bug-free Solution',
    description: 'Being the most reliable Cryptocurrency exchange software development company, we utilize the synergy of strategic vision and technical expertise to build robust and bug-free solutions.',
    image: bugFreeIcon,
  },
  {
    title: 'Post Development Maintenance',
    description: 'Our team makes sure to stay connected with the clients even after the platform has been launched to provide post development suggestions and upgrades to maintain it.',
    image: maintenanceIcon,
  },
];

const MarketSuccessGrid = () => {
  return (
    <section className={styles.gridSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>We Are Perfectionists Delivering Market Success</h2>
        <p className={styles.description}>
          RisingMax is a best-in-class white label decentralized exchange software development that develops cost-effective white label crypto exchange solutions.
        </p>
        <div className={styles.grid}>
          {marketFeatures.map((feature, index) => (
            <div key={index} className={styles.gridItem}>
              <img src={feature.image} alt={feature.title} className={styles.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cryptoSection}>
        <div className={styles.cryptoContents}>
        <h3>Cryptocurrency is a major financial trend of modern times</h3>
        <p>
          Be a part of the paradigm shift and take users away from bank controlled centralized currencies.
        </p>
        <button className={styles.meetButton}>Meet with us</button>
        </div>
        <div className={styles.cryptoIcons}>
          <img src={crypto} alt="Bitcoin" className={styles.cryptoIcon} />
        </div>
      </div>
    </section>
  );
};

export default MarketSuccessGrid;
