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
  const [selectedAddress, setSelectedAddress] = useState(null); // Track selected address

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

  const handleAddressSelected = (address) => {
    setSelectedAddress(address); 
    setCurrentStep(1); 
  };

  return (
    <div className="checkout">
      {currentStep === 1 && (
        <ReviewForm
          onNext={handleNext}
          selectedAddress={selectedAddress} 
          onEditAddress={() => setCurrentStep(4)} 
        />
      )}
      {currentStep === 2 && <PaymentForm onBack={handleBack} onNext={handleNext} />}
      {currentStep === 3 && <OrderComplete onComplete={handleOrderComplete} />}
      {currentStep === 4 && (
        <AddressForm
          onBack={() => setCurrentStep(1)}
          updateNavbar={handleAddressSelected} 
        />
      )}
    </div>
  );
};

export default Checkout;
