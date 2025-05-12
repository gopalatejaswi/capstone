import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHeart } from '@fortawesome/free-solid-svg-icons';
import './FlightSearch.css';
import { useNavigate, Link } from 'react-router-dom';

const Flightsearchinside = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    available: '',
    departureTime: '',
    origin: '',
    destination: '',
    price: ''
  });
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to SearchFlights with query parameters for origin and destination
    navigate(`/searchflights?origin=${formData.origin}&destination=${formData.destination}`);
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
            <FontAwesomeIcon icon={faHeart} className="heart-icon" onClick={() => navigate('/saved')} />
            <Link to="/login" className="button login-button">Log out</Link>
            <button className="menu-button" onClick={toggleMenu}>
              ☰
            </button>
            {menuOpen && (
              <div className="menu-dropdown">
                <Link to="/flightsearchinside">Flights</Link>
                <Link to="/saved">Saved</Link>
                <Link to="/hotel">Hotels</Link>
                <Link to="/carhire">Car Hire</Link>
              </div>
            )}
          </div>
        </header>
        <nav className="nav-buttons">
          <button className="buttons">Flights</button>
          <button className="button" onClick={() => navigate('/hotel')}>Hotels</button>
          <button className="button" onClick={() => navigate('/carhire')}>Car hire</button>
        </nav>
        
        <main className="search-section">
          <h2 className="headline">Millions of cheap flights. One simple search.</h2>
          <h4 className="headline">To Search Flight For Booking</h4>
          <form className="search-form" onSubmit={handleSearch}>
            <input type="text" className="buttonsearch" placeholder="Type" name="available" value={formData.available} onChange={handleChange} />
            <input type="date" className="buttonsearch" name="departureTime" value={formData.departureTime} onChange={handleChange} />
            <input type="text" className="buttonsearch" placeholder="Origin" name="origin" value={formData.origin} onChange={handleChange} />
            <input type="text" className="buttonsearch" placeholder="Destination" name="destination" value={formData.destination} onChange={handleChange} />
            <input type="number" className="buttonsearch" placeholder="Price" name="price" value={formData.price} onChange={handleChange} />
            
            <button type="submit" className="buttonbutton">Search</button>
          </form>
        </main>
      </div>
      <div className="bottom-section">
        <div className="promo">
          <img
            src="/image2.jpg"
            alt="Switzerland"
            style={{ width: '100%', height: 'auto' }}
          />
          <h3>Switzerland. Worth a few extra days.</h3>
          <button className="button stay-longer" onClick={() => navigate('/hotel')}>Stay longer</button>
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

export default Flightsearchinside;
