import React from "react";
import styles from "../BannerTwo/BannerTwo.module.css";
function BannerTwo() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            Up to -40% 🎊 Order.uk exclusive deals
          </div>
          <div className={styles.category}>
            <div>Vegan</div>
            <div>Sushi</div>
            <div className={styles.food}>Pizza & Fast food</div>
            <div>others</div>
          </div>
        </div>
        <div className={styles.banners}>
          <div className={styles.bannerone}>
            <div className={styles.line1}>Restaurant</div>
            <div className={styles.line2}>Chef Burgers London</div>
            <div className={styles.line3}>-40%</div>
          </div>
          <div className={styles.bannertwo}>
            <div className={styles.line1}>Restaurant</div>
            <div className={styles.line2}>Grand Ai Cafe London</div>
            <div className={styles.line3}>-20%</div>
          </div>
          <div className={styles.bannerthree}>
            <div className={styles.line1}>Restaurant</div>
            <div className={styles.line2}>Butterbrot Caf’e London</div>
            <div className={styles.line3}>-17%</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerTwo;
