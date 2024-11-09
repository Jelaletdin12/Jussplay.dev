import bg from "../../assets/blockchain/01.png";
import { CustomScroll } from "../../components/scroll/CustomScroll";

import {
  subTitleNFTTokenHeaderBlockchain,
  titleNFTTokenHeaderBlockchain,
} from "../../components/Util/dataBlockchainPage";
import Header from "../../components/Header";
import { HeaderBlockchain } from "../../components/Blockchain/HeaderBlockchain";
import AndroidStatsComponent from "../../components/Sercvie-1/AndroidStatsComponent";
import AndroidService from "../../components/Sercvie-1/AndroidServices";
import AndroidDevelopmentProcess from "../../components/Sercvie-1/AndroidDevelopmentProcess";
import CuttingEdgeTech from "../../components/Sercvie-1/CuttingEdgeTech";
import Scroll from "../../components/Sercvie-1/ScrollSec";
import Footer from "../../components/Footer";
import styles from "./Service.module.scss";
import transition from "../../pageTransition";

const Service_1 = () => {
  return (
    <CustomScroll>
      <div className={styles.appContainer}>
        <Header />
        <HeaderBlockchain
          title={titleNFTTokenHeaderBlockchain}
          subtitle={subTitleNFTTokenHeaderBlockchain}
        />
        <AndroidStatsComponent />
        <AndroidService />
        <AndroidDevelopmentProcess />
        <Scroll />
        <CuttingEdgeTech />
        <img className={styles.bgImg} src={bg} alt="" />
        <Footer />
      </div>
    </CustomScroll>
  );
};

export default transition(Service_1);
