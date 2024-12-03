import React, { useEffect, useState } from "react";
import styles from "./AddressForm.module.css";
import ShippingForm from "../ShippingForm/ShippingForm";
import axios from "axios";
import {jwtDecode} from "jwt-decode"; 

const AddressForm = ({ onBack, updateNavbar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [defaultAddressIndex, setDefaultAddressIndex] = useState(0);
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("user"));

  let userId = null;
  if (token) {
    
    const decodedToken = jwtDecode(token); 
    userId = decodedToken.userId;
  }
  const handleAddAddress = async (address) => {
    setAddresses((prev) => [...prev, address]);
    setIsModalOpen(false);
    await axios(`https://fma-backend-a7xw.onrender.com/addresses`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      data: { ...address,userId },
    });
    if (addresses.length === 0) {
      setDefaultAddressIndex(0);
      updateNavbar(address);
    }
  };

  const handleSetDefault = (index) => {
    setDefaultAddressIndex(index);
    updateNavbar(addresses[index]); 
    onBack(); 
  };

  useEffect(() => {
    const fetchProfileAndAddress = async () => {
      try {
        const response = await axios(`https://fma-backend-a7xw.onrender.com/addresses/${userId}`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        });
        setAddresses(response.data);
      } catch (err) {
        console.error("Error fetching addresses:", err);
      }
    };

    fetchProfileAndAddress();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          ←
        </button>
        <h2>Your Addresses</h2>
      </div>
      <div className={styles.addressList}>
        <div className={styles.addAddress} onClick={() => setIsModalOpen(true)}>
          <div className={styles.addCircle}>
            <div>+</div>
          </div>
          <div>Add Address</div>
        </div>
        {addresses.map((address, index) => (
          <div
            key={index}
            className={`${styles.addressCard} ${
              index === defaultAddressIndex ? styles.defaultAddress : ""
            }`}
            onClick={() => handleSetDefault(index)}
          >
            <p>{address.firstName} {address.lastName}</p>
            <p>{address.address}</p>
            <p>{address.city}, {address.state}</p>
            <p>{address.pincode}</p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.modalClose} onClick={() => setIsModalOpen(false)}>
              ✕
            </button>
            <ShippingForm onNext={(data) => handleAddAddress(data.shipping)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressForm;

