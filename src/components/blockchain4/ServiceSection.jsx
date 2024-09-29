// components/ServiceSection.jsx
import styles from "./ServiceSection.module.scss";
import threedgaming from "../../assets/blockchain4/3dgaming.png";
import watch from "../../assets/blockchain4/watch.png";
import mobgaming from "../../assets/blockchain4/mobgaming.png";
import tvgaming from "../../assets/blockchain4/tvgaming.png";
import vrgaming from "../../assets/blockchain4/vrgaming.png";
import webgaming from "../../assets/blockchain4/webgaming.png";

const services = [
  {
    id: 1,
    title: "Watch gaming",
    description:
      "Hire our experienced web3 game developers to build engaging games for Apple and Android wearables.",
    icon: watch,
  },
  {
    id: 2,
    title: "TV gaming",
    description:
      "Hire our experienced web3 game developers to build engaging games for Apple and Android wearables.",
    icon: tvgaming,
  },
  {
    id: 3,
    title: "Web gaming",
    description:
      "Hire our experienced web3 game developers to build engaging games for Apple and Android wearables.",
    icon: webgaming,
  },
  {
    id: 4,
    title: "Mobile gaming",
    description:
      "Hire our experienced web3 game developers to build engaging games for Apple and Android wearables.",
    icon: mobgaming,
  },
  {
    id: 5,
    title: "3D gaming",
    description:
      "Hire our experienced web3 game developers to build engaging games for Apple and Android wearables.",
    icon: threedgaming,
  },
  {
    id: 6,
    title: "VR gaming",
    description:
      "Hire our experienced web3 game developers to build engaging games for Apple and Android wearables.",
    icon: vrgaming,
  },
];

const ServiceSection = () => {
  return (
    <section className={styles["service-section"]}>
      <h2>Web3 game development services for all screens</h2>
      <div className={styles["service-section__cards"]}>
        {services.map((service) => (
          <div key={service.id} className={styles["service-card"]}>
            <img
              src={service.icon}
              alt={service.title}
              className={styles["service-card__icon"]}
            />
            <h3 className={styles["service-card__title"]}>{service.title}</h3>
            <p className={styles["service-card__description"]}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
