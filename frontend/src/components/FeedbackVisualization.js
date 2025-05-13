import React, { useEffect, useState } from "react";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from "recharts";
import '../pagestyles/FeedbackVisual.css'; // Ensure the CSS file is correctly imported
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const COLORS = ["#00C49F", "#FF8042"];


function FeedbackVisualization() {
  const [positiveFeedbacks, setPositiveFeedbacks] = useState([]);
  const [negativeFeedbacks, setNegativeFeedbacks] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch("http://localhost:5000/feedback/positive")
      .then(res => res.json())
      .then(data => setPositiveFeedbacks(data));

    fetch("http://localhost:5000/feedback/negative")
      .then(res => res.json())
      .then(data => setNegativeFeedbacks(data));
  }, []);

  const categories = ['Service', 'Comfort', 'Cleanliness', 'Staff', 'General'];

  const categoryCount = (feedbackList) => {
    const countMap = categories.reduce((acc, category) => {
      acc[category] = 0;
      return acc;
    }, {});

    feedbackList.forEach(fb => {
      if (countMap.hasOwnProperty(fb.category)) {
        countMap[fb.category] += 1;
      }
    });


    

    return countMap;
  };

  const positiveCounts = categoryCount(positiveFeedbacks);
  const negativeCounts = categoryCount(negativeFeedbacks);

  const combinedCategoryData = categories.map(category => ({
    category,
    positive: positiveCounts[category],
    negative: negativeCounts[category]
  }));

  const chartData = [
    { name: "Positive", value: positiveFeedbacks.length },
    { name: "Negative", value: negativeFeedbacks.length }
  ];

  return (
    <div className="feedback-visual-container">
      <header className="header">
      <h1 className="logo">
            <FontAwesomeIcon icon={faPlane} className="logo-icon" onClick={() => navigate('/flightsearchinside')}/>
            JetVoyage
          </h1>
        <nav className="nav-links">
        <button
            
            className="button"
            onClick={() => navigate('/flightsearchinside')}
          >
           flight
          </button>
          <button className="button" onClick={() => navigate('/hotel')}>Hotels</button>
          <button className="button" onClick={() => navigate('/carhire')}>Car hire</button>
        </nav>
      </header>

      <div className="chart-section">
        <h2>Feedback Sentiment Pie Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={chartData} dataKey="value" label outerRadius={100}>
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <h2>Feedback by Category (Bar Chart)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={combinedCategoryData} margin={{ top: 20, right: 30, bottom: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="positive" fill="#00C49F" name="Positive Count" />
            <Bar dataKey="negative" fill="#FF8042" name="Negative Count" />
          </BarChart>
        </ResponsiveContainer>
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

export default FeedbackVisualization;
