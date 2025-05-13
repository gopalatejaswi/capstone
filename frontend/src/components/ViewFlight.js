import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { useNavigate ,Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../pagestyles/Viewflights.css';

const ViewFlight = () => {
  const [flights, setFlights] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  // Extract origin and destination from URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const origin = queryParams.get('origin');
  const destination = queryParams.get('destination');

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        // Make a GET request to the backend, passing origin and destination as query parameters
        const response = await axios.get('http://localhost:2000/flights/search', {
          params: { origin: origin, destination: destination }
        });
        console.log(response.data); // Debugging: Check the API response
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    // Only fetch flights if both origin and destination are provided
    if (origin && destination) {
      fetchFlights();
    }
  }, [origin, destination]);

  return (
    <div className="view-flights-container">
      <header className="header">
         <h1 className="logo">
           <FontAwesomeIcon icon={faPlane} className="logo-icon-" onClick={() => navigate('/flightsearchinside')} />
           JetVoyage
         </h1>
         <nav className="nav-links-">
           <button className="nav-button-" onClick={() => navigate('/flightsearchinside')}>Flights</button>
           <button className="nav-button-" onClick={() => navigate('/hotel')}>Hotels</button>
           <button className="nav-button-" onClick={() => navigate('/carhire')}>Car hire</button>
         </nav>
       </header>
       <h2>Available Flights from {origin} to {destination}</h2>
       <div className="main-content">
  <div className="flightdetails">
  {flights.length > 0 ? (
        <ul>
          {flights.map((flight) => (
            <li key={flight.id}>
              <div><h3>Flight Details : </h3>
              {flight.origin} to {flight.destination}  </div><div>
Departure: {flight.departureTime} | 
              Price: {flight.price}  </div><div>   
              <button className="view-details" onClick={() => navigate('/booking')}>Book</button></div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights found for the selected route.</p>
      )}
    {/* Existing flight list code */}
  </div>
  <div className="image-section">
    <img src="image2.jpg" alt="Flight Illustration" className="side-image"/>
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
        <p>&copy; 20225 JetVoyage. All rights reserved.</p>
      </footer>
    </div>
    
  );
};

export default ViewFlight;