// src/components/Checkout.js
import React, { useState, useContext } from 'react';
import ShippingForm from '../ShippingForm/ShippingForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import OrderComplete from '../OrderComplete/OrderComplete';
import { StoreContext } from '../../context/StoreContext';
import './Checkout.css';
import ReviewForm from '../ReviewForm/ReviewForm';
import AddressForm from '../AddressForm/AddressForm';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    shipping: {},
    payment: {},
  });
  const { clearCart } = useContext(StoreContext);

  const handleNext = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleOrderComplete = () => {
    clearCart(); 
    setCurrentStep(3); 
  };

  return (
    <div className="checkout">
      {currentStep === 1 && <ReviewForm onNext={handleNext} />}
      {currentStep === 2 && <PaymentForm onBack={handleBack} onNext={handleNext}/>}
      {currentStep === 3 && <OrderComplete onComplete={handleOrderComplete} />}
    </div>
  );
};

export default Checkout;
