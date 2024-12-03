import React, { useEffect, useState } from "react";
import styles from "../Header/Header.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [userName, setuserName] = useState("");
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate =useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const user = localStorage.getItem("user");

  //   console.log("Token:", token, "User:", user);
  //   if (token) {
  //     if (user) {
  //       try {
  //         const userData = JSON.parse(user);
  //         const name = userData.name;

  //         setuserName(name);
  //       } catch (error) {
  //         console.error("Error parsing user data:", error);
  //       }
  //     } else {
  //       console.log("User data is not available in localStorage");
  //     }
  //   }
  // }, []);
  useEffect(() => {
    const updateUserName = () => {
      const user = localStorage.getItem("user");
      if (user) {
        const userData = JSON.parse(user);
        setuserName(userData.name);
      }
    };
  
    // Listen for localStorage changes
    window.addEventListener("storage", updateUserName);
  
    // Cleanup
    return () => {
      window.removeEventListener("storage", updateUserName);
    };
  }, []);
  const handleprofile=()=>{
    navigate('/profile');
  }
  const handlehome=()=>{
      navigate('/home');
  }
  const handleres=()=>{
    navigate('/product');
  }
  return (
    // <div className='header'>
    //   <div className='header-contents'>
    //     <h2>Order your favourite food here</h2>
    //     <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
    //     <a href='#explore-menu'><button>View Menu</button></a>
    //   </div>
    // </div>
    <div className={styles.header}>
      <div>
        <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732252821/mnpw8ydvkgypep60azfe.png"></img>
      </div>
      <div className={styles.pointer}>
        <div className={currentPath === "/home" ? styles.highlight : styles.point} onClick={handlehome}>
          Home
        </div>
        <div>Browse Menu</div>
        <div>Special Offers</div>
        <div className={currentPath === "/product" ? styles.highlight : styles.point} onClick={handleres}>
          Restaurants
        </div>
        <div>Track Order</div>
        <div className={styles.user} onClick={handleprofile}>
          <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732622278/art7avgyljxw7xnslwro.png"></img>
          {/* Login/Signup */}
          Hey, {JSON.parse(localStorage.getItem("user")).name}
        </div>
      </div>
    </div>
  );
};

export default Header;
