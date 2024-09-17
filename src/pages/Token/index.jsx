import React from "react";
import Services from "../../components/Token/services";
import NftCards from "../../components/Token/NftCards";
import Features from "../../components/Token/Features";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import styles from "./token.module.scss";
import { HeaderBlockchain } from "../../components/Blockchain/HeaderBlockchain";
import icon1 from '../../assets/token/ic1.png'
import icon2 from '../../assets/token/ic2.png'
import icon3 from '../../assets/token/ic3.png'
import icon4 from '../../assets/token/ic4.png'

const Token = () => {
  return (
    <div className={styles.appContainer}>
      <Header/>
      <HeaderBlockchain />
      <Services />
      <NftCards />
      <Features />
      <div className={styles.frame}>
      <div className={styles.header}>
      <h2>Non Fungible Token and Blockchain Relationship</h2>
      <p>
        Do not confuse the NFT with crypto. The only thing they have in common
        is Blockchain. Have a look at it how ?
      </p>
      </div>
      <div className={styles.service}>
        <div className={styles.items}>
          <img src={icon3} alt="" />
          <div className={styles.itemsContent}>
            <p>
            NFT is stored securely in Blockchain, which means the tokens can never be removed, destroyed, or replicated no matter what.
            </p>
          </div>
        </div>
        <div className={styles.items}>
          <img src={icon4} alt="" />
          <div className={styles.itemsContent}>
            <p>
            NFT is stored securely in Blockchain, which means the tokens can never be removed, destroyed, or replicated no matter what.
            </p>
          </div>
        </div>
        <div className={styles.items}>
          <img src={icon2} alt="" />
          <div className={styles.itemsContent}>
            <p>
            NFT is stored securely in Blockchain, which means the tokens can never be removed, destroyed, or replicated no matter what.
            </p>
          </div>
        </div>
        <div className={styles.items}>
          <img src={icon1} alt="" />
          <div className={styles.itemsContent}>
            <p>
            NFT is stored securely in Blockchain, which means the tokens can never be removed, destroyed, or replicated no matter what.
            </p>
          </div>
        </div>
        <div className={styles.items}>
          <img src={icon3} alt="" />
          <div className={styles.itemsContent}>
            <p>
            NFT is stored securely in Blockchain, which means the tokens can never be removed, destroyed, or replicated no matter what.
            </p>
          </div>
        </div>
        <div className={styles.items}>
          <img src={icon4} alt="" />
          <div className={styles.itemsContent}>
            <p>
            NFT is stored securely in Blockchain, which means the tokens can never be removed, destroyed, or replicated no matter what.
            </p>
          </div>
        </div>
        <div className={styles.items}>
          <img src={icon2} alt="" />
          <div className={styles.itemsContent}>
            <p>
            NFT is stored securely in Blockchain, which means the tokens can never be removed, destroyed, or replicated no matter what.
            </p>
          </div>
        </div>
        <div className={styles.items}>
          <img src={icon1} alt="" />
          <div className={styles.itemsContent}>
            <p>
            NFT is stored securely in Blockchain, which means the tokens can never be removed, destroyed, or replicated no matter what.
            </p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Token;
