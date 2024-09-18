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
      title: "Indestructible",
      content:
        "NFTs are stored and managed through Blockchain that brings a greater level of security for them and can never be destroyed.",
      img: frame1,
    },
    {
      title: "Interoperable",
      content:
        "NFTs follow the standard ERC-721 and are interoperable, which means information stored in them cannot be exchanged or used.",
      img: frame2,
    },
    {
      title: "Transparency",
      content:
        "NFT are developed on a decentralized ecosystem and the information regarding the transactions are verified publicly.",
      img: frame3,
    },
    {
      title: "Reliability",
      content:
        "NFTs assure they are resistant to modifications, removal, or replacement increasing the reliability and value of exchange that took place.",
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
          <button>Meet with us <IoIosArrowForward /></button>
        </div>
      </div>

      <div className={styles.platformInfo}>
        <div className={styles.platformImgFrame}>
          <img src={mix} alt="" />
        </div>
        <div className={styles.platformItems}>
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
            Build Future Digital Asset Trading Platforms With an NFT Token
            Development Company
          </h2>
          <p>
            RisingMax is a reliable non fungible token development company that
            offers affordable NFT token development services to launch platforms
            that revolutionize the trading of digital assets. We understand the
            trade-offs that a start-up needs to make big bucks in the NFT
            industry. Our NFT marketplace development team leverages its
            expertise in blockchain technology to help clients upsurge the NFT
            world. We follow robust development methodologies to build countless
            NFT projects, such as NFT exchange platforms, NFT lending &
            borrowing platforms, NFT minting platforms, and more.
          </p>
        </div>
        <img src={big} alt="" />
      </div>
    </section>
  );
};

export default Features;
