import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    nationality: "",
  });
  const [savedCards, setSavedCards] = useState([]);
  const [showCardModal, setShowCardModal] = useState(false);
  const [newCard, setNewCard] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios("http://localhost:3000/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.data;
        console.log("data in profile: ", { response });
        setProfile(data);
        setFormData({
          name: response.data.name,
          email: response.data.email,
          gender: response.data.gender || "",
          nationality: response.data.nationality || "",
        });
        const cards = JSON.parse(localStorage.getItem("storedCards")) || [];
        setSavedCards(cards || response.data.cards);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile data");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save profile changes
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://localhost:3000/profile",
        {
          name: formData.name,
          email: formData.email,
          gender: formData.gender,
          nationality: formData.nationality,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProfile(response.data);
      setEditMode(false);
      const updatedUser = { ...JSON.parse(localStorage.getItem("user")), name: formData.name ,email:formData.email};
      localStorage.setItem("user", JSON.stringify(updatedUser));
      alert("Profile updated successfully");
    } catch (err) {
      console.error("Error saving profile:", err);
      setError("Failed to update profile");
    }
  };

  // Add a new card
  const handleAddCard = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/cards",
        { ...newCard },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const updatedCards = [...savedCards, response.data];
      setSavedCards(updatedCards);
      localStorage.setItem("storedCards", JSON.stringify(updatedCards));
      setShowCardModal(false);
      setNewCard({
        cardName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        nameOnCard: "",
      });
      alert("Card added successfully");
    } catch (err) {
      console.error("Error adding card:", err);
      setError("Failed to add card");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "1rem", maxWidth: "80vw", margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <button onClick={() => navigate("/home")} style={styles.backButton}>
          ← Back
        </button>
        <h2 style={{ flexGrow: 1, textAlign: "left" }}>My Profile</h2>
      </div>

      {/* Profile Info */}
      <div style={styles.profileContainer}>
        {/* Row 1 */}
        <div style={styles.row}>
          <div>
            <img
              src={
                "https://res.cloudinary.com/dkhkrzfz0/image/upload/v1733029780/wqynfqq0vw0qmckfmvov.png"
              }
              alt="Profile"
              style={styles.profileImage}
            />
          </div>
          <div style={{ flexGrow: 1, marginLeft: "1rem" }}>
            <h2>{profile.name}</h2>
          </div>
          <button
            onClick={() => (editMode ? handleSave() : setEditMode(true))}
            style={styles.editButton}
          >
            {editMode ? "Save" : "Edit"}
          </button>
        </div>

        {/* Row 2 */}
        <div style={styles.row}>
          <div
            style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <label style={{ fontWeight: "300", width: "100px" }}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />
          </div>
          <div
            style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <label style={{ fontWeight: "300", width: "100px" }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div style={styles.row}>
          <div
            style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <label style={{ fontWeight: "300", width: "100px" }}>Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />
          </div>
          <div
            style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <label style={{ fontWeight: "300", width: "100px" }}>
              Nationality
            </label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />
          </div>
        </div>
      </div>

      {/* Saved Cards */}
      <div style={styles.cardContainer}>
        <h2>Saved Cards</h2>
        <div style={styles.cardRow}>
          {savedCards.map((card, index) => (
            <div key={index} style={styles.card}>
              <p>Card Number:{card.cardNumber}</p>
              <p>Expiry: {card.expiryDate}</p>
            </div>
          ))}
          <button
            onClick={() => setShowCardModal(true)}
            style={styles.addCardButton}
          >
            <div style={styles.circleContainer}>
              <span style={styles.plusSymbol}>+</span>
            </div>
            <span style={styles.addCardText}>Add New Card</span>
          </button>
        </div>
      </div>

      {/* Add Card Modal */}
      {showCardModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3>Add New Card</h3>
            <label>Card Name</label>
            <input
              type="text"
              name="cardName"
              value={newCard.cardName}
              onChange={(e) =>
                setNewCard({ ...newCard, cardName: e.target.value })
              }
              style={styles.input}
            />
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={newCard.cardNumber}
              onChange={(e) =>
                setNewCard({ ...newCard, cardNumber: e.target.value })
              }
              style={styles.input}
            />
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              value={newCard.cvv}
              onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
              style={styles.input}
            />
            <label>Name On Card</label>
            <input
              type="text"
              name="nameOnCard"
              value={newCard.nameOnCard}
              onChange={(e) =>
                setNewCard({ ...newCard, nameOnCard: e.target.value })
              }
              style={styles.input}
            />
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              value={newCard.expiryDate}
              onChange={(e) =>
                setNewCard({ ...newCard, expiryDate: e.target.value })
              }
              style={styles.input}
            />
            <button onClick={handleAddCard} style={styles.saveButton}>
              Save Card
            </button>
            <button
              onClick={() => setShowCardModal(false)}
              style={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  backButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    fontSize: "20px",
    margin: "0 25px 0 0",
  },
  profileContainer: {
    border: "1px solid #ccc",
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    gap: "1rem",
  },

  profileImage: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
  },
  editButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "rgba(252, 138, 6, 1)",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginTop: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  cardContainer: {
    marginTop: "2rem",
  },
  cardRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    flex: "1 1 calc(33.333% - 1rem)",
    border: "1px solid #ccc",
    padding: "1rem",
    borderRadius: "8px",
    width: "200px",
    boxSizing: "border-box",
  },
  //   addCardButton: {
  //     padding: "1rem",
  //     gap:"10px",
  //     border: "none",
  //     borderRadius: "8px",
  //     cursor: "pointer",
  //     fontWeight:"300",
  //   },
  addCardButton: {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Space between the circle and text
    padding: "10px 15px",
    backgroundColor: "#fff", // Button background
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    color: "rgba(252, 138, 6, 1)", // Button text color
    fontWeight: "600",
    fontSize: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional shadow for the button
    transition: "background-color 0.3s ease",
  },
  circleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(252, 138, 6, 0.25)",
    color: "rgba(252, 138, 6, 1)",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
  },
  plusSymbol: {
    fontSize: "20px",
    lineHeight: "30px", // Ensures proper alignment inside the circle
    fontWeight: "700",
  },
  addCardText: {
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(0, 0, 0, 1)",
  },
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
  },
  modalContent: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
  },
  saveButton: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  cancelButton: {
    marginTop: "1rem",
    marginLeft:"1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "gray",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Profile;
