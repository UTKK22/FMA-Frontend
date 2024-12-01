// src/components/ShippingForm.js
import React, { useState } from 'react';
import './ShippingForm.css';

const ShippingForm = ({ onNext }) => {
  const [shippingData, setShippingData] = useState({
   
    address1: '',
    pincode: '',
    city: '',
    state: '',
    phone: '',
    email: '',
    isDefault:"Regent Street, A4, A4201, London"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ shipping: shippingData });
  };

  return (
    <form onSubmit={handleSubmit} className="shipping-form">
      <h2>Shipping Address</h2>
     
      <div>
        <label>Address 1</label>
        <input type="text" name="address1" value={shippingData.address1} onChange={handleChange} required />
      </div>
      
      <div>
        <label>Pincode</label>
        <input type="text" name="pincode" value={shippingData.pincode} onChange={handleChange} required />
      </div>
      <div>
        <label>City</label>
        <input type="text" name="city" value={shippingData.city} onChange={handleChange} required />
      </div>
      <div>
        <label>State</label>
        <input type="text" name="state" value={shippingData.state} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" name="phone" value={shippingData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={shippingData.email} onChange={handleChange} required />
      </div>
      <button className='shippingform-button' type="submit">Next</button>
    </form>
  );
};

export default ShippingForm;
