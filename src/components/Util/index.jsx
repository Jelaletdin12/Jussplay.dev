// import React from "react";

// export default function DoNotTouch() {
//   useGSAP(() => {
//     let container = document.querySelector(".container");

//     ScrollTrigger.create({
//       trigger: first.current,
//       start: "top top",
//       end: () => container.scrollWidth - window.innerWidth,
//       pin: true,
//       anticipatePin: 1,
//       scrub: 0.5,
//       invalidateOnRefresh: true,
//     });

//     let thumbNails = gsap.utils.toArray(".thumbnail");

//     thumbNails.forEach((thumb, i) => {
//       if (thumb.classList.contains("fakePin")) {
//         function prevAll(element) {
//           var result = [];

//           while ((element = element.previousElementSibling))
//             result.push(element);
//           return result;
//         }

//         var totalWidthToMove;

//         function getTotalWidthToMove() {
//           totalWidthToMove = 0;

//           prevAll(thumb).forEach((thumbBefore, i) => {
//             let style =
//               thumbBefore.currentStyle || window.getComputedStyle(thumbBefore);
//             let marginRight = parseInt(style.marginLeft);

//             totalWidthToMove += thumbBefore.offsetWidth + marginRight;
//           });

//           return totalWidthToMove;
//         }

//         gsap.to(thumb, {
//           x: () => {
//             return -getTotalWidthToMove();
//           },
//           ease: "none",
//           scrollTrigger: {
//             trigger: firstContent.current,
//             start: "top top",
//             scrub: 0.5,
//             invalidateOnRefresh: true,
//             end: () => "+=" + getTotalWidthToMove(),
//           },
//         });
//       } else {
//         gsap.to(thumb, {
//           x: () => {
//             return -container.scrollWidth;
//           },
//           ease: "none",
//           scrollTrigger: {
//             trigger: firstContent.current,
//             start: "top top",
//             scrub: 0.5,
//             invalidateOnRefresh: true,
//             end: () => "+=" + container.scrollWidth,
//           },
//         });
//       }
//     });
//   });

//   return (
//     <div className={`container`} ref={first}>
//       <div className="wrapper" ref={firstContent}>
//         <div className="thumbnail">
//           {" "}
//           <div
//             className={`${styles.main_hSection_page} panel`}
//             style={{
//               display: "flex",
//               alignItems: "flex-end",
//               padding: 30,
//             }}
//           >
//             <h3 className={styles.main_hSection_page_h3}>
//               what <br /> we do
//             </h3>
//           </div>{" "}
//         </div>
//         <div className="thumbnail fakePin">
//           <div className={styles.thumbnail_block}>
//             <div>web develop</div>
//             <div>1</div>
//           </div>
//         </div>
//         <div className="thumbnail full fakePin">3</div>
//         <div className="thumbnail fakePin">4</div>
//         {/* <div class="thumbnail">5</div>
//       <div class="thumbnail">6</div>
//       <div class="thumbnail full">7</div> */}
//       </div>
//     </div>
//   );
// }
