import React, { useEffect } from 'react';

export function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 2800);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast-container" onClick={onClose}>
      <div className="toast-bubble">
        <span className="toast-icon">🍰</span>
        <span className="toast-message">{message}</span>
        <button className="toast-close" onClick={onClose}>✕</button>
      </div>
    </div>
  );
}

