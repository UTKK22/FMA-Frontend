import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PBannerOne from "../../components/PBannerOne/PBannerOne";
import BannerFour from "../../components/BannerFour/BannerFour";
import PBannerMap from "../../components/PBannerMap/PBannerMap";
import PBannerTwo from "../../components/PBannerTwo/PBannerTwo";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import PBannerFour from "../../components/PBannerFour/PBannerFour";
import PBannerThree from "../../components/PBannerThree/PBannerThree";
import PBannerFive from "../../components/PBannerFive/PBannerFive";
import Cart from "../Cart/Cart";
import styles from '../ProductPage/ProductPage.module.css'
import { StoreContext } from "../../context/StoreContext";
import { useLocation, useNavigate } from "react-router-dom";

function ProductPage() {
  const [category, setCategory] = useState("All");
  const { showCart,setCartItems } = useContext(StoreContext);
  const { search } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(search);
    const cartData = params.get('cart');
    
    if (cartData) {
      // If cart data is found in the URL, decode and set the cart items
      const decodedCart = JSON.parse(decodeURIComponent(cartData));
      setCartItems(decodedCart);  // Update the cart context with the shared cart data
    }
  }, [search, setCartItems]);
  return (
    <div>
      <Header />
      <PBannerOne />
      <PBannerThree />
      <div className={styles.component}>
       
        <div className={styles.main}>
          <PBannerFour />
          <FoodDisplay category={category} />
        </div>

        {showCart && (
          <div className={styles.cart}>
            <Cart />
          </div>
        )}
      </div>

      <PBannerTwo />
      <PBannerMap />
      <PBannerFive />
      <BannerFour />
    </div>
  );
}

export default ProductPage;
