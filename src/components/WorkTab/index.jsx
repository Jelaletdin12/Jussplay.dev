import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { GoArrowUpRight } from "react-icons/go";

import styles from "./worktab.module.scss";

import app from "../../assets/app.jpeg";
gsap.registerPlugin(useGSAP);

export default function WorkTab({ name, type, isBottom, isTop, order, img }) {
  const projectImage = useRef();
  const container = useRef();

  useGSAP(() => {
    const animation = gsap.to(projectImage.current, {
      opacity: 1,
      duration: 0.4,
      scale: 1,
      ease: "ease-in-out",
    });

    container.current.addEventListener("mouseenter", () => animation.play());
    container.current.addEventListener("mouseleave", () => animation.reverse());

    //   initialization
    animation.reverse();

    container.current.addEventListener("mousemove", (event) => {
      const { left, top, width, height } =
        container.current.getBoundingClientRect();
      const mouseX = event.clientX - left;
      const mouseY = event.clientY - top - 120;

      const deltaX = mouseX / width;
      const deltaY = mouseY / height;

      gsap.to(projectImage.current, {
        x: deltaX * width,
        y: deltaY * height,
        duration: 0.4,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <div
      className={styles.worktab}
      ref={container}
      style={{
        borderTop: isTop ? "1px solid #fff" : "0.5px solid #fff",
        borderBottom: isBottom ? "1px solid #fff" : "0.5px solid #fff",
      }}
    >
      <div
        className={styles.worktab_image}
        style={{
          backgroundImage: `url(${img})`,
        }}
        ref={projectImage}
      >
        {img ? "" : "Coming soon"}
      </div>
      <div className={styles.worktab_numberName}>
        <div>//{order}</div>
        <div className={styles.worktab_numberName_name}>{name}</div>
      </div>
      <div className={styles.worktab_typeLaunch}>
        <div className={styles.worktab_typeLaunch_type}>
          {type ? `(${type})` : ""}
        </div>
        <button className={styles.worktab_typeLaunch_launch}>
          Launch
          <span className={styles.worktab_typeLaunch_launch_arrow}>
            <GoArrowUpRight color="#000" />
          </span>
        </button>
      </div>
    </div>
  );
}
