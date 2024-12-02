import { useRef } from "react";
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

import chevronRight from "../../assets/webapp/chevronRight.png";
import chevronLeft from "../../assets/webapp/chevronLeft.png";
import person from "../../assets/webapp/person.png";

import { Form } from "../../components/Blockchain/Form";

import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const timelineTitles = [
  "Establishment of Jussplay",
  "The Leap Forward",
  "The First Major Milestone",
  "The First Major Milestone",
];

const values = [
  "Efficiency",
  "Results-driven",
  "Client-Centric",
  "Creativity",
  "Innovation",
  "Adaptability",
];

const About = () => {
  const tablet = useMediaQuery({ query: "(max-width: 768px)" });

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className={styles.aboutSection}>
        <Header />
        <div className={styles.upside}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.heading}>About Jussplay</h1>
            <HashLink to={"#startJourney"} smooth>
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

        <div className={styles.bigTContainer}>
          <div className={styles.bigT}>Our Story</div>
          <p className={styles.regularP}>
            At Jussplay Developments, we pride ourselves on our commitment to
            excellence and our dedication to our clients' success. We believe
            that collaboration and communication are key to success, which is
            why we prioritize transparency and open communication with our
            clients
          </p>
        </div>
        <div className={styles.timeline}>
          <div className={styles.years}>
            <div className={styles.year}>2021</div>
            <div className={styles.year}>2022</div>
            <div className={styles.year}>2023</div>
            <div className={styles.year}>2024</div>
          </div>
          <div className={styles.indicator}>
            <div className={styles.firstLine}></div>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
            <div className={styles.lastLine}></div>
          </div>
          <div className={styles.textBlocks}>
            {timelineTitles.map((t, i) => {
              return (
                <div key={i} className={styles.textBlock}>
                  {tablet ? <div className={styles.year}>2021</div> : null}
                  <div className={styles.biggerText}>{t}</div>
                  <p className={styles.regularP}>
                    At Jussplay Developments, we pride ourselves on our
                    commitment to excellence and our dedication to our clients'
                    success. We believe that collaboration and communication are
                    key to success, which is why we prioritize transparency and
                    open communication with our clients
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.values}>
          <div className={styles.bigTContainer}>
            <div className={styles.bigT}>Our values</div>
            <p className={styles.regularP}>
              At ADSORB, we pride ourselves on our commitment to excellence and
              our dedication to our clients' success. We believe that
              collaboration and communication are key to success, which is why
              we prioritize transparency and open communication with our clients
            </p>
          </div>
          <div className={styles.valuesWrapper}>
            {values.map((v) => {
              return (
                <div key={v} className={styles.valueBlock}>
                  <div className={styles.valueGradient}></div>
                  <div className={styles.valueTextWrapper}>
                    <div className={styles.valueTitle}>{v}</div>
                    <p className={styles.valueP}>
                      We develop metaverse action and adventure gaming apps with
                      NFT in-game assets like avtaar, assets, skins, locations,
                      stadiums, levels, etc.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.bigTContainer}>
          <div
            className={styles.bigT}
            style={{
              textTransform: "uppercase",
            }}
          >
            MEET OUR TEAM
          </div>
          <p className={styles.regularP}>
            At Jussplay Developments, we believe that a successful marketing
            campaign requires the collaborative efforts of talented individuals
            with diverse skills and expertise. Our dedicated team of
            professionals is here to help your business thrive in the
            ever-changing landscape of digital marketing
          </p>
        </div>
        <div className={styles.swiperContainer}>
          <div ref={prevRef}>
            <img src={chevronLeft} alt="" />
          </div>
          <Swiper
            loop
            className={styles.swiper}
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3.5,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // Attach refs to Swiper navigation once it initializes
              if (prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
          >
            <SwiperSlide>
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberImg}>
                  <img src={person} alt="person" />
                </div>
                <div className={styles.personName}>Yuliya Malysh</div>
                <div className={styles.bioText}>View Bio</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberImg}>
                  <img src={person} alt="person" />
                </div>
                <div className={styles.personName}>Yuliya Malysh</div>
                <div className={styles.bioText}>View Bio</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberImg}>
                  <img src={person} alt="person" />
                </div>
                <div className={styles.personName}>Yuliya Malysh</div>
                <div className={styles.bioText}>View Bio</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberImg}>
                  <img src={person} alt="person" />
                </div>
                <div className={styles.personName}>Yuliya Malysh</div>
                <div className={styles.bioText}>View Bio</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberImg}>
                  <img src={person} alt="person" />
                </div>
                <div className={styles.personName}>Yuliya Malysh</div>
                <div className={styles.bioText}>View Bio</div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div ref={nextRef}>
            <img src={chevronRight} alt="" />
          </div>
        </div>

        <div className={styles.contactBlock}>
          <p>
            With Jussplay, you can trust that you're working with a team of
            experts who are dedicated to helping your business succeed.
          </p>
          <Form />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default transition(About);
