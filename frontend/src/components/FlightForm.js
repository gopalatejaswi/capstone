import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import '../pagestyles/FlightForm.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

function FlightForm() {
  const [form, setForm] = useState({
    origin: "",
    destination: "",
    departureTime: "",
    price: "",
    available: true,
  });

  const [flights, setFlights] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:2000/flights", form);
      alert("Flight added successfully!");
      setForm({
        origin: "",
        destination: "",
        departureTime: "",
        price: "",
        available: true,
      });
      fetchFlights();
    } catch (err) {
      console.error(err);
      alert("Error adding flight.");
    }
  };

  const fetchFlights = async () => {
    const res = await axios.get("http://localhost:2000/flights");
    setFlights(res.data);
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <div className="flight-form-container">
      <header className="header">
      <h1 className="logo">
            <FontAwesomeIcon icon={faPlane} className="logo-icon" />
            JetVoyage
          </h1>
        <nav className="nav-links">
          <button className="button" onClick={() => navigate('/flightsearchinside')}>Flights</button>
          <button className="button" onClick={() => navigate('/hotel')}>Hotels</button>
          <button className="button" onClick={() => navigate('/carhire')}>Car hire</button>
        </nav>
      </header>
      <div className="content">
        <div className="form-section">
          <div className="form-box">
            <h2>Add Flight</h2>
            <form onSubmit={handleSubmit}>
              <label className="checkbox-label">
                Type:
                <input
                  type="checkbox"
                  name="available"
                  checked={form.available}
                  onChange={handleChange}
                />
              </label>
              <input
                name="departureTime"
                value={form.departureTime}
                onChange={handleChange}
                placeholder="Departure Time"
                required
                className="form-input"
              />
              <input
                name="destination"
                value={form.destination}
                onChange={handleChange}
                placeholder="Destination"
                required
                className="form-input"
              />
              <input
                name="origin"
                value={form.origin}
                onChange={handleChange}
                placeholder="Origin"
                required
                className="form-input"
              />
              <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                required
                className="form-input"
              />
              
              <button
                type="submit"
                className="submit-btn"
                
              >
                Add
              </button>
            </form>
          </div>
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
        <p>&copy; 20225 JetVoyage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FlightForm;

