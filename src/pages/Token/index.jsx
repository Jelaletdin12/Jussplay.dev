import bg from "../../assets/blockchain/01.png";
import icon1 from "../../assets/token/ic1.png";
import icon2 from "../../assets/token/ic2.png";
import icon3 from "../../assets/token/ic3.png";
import icon4 from "../../assets/token/ic4.png";
import { HeaderBlockchain } from "../../components/Blockchain/HeaderBlockchain";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header";
import { CustomScroll } from "../../components/scroll/CustomScroll";
import Features from "../../components/Token/Features";
import NftCards from "../../components/Token/NftCards";
import Services from "../../components/Token/services";
import FeatureCards from "../../components/Token/featureCards";
import EmpoweringSection from "../../components/Token/empowering";
import {
  subTitleNFTTokenHeaderBlockchain,
  titleNFTTokenHeaderBlockchain,
} from "../../components/Util/dataBlockchainPage";
import styles from "./token.module.scss";
import transition from "../../pageTransition";

const token = () => {
  return (
    <CustomScroll>
      <div className={styles.appContainer}>
        <Header />
        <HeaderBlockchain
          title={titleNFTTokenHeaderBlockchain}
          subtitle={subTitleNFTTokenHeaderBlockchain}
        />
        <Services />
        <NftCards />
        <Features />
        <div className={styles.frame}>
          <div className={styles.header}>
            <h2>Understanding the Connection Between NFTs and Blockchain</h2>
            <p>
              NFTs (Non-Fungible Tokens) are often confused with
              cryptocurrencies, but their only shared element is the blockchain
              technology. Here’s how the relationship between NFTs and
              blockchain works:
            </p>
          </div>
          <div className={styles.service}>
            <div className={styles.items}>
              <img src={icon3} alt="" />
              <div className={styles.itemsContent}>
                <p>
                1. Immutable Record: NFTs are permanently recorded on the blockchain, ensuring their existence cannot be erased or altered.
                </p>
              </div>
            </div>
            <div className={styles.items}>
              <img src={icon4} alt="" />
              <div className={styles.itemsContent}>
                <p>
                2.	Proof of Ownership: Blockchain provides a transparent ledger that proves ownership of NFTs, making it verifiable and secure.
                </p>
              </div>
            </div>
            <div className={styles.items}>
              <img src={icon2} alt="" />
              <div className={styles.itemsContent}>
                <p>
                3.	Storage: Unlike traditional systems, blockchain stores NFTs in a decentralized way, ensuring no single party can control or alter the assets.
                </p>
              </div>
            </div>
            <div className={styles.items}>
              <img src={icon1} alt="" />
              <div className={styles.itemsContent}>
                <p>
                4.	Smart Contracts: NFTs are governed by smart contracts on the blockchain, automating transactions and enforcing the terms without the need for intermediaries.
                </p>
              </div>
            </div>
            <div className={styles.items}>
              <img src={icon3} alt="" />
              <div className={styles.itemsContent}>
                <p>
                5.	Interoperability: NFTs can interact with multiple blockchain platforms, allowing seamless movement and trading across different systems.
                </p>
              </div>
            </div>
            <div className={styles.items}>
              <img src={icon4} alt="" />
              <div className={styles.itemsContent}>
                <p>
                6.	Traceability: Blockchain provides a full history of an NFT’s ownership and transaction details, ensuring authenticity and provenance.
                </p>
              </div>
            </div>
            <div className={styles.items}>
              <img src={icon2} alt="" />
              <div className={styles.itemsContent}>
                <p>
                7.	Security: Blockchain’s cryptographic structure protects NFTs from hacking and unauthorized access, making digital assets secure.
                </p>
              </div>
            </div>
            <div className={styles.items}>
              <img src={icon1} alt="" />
              <div className={styles.itemsContent}>
                <p>
                8.	Seamless Transactions: Blockchain streamlines the process of buying, selling, and transferring NFTs, reducing delays and eliminating third-party verification
                </p>
              </div>
            </div>
          </div>
        </div>
        <FeatureCards />
        <EmpoweringSection />
        <img className={styles.bgImg} src={bg} alt="" />
        <Footer />
      </div>
    </CustomScroll>
  );
};

export default transition(token);
