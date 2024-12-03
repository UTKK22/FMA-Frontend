import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ image, name, description, id, price }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-details">
        <p className="food-item-name">{name}</p>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt={name} />
        <div>
          <div className="pline4">
            {!cartItems[id] ? (
              <img
                src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732812772/gbkx1ca8zw87ovza04eq.png"
                onClick={() => addToCart(id)}
                alt="Add to cart"
              />
            ) : (
              <div className="counter-controls">
                <img
                  src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1733139522/csocyqpwzwmq0tatmthh.png"
                  onClick={() => removeFromCart(id)}
                  alt="Remove item"
                  className="counter-button"
                />
                <p className="counter-value">{cartItems[id]}</p>
                <img
                  src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1733146749/nxp07stq9v4kipdap9ic.png"
                  onClick={() => addToCart(id)}
                  alt="Add more"
                  className="counter-button"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
