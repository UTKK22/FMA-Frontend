import React from "react";
import styles from "../BannerThree/BannerThree.module.css";
function BannerThree() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Order.uk Popular Categories 🤩</div>
      <div className={styles.banners}>
        <div className={styles.bannerone}>
          <div>
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732191810/vjs06qeet2udpya9ejya.png"></img>
          </div>
          <div className={styles.ps}>
            <p>Burgers & Fast food</p>
            <span>21 Restaurants</span>
          </div>
        </div>
        <div className={styles.bannertwo}>
          <div>
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732191810/tabdizxvo9l96tmiezrd.png"></img>
          </div>
          <div className={styles.ps}>
            <p>Salads</p>
            <span>32 Restaurants</span>
          </div>
        </div>
        <div className={styles.bannerthree}>
        <div>
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732191811/hbqcr8ournrfk6d0q6jg.png"></img>
          </div>
          <div className={styles.ps}>
            <p>Pasta & Casuals</p>
            <span>4 Restaurants</span>
          </div>
        </div>
        <div className={styles.bannerfour}>
        <div>
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732191812/tmg5pc6kludefmclgnjl.png"></img>
          </div>
          <div className={styles.ps}>
            <p>Pizza</p>
            <span>32 Restaurants</span>
          </div>
        </div>
        <div className={styles.bannerfive}>
        <div>
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732191811/foaxqn56cwem5aobz9vl.png"></img>
          </div>
          <div className={styles.ps}>
            <p>Breakfast</p>
            <span>4 Restaurants</span>
          </div>
        </div>
        <div className={styles.bannersix}>
        <div>
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732191812/x43c4ww2k8zofhwrascg.png"></img>
          </div>
          <div className={styles.ps}>
            <p>Soups</p>
            <span>32 Restaurants</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerThree;
