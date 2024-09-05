import React, { useEffect } from "react";
import styles from "./cursor.module.scss";

const CustomCursor = React.memo(() => {
  useEffect(() => {
    const cursor = document.querySelector(`.${styles.customCursor}`);
    const handleMouseMove = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const links = document.querySelectorAll("a");
    const handleMouseEnter = () => cursor.classList.add(styles.hover);
    const handleMouseLeave = () => cursor.classList.remove(styles.hover);

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div className={styles.customCursor}></div>;
});

export default CustomCursor;
