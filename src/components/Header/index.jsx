import classNames from "classnames";
import { memo, useRef, useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../assets/logo.png";
import select from "../../assets/select_V2.wav";
import DropdownContent from "../../components/headerDropdownContent/index";
import { useSound } from "../../providers/soundContext";
import styles from "./header.module.scss";
import { FaAngleLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const menuItems = [
  { name: "Home", path: "/home/#hero" },
  // { name: "Projects", path: "/home/#projects" },
  { name: "Service", path: "/service" },
  { name: "About us", path: "/aboutus" },
  { name: "Contact us", path: "/contactus" },
  { name: "Blockchain", path: "/blockchain" },
  { name: "Token", path: "/nft-token-development" },
  { name: "Metaverse ", path: "/metaverse" },
  { name: "Blockchain_4 ", path: "/blockchain_4" },
  { name: "Web3 ", path: "/web3-game-development" },
  { name: "Chain6 ", path: "/crypto-exchange-software-development" },
  { name: "Crypto ", path: "/wallet" },
  { name: "Android App", path: "/android-app-development-company" },
  { name: " Servive-ios ", path: "/service-ios" },
  { name: " WebApp ", path: "/web-app" },
];

export default memo(function Header({ children, position }) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isUserScrollingUp, setIsUserScrollingUp] = useState(false);

  const audioRef = useRef(new Audio(select));
  const { isPlaying } = useSound();

  const playSound = () => {
    if (isPlaying) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = (event) => {
      const scrollTop = event.detail ? event.detail.scrollTop : window.scrollY;

      if (window.innerWidth > 768) {
        if (scrollTop > lastScrollY) {
          setIsHeaderVisible(false);
          setIsUserScrollingUp(false);
        } else {
          setIsUserScrollingUp(true);
        }
        lastScrollY = scrollTop;
      }
    };

    
    window.addEventListener("customScroll", handleScroll);
   
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("customScroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleHeader = () => {
    setIsHeaderVisible((prev) => !prev);
  };

  return (
    <>
      <header
        className={classNames(styles.header, {
          [styles.hidden]: !isHeaderVisible,
        })}
      >
        <div className={styles.logo}>
          <Link to="/home" onClick={playSound}>
            <img src={logo} alt="Logo" width={90} height={90} />
          </Link>
        </div>
        <nav className={styles.header_nav}>
          <ul>
            <li
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
              onClick={playSound}
            >
              <Link to="/service">Services</Link>
              {activeDropdown === "services" && (
                <DropdownContent dropdownType="services" />
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("blockchain")}
              onMouseLeave={handleMouseLeave}
              onClick={playSound}
            >
              Blockchain
              {activeDropdown === "blockchain" && (
                <DropdownContent dropdownType="blockchain" />
              )}
            </li>
            <li>
              <Link to="/contactus" onClick={playSound}>
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/aboutus" onClick={playSound}>
                About us
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={styles.header_menuBtn}
          onClick={() => setIsMenuActive(true)}
        >
          menu
        </div>
        {/* <div className={styles.header__logo}>{children}</div> */}
        <div
          className={classNames(styles.header_menu, {
            [styles.header_menu_active]: isMenuActive,
            [styles.header_menu_inactive]: !isMenuActive,
          })}
        >
          <ul className={styles.header_menu_diagonal}>
            <Swiper
              direction={"vertical"}
              loop={false}
              pagination={false}
              modules={Navigation}
              slidesPerView={3}
              spaceBetween={10}
              centeredSlides={true}
              className="mySwiper"
              onSlideChange={() => {
                if (window.innerWidth <= 520) {
                  // Ensure it's mobile
                  playSound();
                }
              }}
            >
              {menuItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <li>
                    <HashLink
                      smooth
                      to={item.path}
                      onClick={() => setIsMenuActive(false)}
                    >
                      {item.name}
                    </HashLink>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>

          <div
            className={styles.header_menu_close}
            onClick={() => setIsMenuActive(false)}
          >
            <IoMdClose />
          </div>

          <div className={styles.header_menu_socials}>
            <div className={styles.header_menu_socials_icons}>
              <a
                href="https://wa.me/9377913945"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com/jussplay.dev"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
            <div className={styles.header_menu_socials_text}>
              Follow us on Instagram
            </div>
          </div>
        </div>
      </header>
      {/* Show Button When Header is Hidden */}

      {!isHeaderVisible && window.innerWidth > 768 && (
        <button
          className={styles.toggleButton}
          onClick={toggleHeader}
          style={{
            position: "fixed",
            top: "30px",
            right: "5px",
            zIndex: "1000",
            borderRadius: "100px",
          }}
        >
          {isHeaderVisible ? "Hide" : <FaAngleLeft />}
        </button>
      )}
    </>
  );
});
