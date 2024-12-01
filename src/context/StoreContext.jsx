import { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : {};
  });
  const [showCart, setShowCart] = useState(false);
  const deliveryCharge = 10;
  const discount=8;
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      if (newCartItems[itemId] > 1) {
        newCartItems[itemId] -= 1;
      } else {
        delete newCartItems[itemId];
      }
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const clearCart = () => {
    setCartItems(() => {
      const emptyCart = {};
      localStorage.setItem('cartItems', JSON.stringify(emptyCart));
      return emptyCart;
    });
  };
  

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = food_list.find((item) => item._id === itemId);
      return item ? total + item.price * cartItems[itemId] : total;
    }, 0);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const contextValue = {
    food_list,
    setCartItems,
    addToCart,
    removeFromCart,
    cartItems,
    getTotalCartAmount,
    deliveryCharge,
    clearCart,
    showCart, 
    setShowCart,
    discount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
