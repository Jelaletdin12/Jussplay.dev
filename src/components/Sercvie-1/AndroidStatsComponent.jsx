import React from 'react';
import styles from './AndroidStatsComponent.module.scss';
import Rectangle from "../../assets/Service_1/Rectangle.png";

const AndroidStatsComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h2>4000+</h2>
          <p>Android App Developed Successfully</p>
        </div>
        <div className={styles.statItem}>
          <h2>10M+</h2>
          <p>Android Apps Downloads</p>
        </div>
        <div className={styles.statItem}>
          <h2>250+</h2>
          <p>Technology Experts</p>
        </div>
        <div className={styles.statItem}>
          <h2>15+</h2>
          <p>Industries Served</p>
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.infoSection_content}>
        <h2>Why Develop An Android App?</h2>
        <p>
          Android OS is the clear leader in the mobile application market, with a market share of over 86% in application development. Thus, Android is the ideal platform for reaching users worldwide with your app. At RisingMax, our expertise lies in the Android platform, enabling us to develop tailored apps that perfectly align with your requirements. Our Android app development services are designed to enhance brand engagement and foster loyalty. We achieve this by leveraging advanced technology, incorporating user-centric features, and following intuitive design principles.
        </p>
        <button className={styles.meetButton}>Meet with us <span>&#x2192;</span></button>
        </div>
        <div className={styles.infoSection_img}><img src={Rectangle} alt="" /></div>
      </div>
    </div>
  );
};

export default AndroidStatsComponent;
