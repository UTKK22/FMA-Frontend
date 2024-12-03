import React, { useContext, useState } from "react";
import styles from "../../pages/Cart/Cart.module.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    url,
    currency,
    groupedFood,
    discount,
    deliveryCharge,
  } = useContext(StoreContext);
  const navigate = useNavigate();
  const [showEmptyCartPopup, setShowEmptyCartPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [buttonColor, setButtonColor] = useState("");
  const handleCheckoutClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowLoginPopup(true);
    } else if (getTotalCartAmount() < 150) {
      setButtonColor("rgba(255, 177, 177, 1)");
      alert("Minimum value of ₹150 is required to place an order.");
    } else if (getTotalCartAmount() === 0) {
      setShowEmptyCartPopup(true);
    } else {
      navigate("/checkout");
    }
  };

  const closeEmptyCartPopup = () => {
    setShowEmptyCartPopup(false);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };
  const handleshare=()=>{
    const cartUrl = `${window.location.origin}/product?cart=${encodeURIComponent(JSON.stringify(cartItems))}`;
  
  // Copy the URL to clipboard
  navigator.clipboard.writeText(cartUrl).then(() => {
    alert("Cart link copied to clipboard!");
  }).catch((error) => {
    console.error("Failed to copy link: ", error);
  });
  }

  const cartTotalAmount = getTotalCartAmount();

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.share}>
          <div>
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1733032796/soqwi6ppsxwvrlhtufvj.png"
            style={{
              height:"40px",
              width:"40px",
    
            }} />
          </div>
          <div style={{
            color:"rgba(255, 255, 255, 1)",
            fontFamily:"Poppins",
            fontSize:"17px",
            fontWeight:"800",
            marginLeft:"2px"
          }}>
            Share this cart <br />
            with your friends
          </div>
          <div >
            <button style={{
            borderRadius:"120px",
            color:"rgba(252, 138, 6, 1)",
            fontFamily:"Poppins",
            fontWeight:"200",
            fontSize:"12px",
            width:"90px",
             padding:"10px 4px",
             border:"none",
             marginLeft:"12px"
          }} onClick={handleshare}>Copy Link</button>
          </div>
        </div>
        {showEmptyCartPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>Your cart is empty! Please add some items to proceed.</p>
              <button onClick={closeEmptyCartPopup}>Close</button>
            </div>
          </div>
        )}
        {showLoginPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>You need to be logged in to proceed to checkout.</p>
              <button onClick={closeLoginPopup}>Close</button>
            </div>
          </div>
        )}
        <div className={styles.cartitems}>
          <div className={styles.cartitemstitle}>
            <div>
              <img
                src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732590258/ruhx7yrlldfjsyp6fe60.png"
                alt="basket"
              ></img>
            </div>
            <div>
              <p>My Cart</p>
            </div>
          </div>
          <hr />
          {groupedFood.map((category) => (
            <div key={category.category}>
              
              {category.items.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div key={item._id} className={styles.comp}>
                      <div className={styles.fooditems}>
                        <div className={styles.count}>
                          {cartItems[item._id]}x
                        </div>
                        <div className={styles.mid}>
                          <span> ₹{item.price}</span>
                          <p>{item.name}</p>
                        </div>
                        <p
                          className={styles.delete}
                          onClick={() => removeFromCart(item._id)}
                        >
                          <img
                            src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732867956/l1gj2n1g5qcn3frszvho.png"
                            alt="delete"
                          />
                        </p>
                      </div>
                      <hr />
                    </div>
                  );
                }return null;
              })}
            </div>
          ))}
        </div>
        <div className="cart-bottom">
          <div>
            <div className={styles.carttotal}>
              <div className={styles.carttotaldetails}>
                <p>Subtotal:</p>
                <p>₹{cartTotalAmount.toFixed(2)}</p>
              </div>
              <div className={styles.carttotaldetails}>
                <p>Discount:</p>
                <p>- ₹{discount}</p>
              </div>
              <div className={styles.carttotaldetails}>
                <p>Delivery Fee:</p>
                <p>₹{cartTotalAmount === 0 ? 0 : deliveryCharge.toFixed(2)}</p>
              </div>
              <hr />
            </div>
            <div className={styles.cartsumdetails}>
              Total to pay
              <span>
                ₹{" "}
                {cartTotalAmount === 0
                  ? 0
                  : (cartTotalAmount + deliveryCharge - discount).toFixed(2)}
              </span>
            </div>
            <div className={styles.code}>
              Choose your free item..
              <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732873367/f8g79qbdrpcmcsso51fu.png" />
            </div>
            <div className={styles.code}>
              Apply Coupon Code here
              <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732873367/h30sll3mndg4oow6fmjg.png" />
            </div>
            <hr />
          </div>
          <div className={styles.checkout}>
            <div className={styles.deli}>
              <div className={styles.sc}>
                <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732874293/lpdnktlv5vgyz0qtxrfz.png" />
                <p>
                  Delivery
                  <br />
                  Starts at 17:50
                </p>
              </div>
              <div className={styles.verticalline}></div>
              <div className={styles.sh}>
                <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732874293/ocse6mppqsqjdiyjnrfp.png" />
                <p>
                  Collection
                  <br />
                  Starts at 16:50
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={handleCheckoutClick}
                style={{
                  backgroundColor: buttonColor,
                }}
              >
                <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732875260/l1f2qvffldpw9w4groiu.png" />
                Checkout!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
