import React from "react";
import styles from "./nftCards.module.scss";
import nftArt from "../../assets/token/nftArt.png";

const NftCards = () => {
  const nftData = [
    {
      title: "NFT For Art",
      description:
        "Programmable art is the most common non-fungible token use case that brings a mix of creativity, technology, and flexibility.",
      imgSrc: nftArt,
    },
    {
      title: "NFT For Art",
      description:
        "Programmable art is the most common non-fungible token use case that brings a mix of creativity, technology, and flexibility.",
      imgSrc: nftArt,
    },
    {
      title: "NFT For Art",
      description:
        "Programmable art is the most common non-fungible token use case that brings a mix of creativity, technology, and flexibility.",
      imgSrc: nftArt,
    },
    {
      title: "NFT For Art",
      description:
        "Programmable art is the most common non-fungible token use case that brings a mix of creativity, technology, and flexibility.",
      imgSrc: nftArt,
    },
    {
      title: "NFT For Art",
      description:
        "Programmable art is the most common non-fungible token use case that brings a mix of creativity, technology, and flexibility.",
      imgSrc: nftArt,
    },
    {
      title: "NFT For Art",
      description:
        "Programmable art is the most common non-fungible token use case that brings a mix of creativity, technology, and flexibility.",
      imgSrc: nftArt,
    },
  ];

  return (
    <section className={styles.nftCards}>
      <h2>NFT Token Development Company For Your Niche NFT Project</h2>
      <div className={styles.cardList}>
        {nftData.map((nft, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imagePlaceholder}>
              <img src={nft.imgSrc} alt={`NFT ${index + 1}`} />
            </div>
            <h3>{nft.title}</h3>
            <p>{nft.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NftCards;
