import React from "react";
import styles from "./WalletDevelopmentServices.module.scss";

import tick from "../../assets/blockchain6/Vector.png";

import fasterToMarketIcon from "../../assets/blockchain6/faster-to-market.png";
import costEfficientIcon from "../../assets/blockchain6/Cost-efficient.png";
import customizableIcon from "../../assets/blockchain6/Customizable.png";
import liquiditySecurityIcon from "../../assets/blockchain6/security-integrations.png";
import bugFreeIcon from "../../assets/blockchain6/Bug-free-solution.png";
import localFavoritesIcon from "../../assets/blockchain6/Local-Favorites.png";

const walletFeatures = [
  {
    title: "Bill Payments",
    description:
      "Crypto wallet solutions provide safer and cheaper utility payment options while providing secure access to digital assets.",
  },
  {
    title: "Biometric Authentication",
    description:
      "Our white label crypto wallet has in-built biometric security methods to make it highly safe and secure for users.",
  },
  {
    title: "Data Masking",
    description:
      "Integration of blockchain technology like data masking into wallet security apps provides privacy and data protection to users.",
  },
  {
    title: "Cold Wallet Development",
    description:
      "Efficient and secure solutions to manage and trade your crypto coins and private keys by developing cryptocurrency wallets.",
  },
  {
    title: "Peer-to-peer Transactions",
    description:
      "We enable decentralized P2P exchange or information sharing, data, or assets between peers without any intermediaries.",
  },
  {
    title: "Multi-currency Support",
    description:
      "It is important for a Cryptocurrency platform to have multi-currency wallets with exceptional UI/UX supporting crypto coins.",
  },
  {
    title: "Multisig Wallet",
    description:
      "Multisig wallet supports Cryptocurrency management while adding an additional security factor in authentication.",
  },
  {
    title: "Desktop, Mobile & Web Wallets",
    description:
      "Our white label crypto wallets are compatible across blockchain platforms, devices, and operating systems.",
  },
];

const investmentReasons = [
  { title: "Faster to market", icon: fasterToMarketIcon },
  { title: "Cost-efficient", icon: costEfficientIcon },
  { title: "Customizable", icon: customizableIcon },
  { title: "Liquidity & security integrations", icon: liquiditySecurityIcon },
  { title: "Bug-free solution", icon: bugFreeIcon },
  { title: "Local Favorites", icon: localFavoritesIcon },
];

const WalletDevelopmentServices = () => {
  return (
    <section className={styles.walletDevelopmentSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          CAPITALIZE ON WHITE LABEL CRYPTO WALLET DEVELOPMENT SERVICES
        </h2>
        <p className={styles.description}>
          Our extensively experienced developers create solutions with core
          functionalities and robust architecture while complying with security
          standards.
        </p>

        <div className={styles.walletFeatures}>
          {walletFeatures.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <img src={tick} alt={feature.title} className={styles.icon} />
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.investmentSection}>
          <h3>
            Why Invest In Hiring A Cryptocurrency Exchange Software Development
            Company?
          </h3>
          <p className={styles.description}>
            Leverage the potential of a solution developed by an exchange
            software development company.
          </p>

          <div className={styles.investmentReasons}>
            {investmentReasons.map((reason, index) => (
              <div key={index} className={styles.reasonItem}>
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className={styles.icon}
                />
                <p className={styles.reasonTitle}>{reason.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletDevelopmentServices;
