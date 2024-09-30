import ServiceSection from "../../components/blockchain4/ServiceSection";
import LaunchGamesSection from "../../components/blockchain4/LaunchGamesSection";
import SuccessStorySection from "../../components/blockchain4/SuccessStorySection";
import RevenueSection from "../../components/blockchain4/RevenueSection";
import BlockchainExpertiseSection from "../../components/blockchain4/BlockChainExpertise";
import GameDevelopmentProcessSection from "../../components/blockchain4/GameDevelopmentProcessSection";
import {
	subTitleNFTTokenHeaderBlockchain,
	titleNFTTokenHeaderBlockchain,
} from '../../components/Util/dataBlockchainPage'
import Header from '../../components/Header'
import { HeaderBlockchain } from '../../components/Blockchain/HeaderBlockchain'
import Footer from "../../components/Footer";
import styles from "./blockchain4.module.scss";
import nyc1 from "../../assets/blockchain4/nyc1.png";
import nyc2 from "../../assets/blockchain4/nyc2.png";
import nyc3 from "../../assets/blockchain4/nyc3.png";
import nyc4 from "../../assets/blockchain4/nyc4.png";

function Blockchain_4() {
  const reasons = [
    {
      title: "Highly Secured",
      description:
        "We have a team of skilled and experienced blockchain experts with in-depth knowledge of blockchain protocols and NFT standards.",
      img: nyc1,
    },
    {
      title: "Master of Blockchain",
      description:
        "We have a team of skilled and experienced blockchain experts with in-depth knowledge of blockchain protocols and NFT standards.",
      img: nyc2,
    },
    {
      title: "Quick Launch",
      description:
        "We have a team of skilled and experienced blockchain experts with in-depth knowledge of blockchain protocols and NFT standards.",
      img: nyc3,
    },
    {
      title: "24*7 Support",
      description:
        "We have a team of skilled and experienced blockchain experts with in-depth knowledge of blockchain protocols and NFT standards.",
      img: nyc4,
    },
  ];

  return (
    <div>
      <Header />
				<HeaderBlockchain
					title={titleNFTTokenHeaderBlockchain}
					subtitle={subTitleNFTTokenHeaderBlockchain}
				/>
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
