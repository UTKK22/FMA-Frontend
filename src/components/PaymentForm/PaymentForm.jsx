import React, { useContext, useEffect, useState } from "react";
import styles from "./PaymentForm.module.css";
import { StoreContext } from "../../context/StoreContext";
import Header from "../Header/Header";
import axios from "axios";

const PaymentForm = ({ onBack, onNext }) => {
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });
  const [storedCards, setStoredCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { getTotalCartAmount } = useContext(StoreContext);
  const cartTotalAmount = getTotalCartAmount();
  const salestax = 20;


  useEffect(() => {
    const fetchStoredCards = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("You are not authenticated. Please log in.");
          return;
        }

        const response = await axios.get("http://localhost:3000/cards", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log({response});
        setStoredCards(response.data);
      } catch (error) {
        console.error("Failed to fetch stored cards:", error);
        alert("Unable to load saved cards. Please try again.");
      }
    };

    fetchStoredCards();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddCard = async (e) => {
    e.preventDefault();
    if (
      paymentData.cardName &&
      paymentData.cardNumber &&
      paymentData.expiryDate &&
      paymentData.cvv &&
      paymentData.nameOnCard
    ) {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("You are not authenticated. Please log in.");
          return;
        }

        const response = await axios.post(
          "http://localhost:3000/cards",
          { ...paymentData },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        
        setStoredCards((prevCards) => [...prevCards, response.data]);

        
        setPaymentData({
          cardName: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
          nameOnCard: "",
        });
        setIsModalOpen(false);
      } catch (error) {
        console.error("Failed to add card:", error);
        alert("Unable to add card. Please try again.");
      }
    } else {
      alert("Please fill in all card details.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCard !== null) {
      onNext({ payment: storedCards[selectedCard] });
    } else {
      alert("Please select a card or add a new one.");
    }
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "40px", marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ cursor: "pointer" }} onClick={onBack}>
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732962190/rzasnday5pndckkjnetg.png" />
          </div>
          <div style={{ color: "rgba(0, 0, 0, 1)", fontFamily: "Poppins", fontWeight: "600", fontSize: "32px", letterSpacing: "1.2", marginLeft: "6px" }}>
            Choose and Pay
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <div className={styles.column1}>
            {/* Wallet */}
            <div className={styles.walletCard}>
              <div className={styles.walletCircle}>
                <img
                  src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732968460/deanaydhureicace1jd5.png"
                  alt="Wallet"
                  className={styles.walletImage}
                />
              </div>
              <div>
                Wallet
                <br />
                <span className={styles.walletBalance}>Available balance: ₹300</span>
              </div>
              <div style={{ color: "rgba(252, 138, 6, 1)", fontSize: "35px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "8px", cursor: "pointer", marginLeft: "31vw" }}>
                ˃
              </div>
            </div>

            {/* Stored Cards */}
            {storedCards.map((card, index) => (
              <div key={index} className={styles.walletCard}>
                <div className={styles.walletCircle}>
                  {card.cardName.charAt(0).toUpperCase()}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",width:"100%" }}>
                  <div>{card.cardName}</div>
                  <div >
                    <input
                      type="radio"
                      name="selectedCard"
                      value={index}
                      checked={selectedCard === index}
                      onChange={() => setSelectedCard(index)}
                      style={{}}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Add Card Button */}
            <div className={styles.addCardButton} onClick={() => setIsModalOpen(true)}>
              <span style={{ fontSize: "30px" }}>+</span> Add Card
            </div>
          </div>

          <div className={styles.column2}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "18px", lineHeight: "20px", letterSpacing: "1.2", color: "rgba(131, 133, 138, 1)" }}>
                Amount to be paid
              </div>
              <div>
                <b>₹{cartTotalAmount + salestax}</b>
              </div>
            </div>
            <hr />
            <div
              style={{
                backgroundColor: "rgba(252, 138, 6, 1)",
                color: "rgba(255, 255, 255, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px 12px",
                borderRadius: "120px",
                cursor: "pointer",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "20px",
                letterSpacing: "1.2",
              }}
              onClick={handleSubmit}
            >
              <div>Proceed Payment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Adding Card */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.modalClose} onClick={() => setIsModalOpen(false)}>
              ✕
            </button>
            <form onSubmit={handleAddCard}>
              <h3>Add a New Card</h3>
              <input type="text" name="cardName" value={paymentData.cardName} onChange={handleChange} placeholder="Card Name" />
              <input type="text" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} placeholder="Card Number" />
              <input type="text" name="expiryDate" value={paymentData.expiryDate} onChange={handleChange} placeholder="MM/YY" />
              <input type="text" name="cvv" value={paymentData.cvv} onChange={handleChange} placeholder="CVV" />
              <input type="text" name="nameOnCard" value={paymentData.nameOnCard} onChange={handleChange} placeholder="Name on Card" />
              <div className={styles.modalButtons}>
                <button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit">Add Card</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
