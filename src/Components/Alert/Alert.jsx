// Alert.js
import React from 'react';
import './Alert.css';

const Alert = ({ type, message, onClose }) => {
  const getAlertClass = () => {
    switch (type) {
      case 'success':
        return 'alert-success';
      case 'error':
        return 'alert-error';
      case 'warning':
        return 'alert-warning';
      case 'info':
        return 'alert-info';
      default:
        return '';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✔️';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '';
    }
  };

  return (
    <div className={`alert ${getAlertClass()}`}>
      <span className="alert-icon">{getIcon()}</span>
      <span className="alert-message">{message}</span>
      <button className="alert-close" onClick={onClose}>✕</button>
    </div>
  );
};

export default Alert;
