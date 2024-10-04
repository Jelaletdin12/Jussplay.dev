import React from "react";
import styles from "./features.module.scss";
import comp from "../../assets/token/compet.png";
import mix from "../../assets/token/mix.png";
import frame1 from "../../assets/token/frame1.png";
import frame2 from "../../assets/token/frame2.png";
import frame3 from "../../assets/token/frame4.png";
import frame4 from "../../assets/token/frame3.png";
import big from "../../assets/token/big.png";
import { IoIosArrowForward } from "react-icons/io";

const Features = () => {
  const platformInfo = [
    {
      title: "Flawless Security",
      content:
        "NFTs are secured through the blockchain, ensuring the highest level of protection. Once created, they cannot be deleted or edited, guaranteeing the safety of your digital assets.",
      img: frame1,
    },
    {
      title: "Cross-Platform Compatibility",
      content:
        "Built on the ERC-721 standard, NFTs are universally compatible across platforms. This ensures that your assets maintain their functionality and value, no matter where they are used.",
      img: frame2,
    },
    {
      title: "Complete Transparency",
      content:
        "Every transaction involving NFTs is recorded on blockchain, making the entire process transparent. Buyers and sellers have full confidence knowing the data is verifiable.",
      img: frame3,
    },
    {
      title: "Dependable Stability",
      content:
        "NFTs are designed to resist any alterations or deletions. They offer consistent reliability that will save the value of each token through time.",
      img: frame4,
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.featuresBox}>
        <img src={comp} alt="" />
        <div className={styles.boxContent}>
          <h2>
            Competitive NFT Development Services to Upsurge Your NFT Project
          </h2>
          <p>
            Become a frontrunner in the virtual space with our reliable NFT
            marketplace development services.
          </p>
          <button>
            Let’s Get Started <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className={styles.platformInfo}>
        <div className={styles.platformImgFrame}>
          <img src={mix} alt="" />
        </div>
        <div className={styles.platformItems}>
          <h2 className={styles.headerMobile}>
            Indispensable Features Of Non Fungible Tokens
          </h2>
          {platformInfo.map((info, index) => (
            <div key={index} className={styles.platformItem}>
              <img src={info.img} alt={info.title} />
              <div className={styles.platformContent}>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.nftBenefits}>
        <div className={styles.benefitsGrid}>
          <h2>
            Unlock the Future of Digital Asset Trading with Expert NFT
            Development
          </h2>
          <p>
            At JustPlay, we are a trusted NFT development company offering
            customized solutions to build innovative platforms. We understand
            the challenges startups face and provide exclusive offers to help
            them in the competitive NFT market. With a deep understanding of
            blockchain, our team of experts specializes in creating a wide range
            of NFT platforms. Let us help you make your NFT project for you that
            will open more opportunities in the future.
          </p>
        </div>
        <img src={big} alt="" />
      </div>
    </section>
  );
};

export default Features;
