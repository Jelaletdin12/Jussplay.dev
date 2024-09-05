import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import JDP from "../../assets/Static.json";


function JDPloader({ isPlaying }) {
  const [size, setSize] = useState({ width: 400, height: 400 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setSize({ width: 300, height: 300 });
      } else {
        setSize({ width: 400, height: 400 });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const defaultOptions = {
    animationData: JDP,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ position: 'relative', zIndex: '123' }}>
      <Lottie options={defaultOptions} height={size.height} width={size.width} isStopped={!isPlaying} />
    </div>
  );
}

export default JDPloader;
