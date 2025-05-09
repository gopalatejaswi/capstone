


import React, { useState } from 'react';
import axios from 'axios';
import '../pagestyles/Login.css'; // Import the CSS for styling
import { useNavigate,Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.email || !formData.password) {
        setMessage('Please fill in all fields.');
        return;
      }
      const response = await axios.post('http://localhost:4000/api/auth/login', formData);
      setMessage('Login successful!');
      localStorage.setItem('token', response.data.token);
      navigate('/flightsearchinside'); // Ensure this is the correct route
    } catch (error) {
      setMessage((error.response && error.response.data && error.response.data.msg) || 'Error occurred');
    }
  };

  return (
    
    <div className="login-container">
      
      <h2 className="login-heading">Log In to Your Account</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <div className="or-divider">OR</div>
        <button
          type="button"
          className="register-btn"
          onClick={() => navigate('/register')}
        >
          Don't have an account? Register
        </button>
      </form>
      
    </div>
    
  );
};

export default Login;
