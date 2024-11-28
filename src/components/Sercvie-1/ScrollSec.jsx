import React, { useState, useEffect } from "react";
import styles from "./ScrollSec.module.scss";
import rec1 from "../../assets/Service_1/rec1.png";
import rec2 from "../../assets/Service_1/rec2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const menuItems = [
  {
    title: "Android Wearable App Development",
    content: "Wearable app content...",
  },
  { title: "Android Social Media App", content: "Social media app content..." },
  { title: "Multimedia App", content: "Multimedia app content..." },
  { title: "Android Web-based App", content: "Web-based app content..." },
  { title: "Android Game Development", content: "Game development content..." },
  {
    title: "Business App Development",
    content: "Business app development content...",
  },
  {
    title: "Android TV App Development",
    content: "TV app development content...",
  },
  {
    title: "Android Tablet App Development",
    content: "Tablet app development content...",
  },
  {
    title: "Android Foldable App Development",
    content: "Foldable app development content...",
  },
];

const cards = [
  {
    title: "METAVERSE APP DEVELOPMENT",
    content:
      "Hire our expert development team to launch groundbreaking metaverse applications...",
    img: rec1,
  },
  {
    title: "METAVERSE CONSULTING",
    content:
      "Leverage our top-notch metaverse app development services to build engaging metaverse games...",
    img: rec2,
  },
  {
    title: "METAVERSE E-LEARNING APP",
    content:
      "Revolutionizing the learning sector with 3D modeling. Hire our metaverse app developers...",
    img: rec1,
  },
];

const Scroll = () => {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 520);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 520);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.scroll}>
      <div className={styles.container}>
        {isMobile ? (
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={10}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            onSlideChange={(swiper) =>
              setSelectedItem(menuItems[swiper.activeIndex])
            }
            className={styles.carousel}
          >
            {menuItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.menuItemMobile}>{item.title}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.sidebar}>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`${styles.menuItem} ${
                  selectedItem.title === item.title ? styles.active : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
        <div className={styles.content}>
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.content}</p>
        </div>
      </div>

      <div className={styles.container2}>
        <h1>
          Industry-Specific Expertise We Serve With Our Custom Android App
          Development Services
        </h1>
        <p>
          With over ten years of experience in Android development, we have
          gained extensive knowledge across various industries. We have the
          expertise to tackle a wide range of app development projects.
        </p>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          grabCursor={true}
          navigation
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            520: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.cardContainer}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className={styles.card}>
              <img src={card.img} alt={card.title} />
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Scroll;
