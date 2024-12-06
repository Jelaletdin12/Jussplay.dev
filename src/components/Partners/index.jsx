/* eslint-disable react/prop-types */
import { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./partners.module.scss";

import clues from "../../assets/clues.png";
import books from "../../assets/ebooks.png";
import emplas from "../../assets/emplas.png";
import google from "../../assets/google.png";
import nature from "../../assets/nature.png";
import sky from "../../assets/sky.png";

// Image Data
const images = [
  [nature, emplas, sky, google, clues, books],
  [emplas, nature, sky, google, books, clues],
  [nature, sky, emplas, google, clues, books],
  [nature, emplas, sky, google, clues, books],
  [books, nature, emplas, sky, google, clues],
];

const ImageSlider = ({ imageSet, speed }) => {
  const settings = useMemo(
    () => ({
      speed: 2500,
      infinite: true,
      autoplay: true,
      autoplaySpeed: speed,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      cssEase: "ease-in-out",
      arrows: false,
      pauseOnHover: false,
      draggable: false, // Prevent dragging
      swipe: false, // Disable swiping
      touchMove: false, // Disable touch interaction
    }),
    [speed]
  );

  return (
    <Slider {...settings}>
      {imageSet.map((src, index) => (
        <div key={index} className={styles.sliderItem}>
          <img src={src} alt={`partner-${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default function Partners() {
  return (
    <section className={styles.partners}>
      <h4 className={styles.partners_trustedText}>Trusted by</h4>
      <div className={styles.framecon}>
        {images.map((imageSet, i) => (
          <ImageSlider key={i} imageSet={imageSet} speed={2000 + i * 500} />
        ))}
      </div>
    </section>
  );
}
