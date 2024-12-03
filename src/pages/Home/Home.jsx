import React, { useState } from "react";
import styles from "../Home/Home.module.css";
import Header from "../../components/Header/Header";
// import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import ResForm from "../../components/ResForm/ResForm";
import BannerOne from "../../components/BannerOne/BannerOne";
import BannerTwo from "../../components/BannerTwo/BannerTwo";
import BannerThree from "../../components/BannerThree/BannerThree";
import BannerFour from "../../components/BannerFour/BannerFour";
import BannerFive from "../../components/BannerFive/BannerFive";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className={styles.header}>
      <Header />
        <BannerOne/>
        <BannerTwo/>
        <BannerThree/>
        <BannerFour/>
        <AppDownload/>
        <BannerFive/>
      </div>
    
  );
};

export default Home;
