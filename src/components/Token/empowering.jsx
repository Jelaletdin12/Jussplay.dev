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

const EmpoweringSection = () => {
  const features = [
    { title: "Programmable equity", icon: equality },
    { title: "Fractionalization of larger assets", icon: lassets },
    { title: "Increase in liquidity", icon: liquidity },
    { title: "Automated SEC compliance", icon: Sec },
    { title: "Secure wallet", icon: Secure2 },
    { title: "Global capital investment", icon: Secure },
    { title: "Greater market efficiency", icon: efficiency },
    { title: "No intermediaries", icon: intermediaries },
    { title: "Customized blockchain", icon: Customize },
    { title: "Tailored smart contracts", icon: contract },
  ];
  const platforms = [
    { icon: blockchain },
    { icon: block },
    { icon: nft },
    { icon: storage },
  ];

  const reasons = [
    {
      title: "Core Team of NFT Experts",
      description:
        "We have a team of skilled and experienced blockchain experts with in-depth knowledge of blockchain protocols and NFT standards.",
      img: customized,
    },
    {
      title: "Project Confidentiality",
      description:
        "As a reliable NFT development company, we sign a non-disclosure agreement to assure our customers that we never reveal any project-related information.",
      img: securityrich,
    },
    {
      title: "Expertise in Blockchain Platforms",
      description:
        "Our NFT development team has expertise in working on multiple blockchain platforms, including Ethereum",
      img: transparent,
    },
    {
      title: "Quick and Agile Development",
      description:
        "Our team implements an agile development approach to provide on-time delivery of continuously tested NFTs.",
      img: supportive,
    },
  ];

  return (
    <>
      <section className={styles.empoweringContainer}>
        <div className={styles.featuresBox}>
          <img src={compat} alt="" />
          <div className={styles.boxContent}>
            <h2>
              Empowering Creators Worldwide With NFT Token Development Services
            </h2>
            <p>
              Game assets are the main feature of NFTs. The collectibles offered
              in games feature special characters and spectacular features that
              enable an exclusive gaming experience. These functionalities of
              NFT act as a profitable platform for the future of art and game
              developers.
            </p>
            <button>
              Meet with us <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.alternative}>
        <div className={styles.alterImg}>
          <img src={leftimg} alt="" />
        </div>
        <div className={styles.alterDes}>
          <h2>
            An Alternative To Traditional Finance With NFT Token Development
            Company
          </h2>
          <p>
            Non-fungible tokens store identifying data in their smart contracts
            that make them unique. Every NFT represents a particular real-world
            asset and cannot be directly converted to and from another token.
            With RisingMax end-to-end NFT token development services,
            individuals and institutions can ensure total ownership of their
            assets.
          </p>
        </div>
      </section>

      <section className={styles.featuresContainer}>
        <h2 className={styles.featuresTitle}>
          Designing And Developing A Versatile NFT Token Marketplace with
          High-End Features
        </h2>
        <p>
          RisingMax Inc. offers end-to-end NFT development services for
          individuals and institutions to ensure total ownership of their
          digital assets. Get a versatile marketplace designed by our expert
          developers, where assets get tokenized for secure buying & selling and
          ensure digital asset ownership.
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>
                <img src={feature.icon} alt="" />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.techStackContainer}>
        <h2 className={styles.title}>
          Technology Stack We Deploy For Non Fungible Token Development
        </h2>
        <div className={styles.platformsGrid}>
          {platforms.map((platform, index) => (
            <div key={index} className={styles.platformCard}>
              <div className={styles.platformIcon}>
                <img
                  className={styles.platformImg}
                  src={platform.icon}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.whyUsContainer}>
        <h2 className={styles.title}>
          Why Are We a Trusted NFT Token Development Company?
        </h2>
        <p className={styles.titledes}>
          We dominate our business domain to assist our clients in developing
          NFT-based platforms and become a dominating force in their industry.
          Leveraging our expertise in NFT token development, we transform your
          innovative business ideas into reality.
        </p>
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <img src={reason.img} alt="" />
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EmpoweringSection;
