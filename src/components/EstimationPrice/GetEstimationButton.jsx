import React from "react";
import styles from "./GetEstimationButton.module.scss";

const GetEstimationButton = ({ onClick }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.estimationButton} onClick={onClick}>
        Get an Estimation
      </button>
    </div>
  );
};

export default GetEstimationButton;
