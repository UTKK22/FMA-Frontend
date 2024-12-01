import React from "react";
import styles from '../BannerFour/BannerFour.module.css'
import { useLocation, useNavigate } from "react-router-dom";
function BannerFour() {
    const navigate =useNavigate();
    const location =useLocation();
    const title = location.pathname === "/home" ? "Popular Restaurants" : "Similar Restaurants";
    const handleproduct=()=>{
      navigate("/product");
      window.scrollTo({
        top:0,
        behavior:"smooth"
      });
    }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{title}</p>
      </div>
      <div className={styles.banners}>
        <div className={styles.bannerone} onClick={handleproduct}>
            <div>
                <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732701775/sikiaakduh00h0fldneo.png"/>
            </div>
            <div className={styles.text}>
                <span>McDonald’s London </span>
            </div>
        </div>
        <div className={styles.bannertwo} onClick={handleproduct}>
            <div>
                <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732701775/b3i32e8qaukgnukygjie.png"/>
            </div>
            <div className={styles.text}>
                <span>Papa Johns</span>
            </div>
        </div>
        <div className={styles.bannerthree} onClick={handleproduct}>
            <div>
                <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732701775/ffviadfhaqd2ohjtj8am.png"/>
            </div>
            <div className={styles.text}>
                <span>KFC West London</span>
            </div>
        </div>
        <div className={styles.bannerfour} onClick={handleproduct}>
            <div>
                <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732701774/yctqv1hrmowh5r8dmlh8.png"/>
            </div>
            <div className={styles.text}>
                <span>Texas Chicken</span>
            </div>
        </div>
        <div className={styles.bannerfive} onClick={handleproduct}>
            <div>
                <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732701774/e8bej4txrzqfsylqeqxj.png"/>
            </div>
            <div className={styles.text}>
                <span>Burger King</span>
            </div>
        </div>
        <div className={styles.bannersix} onClick={handleproduct}>
            <div >
                <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732701718/padkuir1v6rezrymi1tr.png"/>
            </div>
            <div className={styles.text}>
                <span>Shaurma 1</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BannerFour;
