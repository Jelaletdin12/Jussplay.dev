import { PiTriangleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import styles from "./dropdown.module.scss";

import cardano from "../../assets/blockchain/cardano-icon.svg";
import cryptoEx from "../../assets/blockchain/crypto-exchange-icon.svg";
import cryptoWallet from "../../assets/blockchain/crypto-wallet-icon.svg";
import ethereum from "../../assets/blockchain/ethereum-icon.svg";
import hyperledger from "../../assets/blockchain/hyperledger-icon.svg";
import metaverse from "../../assets/blockchain/metaverse-development-icon.svg";
import nftGame from "../../assets/blockchain/nft-game-icon.svg";
import nftToken from "../../assets/blockchain/nft-token-icon.svg";
import polygon from "../../assets/blockchain/polygon-icon.svg";
import ripple from "../../assets/blockchain/ripple-icon.svg";
import solana from "../../assets/blockchain/solana-icon.svg";
import stellar from "../../assets/blockchain/stellar-icon.svg";
import webDev from "../../assets/blockchain/web3-development-icon.svg";
import webGame from "../../assets/blockchain/web3-game-icon.svg";
import chainTest from "../../assets/service/blockchain-testing-icon.svg";

export const DropdownBlockchain = () => {
  return (
    <div className={styles.dropdown} style={{ width: "900px", left: "-600%" }}>
      <div className={styles.dropdown__left} style={{ width: "60%" }}>
        <div className={styles.dropdown__header} style={{ padding: "13px" }}>
          <h4>BLockchain Development Services</h4>
        </div>
        <ul>
          <li>{renderLeftContentBlock()}</li>
          <li>{renderRightContentBlock()}</li>
        </ul>
        <div className={styles.dropdown__leftBottom}>
          <div className={styles.dropdown__wrap}>
            <img src={chainTest} alt="Blockchain Testing Icon" />
            <div>
              <h4>Blockchain Testing</h4>
              <p>
                Functional, API, performance, node, security, and other testing
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dropdown__right} style={{ width: "40%" }}>
        <PiTriangleFill />
        <div className={styles.dropdown__header}>
          <h4>Blockchain Networks</h4>
        </div>
        {renderNetworkIcons()}
      </div>
    </div>
  );
};

// Helper Functions for Render
const renderLeftContentBlock = () => {
  const items = [
    {
      src: nftGame,
      link: "/blockchain",
      title: "NFT Game Development",
      desc: "Rule the next gaming era with our NFT game solution.",
    },
    {
      src: nftToken,
      link: "/nft-token-development",
      title: "NFT Token Development",
      desc: "Launch NFT tokens on Ethereum, Binance, Solana, and others.",
    },
    {
      src: metaverse,
      link: "/metaverse",
      title: "Metaverse Development",
      desc: "Empowering startups and enterprises to strengthen their footprint.",
    },
    {
      src: webGame,
      link: "/web3-game-development",
      title: "Web3 Game Development",
      desc: "Launch P2E, M2E, NFT cards & immersive web3 games.",
    },
  ];

  return items.map((item, index) => (
    <div key={index} className={styles.dropdown__wrap}>
      <div>
        <img src={item.src} alt={`${item.title} Icon`} />
      </div>
      <Link to={item.link}>
        <div>
          <h6>{item.title}</h6>
          <p>{item.desc}</p>
        </div>
      </Link>
    </div>
  ));
};

const renderRightContentBlock = () => {
  const items = [
    {
      src: cryptoEx,
      link: "/blockchain_6",
      title: "Crypto Exchange Development",
      desc: "Unlock new revenue stream with crypto exchange software.",
    },
    {
      src: cryptoWallet,
      link: "/wallet",
      title: "Crypto Wallet Development",
      desc: "Build web, mobile, and desktop multi-currency wallets.",
    },
    {
      src: webDev,
      link: "/web3",
      title: "Web3 Game Development",
      desc: "Transform your business with our high-end web3 project development.",
    },
  ];

  return items.map((item, index) => (
    <div key={index} className={styles.dropdown__wrap}>
      <div>
        <img src={item.src} alt={`${item.title} Icon`} />
      </div>
      <Link to={item.link}>
        <div>
          <h6>{item.title}</h6>
          <p>{item.desc}</p>
        </div>
      </Link>
    </div>
  ));
};

const renderNetworkIcons = () => {
  const networks = [
    { src: ethereum, title: "Ethereum" },
    { src: solana, title: "Solana" },
    { src: cardano, title: "Cardano" },
    { src: stellar, title: "Stellar" },
    { src: polygon, title: "Polygon" },
    { src: hyperledger, title: "Hyperledger" },
    { src: ripple, title: "Ripple" },
  ];

  return networks.map((network, index) => (
    <div key={index} className={styles.dropdown__wrap}>
      <div>
        <img src={network.src} alt={`${network.title} Icon`} />
      </div>
      <div>
        <h6>{network.title}</h6>
      </div>
    </div>
  ));
};
