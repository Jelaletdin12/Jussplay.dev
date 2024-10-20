/* eslint-disable react/no-unescaped-entities */
import gsap from "gsap";
//import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import emplas from "../../assets/emplascase.png";
import kidstime from "../../assets/kidstime.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LogoLottie from "../../components/Lottie/Lottie";
import Partners from "../../components/Partners";
import ScrollSection from "../../components/ScrollSection";
import WorkTab from "../../components/WorkTab";
import transition from "../../pageTransition";
import "./gradient.scss";
import styles from "./home.module.scss";

gsap.registerPlugin(ScrollTrigger);

const workTabs = [
  {
    id: 1,
    name: "kidstime",
    type: "mobile app",
    img: kidstime,
  },
  {
    id: 2,
    name: "emplas realestate",
    type: "web",
    isTop: true,
    img: emplas,
  },
  {
    id: 3,
    name: "jussplay.labs",
    type: "web",
  },
  {
    id: 4,
    name: "asghgabat drift club",
    type: "mobile app",
  },
  {
    id: 5,
    name: "coming soon",
  },
  {
    id: 6,
    name: "coming soon",
    isBottom: true,
  },
];
function Home() {
  const container = useRef();
  const interBubble = useRef();
  const [flag, setFlag] = useState(false);
  const [isTopRemoved, setIsTopRemoved] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble.current.style) {
        interBubble.current.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
      }
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }, []);

  const debounce = (callback, wait) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => callback.apply(this, args), wait);
    };
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      // Оптимизация управления флагами
      setFlag(window.scrollY >= 790);
      setIsTopRemoved(window.scrollY >= 1650);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    const mm = gsap.matchMedia();

    // const animateForLargeScreens = () => {
    // 	const heroAnim = gsap.timeline({
    // 		scrollTrigger: {
    // 			trigger: '#hero',
    // 			start: 'top top',
    // 			end: 'bottom top',
    // 			scrub: true,
    // 		},
    // 	})
    // 	heroAnim.to('#heroText1', { x: -200, opacity: 0 })
    // 	heroAnim.to('#heroText2', { x: 200, opacity: 0 }, '<=')
    // 	heroAnim.to('#logoLottie', { x: 300 }, '<=')
    // 	heroAnim.to('#about', { y: -550, opacity: 1 }, '<=')
    // }

    // const animateForSmallScreens = () => {
    // 	const heroAnim = gsap.timeline({
    // 		scrollTrigger: {
    // 			trigger: '#hero',
    // 			start: 'top top',
    // 			end: 'bottom top',
    // 			scrub: true,
    // 			invalidateOnRefresh: true,
    // 			refreshPriority: 1,
    // 		},
    // 	})
    // 	heroAnim.to('#heroText1', { x: -300, opacity: 0 })
    // 	heroAnim.to('#heroText2', { x: 300, opacity: 0 }, '<=')
    // 	heroAnim.to('#logoLottie', { y: -400 }, '<=')
    // 	heroAnim.to('#about', { y: -450, opacity: 1 }, '<=')
    // }

    // Регистрация медиазапросов
    // mm.add('(min-width: 521px)', animateForLargeScreens)
    // mm.add('(max-width: 520px)', animateForSmallScreens)

    const createAnimation = (x1, x2, x, y, aboutY) => {
      const heroAnim = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });
      heroAnim.to("#heroText1", { x: x1, opacity: 0 });
      heroAnim.to("#heroText2", { x: x2, opacity: 0 }, "<");
      heroAnim.to("#logoLottie", { x }, "<");
      heroAnim.to("#logoLottie", { y }, ">");
      heroAnim.to("#about", { y: aboutY, opacity: 1 }, "<");
    };

    mm.add("(min-width: 521px)", () =>
      createAnimation(-200, 200, 400, 0, -550)
    );
    mm.add("(max-width: 520px)", () =>
      createAnimation(-300, 300, 0, -400, -450)
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mm.revert();
    };
  }, []);

  return (
    <main className={styles.main} ref={container}>
      <Header />
      <section
        className={
          isTopRemoved
            ? styles.main_heroSection
            : styles.main_heroSection + " " + styles.main_heroSection_active
        }
        id="hero"
      >
        <div className="gradient-bg">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div ref={interBubble} className="interactive"></div>
          </div>
        </div>
        <div className={styles.heroSecWithVideo}>
          <h1 className={styles.main_heroSection_motto}>
            <div className={styles.heroText1} id="heroText1">
              just say it
            </div>
            <div id="logoLottie">
              <LogoLottie></LogoLottie>
            </div>
            <div
              id="heroText2"
              className={styles.main_heroSection_motto_lowerText}
            >
              we will make it
            </div>
          </h1>
        </div>
        <section
          className={
            styles.main_intro + " " + (flag && styles.main_intro_onhover)
          }
          id="about"
        >
          {" "}
          <div>
            <p>
              Join <span>JussPlay,</span>
            </p>
            <p>
              and see your project <span>JUST</span> come to life.
            </p>
            <p>
              {" "}
              <span>SAY</span> what you want: web, mobile, design, or
            </p>
            <p>
              other services, and we will <span>IT</span> happen.
            </p>
            <p>Our team of experts are here, and</p>
            <p>
              <span>WE</span>manage every project professionally.
            </p>
            <p>
              Our principal is to <span>MAKE</span>your vision a reality.{" "}
            </p>
            <p>Trust us with your ideas,</p>
            <p>
               and we will complete <span>IT</span> to
              perfection.
            </p>
          </div>
        </section>
      </section>
      <section
        className={styles.main_work}
        id="projects"
        style={{ marginTop: "700px" }}
      >
        <h2>
          Selected Projects
          <FaArrowTurnDown size={12} />
        </h2>
        <div>
          {workTabs.map((wt) => (
            <WorkTab
              key={wt.id}
              name={wt.name}
              order={wt.id}
              type={wt.type}
              isTop={wt.isTop}
              isBottom={wt.isBottom}
              img={wt.img}
            />
          ))}
        </div>
      </section>

      <ScrollSection />
      <Partners />
      <Footer />
    </main>
  );
}

export default transition(Home);
