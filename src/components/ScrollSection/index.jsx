import React, { useRef, useState, useEffect, useLayoutEffect  } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./scroll-sec.scss";
import debounce from "debounce";

import game from "../../assets/game.png";
import web from "../../assets/web.jpeg";
import app from "../../assets/app.jpeg";
import design from "../../assets/design.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ScrollSection = () => {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  // const animElRef = useRef(null); 
  const [index, setIndex] = useState(0);

  useLayoutEffect (() => {
    const handleResize = debounce(() => {
      const container = containerRef.current;
      const pin = pinRef.current;
      // const animEl = animElRef.current; 

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      if (window.innerWidth > 500) {
        // Desktop
        ScrollTrigger.create({
          scrub: true,
          pin: pin,
          trigger: container,
          invalidateOnRefresh: true,
          refreshPriority: 1,
          markers: false,
          start: "top top",
          end: `+=${
            window.innerHeight * pin.querySelectorAll(".pin-el__link").length
          }`,
          onUpdate: (self) => {
            const progress = Number(self.progress.toFixed(3));
            const titles = pin.querySelectorAll(".pin-el__link");
            const total = titles.length;

            titles.forEach((title, i) => {
              const oldIndex = i;
              const newIndex = oldIndex + 1;

              if (progress > oldIndex / total && progress < newIndex / total) {
                titles[oldIndex].classList.add("is-active");

                if (self.direction === 1 && oldIndex > 0) {
                  titles[oldIndex - 1].classList.remove("is-active");
                } else if (self.direction === -1 && newIndex < titles.length) {
                  titles[newIndex].classList.remove("is-active");
                }
              }
            });
          },
        });

        // const updateAnimEl = () => {
        //   const bounds = animEl.getBoundingClientRect();
        //   animEl.style.width = `${bounds.width}px`;
        //   animEl.style.height = `${bounds.height}px`;
        //   animEl.style.transform = `translate3d(0, ${bounds.top}px, 0)`;

        //   window.requestAnimationFrame(updateAnimEl);
        // };

        // updateAnimEl();
        ScrollTrigger.refresh();
      } else {
        // Mobile
        ScrollTrigger.normalizeScroll(true);
        if (pin) {
          pin.style.position = "relative";
          pin.style.height = "auto";
        }

        const images = pin.querySelectorAll(".pin-el__link img");
        images.forEach((img) => {
          img.style.width = "100%";
          img.style.height = "auto";
          img.style.objectFit = "cover";
        });

        // animEl.style.transform = `none`;
        // animEl.style.width = "auto";
        // animEl.style.height = "auto";
      }
    }, 200);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="pin-el" ref={containerRef} id="work">
        <div className="pin-el__wrapper container" ref={pinRef}>
          <div className="pin-el__card" data-card></div>
          <div className="pin-el__link">
            <img src={game} alt="game" />
          </div>
          <div className="pin-el__link">
            <img src={web} alt="game" />
          </div>
          <div className="pin-el__link">
            <img src={app} alt="game" />
          </div>
          <div className="pin-el__link">
            <img src={design} alt="game" />
          </div>
        </div>
        <div className="pin-el__chapters">
          <span>
            <div className="text-content">
              <div className="text-content_sectionMotto">
                Unlock New Realms of Imagination
              </div>
              <p className="text-content_sectionP">
                At Jussplay.devs, we breathe life into your gaming ideas. From
                heart-pounding action games to immersive educational
                experiences.
              </p>
              <div className="pin-el__link2">
                <img src={game} alt="game" id="car" />
              </div>
              <p className="text-content_sectionP2">
                our dedicated team harnesses the latest technologies to deliver
                captivating gameplay and stunning graphics.
              </p>

              <h1 className="text-content_title">Game development</h1>
            </div>
          </span>
          <span>
            <div className="text-content">
              <div className="text-content_sectionMotto">
                Crafting Your Digital Gateway
              </div>
              <p className="text-content_sectionP">
                Your website is the front door to your business, and at
                Jussplay.devs, we ensure it's both inviting and efficient.
              </p>
              <div className="pin-el__link2">
                <img src={web} alt="game" />
              </div>
              <p className="text-content_sectionP2">
                Our web development services are tailored to create custom sites
                that are not only visually appealing but also highly functional.
              </p>

              <h1 className="text-content_title">Web development</h1>
            </div>
          </span>
          <span>
            <div className="text-content">
              <div className="text-content_sectionMotto">
                Innovate, Integrate, and Elevate
              </div>
              <p className="text-content_sectionP">
                Step into the future with Jussplay.devs’s application
                development services. Whether you need a mobile app or a complex
                enterprise solution.
              </p>
              <div className="pin-el__link2">
                <img src={app} alt="game" />
              </div>
              <p className="text-content_sectionP2">
                our team combines technical prowess with creative flair to
                produce applications that are intuitive and scalable.
              </p>

              <h1 className="text-content_title">Application development</h1>
            </div>
          </span>
          <span>
            <div className="text-content">
              <div className="text-content_sectionMotto">
                Design That Moves You
              </div>
              <p className="text-content_sectionP">
                Our design solutions—spanning from motion graphics to UX/UI
                design—are crafted to create memorable experiences that resonate
                with your target audience.
              </p>
              <div className="pin-el__link2">
                <img src={design} alt="game" />
              </div>
              <p className="text-content_sectionP2">
                Whether animating a logo or designing a seamless user interface,
                our work is meant to captivate and engage.
              </p>

              <h1 className="text-content_title">Design solutions</h1>
            </div>
          </span>
        </div>
      </div>

      {/* <div className="anim-block">
        <div className="anim-block__item" ref={animElRef}>
          <span></span>
        </div>
      </div> */}
    </>
  );
};

export default ScrollSection;
