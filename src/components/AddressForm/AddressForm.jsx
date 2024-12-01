import React, { useEffect, useState } from "react";
import styles from "./AddressForm.module.css";
import ShippingForm from "../ShippingForm/ShippingForm";
import axios from "axios";

const AddressForm = ({ onBack, updateNavbar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [defaultAddressIndex, setDefaultAddressIndex] = useState(0);
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("user"));

  const handleAddAddress = async (address) => {
    setAddresses((prev) => [...prev, address]);
    setIsModalOpen(false);
    await axios(`http://localhost:3000/addresses`, 
          {
          method:'POST',
          headers: {Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', },
          data: {...address, email: userData.email},
        },
    );
    if (addresses.length === 0) {
      setDefaultAddressIndex(0);
      updateNavbar(address);
    }
  };

  const handleSetDefault = (index) => {
    setDefaultAddressIndex(index);
    updateNavbar(addresses[index]);
  };


  useEffect(() => {
    const fetchProfileAndAddress = async () => {
        console.log('asdjhgjsahgd')
        try {
        console.log('asdjhgjsahgd', {userData, token})
        const response = await axios(`http://localhost:3000/addresses/${userData.email}`, {
          method:'GET',
          headers: {Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', },
        });
        const data = await response.data;
        console.log("data in profile: ",
            {response}
        );
        setAddresses(data)
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfileAndAddress();
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          ←
        </button>
        <h2>Your Addresses</h2>
      </div>

      {/* Addresses */}
      <div className={styles.addressList}>
        {/* Add Address Button */}
        <div className={styles.addAddress} onClick={() => setIsModalOpen(true)}>
          <div className={styles.addCircle}>+</div>
        </div>

        {/* Existing Addresses */}
        {addresses.map((address, index) => (
          <div
            key={index}
            className={`${styles.addressCard} ${
              index === defaultAddressIndex ? styles.defaultAddress : ""
            }`}
            onClick={() => handleSetDefault(index)}
          >
            <p>
              {address.firstName} {address.lastName}
            </p>
            <p>{address.address1}</p>
            <p>{address.city}, {address.state}</p>
            <p>{address.zip}</p>
          </div>
        ))}
      </div>

      {/* Modal for Adding Address */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button
              className={styles.modalClose}
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <ShippingForm
              onNext={(data) => handleAddAddress(data.shipping)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
