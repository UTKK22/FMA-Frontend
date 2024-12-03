import React, { useState, useEffect } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import axios from 'axios';

const FoodDisplay = () => {
  const [groupedFood, setGroupedFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/food'); 
        const data = response.data;
        console.log("data in food display",data);
        // Group food items by category
        const grouped = data.map(category => ({
          category: category.name,
          items: category.products,
        }));
        setGroupedFood(grouped);
        console.log("grouped",grouped);
      } catch (err) {
        setError('Failed to fetch food items on the frontend');
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  if (loading) return <p>Loading food items...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="food-display" id="food-display">
    {groupedFood.map(({ category, items }) => (
      <div key={category} className="food-category">
        <h2>{category}</h2>
        <div className="food-category-items">
          {items.map(({ _id, name, description, price, img }) => (
            <FoodItem
              key={_id}
              id={_id}
              name={name}
              description={description}
              price={price}
              image={img}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
  );
};

export default FoodDisplay;
