import React, { useEffect, useRef } from "react";
import styles from "./AndroidService.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import dexServiceImage from "../../assets/blockchain6/page6.png";

const services = [
  {
    title: "Android Application Consultation",
    description:
      "Our clients deserve the best, and that's the reason we use a customer-centric approach towards their business success. Our team will craft the best-quality Android app solutions so that you can achieve your goals faster.",
  },
  {
    title: "Android Application Consultation",
    description:
      "Our clients deserve the best, and that's the reason we use a customer-centric approach towards their business success. Our team will craft the best-quality Android app solutions so that you can achieve your goals faster.",
  },
  {
    title: "Android Application Consultation",
    description:
      "Our clients deserve the best, and that's the reason we use a customer-centric approach towards their business success. Our team will craft the best-quality Android app solutions so that you can achieve your goals faster.",
  },
  {
    title: "Android Application Consultation",
    description:
      "Our clients deserve the best, and that's the reason we use a customer-centric approach towards their business success. Our team will craft the best-quality Android app solutions so that you can achieve your goals faster.",
  },
  {
    title: "Android Application Consultation",
    description:
      "Our clients deserve the best, and that's the reason we use a customer-centric approach towards their business success. Our team will craft the best-quality Android app solutions so that you can achieve your goals faster.",
  },
  {
    title: "Android Application Consultation",
    description:
      "Our clients deserve the best, and that's the reason we use a customer-centric approach towards their business success. Our team will craft the best-quality Android app solutions so that you can achieve your goals faster.",
  },
];

const AndroidServicesComponent = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = serviceRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setTimeout(() => {
                entry.target.classList.add(styles.fadeIn);
              }, index * 300);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h2>Custom Android App Development Services We Provide</h2>
        <p className={styles.description}>
          Jussplay is a top Android app development agency that offers
          cloud-ready and reliable app solutions for startups, SMBs, and
          companies. Our Android mobile app developers stay updated on the
          latest technology and trends to seamlessly integrate them into app
          development. With an excellent skill set and expertise, we deliver app
          solutions that meet all of our client’s business requirements.
        </p>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard}`}
              ref={(el) => (serviceRefs.current[index] = el)}
            >
              <div className={styles.borderTop}></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.promoSection}>
        <img
          src={dexServiceImage}
          alt="DEX Services"
          className={styles.promoImage}
        />
        <div className={styles.promoContent}>
          <h3>Looking for Highly-Secure Wallet Development?</h3>
          <p>
            Start facilitating secure and easy payments by getting hands-on with
            our crypto wallet development solution. We build crypto wallets for
            Blockchain projects, Defi trading, and other platforms. Discuss your
            project needs so we plan the development of your required wallet
            together.
          </p>
          <button className={styles.meetButton}>
            Meet with us <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default AndroidServicesComponent;
