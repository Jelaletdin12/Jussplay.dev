import styles from "./featureCards.module.scss";

import dashboard from "../../assets/token/dashboard.png";
import well from "../../assets/token/welldefining.png";
import trade from "../../assets/token/trade.png";
import tok1 from "../../assets/token/tok1.png";
import tok2 from "../../assets/token/tok2.png";
import tok3 from "../../assets/token/tok3.png";
import tok4 from "../../assets/token/tok4.png";
import glass from "../../assets/token/glass.png";

const FeatureCard = ({ icon, title, description }) => (
  <div className={styles.featureCard}>
    <div className={styles.cardIcon}>
      <img src={icon} alt={title} />
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
  </div>
);

const StandardCard = ({ img, title, description }) => (
  <div className={styles.standardCard}>
    <img src={img} alt={title} />
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
  </div>
);

const MarketplaceCard = ({ icon, title, description }) => (
  <div className={styles.marketplaceCard}>
    <div className={styles.cardIcon}>
      <img src={icon} alt={title} />
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
  </div>
);

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
        "NFT is not only limited to crypto experts but also targets the general audience. It eases up the process and raises awareness about the importance of digital assets.",
    },
    {
      title: "Building Community",
      description:
        "Crypto projects thrive within communities, and NFT is no exception. Building a supportive community ensures the success of your NFT token platform.",
    },
  ];

  return (
    <>
      {/* Feature Cards Section */}
      <section className={styles.featureCardsContainer}>
        <h2>NFT Token Development Company For Your Niche NFT Project</h2>
        <div className={styles.frameCards}>
          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className={styles.expertiseContainer}>
        <h2 className={styles.expertiseTitle}>
          Our Expertise as a Non-Fungible Token Development Company
        </h2>
        <p>
          The most common types of NFT token standards are ERC-721, ERC-1155,
          ERC-998, and TRC-721.
        </p>
        <div className={styles.tokenStandards}>
          {standards.map((standard, index) => (
            <StandardCard
              key={index}
              title={standard.title}
              description={standard.description}
              img={standard.img}
            />
          ))}
        </div>
      </section>

      {/* Marketplace Section */}
      <div className={styles.marketplaceContainer}>
        <h2 className={styles.marketplaceTitle}>
          Market Your NFT Token Marketplace Where it Matters
        </h2>
        <p>
          Our leaders at RisingMax follow custom strategies to pitch your
          business and provide valuable insights for product development,
          setting market trends, and driving business success.
        </p>
        <div className={styles.marketplaceCards}>
          {marketPlaceCards.map((card, index) => (
            <MarketplaceCard
              key={index}
              title={card.title}
              description={card.description}
              icon={glass}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureCards;
