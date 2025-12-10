import React from 'react';
import './styles.css';

interface AlertProps {
  type?: 'success' | 'error' | 'info';
  message: string;
}

export const Alert: React.FC<AlertProps> = ({ type = 'info', message }) => {
  return <div className={`alert alert-${type}`}>{message}</div>;
};
