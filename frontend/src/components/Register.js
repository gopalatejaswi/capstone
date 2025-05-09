

import React, { useState } from 'react';
import axios from 'axios';
import '../pagestyles/Register.css'; // Import new styles
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      if (!name || !email || !password) {
        setMessage('Please fill in all fields.');
        return;
      }
      const res = await axios.post('http://localhost:4000/api/auth/register', formData);
      setMessage('Registration successful! Please log in.');
      // Redirect to login page upon successful registration
      navigate('/login');
    } catch (err) {
      setMessage((err.response && err.response.data && err.response.data.msg) || 'Error occurred');
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-heading">Create Your Account</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={onSubmit} className="register-form">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="register-btn">
          Register
        </button>
        
      </form>
    </div>
  );
};

export default Register;
