// components/BlockchainExpertiseSection.jsx
import styles from "./BlockChainExpertise.module.scss";
import left from "../../assets/blockchain4/left.png";
import right from "../../assets/blockchain4/right.png";

import binance from "../../assets/blockchain4/binance.png";
import xinfin from "../../assets/blockchain4/xinfin.png";
import moon from "../../assets/blockchain4/moonbeam.png";
import aurora from "../../assets/blockchain4/aurora.png";
import optimum from "../../assets/blockchain4/optimum.png";
import fantom from "../../assets/blockchain4/fantom.png";
import eos from "../../assets/blockchain4/eos.png";
import telos from "../../assets/blockchain4/telos.png";
import cronos from "../../assets/blockchain4/cronos.png";
import cordana from "../../assets/blockchain4/cordana.png";

const expertiseItems = [
  { id: 1, icon: binance, title: "Binance" },
  { id: 2, icon: cordana, title: "Cardano" },
  { id: 3, icon: moon, title: "MoonBeam" },
  { id: 4, icon: aurora, title: "Aurora" },
  { id: 5, icon: optimum, title: "Optimum" },
  { id: 6, icon: cronos, title: "Cronos" },
  { id: 7, icon: xinfin, title: "XinFin" },
  { id: 8, icon: telos, title: "Telos EVM" },
  { id: 9, icon: fantom, title: "Fantom" },
  { id: 10, icon: eos, title: "EOS" },
];

const BlockchainExpertiseSection = () => {
  return (
    <>
      <section className={styles["game-development-container"]}>
        <h2>Our Expertise As a Web3 Game Development Company</h2>
        <p>
          Leverage our expertise in leading blockchain to launch web3 games on
          major blockchain networks.
        </p>
        <div className={styles["game-development"]}>
          <div className={styles["game-development__left"]}>
            <img src={left} alt="" />
            <div className={styles["game-development__left__content"]}>
              <div className={styles["game-development__left__content__first"]}>
                <h2>Polygon Web3 Game Development</h2>
                <p>
                  Leverage the potential of polygon blockchain for web3 game
                  development and enjoy high speed, low fees, and
                  interoperability.
                </p>
              </div>
              <div
                className={styles["game-development__left__content__second"]}
              >
                <h2>Solana Web3 Game Development</h2>
                <p>
                  Build web3 games on the Solana blockchain and enjoy high
                  transaction speed per second with proof of history (POH).
                </p>
              </div>
            </div>
          </div>
          <div className={styles["game-development__right"]}>
            <img src={right} alt="" />
            <div className={styles["game-development__right__content"]}>
              <div
                className={styles["game-development__right__content__first"]}
              >
                <h2>Polygon Web3 Game Development</h2>
                <p>
                  Leverage the potential of polygon blockchain for web3 game
                  development and enjoy high speed, low fees, and
                  interoperability.
                </p>
              </div>
              <div
                className={styles["game-development__right__content__second"]}
              >
                <h2>Solana Web3 Game Development</h2>
                <p>
                  Build web3 games on the Solana blockchain and enjoy high
                  transaction speed per second with proof of history (POH).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["blockchain-expertise"]}>
        <h2>
          Our Blockchain Expertise As Top Web3 Game Development Service Provider
        </h2>
        <div className={styles["blockchain-expertise__items"]}>
          {expertiseItems.map((item) => (
            <div key={item.id} className={styles["blockchain-expertise__item"]}>
              <img src={item.icon} alt="" />
              <h3 className={styles["blockchain-expertise__item__title"]}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlockchainExpertiseSection;
