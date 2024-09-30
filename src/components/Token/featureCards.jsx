import styles from "./featureCards.module.scss";

import dashboard from "../../assets/token/dashboard.png";
import well from "../../assets/token/welldefining.png";
import trade from "../../assets/token/trade.png";
import tok1 from "../../assets/token/tok1.png";
import tok2 from "../../assets/token/tok2.png";
import tok3 from "../../assets/token/tok3.png";
import tok4 from "../../assets/token/tok4.png";
import glass from "../../assets/token/glass.png";

const FeatureCards = () => {
  const cards = [
    {
      title: "Definite Dashboard",
      description: "We bring benefits through certain benchmark criteria...",
      icon: dashboard,
    },
    {
      title: "Well-Defined",
      description: "Our NFT development is well-defined through its ability...",
      icon: well,
    },
    {
      title: "Trade-Off Listing",
      description: "Our NFT development facilitates easy showcasing...",
      icon: trade,
    },
  ];

  const standards = [
    {
      title: "ERC-721",
      description:
        "Being the most common NFT standard, each of the tokens are unique and can also be priced separately.",
      img: tok1,
    },
    {
      title: "ERC-1155",
      description:
        "Users can trade fungible and non-fungible tokens with the same smart contract and address.",
      img: tok2,
    },
    {
      title: "ERC-998",
      description:
        "ERC-998 enables digital assets to be composed into complex positions and trade them as a single owner.",
      img: tok3,
    },
    {
      title: "TRC-721",
      description:
        "TRC-721 is made up of a set of parameters that issues non-fungible tokens on the TRON blockchain.",
      img: tok4,
    },
  ];

  const marketPlaceCards = [
    {
      title: "Ideas and its Implementation",
      description:
        "Our experts ensure that your product idea and its implementation will advertise in all the parameters comprising good documentation and presentation that is technically implemented, website, and other essential documents.",
    },
    {
      title: "Social Media Marketing",
      description:
        "It has been a myth that NFT is only limited to crypto experts; it is also essential for the general audience. The NFT not only eases up the process but aware the broad audience of why and how it is necessary to be a part of atrend or a digital img",
    },
    {
      title: "Building Community",
      description:
        "It has been tested and proven that crypto projects run or operate in a community only. NFT will never be an exception. Therefore the community of such people not only supports your NFT token platform ",
    },
  ];

  return (
    <>
      <section className={styles.featureCardsContainer}>
        <h2>NFT Token Development Company For Your Niche NFT Project</h2>
        <div className={styles.frameCards}>
          {cards.map((card, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <img src={card.icon} alt="" />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.expertiseContainer}>
        <h2 className={styles.expertiseTitle}>
          Our Expertise as an Non Fungible Token Development Company
        </h2>
        <p>
          The most common types of NFT token standards are ERC-721, ERC-1155,
          ERC-998, and TRC-721
        </p>
        <div className={styles.tokenStandards}>
          {standards.map((standard, index) => (
            <div key={index} className={styles.standardCard}>
              <img src={standard.img} alt="" />
              <h3 className={styles.cardTitle}>{standard.title}</h3>
              <p className={styles.cardDescription}>{standard.description}</p>
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

export default FeatureCards;
