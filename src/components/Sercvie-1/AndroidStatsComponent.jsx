import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import styles from "./AndroidStatsComponent.module.scss";
import Rectangle from "../../assets/Service_1/Rectangle.png";
import { IoIosArrowForward } from 'react-icons/io'

const AndroidStatsComponent = () => {
  // Using Intersection Observer to trigger animation on scroll
  const [statsRef, inView] = useInView({
    triggerOnce: true, // Animation runs only once
    threshold: 0.3, // Trigger when 30% of the element is visible
  });

  return (
    <div className={styles.container}>
      <div className={styles.stats} ref={statsRef}>
        <div className={styles.statItem}>
          <h2>
            {inView && <CountUp start={0} end={4000} duration={3} separator="," />}+
          </h2>
          <p>Android App Developed Successfully</p>
        </div>
        <div className={styles.statItem}>
          <h2>
            {inView && <CountUp start={0} end={10} duration={3.5} separator="," />}M+
          </h2>
          <p>Android Apps Downloads</p>
        </div>
        <div className={styles.statItem}>
          <h2>
            {inView && <CountUp start={0} end={250} duration={2.5} separator="," />}+
          </h2>
          <p>Technology Experts</p>
        </div>
        <div className={styles.statItem}>
          <h2>
            {inView && <CountUp start={0} end={15} duration={2} separator="," />}+
          </h2>
          <p>Industries Served</p>
        </div>
      </div>
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
            Meet with us <IoIosArrowForward />
          </button>
        </div>
        <div className={styles.infoSection_img}>
          <img src={Rectangle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AndroidStatsComponent;
