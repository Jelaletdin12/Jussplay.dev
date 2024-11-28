import React from "react";
import styles from "./CuttingEdgeTech.module.scss";

const services = [
  {
    id: 1,
    title: "Dedicated Resources",
    description:
      "With a large pool of resources available at RisingMax, we meet the client's expectations without compromising the quality. So we are the best choice if you need a team of highly qualified professionals that will match your IT and business needs.",
  },
  {
    id: 2,
    title: "Clear Communication",
    description:
      "We listen to our clients very carefully. Once we understand what they actually desire, we concisely give our advice. As the most friendly Android App Development Company USA, we ensure you achieve the objectives that matter to you.",
  },
  {
    id: 3,
    title: "Serving Clients Globally",
    description:
      "As the best Android app development agency, we serve clients from different industries around the world. No project is too small or too big for us; we know how to make different business sizes successful with our on-demand Android app solutions.",
  },
  {
    id: 4,
    title: "Dedicated Resources",
    description:
      "With a large pool of resources available at RisingMax, we meet the client's expectations without compromising the quality. So we are the best choice if you need a team of highly qualified professionals that will match your IT and business needs.",
  },
  {
    id: 5,
    title: "Clear Communication",
    description:
      "We listen to our clients very carefully. Once we understand what they actually desire, we concisely give our advice. As the most friendly Android App Development Company USA, we ensure you achieve the objectives that matter to you.",
  },
  {
    id: 6,
    title: "Serving Clients Globally",
    description:
      "As the best Android app development agency, we serve clients from different industries around the world. No project is too small or too big for us; we know how to make different business sizes successful with our on-demand Android app solutions.",
  },
];
const technologies = [
  {
    title: "Programming Languages",
    items: ["Java", "Kotlin", "Javascript", "C Sharp"],
  },
  { title: "Framework", items: ["Java", "Kotlin", "Javascript", "C Sharp"] },
  { title: "Databases", items: ["Java", "Kotlin", "Javascript", "C Sharp"] },
  {
    title: "Components & Toolsets",
    items: ["Java", "Kotlin", "Javascript", "C Sharp"],
  },
  { title: "QA Tools", items: ["Java", "Kotlin", "Javascript", "C Sharp"] },
  {
    title: "Application Monitoring",
    items: ["Java", "Kotlin", "Javascript", "C Sharp"],
  },
];

const CuttingEdgeTech = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Cutting-Edge Technologies For Your Android App
        </h1>
        <p className={styles.subtitle}>
          We offer flexible engagement models to ensure we effectively cater to
          our clients’ insurance software development needs. Hire the right
          insurance software developers as per project requirements.
        </p>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.borderTop}></div>
            <h2 className={styles.cardTitle}>{tech.title}</h2>
            <ul className={styles.list}>
              {tech.items.map((item, idx) => (
                <li key={idx} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <section className={styles["service-section"]}>
        <h2>
          Why Choose RisingMax As A Custom Android Application Development
          Company?
        </h2>
        <p className={styles["escription"]}>
          Choose us as your trustworthy Android application development
          solutions provider. For top brands, enterprises, and startups around
          the globe, we have successfully designed and developed Android apps,
          including all the latest technologies and features.
        </p>
        <div className={styles["service-section__cards"]}>
          {services.map((service) => (
            <div key={service.id} className={styles["service-card"]}>
              <h3 className={styles["service-card__title"]}>{service.title}</h3>
              <p className={styles["service-card__description"]}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CuttingEdgeTech;
