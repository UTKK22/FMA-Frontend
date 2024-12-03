// src/components/ShippingForm.js
import React, { useState } from "react";
import "./ShippingForm.css";

const ShippingForm = ({ onNext }) => {
  const [shippingData, setShippingData] = useState({
    address: "",
    pincode: "",
    city: "",
    state: "",
    phone: "",
    isDefault: "false",
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
    <div className="container">
      <form onSubmit={handleSubmit} className="shipping-form">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1733171312/n6nuarffrzspbvlbk2jo.png"
            style={{ height: "20px", width: "20px" }}
          />
          Add Address
        </div>
        <div>
          <div
            className="inp"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color:"rgba(126, 126, 126, 1)",
            }}
          >
            <div>
              <select
                name="state"
                value={shippingData.state}
                onChange={handleChange}
                required
                style={{
                  border: "2px solid rgba(197, 197, 197, 0.5)",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  width:"180px",
                  color:"rgba(126, 126, 126, 1)"
                }}
              >
                <option value="" disabled>
                  Select State
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli and Daman and Diu">
                  Dadra and Nagar Haveli and Daman and Diu
                </option>
                <option value="Delhi">Delhi</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                name="city"
                value={shippingData.city}
                onChange={handleChange}
                placeholder="City/District"
                required
                style={{
                  border: "2px solid rgba(197, 197, 197, 0.5)",
                  padding: "10px 14px",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div>
              <input
                type="text"
                name="pincode"
                value={shippingData.pincode}
                onChange={handleChange}
                placeholder="Pin Code"
                required
                style={{
                  border: "2px solid rgba(197, 197, 197, 0.5)",
                  padding: "10px 14px",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={shippingData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                style={{
                  border: "2px solid rgba(197, 197, 197, 0.5)",
                  padding: "10px 14px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <div>
            <textarea
              type="text"
              name="address"
              value={shippingData.address}
              onChange={handleChange}
              placeholder="Enter full address"
              required
              style={{
                border: "2px solid rgba(197, 197, 197, 0.5)",
                padding: "10px 14px",
                borderRadius: "10px",
                width: "100%",
                height: "150px",
                resize: "none",
                color:"rgba(126, 126, 126, 1)"
              }}
            />
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"end"}}>
        <button className="shippingform-button" type="submit">
          Save
        </button>
        </div>
        
      </form>
    </div>
  );
};

export default ShippingForm;
