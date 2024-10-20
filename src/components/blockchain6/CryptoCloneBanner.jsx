import React from "react";
import styles from "./CryptoCloneBanner.module.scss";

import page6 from "../../assets/blockchain6/page6.png";
import { IoIosArrowForward } from "react-icons/io";
const CryptoCloneBanner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={page6} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Get Readymade Clone Of Exchange Development Solutions
          </h2>
          <p className={styles.description}>
            Our white label software is underpinned by the following features to
            deliver world-class performance
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
  );
};

export default CryptoCloneBanner;
