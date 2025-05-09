

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../pagestyles/Saved.css';

const SavedFlight = () => {
  const [flights, setFlights] = useState([]);

  const fetchFlights = async () => {
    try {
      const response = await axios.get('http://localhost:2000/flights');
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchFlights();
  }, []);

  const getFlightStatusClass = (departureTime) => {
    const currentDate = new Date();
    const flightDate = new Date(departureTime);
    return flightDate < currentDate ? 'flight-past' : 'flight-upcoming';
  };

  return (
    <div className="saved-container">
      <header className="header">
        <h1 className="logo">
          <FontAwesomeIcon icon={faPlane} className="logo-icon" onClick={() => navigate('/flightsearchinside')} />
          JetVoyage
        </h1>
        <nav className="nav-links">
          <button className="button" onClick={() => navigate('/flightsearchinside')}>Flights</button>
          <button className="button" onClick={() => navigate('/hotel')}>Hotels</button>
          <button className="button" onClick={() => navigate('/carhire')}>Car hire</button>
        </nav>
      </header>
      <div className="content">
        <div className="flights-section">
          <h3>Saved Flights</h3>
          <ul>
            {flights.map((flight) => (
              <li key={flight.id} className={getFlightStatusClass(flight.departureTime)}>
                {flight.origin} to {flight.destination} at {flight.departureTime} | $
                {flight.price} | Available: {flight.available ? "Yes" : "No"}
              </li>
            ))}
          </ul>
        </div>
        <div className="image-section">
          <img src="/image2.jpg" alt="Flight" className="side-image" />
        </div>
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

export default SavedFlight;
