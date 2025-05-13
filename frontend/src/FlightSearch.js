import './FlightSearch.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import {  Link } from 'react-router-dom';

const FlightSearch = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
      
    
  return (
    <div className="flight-search-container">
      <div className="top-section">
        <header className="header">
        <h1 className="logo">
            <FontAwesomeIcon icon={faPlane} className="logo-icon" />
            JetVoyage
          </h1>
          
          <div className="user-actions">
            <Link to="/login" className="button login-button">Log in</Link>
            <button className="menu-button" onClick={toggleMenu}>
            ☰
          </button>
          {menuOpen && (
            <div className="menu-dropdown">
              <Link to="/">Flights</Link>
              <Link to="/saved">Saved</Link>
              <Link to="/hotel">Hotels</Link>
              <Link to="/cars">Car Hire</Link>
            </div>
          )}
          </div>
        </header>
        <nav className="nav-buttons">
          <button className="buttons" > Flights</button>
          <button className="button"  >Hotels</button>
          <button className="button">Car hire</button>
        </nav>
        
        <main className="search-section">
          <h2 className="headline">Millions of cheap flights. One simple search.</h2>
          <h4 className="headline">To Search Flight For Booking</h4>
          <div className="search-form">
            <input type="text" class="buttonsearch" placeholder="Available" />
            <input type="date" class="buttonsearch" placeholder="Departure_time" />
            <input type="text" class="buttonsearch" placeholder="origin" />
            <input type="text" class="buttonsearch" placeholder="destination" />
            <input type="number" class="buttonsearch" placeholder="price" />
            
            <button className="buttonbutton">Book</button>
          </div>
        </main>
      </div>
      <div className="bottom-section">
        <div className="promo">
          <img
            src="/image2.jpg"
            alt="Switzerland"
            style={{ width: 1350, height: 'auto' }}
          />
          <h3>New york. Worth a few extra days.</h3>
          <button className="button stay-longer">Stay longer</button>
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

export default FlightSearch;

