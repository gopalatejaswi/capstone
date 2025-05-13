import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pagestyles/BookingForm.css"; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';


import { useNavigate, Link } from 'react-router-dom';

function BookingForm() {
  const [form, setForm] = useState({
    passengerName: "",
    flightId: "",
    cancelled: false,
  });

  const [bookings, setBookings] = useState([]);
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
      await axios.post("http://localhost:2000/bookings", form);
      alert("Booking created successfully!");
      setForm({ passengerName: "", flightId: "", cancelled: false });
      fetchBookings();
    } catch (err) {
      console.error(err);
      alert("Error creating booking.");
    }
  };

  const fetchBookings = async () => {
    const res = await axios.get("http://localhost:2000/bookings");
    setBookings(res.data);
  };

  const fetchFlights = async () => {
    const res = await axios.get("http://localhost:2000/flights");
    setFlights(res.data);
  };

  useEffect(() => {
    fetchBookings();
    fetchFlights();
  }, []);

  return (
    <div className="booking-form-container">
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
      <div className="content">
        <div className="form-section">
          <div className="form-box">
            <h2>Create Booking</h2>
            <form onSubmit={handleSubmit}>
              <label className="checkbox-label">
                Cancelled:
                <input
                  type="checkbox"
                  name="cancelled"
                  checked={form.cancelled}
                  onChange={handleChange}
                />
              </label>
              <select
                name="flightId"
                value={form.flightId}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select Flight</option>
                {flights.map((flight) => (
                  <option key={flight.id} value={flight.id}>
                    {flight.origin} to {flight.destination}
                  </option>
                ))}
              </select>
              <input
                name="passengerName"
                value={form.passengerName}
                onChange={handleChange}
                placeholder="Passenger Name"
                required
                className="form-input"
              />
             
              <button
                type="submit"
                className="submit-btn"
                onClick={() => navigate('/payment')}
              >
                Book Flight
              </button>
            </form>
          </div>

          
        </div>
        <div className="image-section">
          <img src="/image2.jpg" alt="Booking" className="side-image" />
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
}

export default BookingForm;
