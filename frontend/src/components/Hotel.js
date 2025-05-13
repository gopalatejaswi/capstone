import React from 'react';
import '../pagestyles/Hotel.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const Hotel = () => {
    const navigate = useNavigate();
  return (
    <div className="hotel-container">
      <header className="headers">
        <h1 className="logo" >
          <FontAwesomeIcon icon={faPlane} className="logo-icon" onClick={() => navigate('/flightsearchinside')}/>
          JetVoyage
        </h1>
        <nav className="nav-links">
          
          <button
                
                className="nav-buttons"
                onClick={() => navigate('/flightsearchinside')}
              >
                Flight
              </button>
              <button
                
                className="nav-buttons"
                onClick={() => navigate('/hotel')}
              >
                Hotels
              </button>
          
          <button className="nav-buttons" onClick={() => navigate('/carhire')}>Car Hire</button>
        </nav>
      </header>
      <main className="main-contents">
        <h2 className="booking-headers">Book Hotels and Homestays</h2>
        <div className="search-sections">
          <input type="text" className="search-inputs" placeholder="e.g. - Area, Landmark or Property Name" />
          <input type="date" className="search-inputs" placeholder="Check-in" />
          <input type="date" className="search-inputs" placeholder="Check-out" />
          <select className="search-inputs">
            <option>2 Adults | 1 Room</option>
            <option>1 Adult | 1 Room</option>
            <option>3 Adults | 1 Room</option>
          </select>
          <button className="search-buttons">Search</button>
        </div>
        <div className="offers-section">
          <h3>Offers for you</h3>
          <div className="offers">
            <div className="offer">
              <img src="/hotel1.jpg" alt="Offer 1" />
              <p>Up to 45% OFF* on stays!</p>
              <small>Valid till: 11th May'25</small>
            </div>
            <div className="offer">
              <img src="/hotel2.jpg" alt="Offer 2" />
              <p>FLAT 15% SAVINGS* at Taj!</p>
              <small>Valid till: 16th May'25</small>
            </div>
            <div className="offer">
              <img src="/hotel3.jpg" alt="Offer 3" />
              <p>Special offer at Marriott!</p>
              <small>Valid till: 20th May'25</small>
            </div>
            <div className="offer">
              <img src="/hotel4.jpg" alt="Offer 4" />
              <p>Exclusive discount at Hilton!</p>
              <small>Valid till: 18th May'25</small>
            </div>
            <div className="offer">
              <img src="/hotel5.jpg" alt="Offer 5" />
              <p>Summer savings at Hyatt!</p>
              <small>Valid till: 25th May'25</small>
            </div>
            <div className="offer">
              <img src="/hotel6.jpg" alt="Offer 6" />
              <p>Luxury stay deals!</p>
              <small>Valid till: 30th May'25</small>
            </div>
            <div className="offer">
              <img src="/hotel7.jpg" alt="Offer 6" />
              <p>stay deals!</p>
              <small>Valid till: 30th May'25</small>
            </div>
            <div className="offer">
              <img src="/hotel8.jpg" alt="Offer 6" />
              <p>Luxury deals!</p>
              <small>Valid till: 30th May'25</small>
            </div>
            <div className="offer">
              <img src="/hotel9.jpg" alt="Offer 6" />
              <p>comfort deals!</p>
              <small>Valid till: 30th May'25</small>
            </div>
            <div className="offer">
              <img src="/hotel10.jpg" alt="Offer 6" />
              <p>summer deals!</p>
              <small>Valid till: 30th May'25</small>
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

export default Hotel;
