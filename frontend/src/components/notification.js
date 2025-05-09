import React from 'react';
import '../pagestyles/notification.css';
import { useNavigate } from 'react-router-dom';
const Notification = ({ message, onClose }) => {

    const navigate = useNavigate();

  return (
    <div className="notification-popup">
      <div className="notification-content">
        <p>{message}</p>
        <button
          type="button"
          className="register-btn"
          onClick={() => navigate('/booking')}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default Notification;
