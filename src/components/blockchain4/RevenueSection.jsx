// components/RevenueSection.jsx
import styles from "./RevenueSection.module.scss";
import ads from "../../assets/blockchain4/ads.png";
import buy from "../../assets/blockchain4/buytoplay.png";
import game from "../../assets/blockchain4/gameass.png";
import nftmarket from "../../assets/blockchain4/nftmarket.png";

import decent from "../../assets/blockchain4/decent.png";
import customize from "../../assets/blockchain4/customize.png";
import secure from "../../assets/blockchain4/secur.png";
import trans from "../../assets/blockchain4/trans.png";
import verify from "../../assets/blockchain4/verify.png";
import swift from "../../assets/blockchain4/swift.png";

import glass from "../../assets/token/glass.png";

const revenueItems = [
  {
    id: 1,
    title: "NFT Marketplace",
    description:
      "With our affordable NFT marketplace development service, we turn your NFT project idea into reality. Our in-depth knowledge of ERC token stands enable us to build a user-centric NFT marketplace platform.",
    icon: nftmarket,
  },
  {
    id: 2,
    title: "Game Assets",
    description:
      "Game assets such as skins, tokens, weapons, and more are an excellent way of generating revenue for web3 games. Players can sell in-game tokens on third-party marketplaces to earn money.",
    icon: game,
  },
  {
    id: 3,
    title: "In-game Advertising",
    description:
      "In-game advertising such as reward videos, banner advertisements, non skip video ads, and brand promotions is one of the most efficient ways in which a web3 game can generate revenue.",
    icon: ads,
  },
  {
    id: 4,
    title: "Buy-to-play",
    description:
      "Players need to buy game tokens or pay a fixed amount to access new game content or keep on playing the game. Buy-to-play is a popular revenue generation model in premium web3 games.",
    icon: buy,
  },
];

const services = [
  {
    id: 1,
    title: "Transparency",
    description:
      "Hire web3 developers to launch decentralized web3 games and offer unparalleled transparency to players.",
    icon: trans,
  },
  {
    id: 2,
    title: "High-Level Security",
    description:
      "Our web3 game platforms are deployed with advanced security layers such as SSL implementation, 2FA, and encrypted access.",
    icon: secure,
  },
  {
    id: 3,
    title: "Verifiability",
    description:
      "With decentralized distributed ledger anyone within the system can get full details about transactions and benefit from verifiability.",
    icon: verify,
  },
  {
    id: 4,
    title: "Decentralized",
    description:
      "Our web3 game platform is decentralized in nature to enhance transparency and aid in data being spread across the network.",
    icon: decent,
  },
  {
    id: 5,
    title: "Swifty Payments",
    description:
      "Leverage our expertise in web3 game development to build a platform that supports swift payments without personal details.",
    icon: swift,
  },
  {
    id: 6,
    title: "Customizable",
    description:
      "Our web3 game solutions are highly customizable making it easier to integrate in-game tokens and digital assets.",
    icon: customize,
  },
];

const marketPlaceCards = [
  {
    title: "Blockchain",
    description:
      "Take advantage of our blockchain development expertise to solve current issues with web3 game development. Integrate blockchain in web3 game solutions and allow players to buy, sell or trade ",
  },
  {
    title: "Smart Contracts",
    description:
      "Whether playing role-play games or action games, the integration of blockchain-based smart contracts provides transparency. With predefined game rules and conditions, players won’t have to worry about anything ",
  },
  {
    title: "Asset Ownership",
    description:
      "Our team mints in-game assets like tokens, weapons, skins, etc to unique and rare non-fungible tokens. Players can buy, sell or trade these in-game assets/tokens to create a distinct avatar with unique attributes  ",
  },
  {
    title: "Gaming Architecture",
    description:
      "Take advantage of our blockchain development expertise to solve current issues with web3 game development. Integrate blockchain in web3 game solutions and allow players to buy, sell or trade  ",
  },
  {
    title: "Micro Payments",
    description:
      "Whether playing role-play games or action games, the integration of blockchain-based smart contracts provides transparency. With predefined game rules and conditions, players won’t have to worry about anything  ",
  },
  {
    title: "Game Tokens",
    description:
      "Our team mints in-game assets like tokens, weapons, skins, etc to unique and rare non-fungible tokens. Players can buy, sell or trade these in-game assets/tokens to create a distinct avatar with unique attributes ",
  },
];

const RevenueSection = () => {
  return (
    <>
      <section className={styles["revenue-section"]}>
        <h2>Web3 Game Development: How to Generate Revenue?</h2>
        <div className={styles["revenue-section__items"]}>
          {revenueItems.map((item) => (
            <div key={item.id} className={styles["revenue-section__item"]}>
              <img src={item.icon} alt="" />
              <div className={styles["revenue-section__item__content"]}>
                <h3 className={styles["revenue-section__item__title"]}>
                  {item.title}
                </h3>
                <p className={styles["revenue-section__item__description"]}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["service-section"]}>
        <h2>How Will Web3 Game Development Change The Future?</h2>
        <div className={styles["service-section__cards"]}>
          {services.map((service) => (
            <div key={service.id} className={styles["service-card"]}>
              <img
                src={service.icon}
                alt={service.title}
                className={styles["service-card__icon"]}
              />
              <h3 className={styles["service-card__title"]}>{service.title}</h3>
              <p className={styles["service-card__description"]}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.marketplaceContainer}>
        <h2 className={styles.marketplaceTitle}>
          Market Your NFT Token Marketplace Where it Matters
        </h2>
        <p>
          Our RisingMax leaders are determined to follow and create their own
          strategy plans to pitch your business revenue. Along with that, we
          provide suggestions to develop products that set the market trends to
          lead your business journey.
        </p>
        <div className={styles.marketplaceCards}>
          {marketPlaceCards.map((card, index) => (
            <div key={index} className={styles.marketplaceCard}>
              <div className={styles.cardIcon}>
                <img src={glass} alt="" />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RevenueSection;
