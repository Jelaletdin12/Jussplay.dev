import React from "react";
import styles from "./CryptoPlatformGrid.module.scss";

import robinhoodIcon from "../../assets/blockchain6/robinhood-app-icon.png";
import coinbaseIcon from "../../assets/blockchain6/coinbase-app-icon.png";
import openseaIcon from "../../assets/blockchain6/opensea-app-icon.png";
import raribleIcon from "../../assets/token/Rarible.jpg";
import bitpayIcon from "../../assets/blockchain6/bitpay-app-icon.png";
import poloniexIcon from "../../assets/blockchain6/poloniex-app-icon.png";
import cashappIcon from "../../assets/blockchain6/cashapp-app-icon.png";
import metamaskIcon from "../../assets/blockchain6/matamask-app-icon.png";
import binanceIcon from "../../assets/blockchain6/binance-app-icon.png";
import wazirxIcon from "../../assets/blockchain6/wazrix-app-icon.png";
import upstoxIcon from "../../assets/blockchain6/upstox-app-icon.png";
import webullIcon from "../../assets/blockchain6/webull-app-icon.png";

const platforms = [
  { name: "Robinhood Clone", image: robinhoodIcon },
  { name: "CoinBase Clone", image: coinbaseIcon },
  { name: "OpenSea Clone", image: openseaIcon },
  { name: "Rarible Clone", image: raribleIcon },
  { name: "BitPay Clone", image: bitpayIcon },
  { name: "Poleniex Clone", image: poloniexIcon },
  { name: "CashApp Clone", image: cashappIcon },
  { name: "MetaMask Clone", image: metamaskIcon },
  { name: "Binance Clone", image: binanceIcon },
  { name: "WazirX Clone", image: wazirxIcon },
  { name: "Upstox Clone", image: upstoxIcon },
  { name: "WeBull Clone", image: webullIcon },
];

const CryptoPlatformGrid = () => {
  return (
    <section className={styles.gridSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          We Have Already Developed Cryptocurrency Exchange & NFT Platforms
        </h2>
        <p className={styles.description}>
          Successful cryptocurrency exchanges are very profitable for their
          owners, even if they are not very large. Exchanges make money on
          trading commissions. Launch your NFT or Crypto Exchange platform
          without investing much time and hard earned money.
        </p>
        <div className={styles.grid}>
          {platforms.map((platform, index) => (
            <div key={index} className={styles.gridItem}>
              <img
                src={platform.image}
                alt={platform.name}
                className={styles.icon}
              />
              <p>{platform.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoPlatformGrid;
