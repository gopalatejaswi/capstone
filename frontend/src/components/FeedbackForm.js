


import React, { useState } from 'react';
import '../pagestyles/Feedback.css'; // Import the CSS file for styling
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    feedback: '',
    email: '',
    rating: '5',
    category: 'General'
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://127.0.0.1:5000/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to submit feedback');
      }
      
      const data = await res.json();
      setMessage('Feedback submitted successfully!');
      setFormData({ feedback: '', email: '', rating: '5', category: 'General' });
    } catch (err) {
      console.error(err);
      setMessage(err.message || 'An unexpected error occurred.');
    }
  };

  return (
    <div className="feedback-container">
      <header className="header">
        <h1 className="logo">
          <FontAwesomeIcon icon={faPlane} className="logo-icon" onClick={() => navigate('/flightsearchinside')}/>
          JetVoyage
        </h1>
        <nav className="nav-links">
          <button className="button" onClick={() => navigate('/flightsearchinside')}>Flights</button>
          <button className="button" onClick={() => navigate('/hotel')}>Hotels</button>
          <button className="button" onClick={() => navigate('/carhire')}>Car hire</button>
        </nav>
      </header>
      <div className="form-box">
        <h2 className="form-heading">Your Experience</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={onSubmit} className="feedback-form">
          <textarea
            name="feedback"
            placeholder="Your feedback"
            value={formData.feedback}
            onChange={onChange}
            className="form-input"
            rows="4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={onChange}
            className="form-input"
          />
          <select
            name="rating"
            value={formData.rating}
            onChange={onChange}
            className="form-input"
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <select
            name="category"
            value={formData.category}
            onChange={onChange}
            className="form-input"
          >
            {['General', 'Service', 'Comfort', 'Cleanliness', 'Staff'].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button type="submit" className="submit-btn">Submit Feedback</button>
          <button
            type="button"
            className="view-feedback-btn"
            onClick={() => navigate('/feedbackvisualization')}
          >
            View Feedback Visualization
          </button>
        </form>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Company</h3>
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Press</Link>
            <Link to="/">Affiliate Program</Link>
          </div>
          <div className="footer-column">
            <h3>Trips</h3>
            <Link to="/">Travel Guides</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Flight Booking</Link>
            <Link to="/">Travel Insurance</Link>
          </div>
          <div className="footer-column">
            <h3>International Sites</h3>
            <Link to="/">France</Link>
            <Link to="/">Germany</Link>
            <Link to="/">Spain</Link>
            <Link to="/">Italy</Link>
          </div>
        </div>
        <p>&copy; 2025 JetVoyage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FeedbackForm;
