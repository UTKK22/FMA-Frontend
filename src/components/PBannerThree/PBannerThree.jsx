import React from "react";
import styles from "../PBannerThree/PBannerThree.module.css";
function PBannerThree() {
  return (
    <div className={styles.container}>
      <div className={styles.th}>
        <div className={styles.tth}>All Offers from McDonald’s East London</div>
        <div>
          <input type="text" placeholder=" 🔍 Search from menu..." />
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.one}>Offers</div>
        <div>Burgers</div>
        <div>Fries</div>
        <div>Snacks</div>
        <div>Salads</div>
        <div>Cold Drinks</div>
        <div> Happy Meal®</div>
        <div>Desserts</div>
        <div> Hot drinks</div>
        <div>Sauces </div>
        <div>Orbit®</div>
      </div>
    </div>
  );
}

export default PBannerThree;
