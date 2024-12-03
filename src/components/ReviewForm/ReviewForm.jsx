import React, { useContext, useEffect, useState } from "react";
import BannerFour from "../BannerFour/BannerFour";
import styles from "../ReviewForm/ReviewForm.module.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import AddressForm from "../AddressForm/AddressForm";
function ReviewForm({ onNext, selectedAddress, onEditAddress }) {
  console.log("selected address",{selectedAddress});
  const { showCart, setShowCart } = useContext(StoreContext);
  const [totaItems, setTotalItems] = useState(0);
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    groupedFood,
    url,
    currency,
    deliveryCharge,
  } = useContext(StoreContext);
  const salestax = 20;
  const navigate = useNavigate();
  const cartTotalAmount = getTotalCartAmount();
  const handleback = () => {
    setShowCart(true);
    navigate("/product");
  };
  const handlenext = () => {
    navigate("/address");
  };
  const handleChoosePayment = () => {
    onNext();
  };
  useEffect(() => {
    const total = Object.values(cartItems).reduce(
      (sum, count) => sum + count,
      0
    );
    setTotalItems(total);
  }, [cartItems]);
  const allFoodItems = groupedFood.flatMap((category) => category.items);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.review}>
          <div className={styles.header}>
            <p>
              <span>
                <b onClick={handleback}>←</b>
              </span>{" "}
              Your Order Details
            </p>
          </div>
          <div className={styles.mflex} style={{ marginTop: "20px" }}>
            <div>
              {allFoodItems.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div key={index}>
                      <div className={styles.cartitems}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: "5px",
                          }}
                        >
                          <div>
                            <img
                              className={styles.cartitemimage}
                              src={item.img}
                              alt=""
                            />
                          </div>
                          <div
                            style={{
                              marginLeft: "6px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "start",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <div
                              style={{
                                fontFamily: "Poppins",
                                fontSize: "15px",
                                fontWeight: "900",
                                color: "rgba(3, 8, 31, 1)",
                              }}
                            >
                              {item.name}
                            </div>
                            <div
                              style={{
                                fontFamily: "Poppins",
                                fontSize: "12.9px",
                                color: "rgba(131, 133, 138, 1)",
                              }}
                            >
                              {cartItems[item._id]}x item
                            </div>
                          </div>
                        </div>

                        <div
                          style={{
                            color: "rgba(2, 134, 67, 1)",
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          ₹{item.price * cartItems[item._id]}
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                }
              })}
            </div>
            <div className={styles.bflex}>
              <p>Notes</p>
              <input type="text" placeholder="Add order notes" />
            </div>
          </div>
        </div>
        <div className={styles.componenttwo}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid rgba(3, 8, 31, 1)",
              borderRadius: "120px",
              padding: "4px 20px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  border: "1px solid rgba(3, 8, 31, 1)",
                  borderRadius: "50%",
                  padding: "10px",
                  alignItems: "center",
                  width: "40px",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732907526/mxtgvniof0jgkjs6raqu.png"
                  style={{
                    height: "20px",
                    width: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: "10px",
                }}
              >
                Delivery Address
                <br />
                <span style={{ color: "rgba(131, 133, 138, 1)" }}>
                  {selectedAddress
                    ? `${selectedAddress.address}, ${selectedAddress.city}, ${selectedAddress.state}`
                    : "Regent Street, A4, A4201, London"}
                </span>
              </div>
            </div>
            <div
              style={{
                color: "rgba(252, 138, 6, 1)",
                fontSize: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "8px",
                cursor: "pointer",
              }}
              onClick={onEditAddress}
            >
              ˃
            </div>
          </div>
          <br />
          <hr />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "rgba(131, 133, 138, 1)",
              }}
            >
              <div>Items</div>
              <div>{cartTotalAmount}</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "rgba(131, 133, 138, 1)",
              }}
            >
              <div>Sales Tax</div>
              <div>{salestax}</div>
            </div>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              color: "rgba(131, 133, 138, 1)",
            }}
          >
            <div>Subtotal({totaItems} items)</div>
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: "18px",
                fontWeight: "1000",
                color: "rgba(0, 0, 0, 1)",
              }}
            >
              <b>₹{cartTotalAmount + salestax}</b>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(252, 138, 6, 1)",
              padding: "12px 10px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "100px",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                font: "Poppins",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "19px",
                color: "rgba(255, 255, 255, 1)",
                cursor: "pointer",
              }}
              onClick={handleChoosePayment}
            >
              Choose Payment Method
            </div>
          </div>
        </div>
      </div>

      <BannerFour />
    </div>
  );
}

export default ReviewForm;
