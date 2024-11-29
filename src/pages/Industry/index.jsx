import softwareDevImage from "../../assets/image_2.png";
import networkingImage from "../../assets/image_5.png";
// import designAIImage from '../../assets/image_17.png'
// import itMaintenanceImage from '../../assets/image_3.png'
// import socialMediaImage from '../../assets/image_8.png'
// import googleMetaImage from '../../assets/image_9.png'
import ai from "../../assets/NewService/ai.png";
import android from "../../assets/NewService/android.png";
import chatbot from "../../assets/NewService/chatbot.png";
import copywriting from "../../assets/NewService/copywriting.png";
import crypto from "../../assets/NewService/crypto.png";
import Figma from "../../assets/NewService/Figma.png";
import graphic from "../../assets/NewService/graphic.png";
import ios from "../../assets/NewService/ios.png";
import machine from "../../assets/NewService/machine.png";
import motionimg from "../../assets/NewService/motion.png";
import web3 from "../../assets/NewService/web3.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section from "../../components/Industry/index";
import transition from "../../pageTransition";
import "./industry.scss";

import right from "../../assets/img1.png";
import left from "../../assets/img2.png";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

const Service = () => {
  const [isAnimatingBg, setIsAnimatingBg] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsAnimatingBg(true);
    }, 400);
  }, []);
  return (
    <div className="industry-page">
      <Header />
      <div className="up">
        <div className="bg">
          <motion.img
            initial={{ opacity: 0, scale: 0, y: "-100vh", x: "-100vh" }}
            animate={isAnimatingBg ? { opacity: 2, scale: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={left}
            alt="left image"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0, y: "-100vh", x: "100vh" }}
            animate={isAnimatingBg ? { opacity: 2, scale: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={right}
            alt="right image"
          />
        </div>
        <header className="header">
          <h1 className="title">
            Implement your <br /> ideas with Jussplay.dev
          </h1>
        </header>
        <div className="content">
          <HashLink to={"#startJourney"} smooth>
            <button className="button">
              Meet with us <IoIosArrowForward />
            </button>
          </HashLink>
        </div>
      </div>

      <div className="down">
        <div className="down_header">

        <h1>Our Services</h1>
        <p>At Jussplay Developments, we pride ourselves on our commitment to excellence and our dedication to our clients' success. We believe that collaboration and communication are key to success, which is why we prioritize transparency and open communication with our clients</p>
        </div>
        <Section
          title="Web/App development"
          description="Our IT experts are delivering a range of IT services to our customers. We develop cross-platform apps, that upgrade your business to another level."
          imageSrc={softwareDevImage}
          frameClassName="software-dev-frame"
        />

        <Section
          title="IOS App Development"
          description="We are specialized in design solutions such as: UX/UI, motion design & graphic design. Also meet our individually developed AI image generator."
          imageSrc={ios}
          frameClassName="design-ai-frame"
        />
        <Section
          title="Android App development"
          description="We take control of the performance of your product, as well as its support. We connect and configure the operation of your product."
          imageSrc={android}
          frameClassName="networking-frame"
        />
        <Section
          title="CHatbot Development"
          description="We check the performance of the server part so that your clients are always in touch with you."
          imageSrc={chatbot}
          frameClassName="it-maintenance-frame"
        />
        <Section
          title="Crypto Exchange Crypto Wallet"
          description="Get more website traffic, more customers for your social channel. Let us take care of it."
          imageSrc={crypto}
          frameClassName="social-media-frame"
        />
        <Section
          title="AI Development"
          description="Get more website traffic, more customers & more online visibility with powerful SEO services."
          imageSrc={ai}
          frameClassName="google-meta-frame"
        />
        <Section
          title="Web3 Game Development"
          description="Get more website traffic, more customers & more online visibility with powerful SEO services."
          imageSrc={web3}
          frameClassName="google-meta-frame"
        />
        <Section
          title="Machine Learning"
          description="Get more website traffic, more customers & more online visibility with powerful SEO services."
          imageSrc={machine}
          frameClassName="design-ai-frame"
        />
        <Section
          title="Buitl-in System"
          description="Get more website traffic, more customers & more online visibility with powerful SEO services."
          imageSrc={networkingImage}
          frameClassName="google-meta-frame"
        />
        <Section
          title="Graphic design"
          description="Get more website traffic, more customers & more online visibility with powerful SEO services."
          imageSrc={graphic}
          frameClassName="design-ai-frame"
        />
        <Section
          title="UI/UX design"
          description="Get more website traffic, more customers & more online visibility with powerful SEO services."
          imageSrc={Figma}
          frameClassName="design-ai-frame"
        />
        <Section
          title="Motion design"
          description="Get more website traffic, more customers & more online visibility with powerful SEO services."
          imageSrc={motionimg}
          frameClassName="google-meta-frame"
        />
        <Section
          title="Copywriting"
          description="Get more website traffic, more customers & more online visibility with powerful SEO services."
          imageSrc={copywriting}
          frameClassName="software-dev-frame"
        />
      </div>
      <Footer />
    </div>
  );
};

export default transition(Service);
