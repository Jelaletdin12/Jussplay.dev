import styles from "./service.module.scss";
import transition from "../../pageTransition";
import CanvasAnimation from "./canvas";
import left from "../../assets/img2.png";
import right from "../../assets/img1.png";
import { IoIosArrowForward } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

const Service = () => {
  return (
    <section className={styles.service}>
      <div className={styles.up}>
        <div className={styles.bg}>
          <img src={left} alt="left image" />
          <img src={right} alt="right image" />
        </div>
        <div className={styles.content}>
          <h1>Implement your</h1>
          <h1>ideas with Jussplay.dev</h1>
          <HashLink to={"#startJourney"} smooth>
            <button className={styles.button}>
              Meet with us <IoIosArrowForward />
            </button>
          </HashLink>
        </div>
      </div>
      <div className={styles.down} id="startJourney">
        <div className={styles.head}>
          <div className={styles.start}>Start your <br /> journey with us</div>
          <div className={styles.choose}>Just choose <br /> what you need</div>
          <div>
            <div style={{zIndex: '1'}}><ul>Android<li>ngrmf,sl;</li><li>btnrmkel</li></ul></div>
          </div>
        </div>
        <div className={styles.canvas}>
          <CanvasAnimation />
        </div>
      </div>
    </section>
  );
};

export default transition(Service);
