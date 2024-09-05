import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Logo from "../../assets/CubeIconLottie.json";

function LogoLottie() {
  const [size, setSize] = useState({ width: 450, height: 450 });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      //console.log("Window width:", newWidth); // Debugging line
      if (newWidth < 480) {
        setSize({ width: 350, height: 350 });
      } else {
        setSize({ width: 450, height: 450 });
      }
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Logo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={size.height} width={size.width} />
    </div>
  );
}

export default LogoLottie;
