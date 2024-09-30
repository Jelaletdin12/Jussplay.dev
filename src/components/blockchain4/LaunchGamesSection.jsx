// components/LaunchGamesSection.jsx
import styles from "./LaunchGamesSection.module.scss";
import game from "../../assets/blockchain4/game.png";
import arvr from "../../assets/blockchain4/arvr.png";
import blender from "../../assets/blockchain4/blender.png";
import buildbox from "../../assets/blockchain4/buildbox.png";
import cros from "../../assets/blockchain4/cros.png";
import unreal from "../../assets/blockchain4/unreal.png";
import mr from "../../assets/blockchain4/mr.png";
import roblox from "../../assets/blockchain4/roblox.png";
import web3 from "../../assets/blockchain4/web3.png";
import warior from "../../assets/blockchain4/warior.png";
import king from "../../assets/blockchain4/king.png";
import landfi from "../../assets/blockchain4/landfi.png";

const games = [
  {
    id: 1,
    title: "Unity 3D game development",
    description:
      "Metaverse is capable enough to reach your business out to the real arena of virtual targeted audience to bring you a bounty of profits with high ROI.",
    icon: game,
  },
  {
    id: 2,
    title: "AR/VR game development",
    description:
      "Metaverse is capable enough to reach your business out to the real arena of virtual targeted audience to bring you a bounty of profits with high ROI.",
    icon: arvr,
  },
  {
    id: 3,
    title: "Unreal game development",
    description:
      "Metaverse is capable enough to reach your business out to the real arena of virtual targeted audience to bring you a bounty of profits with high ROI.",
    icon: unreal,
  },
  {
    id: 4,
    title: "Cross-platform games",
    description:
      "Metaverse is capable enough to reach your business out to the real arena of virtual targeted audience to bring you a bounty of profits with high ROI.",
    icon: cros,
  },
  {
    id: 5,
    title: "Blender game development",
    description:
      "Metaverse is capable enough to reach your business out to the real arena of virtual targeted audience to bring you a bounty of profits with high ROI.",
    icon: blender,
  },
  {
    id: 6,
    title: "Roblox game development",
    description:
      "Metaverse is capable enough to reach your business out to the real arena of virtual targeted audience to bring you a bounty of profits with high ROI.",
    icon: roblox,
  },
  {
    id: 7,
    title: "MR game development",
    description:
      "Metaverse is capable enough to reach your business out to the real arena of virtual targeted audience to bring you a bounty of profits with high ROI.",
    icon: mr,
  },
  {
    id: 8,
    title: "MR game development",
    description:
      "Metaverse is capable enough to reach your business out to the real arena of virtual targeted audience to bring you a bounty of profits with high ROI.",
    icon: buildbox,
  },
  {
    id: 9,
    title: "Unity 3D game development",
    description:
      "Metaverse is capable enough to reach your business out to the real arena of virtual targeted audience to bring you a bounty of profits with high ROI.",
    icon: game,
  },
];

const topRatedPoints = [
  {
    id: 1,
    icon: web3,
    title: "Web3 Metaverse GameFI",
    description:
      "metaverse game development service is a complicated process and requires prior consideration of gameplay, scenario, characters, and more. Our team use state-of-the-art development tools and cutting-edge technologies to build metaverse games that help you stand out. With an element of blockchain, we",
  },
  {
    id: 2,
    icon: landfi,
    title: "LandFi Metaverse",
    description:
      "Leverage our expertise in game development to build web3 games that thrill mobile gamers. Our team takes care of your entire metaverse game project, from game design to development and deployment. We follow a flexible web3 game development process to build powerful games with the right blend of technology to enhance players’ gaming experience.",
  },
  {
    id: 3,
    title: "Move & Earn Web3 Game",
    icon: king,
    description:
      "Dominate the new gaming era with the development of innovative move & earn games with web3 game developers in the USA. With integrated GPS and movement sensors, you can launch a move-and-earn game that rewards users based on physical activities such as running, cycling, walking, and more. With our expertise in web3 game development, we build attractive in-game assets and tokens to deliver an amazing gaming experience.",
  },
  {
    id: 4,
    icon: warior,
    title: "Engaging Web3 UI/UX",
    description:
      "Build engaging metaverse games with attractive UI/UX design to attract millennials and Gen Z to your platforms. With the right expertise in metaverse game development, we help you launch web3 games with the right development tech-stack to guarantee success. Partner with the USA s top-tier web3 game development company to build robust metaverse games with engaging UI/UX interfaces.",
  },
];

const LaunchGamesSection = () => {
  return (
    <>
      <section className={styles["launch-games"]}>
        <h2>
          Launch games for the next generation of web with our web3 game
          development services
        </h2>
        <p>
          Achieve your dream of launching an NFT marketplace in any niche. As a
          top-rated NFT marketplace development company, we build NFT solutions
          that align with your business idea and give you a competitive edge.
          Explore our NFT marketplace solutions forte
        </p>
        <div className={styles["launch-games__items"]}>
          {games.map((game) => (
            <div key={game.id} className={styles["launch-games__item"]}>
              <img
                src={game.icon}
                alt={game.title}
                className={styles["launch-games__item__icon"]}
              />
              <h3 className={styles["launch-games__item__title"]}>
                {game.title}
              </h3>
              <p className={styles["launch-games__item__description"]}>
                {game.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["top-rated-company"]}>
        <h2>
          Top-Rated Web3 Game Development Company To Build Powerful Web3 Games
        </h2>
        <p>
          Unlock the future of the virtual gaming world with the best NYC-based
          web3 game development company. Build killer web3 games that offer
          players immersive gaming experiences and endless earning opportunities
          for players. Build the finest blockchain-based gaming solutions for
          millennials and Gen Z players.
        </p>
        <div className={styles["top-rated-company__points"]}>
          {topRatedPoints.map((point) => (
            <div key={point.id} className={styles["top-rated-company__point"]}>
              <div className={styles["top-rated-company__point__imgFrame"]}>
                <img src={point.icon} alt="" />
              </div>
              <div className={styles["top-rated-company__point__content"]}>
                <h3 className={styles["top-rated-company__point__title"]}>
                  {point.title}
                </h3>
                <p className={styles["top-rated-company__point__description"]}>
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LaunchGamesSection;
