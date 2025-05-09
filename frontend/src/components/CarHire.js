import React from 'react';
import '../pagestyles/CarHire.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const CarHire = () => {
    const navigate = useNavigate();
  return (
    <div className="carhire-container">
      <header className="headers">
        <h1 className="logo">
          <FontAwesomeIcon icon={faPlane} className="logo-icons" onClick={() => navigate('/flightsearchinside')}/>
          JetVoyage
        </h1>
        <nav className="nav-link">
          <button className="nav-buttons" onClick={() => navigate('/flightsearchinside')}>Flights</button>
          <button className="nav-buttons" onClick={() => navigate('/hotel')}>Hotels</button>
          <button className="nav-buttons" onClick={() => navigate('/carhire')}>Car Hire</button>
        </nav>
      </header>
      <main className="main-contents">
        <h2 className="booking-headers">Explore self-drive cars in Mumbai</h2>
        <div className="search-sections">
          <input type="text" className="search-inputs" placeholder="Location" />
          <input type="datetime-local" className="search-inputs" placeholder="Trip Starts" />
          <input type="datetime-local" className="search-inputs" placeholder="Trip Ends" />
          <button className="search-buttons">Search</button>
        </div>
        <div className="features-sections">
          <div className="features">
            <p>31,000+ high-quality car options</p>
          </div>
          <div className="features">
            <p>Unlimited kms to drive and stop anywhere</p>
          </div>
          <div className="features">
            <p>No security deposit on any booking</p>
          </div>
          <div className="features">
            <p>100% Trip protection for a safe, hassle-free drive</p>
          </div>
          <div className="features">
            <p>24/7 customer support for dedicated assistance</p>
          </div>
        </div>
        <div className="top-cars-sections">
          <h3>Top cars in Mumbai</h3>
          <div className="top-cars">
            <div className="car">
              <img src="car1.jpg" alt="Car 1" />
              <p>5.0⭐</p>
            </div>
            <div className="car">
              <img src="car2.jpg" alt="Car 2" />
              <p>4.3⭐</p>
            </div>
            <div className="car">
              <img src="car3.jpg" alt="Car 3" />
              <p>5.0⭐</p>
            </div>
            
          </div>
        </div>
      </main>
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

export default CarHire;
