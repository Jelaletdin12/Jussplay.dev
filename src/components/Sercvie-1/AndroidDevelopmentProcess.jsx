import React, { useState, useEffect } from "react";
import styles from "./AndroidDevelopmentProcess.module.scss";
import Rectangle from "../../assets/Service_1/Rectangle.png";
import android from "../../assets/Service_1/android.png";
import mob from "../../assets/Service_1/mob.png"; // Mobile image

const AndroidDevelopmentProcess = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 520); // Set isMobile to true if width is <= 520px
    };

    // Check screen size on mount
    checkScreenSize();

    // Set up event listener to check screen size on window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infoSection}>
        <div className={styles.infoSection_content}>
          <h2>Why Develop An Android App?</h2>
          <p>
            Android OS is the clear leader in the mobile application market,
            with a market share of over 86% in application development. Thus,
            Android is the ideal platform for reaching users worldwide with your
            app. At RisingMax, our expertise lies in the Android platform,
            enabling us to develop tailored apps that perfectly align with your
            requirements. Our Android app development services are designed to
            enhance brand engagement and foster loyalty. We achieve this by
            leveraging advanced technology, incorporating user-centric features,
            and following intuitive design principles.
          </p>
          <button className={styles.meetButton}>
            Meet with us <span>&#x2192;</span>
          </button>
        </div>
        <div className={styles.infoSection_img}>
          <img src={Rectangle} alt="Rectangle" />
        </div>
      </div>
      <h2>Android App Development Process We Follow</h2>
      <p className={styles.description}>
        We handle every aspect of Android development, from the initial concept
        to the final app deployment, ensuring a smooth and efficient process. We
        implement an intelligent approach to ensure our esteemed clients receive
        the desired solution.
      </p>
      <div className={styles.processSteps}></div>
      {/* Render the appropriate image based on screen size */}
      <img
        className={styles.responsiveImg}
        src={isMobile ? mob : android}
        alt="Android App"
      />
    </div>
  );
};

export default AndroidDevelopmentProcess;
