import React, { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./about.module.scss";
import Footer from "../../components/Footer";
import BackgroundImage from "../../assets/bg.png";
import green from "../../assets/green.png";
import yellow from "../../assets/yellow.png";
import purple from "../../assets/purple.png";
import blue from "../../assets/blue.png";
import transition from "../../pageTransition";
import Header from "../../components/Header";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Typewriter from "typewriter-effect/dist/core";
import { CustomScroll } from '../../components/scroll/CustomScroll'


const About = () => {
  const journeyRef = useRef(null);
  const visionRef = useRef(null);
  const visionTextRef = useRef(null);
  const foundationRef = useRef(null);
  const foundationTextRef = useRef(null);
  const milestonesRef = useRef(null);
  const milestonesTextRef = useRef(null);
  const primaryAreaRef = useRef(null);
  const primaryAreaTextRef = useRef(null);
  const visionFutureRef = useRef(null);
  const visionFutureTextRef = useRef(null);
  // const partnerButtonRef = useRef(null);
  // const primaryButtonRef = useRef(null);

  useEffect(() => {
    const typewriterConfig = {
      loop: false,
      delay: 75,
      cursor: "|",
    };

    const createTypewriter = (ref, text) => {
      if (ref.current) {
        const typewriter = new Typewriter(ref.current, typewriterConfig);
        typewriter
          .typeString(text)
          .callFunction(() => {
            const cursor = ref.current.querySelector(".Typewriter__cursor");
            if (cursor) {
              cursor.style.display = "none";
            }
          })
          .start();
      }
    };

    createTypewriter(journeyRef, "Start Journey");
    createTypewriter(visionRef, "Company vision");
    createTypewriter(foundationRef, "Foundation of Jussplay");
    createTypewriter(milestonesRef, "Key milestones");
    createTypewriter(primaryAreaRef, "Company primary area");
    createTypewriter(visionFutureRef, "Company’s vision for future");

    createTypewriter(
      visionTextRef,
      "Our company's mission is to bring technology at people’s fingertips where there are no limitations on their dream softwares to turn into reality. To provide the best service all across the world. Help businesses exponentially grow with our service and break the barrier between technology and businesses."
    );
    createTypewriter(
      foundationTextRef,
      "Shokran Ahadi is a tech enthusiast who has been in the industry for more than 7 years. The Company was founded in September 2023 to solve a leading problem where businesses, individuals, and entrepreneurs had barriers into stepping out in the tech industry and having their hands on their wished software."
    );
    createTypewriter(
      milestonesTextRef,
      "Jussplay has made significant progress in providing the best services, including reaching into complex software domains such as blockchain and AI. Jussplay has achieved this through great management and a highly skilled professional team. The company, which started as a startup, is now a global business, fulfilling client needs and satisfaction."
    );
    createTypewriter(
      primaryAreaTextRef,
      "Jussplay currently operates in Europe, Central Asia, and is looking to expand into the western markets (US)."
    );
    createTypewriter(
      visionFutureTextRef,
      "Jussplay sees itself as a leading tech company across the world with international services. It envisions itself as a leading tech development company deeply rooted in technology and the future of technology."
    );

    // createTypewriter(primaryButtonRef, "Work with us");
    // createTypewriter(partnerButtonRef, "Become Jussplay partner");
  }, []);

  return (
    <>
      <section className={styles.aboutSection}>
        <Header />
        <div className={styles.upside}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.heading}>About Jussplay</h1>
              <HashLink
                to={"#startJourney"}
                smooth
              >
                <button className={styles.button}>
                Meet with us <IoIosArrowForward />
            </button>
              </HashLink>{" "}
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.bubbleContainer}>
              <div className={`${styles.bubble} ${styles.green}`}>
                <img src={green} alt="" />
              </div>
              <div className={`${styles.bubble} ${styles.yellow}`}>
                <img src={yellow} alt="" />
              </div>
              <div className={`${styles.bubble} ${styles.purple}`}>
                <img src={purple} alt="" />
              </div>
              <div className={`${styles.bubble} ${styles.blue}`}>
                <img src={blue} alt="" />
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <img src={BackgroundImage} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.bottom} id="startJourney">
          <h1 ref={journeyRef}></h1>
          <div className={styles.addContent}>
            <div className={styles.vision}>
              <div className={styles.foundation}>
                <h1 ref={visionRef}></h1>
                <p ref={visionTextRef}></p>
              </div>
              <div className={styles.foundation} style={{ textAlign: "right" }}>
                <h1 ref={foundationRef}></h1>
                <p ref={foundationTextRef}></p>
              </div>
              <div className={styles.foundation}>
                <h1 ref={milestonesRef}></h1>
                <p ref={milestonesTextRef}></p>
              </div>
            </div>
            <div className={styles.primary}>
              <div className={styles.primaryArea}>
                <h1 ref={primaryAreaRef}></h1>
                <p ref={primaryAreaTextRef}></p>
                <button>
                  Work with us <FaArrowRightLong />
                </button>
              </div>
              <div className={styles.visionFuture}>
                <h1 ref={visionFutureRef} style={{ color: "#121212" }}></h1>
                <p
                  ref={visionFutureTextRef}
                  style={{ color: "rgba(0, 0, 0, 0.65)" }}
                ></p>
                <button>
                  Become Jussplay partner <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.statistics}>
            <div className={styles.statItem}>
              <h1>In 2023</h1>
              <p>Company founded</p>
            </div>
            <div className={styles.statItem}>
              <h1>20+</h1>
              <p>Active working employees</p>
            </div>
            <div className={styles.statItem}>
              <h1>15+</h1>
              <p>Jussplay offers more than 15 services</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default transition(About);
