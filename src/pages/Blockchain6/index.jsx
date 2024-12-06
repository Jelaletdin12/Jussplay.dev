import CryptoExchangeServices from "../../components/blockchain6/CryptoExchangeServices";
import CryptoCloneBanner from "../../components/blockchain6/CryptoCloneBanner";
import CryptoPlatformGrid from "../../components/blockchain6/CryptoPlatformGrid";
import MarketSuccess from "../../components/blockchain6/MarketSuccess";
import WalletDev from "../../components/blockchain6/WalletDevelopmentServices";
import SmartContract from "../../components/blockchain6/SmartContractDevelopment";
import CryptoExchangeFeatures from "../../components/blockchain6/CryptoExchangeFeatures";
import CryptoSecurityFeatures from "../../components/blockchain6/CryptoSecurityFeatures";
import DevelopmentProcess from "../../components/blockchain6/DevelopmentProcess";
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

const Blockchain_6 = () => {
  return (
    <CustomScroll>
      <div className={styles.appContainer}>
        <Header />
        <HeaderBlockchain
          title={titleNFTTokenHeaderBlockchain}
          subtitle={subTitleNFTTokenHeaderBlockchain}
        />
        <CryptoExchangeServices />
        <CryptoCloneBanner />
        <CryptoPlatformGrid />
        <MarketSuccess />
        <WalletDev />
        <SmartContract />
        <CryptoExchangeFeatures />
        <CryptoSecurityFeatures />
        <DevelopmentProcess />
        <img className={styles.bgImg} src={bg} alt="" />
        <Footer />
      </div>
    </CustomScroll>
  );
};

export default transition(Blockchain_6);
