import styles from "./empowering.module.scss";
import compat from "../../assets/token/compet.png";
import Customize from "../../assets/token/Customize.png";
import efficiency from "../../assets/token/efficiency.png";
import equality from "../../assets/token/equality.png";
import lassets from "../../assets/token/lassets.png";
import liquidity from "../../assets/token/liquidity.png";
import intermediaries from "../../assets/token/Nointermediaries.png";
import Sec from "../../assets/token/SEC.png";
import Secure from "../../assets/token/Secure.png";
import Secure2 from "../../assets/token/Secure2.png";
import contract from "../../assets/token/contracts.png";
import blockchain from "../../assets/token/blockchain.png";
import block from "../../assets/token/block.png";
import nft from "../../assets/token/nft.png";
import storage from "../../assets/token/storage.png";
import customized from "../../assets/token/customized.png";
import supportive from "../../assets/token/supportive.png";
import securityrich from "../../assets/token/securityrich.png";
import transparent from "../../assets/token/transparent.png";
import leftimg from "../../assets/token/leftimg.png";
import { IoIosArrowForward } from "react-icons/io";

// Reusable Components
const FeatureCard = ({ title, icon }) => (
  <div className={styles.featureCard}>
    <div className={styles.icon}>
      <img src={icon} alt={title} />
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
  </div>
);

const PlatformCard = ({ icon }) => (
  <div className={styles.platformCard}>
    <img className={styles.platformImg} src={icon} alt="Platform" />
  </div>
);

const ReasonCard = ({ title, description, img }) => (
  <div className={styles.reasonCard}>
    <img src={img} alt={title} />
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
  </div>
);

const EmpoweringSection = () => {
  const features = [
    { title: "Programmable Equity", icon: equality },
    { title: "Fractionalization of Larger Assets", icon: lassets },
    { title: "Increase in Liquidity", icon: liquidity },
    { title: "Automated SEC Compliance", icon: Sec },
    { title: "Secure Wallet", icon: Secure2 },
    { title: "Global Capital Investment", icon: Secure },
    { title: "Greater Market Efficiency", icon: efficiency },
    { title: "No Intermediaries", icon: intermediaries },
    { title: "Customized Blockchain", icon: Customize },
    { title: "Tailored Smart Contracts", icon: contract },
  ];

  const platforms = [blockchain, block, nft, storage];

  const reasons = [
    {
      title: "Core Team of NFT Experts",
      description:
        "We have a team of skilled blockchain experts with in-depth knowledge of protocols and NFT standards.",
      img: customized,
    },
    {
      title: "Project Confidentiality",
      description:
        "We sign NDAs to ensure customer privacy and never disclose project-related information.",
      img: securityrich,
    },
    {
      title: "Expertise in Blockchain Platforms",
      description:
        "Our team works across multiple platforms, including Ethereum.",
      img: transparent,
    },
    {
      title: "Quick and Agile Development",
      description:
        "We follow agile development practices for timely delivery of tested NFTs.",
      img: supportive,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.empoweringContainer}>
        <div className={styles.featuresBox}>
          <img src={compat} alt="Empowering Creators" />
          <div className={styles.boxContent}>
            <h2>
              Empowering Creators Worldwide With NFT Token Development Services
            </h2>
            <p>
              Game assets are the core of NFTs, offering unique characters and
              features for an exclusive experience. These functionalities drive
              profits for art and game developers.
            </p>
            <button>
              Meet with Us <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>

      {/* Alternative Section */}
      <section className={styles.alternative}>
        <div className={styles.alterImg}>
          <img src={leftimg} alt="Alternative to Finance" />
        </div>
        <div className={styles.alterDes}>
          <h2>
            An Alternative to Traditional Finance with NFT Token Development
          </h2>
          <p>
            NFTs store unique data in smart contracts, making them
            one-of-a-kind. They represent real-world assets, enabling ownership
            and secure transactions.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresContainer}>
        <h2 className={styles.featuresTitle}>
          Designing a Versatile NFT Token Marketplace with High-End Features
        </h2>
        <p>
          We offer end-to-end NFT development services for secure asset
          tokenization and ownership. Our expert team delivers versatile
          marketplaces for buying and selling digital assets.
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={styles.techStackContainer}>
        <h2 className={styles.title}>Technology Stack for NFT Development</h2>
        <div className={styles.platformsGrid}>
          {platforms.map((icon, index) => (
            <PlatformCard key={index} icon={icon} />
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className={styles.whyUsContainer}>
        <h2 className={styles.title}>
          Why Trust Us for NFT Token Development?
        </h2>
        <p className={styles.titledes}>
          We help clients dominate their industries by transforming innovative
          ideas into NFT-based platforms.
        </p>
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              title={reason.title}
              description={reason.description}
              img={reason.img}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default EmpoweringSection;
