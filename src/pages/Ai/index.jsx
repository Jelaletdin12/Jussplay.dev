import ServiceSection from "../../components/Ai/ServiceSection";
import IndustryAi from "../../components/Ai/IndustryAi";
import DomainExpertise from "../../components/Ai/DomainExpertise";

import bg from "../../assets/blockchain/01.png";
import { CustomScroll } from "../../components/scroll/CustomScroll";

import {
  subTitleNFTTokenHeaderBlockchain,
  titleNFTTokenHeaderBlockchain,
} from "../../components/Util/dataBlockchainPage";
import Header from "../../components/Header";
import { HeaderBlockchain } from "../../components/Blockchain/HeaderBlockchain";
import Footer from "../../components/Footer";
import styles from "./blockchain6.module.scss";
import transition from "../../pageTransition";

const Ai = () => {
  return (
    <CustomScroll>
      <div className={styles.appContainer}>
        <Header />
        <HeaderBlockchain
          title={titleNFTTokenHeaderBlockchain}
          subtitle={subTitleNFTTokenHeaderBlockchain}
        />
        <ServiceSection />
        <IndustryAi />
        <DomainExpertise />
        <img className={styles.bgImg} src={bg} alt="" />
        <Footer />
      </div>
    </CustomScroll>
  );
};

export default transition(Ai);
