import React from "react";
import styles from "../Footer/Footer.module.css";
import { assets } from "../../assets/assets";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/Instagram.png";
import snapchat from "../../assets/Snapchat.png";
import tiktok from "../../assets/Tiktok.png";
const Footer = () => {
  return (
    // <div className='footer' id='footer'>
    //   <div className="footer-content">
    //     <div className="footer-content-left">
    //       <img src={assets.logo} alt="" />
    //       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente incidunt ipsa tempora aliquam laboriosam amet hic iusto odit dignissimos magni! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, totam.
    //       </p>
    //       <div className="footer-social-icons">
    //         <img src={assets.facebook_icon} alt="" />
    //         <img src={assets.twitter_icon} alt="" />
    //         <img src={assets.linkedin_icon} alt="" />
    //       </div>
    //     </div>
    //     <div className="footer-content-center">
    //       <h2>COMPANY</h2>
    //       <ul>
    //         <li>Home</li>
    //         <li>About us</li>
    //         <li>Delivery</li>
    //         <li>Privacy Policy</li>
    //       </ul>
    //     </div>
    //     <div className="footer-content-right">
    //       <h2>GET IN TOUCH</h2>
    //       <ul>
    //         <li>+1-234-234-987</li>
    //         <li>contact@tomato.com</li>
    //       </ul>
    //     </div>
    //   </div>
    //   <hr/>
    //   <p className='footer-copyright'>Copoyright 2024 Tomato- All Rights Reserved by Tanmay & Debak</p>

    // </div>
    <div className={styles.footer}>
      <div className={styles.upper}>
        <div className={styles.one}>
          <div className={styles.logo}>
            <img
              src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732200190/viwsras5xi8fwnqpppsc.png"
              alt="logo"
            ></img>
          </div>
          <div className={styles.app}>
            <img
              src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732200097/r6lge2afk1hblpakupqc.png"
              alt="Apple Store"
            />
            <img
              src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732200069/y9sipjg1ngk1vnmn2up4.png"
              alt="Google play"
            />
          </div>
          <div className={styles.text}>
            <span>
              Company # 490039-445, Registered with House of companies..
            </span>
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.tag1}>
            <span>Get Exclusive Deals in your Inbox</span>
          </div>
          <div className={styles.mail}>
            <input type="text" placeholder="youremail@gmail.com"></input>
            <button className={styles.button}>Subscribe</button>
          </div>
          <div className={styles.tag2}>
            <span>
              we wont spam, read our{" "}
              <span className={styles.underline}>email policy</span>
            </span>
          </div>
          <div className={styles.connect}>
            <div>
              <img src={facebook} alt="facebook" />
            </div>
            <div>
              <img src={instagram} alt="instagram" />
            </div>
            <div>
              <img src={tiktok} alt="tiktok" />
            </div>
            <div>
              <img src={snapchat} alt="snapchat" />
            </div>
          </div>
        </div>
        <div className={styles.three}>
          <h3>Legal Pages</h3>
          <ul>
            <li>Terms and conditions</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Modern Slavery Statement</li>
          </ul>
        </div>
        <div className={styles.four}>
          <h3>Important Links</h3>
          <ul>
            <li>Get help</li>
            <li>Add your restaurant</li>
            <li>Sign up to deliver</li>
            <li>Create a business account</li>
          </ul>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.lowerone} >
          <span>Order.uk Copyright 2024, All Rights Reserved.</span>
        </div>
        <div className={styles.lowertwo}>
          <div><span> Privacy Policy</span></div>
          <div><span>Terms</span> </div>
          <div><span>Pricing  </span> </div>
          <div><span>Do not sell or share my personal information</span></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;