import ServiceSection from "../../components/blockchain4/ServiceSection";
import LaunchGamesSection from "../../components/blockchain4/LaunchGamesSection";
import SuccessStorySection from "../../components/blockchain4/SuccessStorySection";
import RevenueSection from "../../components/blockchain4/RevenueSection";
import BlockchainExpertiseSection from "../../components/blockchain4/BlockChainExpertise";
import GameDevelopmentProcessSection from "../../components/blockchain4/GameDevelopmentProcessSection";
// import BestCompanySection from '../../components/blockchain4/BestCompanySection';
import Footer from "../../components/Footer";
import styles from "./blockchain4.module.scss";
import nyc1 from "../../assets/blockchain4/nyc1.png";
import nyc2 from "../../assets/blockchain4/nyc2.png";
import nyc3 from "../../assets/blockchain4/nyc3.png";
import nyc4 from "../../assets/blockchain4/nyc4.png";

function Blockchain_4() {
  const reasons = [
    {
      title: "Core Team of NFT Experts",
      description:
        "We have a team of skilled and experienced blockchain experts with in-depth knowledge of blockchain protocols and NFT standards.",
      img: nyc1,
    },
    {
      title: "Project Confidentiality",
      description:
        "As a reliable NFT development company, we sign a non-disclosure agreement to assure our customers that we never reveal any project-related information.",
      img: nyc2,
    },
    {
      title: "Expertise in Blockchain Platforms",
      description:
        "Our NFT development team has expertise in working on multiple blockchain platforms, including Ethereum",
      img: nyc3,
    },
    {
      title: "Quick and Agile Development",
      description:
        "Our team implements an agile development approach to provide on-time delivery of continuously tested NFTs.",
      img: nyc4,
    },
  ];

  return (
    <div>
      <ServiceSection />
      <LaunchGamesSection />
      <SuccessStorySection />
      <RevenueSection />
      <BlockchainExpertiseSection />
      <GameDevelopmentProcessSection />

      <div className={styles.whyUsContainer}>
        <h2 className={styles.title}>
          WWhat Makes Us The Best Web3 Game Development Company in NYC?
        </h2>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <img src={reason.img} alt="" />
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blockchain_4;
