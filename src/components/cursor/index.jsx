import React, { useEffect } from "react";
import styles from "./cursor.module.scss";

const CustomCursor = React.memo(() => {
  useEffect(() => {
    const cursor = document.querySelector(`.${styles.customCursor}`);
    const handleMouseMove = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const links = document.querySelectorAll("a");
    const handleMouseEnter = () => cursor.classList.add(styles.hover);
    const handleMouseLeave = () => cursor.classList.remove(styles.hover);

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div className={styles.customCursor}></div>;
});

export default CustomCursor;

// import React, { useEffect, useRef, useState } from 'react';
// import styles from './cursor.module.scss'; // SCSS modülünü import ediyoruz

// const CustomCursor = () => {
//   const cursorRef = useRef(null);
//   const TAIL_LENGTH = 20;
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorHistory, setCursorHistory] = useState(
//     Array(TAIL_LENGTH).fill({ x: 0, y: 0 })
//   );

//   const onMouseMove = (event) => {
//     setMousePosition({ x: event.clientX, y: event.clientY });
//   };

//   useEffect(() => {
//     if (!cursorRef.current) return; // cursorRef.current yoksa hiçbir şey yapma
//     const cursorCircles = cursorRef.current.querySelectorAll(`.${styles.cursorCircle}`);
//     const cursorArray = Array.from(cursorCircles);

//     const updateCursor = () => {
//       setCursorHistory((prevHistory) => {
//         const newHistory = [...prevHistory];
//         newHistory.shift();
//         newHistory.push(mousePosition);

//         for (let i = 0; i < TAIL_LENGTH; i++) {
//           let current = newHistory[i];
//           let next = newHistory[i + 1] || newHistory[TAIL_LENGTH - 1];

//           let xDiff = next.x - current.x;
//           let yDiff = next.y - current.y;

//           // Hareketi yavaşlatmak için daha düşük bir hız faktörü
//           current.x += xDiff * 0.95;
//           current.y += yDiff * 0.95;

//           if (cursorArray[i]) {
//             cursorArray[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i / TAIL_LENGTH})`;
//           }
//         }

//         return newHistory;
//       });

//       requestAnimationFrame(updateCursor);
//     };

//     updateCursor();

//     document.addEventListener('mousemove', onMouseMove);
//     return () => {
//       document.removeEventListener('mousemove', onMouseMove);
//     };
//   }, [mousePosition]);

//   return (
//     <div  className={styles.cursorCircle} ref={cursorRef}>
//       {Array.from({ length: TAIL_LENGTH }).map((_, i) => (
//         <div key={i} className={styles.cursorCircle} />
//       ))}
//     </div>
//   );
// };

// export default CustomCursor;


