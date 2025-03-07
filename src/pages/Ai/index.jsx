import ServiceSection from "../../components/Ai/ServiceSection";
import IndustryAi from "../../components/Ai/IndustryAi";
import DomainExpertise from "../../components/Ai/DomainExpertise";

import bg from '../../assets/oval.png'
import { CustomScroll } from "../../components/scroll/CustomScroll";

import {
  subTitleNFTTokenHeaderBlockchain,
  titleNFTTokenHeaderBlockchain,
} from "../../components/Util/dataBlockchainPage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HeaderServicePages } from '../../components/commonService/HeaderServicePages'

import styles from "./blockchain6.module.scss";
import transition from "../../pageTransition";

const Ai = () => {
  return (
    <CustomScroll>
      <div className={styles.appContainer}>
        <Header />
       <HeaderServicePages
                image={bg}
                title="Best AI Software Development Company"
                text="At Jussplay, we offer full-scale AI development services for start up and advanced enterprises across the globe by helping them to automate repetitive tasks or solve complex issues. Integrate our AI into your business and drive your bsuiness into next level! "
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
