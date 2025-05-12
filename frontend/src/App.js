

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightSearch from './FlightSearch';
import Login from './components/Login';
import Register from './components/Register';
import BookingForm from './components/BookingForm';
import FlightForm from './components/FlightForm';
import FeedbackForm from './components/FeedbackForm';
import FeedbackVisualization from './components/FeedbackVisualization';
import Flightsearchinside from './Flightsearchinside';
import Hotel from './components/Hotel';
import CarHire from './components/CarHire';
import Savedflight from './components/Savedflight';
import ViewFlight from './components/ViewFlight';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FlightSearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/flight" element={<FlightForm />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/feedbackvisualization" element={<FeedbackVisualization />} />
          <Route path="/feedbackvisualization" element={<FeedbackVisualization />} />
          <Route path="/flightsearchinside" element={<Flightsearchinside />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/carhire" element={<CarHire />} />
          <Route path="/Saved" element={<Savedflight />} />
          <Route path="/ViewFlight" element={<ViewFlight />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


