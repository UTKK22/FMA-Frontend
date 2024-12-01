import React from "react";
import styles from "../PBannerFive/PBannerFive.module.css";
import MiniComponent from "../MiniComponent";
import { useRef } from "react";
function PBannerFive() {
    const scrollRef = useRef(null);

    const handleNext = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 500, behavior: "smooth" }); 
      }
    };
  
    const handlePrev = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -500, behavior: "smooth" }); 
      }
    };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.name}>Customer Reviews</div>
        <div className={styles.image}>
          <div onClick={handlePrev}>
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732853772/gwac3qwp8stlfokhevos.png" />
          </div>
          <div onClick={handleNext}>
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732853807/njcq8u0aincnd2d5boig.png" />
          </div>
        </div>
      </div>
      <div className={styles.component} ref={scrollRef}>
        <MiniComponent />
        <MiniComponent />
        <MiniComponent />
        <MiniComponent />
        <MiniComponent />
      </div>
      <div className={styles.ratings}>
        <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732784816/rzlvfdyjip9stlq3xxiz.png" />
      </div>
    </div>
  );
}

export default PBannerFive;
