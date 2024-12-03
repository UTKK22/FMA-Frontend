import { createContext, useEffect, useState } from 'react';


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : {};
  });
  const [showCart, setShowCart] = useState(false);
  const [groupedFood, setGroupedFood] = useState([]);
  const deliveryCharge = 10;
  const discount=8;
  useEffect(() => {
    const fetchGroupedFood = async () => {
      const response = await fetch('https://fma-backend-a7xw.onrender.com/food');
      const data = await response.json();
      const grouped = data.map(category => ({
        category: category.name,
        items: category.products,
      }));
      setGroupedFood(grouped); 
    };
    fetchGroupedFood();
  }, []);
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
    const allItems = groupedFood.flatMap(category => category.items);

  return Object.keys(cartItems).reduce((total, itemId) => {
    const item = allItems.find((item) => item._id === itemId); 
    if (item) {
      return total + item.price * cartItems[itemId];
    }
    return total;
  }, 0);
  };
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const contextValue = {
    setCartItems,
    addToCart,
    groupedFood,
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
