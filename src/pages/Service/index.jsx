
import styles from './service.module.scss'
import transition from "../../pageTransition";
import CanvasAnimation from "./canvas";
import left from "../../assets/img2.png"
import right from "../../assets/img1.png"

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
                    <button className={styles.button}>Meet with us</button>
                </div>
            </div>
            <div className={styles.down}>
                <div className={styles.head}> 

                <h1>Start Journey</h1>
                <h1>Just choose what you need</h1>
                </div>
                <div className={styles.canvas}>
                    <CanvasAnimation />
                </div>
            </div>
        </section>
    );
};



export default transition(Service)