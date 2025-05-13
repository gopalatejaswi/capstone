import React, { useState } from 'react';
import axios from 'axios';
import '../pagestyles/Payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';

const Payment = () => {
  const [formData, setFormData] = useState({
    cardType: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    securityCode: '',
    cardHolderName: '',
    
    
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/payments/add', formData);
      console.log('Submitted data:', response.data);
      alert('Payment details saved successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to save payment details.');
    }
  };

  return (
    <div className="payment-container">
      <header className="header-">
        <h1 className="logo">
          <FontAwesomeIcon icon={faPlane} className="logo-icon" />
          JetVoyage
        </h1>
        <nav className="nav-links-">
          <button className="nav-button-" onClick={() => navigate('/flightsearchinside')}>Flights</button>
          <button className="nav-button-" onClick={() => navigate('/hotel')}>Hotel</button>
          <button className="nav-button-" onClick={() => navigate('/carhire')}>Car Hire</button>
        </nav>
      </header>

      <form className="payment-form-" onSubmit={handleSubmit}>
        <h2>Payment Details</h2>
        
        <div className="form-section-">
          <div className="card-details-">
            <h3>Card Details</h3>
            <div className="payment-div">
            <label className="labelclass">
              Card Type
              <select name="cardType" value={formData.cardType} onChange={handleChange} className="selectname">
                <option value="">Select</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Visa">Visa</option>
                <option value="American Express">American Express</option>
              </select>
            </label>
            </div>

            
            <div className="payment-div">
            <label className="labelclass">
              Card Number
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="selectname"/>
            </label>
            </div>

            <div className="payment-div">

            <label className="labelclass">
              Expiry Date
              <input type="text" name="expiryMonth" placeholder="MM" value={formData.expiryMonth} onChange={handleChange} className="selectname"/>
              /
              <input type="text" name="expiryYear" placeholder="YY" value={formData.expiryYear} onChange={handleChange} className="selectname"/>
            </label>
            </div>

          <div className="payment-div">
            <label className="labelclass">
              Security Code
              <input type="text" name="securityCode" value={formData.securityCode} onChange={handleChange} className="selectname"/>
            </label>

          </div>
  

          <div className="payment-div"> 
            <label className="labelclass">
              Name as appears on card
              <input type="text" name="cardHolderName" value={formData.cardHolderName} onChange={handleChange} className="selectname"/>
            </label>
            </div>
          </div>

          

          <div className="terms1">
            <label>
              <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
              I have read and understood Terms and Conditions of travel and accept them both on my own behalf and on behalf of all members.
            </label>
          </div>
        </div>

        <button type="submit" className="purchase-button-" onClick={() => navigate('/feedback')}>Purchase</button>
      </form>
      
    </div>
  );
};

export default Payment;
