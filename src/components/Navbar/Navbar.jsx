import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";
import { StoreContext } from "../../context/StoreContext";
import AddressForm from "../AddressForm/AddressForm";

const Navbar = ({ setShowLogin, setIsLoggedIn: updateIsLoggedIn }) => {
  const [menu, setMenu] = useState("home");
  const [showPopup, setShowPopup] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [userName, setUserName] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("Regent Street, A4, A4201, London");
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const navigate = useNavigate();
  const { cartItems, getTotalCartAmount, setShowCart } = useContext(StoreContext);

  const handleCartClick = () => {
      setShowCart((prev) => !prev);
      navigate('/product');
  };
  useEffect(() => {
    const total = Object.values(cartItems).reduce((sum, count) => sum + count, 0);
    setTotalItems(total);
  }, [cartItems]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token) {
      updateIsLoggedIn(true);
      if (user) {
        try {
          const userData = JSON.parse(user);
          const name = userData.name;
          setUserName(name);
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      }
    } else {
      updateIsLoggedIn(false);
    }
  }, []);

  const handleAddressChange = (newAddress) => {
    setSelectedAddress(`${newAddress.city} ${newAddress.state}, ${newAddress.pincode}`);
    setIsAddressModalOpen(false);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.discount}>
          <div>
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732432360/rig0le9o7erldlbsre2i.png"></img>
          </div>
          <div>
            <p>
              {" "}
              Get 5% Off your first order, <span>Promo: ORDER5</span>
            </p>
          </div>
        </div>
        <div className={styles.location}>
          <div>
            <img
              src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732444855/xtjgqtvrhrqvtmcb7txd.png"
              alt="location"
            ></img>
          </div>
          <div>
            <p>
              {selectedAddress}{" "}
              <span
                className={styles.changeLocation}
                onClick={() => setIsAddressModalOpen(true)}
              >
                Change Location
              </span>
            </p>
          </div>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartone} onClick={handleCartClick}>
            <div className={styles.ci}>
              <img
                src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732590258/ruhx7yrlldfjsyp6fe60.png"
                alt="basket"
              ></img>
              {totalItems > 0 && (
                <span className={styles.cartcount}>{totalItems}</span>
              )}
            </div>
            <div>
              <p>My Cart</p>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.carttwo}>
            <img
              src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732590470/ed8c7m8s4cwjeonb87nt.png"
              alt="downarrow"
            ></img>
          </div>
        </div>
      </div>

      {/* Modal for AddressForm */}
      {isAddressModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button
              className={styles.modalClose}
              onClick={() => setIsAddressModalOpen(false)}
            >
              ✕
            </button>
            <AddressForm
              onBack={() => setIsAddressModalOpen(false)}
              updateNavbar={handleAddressChange}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
