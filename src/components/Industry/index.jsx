import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Section = ({ title, description, imageSrc, frameClassName }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`sectionService ${isVisible ? "fade-in" : ""}`}
      ref={sectionRef}
    >
      <div className="section-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="button">
          Meet with us <IoIosArrowForward />
        </button>
      </div>
      <div className={`frame ${frameClassName}`}>
        <img src={imageSrc} alt={title} className="section-image" />
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  frameClassName: PropTypes.string,
};

Section.defaultProps = {
  frameClassName: "",
};

export default Section;
