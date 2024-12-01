import React from "react";
import styles from "../PBannerFour/PBannerFour.module.css";
function PBannerFour() {
  return (
    <div className={styles.pbanners}>
      <div className={styles.pbannerone}>
        <div className={styles.pline1}>McDonald’s East London</div>
        <div className={styles.pline2}>First Order Discount</div>
        <div className={styles.pline3}>-20%</div>
        <div className={styles.pline4}>
          <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732812772/gbkx1ca8zw87ovza04eq.png" />
        </div>
      </div>
      <div className={styles.pbannertwo}>
        <div className={styles.pline1}>McDonald’s East London</div>
        <div className={styles.pline2}>Vegan Discount</div>
        <div className={styles.pline3}>-20%</div>
        <div className={styles.pline4}>
          <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732812772/gbkx1ca8zw87ovza04eq.png" />
        </div>
      </div>
      <div className={styles.pbannerthree}>
        <div className={styles.pline1}>McDonald’s East London</div>
        <div className={styles.pline2}>Free ice Cream Offer</div>
        <div className={styles.pline3}>-100%</div>
        <div className={styles.pline4}>
          <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732812772/gbkx1ca8zw87ovza04eq.png" />
        </div>
      </div>
    </div>
  );
}

export default PBannerFour;
