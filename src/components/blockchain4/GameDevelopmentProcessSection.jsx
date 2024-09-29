// components/GameDevelopmentProcessSection.jsx
import styles from "./GameDevelopmentProcessSection.module.scss";
import group1 from "../../assets/blockchain4/group1.png";
import group2 from "../../assets/blockchain4/group2.png";
import group3 from "../../assets/blockchain4/group3.png";
import group4 from "../../assets/blockchain4/group4.png";
import group5 from "../../assets/blockchain4/group5.png";
import group6 from "../../assets/blockchain4/group6.png";
import metaglass from "../../assets/blockchain4/metaglass.png";

const processSteps = [
  {
    id: 1,
    title: "Requirement Gathering",
    description: "Understanding client needs.",
  },
  {
    id: 2,
    title: "Design and Prototyping",
    description: "Creating wireframes and prototypes.",
  },
  {
    id: 3,
    title: "Game Development",
    description: "Building the game with high-quality graphics.",
  },
  {
    id: 4,
    title: "Testing",
    description: "Ensuring everything works perfectly.",
  },
  { id: 5, title: "Launch", description: "Releasing the game to the public." },
  {
    id: 6,
    title: "Support and Maintenance",
    description: "Providing ongoing support.",
  },
];

const GameDevelopmentProcessSection = () => {
  return (
    <>
      <div >
        <h2 className={styles.desktopHead}>Why RisingMax Inc. a Reliable Web3 Game Development & Service Provider Company?</h2>
      </div>
      <div className={styles.serviceList}>
        <div className={styles.serviceItem}>
          <img src={group1} alt="" />
          <div className={styles.serviceItemContent}>
            <h3>Certified Developers</h3>
            <p>
              We have a pool of highly qualified web3 developers with hands-on
              experience in developing web3 apps, web3 softwares, and web3 games
              on leading blockchain technologies.
            </p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <img src={group2} alt="" />
          <div className={styles.serviceItemContent}>
            <h3>Player-Centeric Game Design</h3>
            <p>
              Our web3 game experts follow a player-centered game development
              approach to ensure that every game element and feature combine
              together to deliver an unparalleled game.
            </p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <img src={group3} alt="" />
          <div className={styles.serviceItemContent}>
            <h3>Proven Web3 Game Results</h3>
            <p>
              Our web3 game development team has close to a decade of experience
              in successfully developing web3 business solutions for our clients
              around the world.
            </p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <img src={group4} alt="" />
          <div className={styles.serviceItemContent}>
            <h3>AR and VR Specialists</h3>
            <p>
              We have AR and VR specialists who are well versed in web3 game
              development tools and deploy the best methodologies to offer an
              unmatched web3 gaming experience.
            </p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <img src={group5} alt="" />
          <div className={styles.serviceItemContent}>
            <h3>Development and Deployment</h3>
            <p>
              We as a premium web3 game development service provider offer game
              development to designing and deployment support to ensure peace of
              mind to our clients.
            </p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <img src={group6} alt="" />
          <div className={styles.serviceItemContent}>
            <h3>Quality Assured</h3>
            <p>
              We follow rigorous testing methodologies to ensure that all the
              functions and features of the web3 game work as they are intended
              to without any bug or technical issue.
            </p>
          </div>
        </div>
      </div>

      <section className={styles["game-development-process"]}>
        <h2>
          Web3 Game Development Process We Follow To Turn Your Game Idea Into
          Reality
        </h2>
        <div className={styles["game-development-process__steps"]}>
          <img src={metaglass} alt="" />
          <div className={styles["game-development-process__container"]}> 
          {processSteps.map((step) => (
            <div
            key={step.id}
            className={styles["game-development-process__step"]}
            >
              <div className={styles["game-development-process__step__numbers"]} ><p>{step.id}</p></div>
              <h3 className={styles["game-development-process__step__title"]}>
                {step.title}
              </h3>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GameDevelopmentProcessSection;
