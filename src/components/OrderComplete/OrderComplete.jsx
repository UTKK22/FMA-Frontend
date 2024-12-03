import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import styles from "../OrderComplete/OrderComplete.module.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
const OrderComplete = () => {
  const { clearCart, cartItems,groupedFood } = useContext(StoreContext);
  console.log("cartItems",{cartItems})
  const navigate = useNavigate();
  const handlechange = () => {
    navigate("/home");
    clearCart();
  };
  
  const allFoodItems = groupedFood.flatMap((category) => category.items);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.outercircle}>
            <div className={styles.outertick}>
              <div className={styles.innertick}></div>
            </div>
          </div>

          <div
            style={{
              color: "rgba(0, 0, 0, 1)",
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "32px",
              marginTop: "20px",
            }}
          >
            Order Placed Successfully
          </div>
          <div
            style={{
              color: "rgba(131, 133, 138, 1)",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "1.2",
            }}
          >
            Your order is confirmed and on its way. Get
            <br /> set to savor your chosen delights!
          </div>
        </div>
        <div className={styles.footer}>
          <div style={{ width: "14vw", maxHeight: "fitcontent" ,padding:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
            {allFoodItems.map((item, index) => {
              if ((cartItems[item._id] ?? 0) > 0) {
                return (
                  <div key={index}>
                    <div style={{
                      color:"rgba(3, 8, 31, 1)",
                      fontFamily:"Poppins",
                      fontSize:"18px",
                      fontWeight:"200",
                      lineHeight:"30px",
                      display:"flex",
                      flexDirection:"column",
                      justifyContent:"center",
                      alignItems:"center",
                      width:"fitcontent"
                    }}>
                      <div>{item.name}</div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div
            style={{
              backgroundColor: "rgba(252, 138, 6, 1)",
              borderRadius: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "Switzer",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "18px",
              textAlign: "center",
              padding: "8px 14px",
              cursor: "pointer",
              width:"100%"
            }}
            onClick={handlechange}
          >
            Back to Home
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderComplete;
