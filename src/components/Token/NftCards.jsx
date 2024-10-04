import React from "react";
import styles from "./nftCards.module.scss";
import nftArt from "../../assets/token/nftArt.png";

const NftCards = () => {
  const nftData = [
    {
      title: "NFT For Art",
      description:
        "Transform the world of digital art by allowing artists to tokenize their work. Programmable art is the most common non-fungible token use case, blending creativity, technology, and flexibility. Artists can ensure authenticity and ownership of their unique pieces through blockchain.",
      imgSrc: nftArt,
    },
    {
      title: "NFT for Music",
      description:
        "Revolutionize the music industry by enabling artists to tokenize their work. Musicians can mint NFTs for albums, songs, and unique sound clips, offering fans exclusive access to rare content while ensuring ownership rights through blockchain.",
      imgSrc: nftArt,
    },
    {
      title: "NFT for Gaming",
      description:
        "Fuel the next generation of gaming with NFT-based in-game assets. Create secure, tradable digital items that enhance player engagement and create real-world value. From avatars to rare items, NFT technology can seamlessly integrate with gaming platforms.",
      imgSrc: nftArt,
    },
    {
      title: "NFT for Real Estate",
      description:
        "Bring innovation to real estate by tokenizing property assets. Our NFT solutions enable fractional ownership, making real estate investment accessible to more people. Secure and transparent transactions simplify ownership transfers and investment opportunities.",
      imgSrc: nftArt,
    },
    {
      title: "NFT for Fashion",
      description:
        "Empower the fashion world with digital collectibles and limited-edition virtual wearables. Designers can tokenize their creations, allowing customers to own unique, verified digital fashion pieces. NFT fashion blends style with tech-driven exclusivity.",
      imgSrc: nftArt,
    },
    {
      title: "NFT for Sports",
      description:
        "Enhance fan experiences by minting NFTs for exclusive sports memorabilia, player cards, and digital collectibles. Sports teams and athletes can engage with fans on a deeper level, offering limited-edition content secured on the blockchain.",
      imgSrc: nftArt,
    },
  ];

  return (
    <section className={styles.nftCards}>
      <h2>NFT Token Development Company For Your Niche NFT Project</h2>
      <p className={styles.mobileParagh}>
        Achieve your dream of launching an NFT marketplace in any niche. As a
        top-rated NFT marketplace development company, we build NFT solutions
        that align with your business idea and give you a competitive edge.
        Explore our NFT marketplace solutions forte
      </p>
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
