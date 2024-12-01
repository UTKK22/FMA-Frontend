import React from "react";
import styles from "../PBannerOne/PBannerOne.module.css";
function PBannerOne() {
  return (
    <div className={styles.main}>
      <div className={styles.conatiner}>
        <div className={styles.text}>
          <div className={styles.line1}>I'm lovin' it!</div>
          <div className={styles.line2}>McDonald’s East London</div>
          <div className={styles.line3}>
            <div className={styles.one}>
              <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732784650/tysheyjvzbqjlmpyulue.png" />
              <span>Minimum Order: 12 GBP</span>
            </div>
            <div className={styles.one}>
              <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732784649/r0rtcwfrxgtluhoaesx9.png" />
              <span>Delivery in 20-25 Minutes</span>
            </div>
          </div>
        </div>
        <div className={styles.image1}>
          <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732784816/rzlvfdyjip9stlq3xxiz.png" />
        </div>
        <div className={styles.time}>
          <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732787772/j8hjwg7ypebzmtehyj0k.png" />
          <p>Open until 3:00 AM</p>
        </div>
        <div className={styles.image}>
          <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732784816/flvoi0tuxj5qpggye260.png" />
        </div>
      </div>
    </div>
  );
}

export default PBannerOne;
