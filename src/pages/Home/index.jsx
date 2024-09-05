import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 790) {
        setFlag(true);
      } else if (window.scrollY < 750) {
        setFlag(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 521px)", () => {
      const heroAnim = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      heroAnim.to("#heroText1", { x: -200, opacity: 0 });
      heroAnim.to("#heroText2", { x: 200, opacity: 0 }, "<");
      heroAnim.to("#logoLottie", { x: 300 }, "<");
      heroAnim.to("#about", { y: -550, opacity: 1 }, "<");

      gsap.fromTo(
        "#about",
        { y: -500, opacity: 0 },
        {
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
          y: 0,
          opacity: 0,
        }
      );
    });

    mm.add("(max-width: 520px)", () => {
      const heroAnim = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      heroAnim.to("#heroText1", { x: -400, opacity: 0 });
      heroAnim.to("#heroText2", { x: 400, opacity: 0 }, "<");
      heroAnim.to("#logoLottie", { y: -400 }, "<");
      heroAnim.to("#about", { y: -450, opacity: 1 }, "<");
      gsap.fromTo(
        "#about",
        { y: -450, opacity: 0 },
        {
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "top top",
            scrub: true,
			immediateRender: false
          },
          y: 0,
          opacity: 0,
        }
      );
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mm.revert();
    };
  }, []);
  return (
    <main className={styles.main} ref={container}>
      <Header />
      <section
        className={styles.main_heroSection}
        id="hero"
        style={{ top: "0" }}
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
              we will make itt
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
              Welcome to <span>JussPlay Labs</span>,
            </p>
            <p>
              where your <span>digital dreams</span>
            </p>
            <p>turn into reality! Specializing</p>
            <p>
              in cutting-edge <span>web and mobile</span>
            </p>
            <p>development, along with stunning</p>
            <p>
              <span>design services.</span>
            </p>
            <p>our team of experts is here to make it</p>
            <p>happen.</p>
            <p>Let's build something amazing together!</p>
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
              name={wt.name}
              order={wt.id}
              key={wt.id}
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
