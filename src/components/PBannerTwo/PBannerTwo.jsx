import React from "react";
import styles from "../PBannerTwo/PBannerTwo.module.css";
function PBannerTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.info1}>
        <p className={styles.i1}>
          <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732798383/vuc0cikc19glohmjysmm.png" />
          Delivery information
        </p>
        <p className={styles.i2}>
          {" "}
          Monday:<span> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</span>{" "}
        </p>
        <p className={styles.i3}>
          {" "}
          Tuesday: <span>8:00 AM–3:00 AM</span>{" "}
        </p>
        <p className={styles.i4}>
          {" "}
          Wednesday: <span>8:00 AM–3:00 AM</span>{" "}
        </p>
        <p className={styles.i5}>
          {" "}
          Thursday: <span>8:00 AM–3:00 AM</span>{" "}
        </p>
        <p className={styles.i6}>
          {" "}
          Friday: <span>8:00 AM–3:00 AM</span>{" "}
        </p>
        <p className={styles.i7}>
          {" "}
          Saturday:<span>8:00 AM–3:00 AM</span>{" "}
        </p>
        <p className={styles.i8}>
          {" "}
          Sunday:<span> 8:00 AM–12:00 AM</span>{" "}
        </p>
        <p className={styles.i9}>
          {" "}
          Estimated time until delivery:<span>20 min</span>{" "}
        </p>
      </div>
      <div className={styles.info2}>
        <p className={styles.n1}>
          <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732799428/wowr6ic5aoalrhhfxmla.png" />
          Contact information
        </p>
        <p className={styles.n2}>
          If you have allergies or other dietary <br />
          restrictions, please contact the restaurant. <br />
          The restaurant will provide food-specific <br />
          information upon request.
        </p>
        <p className={styles.n3}>
            Phone number <br/> <span>+934443-43</span>
        </p>
        <p className={styles.n4}>
            Website <br/><span>http://mcdonalds.uk/</span>
        </p>
      </div>
      <div className={styles.info3}>
        <p className={styles.f1}>
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732800352/ayej0uqo3evl4htt7fcn.png"/>
            Operational Times
        </p>
        <p className={styles.f2}>
          {" "}
          Monday:<span>8:00 AM–3:00 AM</span>{" "}
        </p>
        <p className={styles.f3}>
          {" "}
          Tuesday: <span>8:00 AM–3:00 AM</span>{" "}
        </p>
        <p className={styles.f4}>
          {" "}
          Wednesday: <span>8:00 AM–3:00 AM</span>{" "}
        </p>
        <p className={styles.f5}>
          {" "}
          Thursday: <span>8:00 AM–3:00 AM</span>{" "}
        </p>
        <p className={styles.f6}>
          {" "}
          Friday: <span>8:00 AM–3:00 AM</span>{" "}
        </p>
        <p className={styles.f7}>
          {" "}
          Saturday:<span>8:00 AM–3:00 AM</span>{" "}
        </p>
        <p className={styles.f8}>
          {" "}
          Sunday:<span> 8:00 AM–3:00 AM</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default PBannerTwo;
