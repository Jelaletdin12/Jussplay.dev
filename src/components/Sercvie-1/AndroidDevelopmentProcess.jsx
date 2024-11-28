import React, { useState, useEffect } from "react";
import styles from "./AndroidDevelopmentProcess.module.scss";
import RectangleImage from "../../assets/Service_1/Rectangle.png";
import AndroidImage from "../../assets/Service_1/android.png";
import MobileImage from "../../assets/Service_1/mob.png";
import { IoIosArrowForward } from "react-icons/io";

const AndroidDevelopmentProcess = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 520);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 520);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderResponsiveImage = () => (
    <img
      className={styles.responsiveImg}
      src={isMobile ? MobileImage : AndroidImage}
      alt="Android App"
    />
  );

  return (
    <div className={styles.container}>
      <section className={styles.infoSection}>
        <div className={styles.infoSection_content}>
          <h2>Why Develop An Android App?</h2>
          <p>
            Android OS dominates the mobile application market with over 86%
            market share. Developing an Android app ensures global reach for
            your audience. At RisingMax, we specialize in creating custom
            Android apps tailored to your needs. Our services enhance brand
            engagement and loyalty using advanced technologies, user-focused
            features, and intuitive designs.
          </p>
          <button className={styles.meetButton}>
            Meet with us <IoIosArrowForward />
          </button>
        </div>
        <div className={styles.infoSection_img}>
          <img src={RectangleImage} alt="Android Development Process" />
        </div>
      </section>
      <h2>Android App Development Process We Follow</h2>
      <p className={styles.description}>
        From concept to deployment, we manage every step of Android development
        efficiently. Our intelligent approach ensures clients receive optimal
        solutions tailored to their needs.
      </p>
      <div className={styles.processSteps}>
        {/* Add process steps here */}
      </div>
      {renderResponsiveImage()}
    </div>
  );
};

export default AndroidDevelopmentProcess;
