import React from "react";
import styles from "./CryptoExchangeFeatures.module.scss";

import tpsIcon from "../../assets/blockchain6/ML01.png";
import tradeEngineIcon from "../../assets/blockchain6/power-trade.png";
import multiWalletIcon from "../../assets/blockchain6/Multi-currency.png";
import tokenIcon from "../../assets/blockchain6/token.png";
import kycIcon from "../../assets/blockchain6/KYC.png";
import liquidityIcon from "../../assets/blockchain6/cryton-lquidity.png";
import uiIcon from "../../assets/blockchain6/ML07.png";
import escrowIcon from "../../assets/blockchain6/ML08.png";
import adminPanelIcon from "../../assets/blockchain6/admin-crytpon.png";
import dexServiceImage from "../../assets/blockchain6/page6.png";

const cryptoExchangeFeatures = [
  { title: "High TPS", icon: tpsIcon },
  { title: "Powerful trade engine", icon: tradeEngineIcon },
  { title: "Multi currency wallet", icon: multiWalletIcon },
  { title: "Token Representation", icon: tokenIcon },
  { title: "KYC &AML", icon: kycIcon },
  { title: "Crypto Liquidity", icon: liquidityIcon },
  { title: "Inuitive UI", icon: uiIcon },
  { title: "Escrow service", icon: escrowIcon },
  { title: "Admin Panel", icon: adminPanelIcon },
];

const CryptoExchangeFeatures = () => {
  return (
    <section className={styles.cryptoFeaturesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Undistinguished Features Of Our Crypto Exchange Software
        </h2>
        <p className={styles.description}>
          We embed the best features in our software to meet market standards.
        </p>

        <div className={styles.featuresGrid}>
          {cryptoExchangeFeatures.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <img
                src={feature.icon}
                alt={feature.title}
                className={styles.icon}
              />
              <h3 className={styles.featureTitle}>{feature.title}</h3>
            </div>
          ))}
        </div>

        <div className={styles.promoSection}>
          <img
            src={dexServiceImage}
            alt="DEX Services"
            className={styles.promoImage}
          />
          <div className={styles.promoContent}>
            <h3>
              WE ARE THE STANDOUT WHITE LABEL DEX DEVELOPMENT SERVICES PROVIDER
              COMPANY
            </h3>
            <p>
              Our white label DEX development services necessitate integration
              of the best features and it’s not a cakewalk. You can trust our
              team because we house a dynamic group of designers, developers, QA
              testers, and others. Hire the best team for the development of
              your exchange platform.
            </p>
            <button className={styles.meetButton}>Meet with us {">"}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoExchangeFeatures;
