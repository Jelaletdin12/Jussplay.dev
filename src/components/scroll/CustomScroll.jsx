import React, { useRef, useEffect } from "react";
import "./scroll.scss"; 

export const CustomScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollTop = event.target.scrollTop;
      
      window.dispatchEvent(
        new CustomEvent("customScroll", {
          detail: { scrollTop },
        })
      );
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="custom__scroll-container">
      {children}
    </div>
  );
};
