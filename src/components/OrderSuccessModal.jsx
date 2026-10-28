import React, { useEffect } from 'react';
import { CupcakeLogo, CheckCircleIcon } from './Icons';
import { fireBakeryConfetti } from '../utils/confetti';

export function OrderSuccessModal({ orderDetails, onClose }) {
  if (!orderDetails) return null;

  useEffect(() => {
    // Fire sweet celebratory confetti on modal appearance!
    fireBakeryConfetti();
    const secondBurst = setTimeout(() => {
      fireBakeryConfetti();
    }, 800);
    return () => clearTimeout(secondBurst);
  }, []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-card order-success-card" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Order Confirmation"
      >
        <div className="success-header text-center">
          <div className="success-icon-wrapper bounce-slow">
            <CupcakeLogo size={72} />
          </div>

          <div className="success-badge-pill">
            <CheckCircleIcon size={18} color="#10B981" />
            <span>Order Confirmed</span>
          </div>

          <h2 className="success-main-title">
            Yay! Your sweet treats are on their way! 🎉
          </h2>

          <p className="success-subtitle">
            Our pastry chefs are carefully boxing your treats with pink ribbon & love!
          </p>
        </div>

        {/* Order Details Card */}
        <div className="success-order-box">
          <div className="order-id-strip">
            <div>
              <span className="order-label">Order Number:</span>
              <strong className="order-code">#{orderDetails.orderId}</strong>
            </div>
            <div className="order-time-tag">
              <span>Placed at {orderDetails.timestamp}</span>
            </div>
          </div>

          {/* Recipient Details */}
          <div className="order-delivery-details">
            <div className="detail-line">
              <span className="detail-label">Recipient:</span>
              <span className="detail-val">{orderDetails.customer.name} ({orderDetails.customer.phone})</span>
            </div>
            <div className="detail-line">
              <span className="detail-label">Delivering to:</span>
              <span className="detail-val">{orderDetails.customer.address}</span>
            </div>
            <div className="detail-line">
              <span className="detail-label">Delivery Slot:</span>
              <span className="detail-val highlight-slot">{orderDetails.customer.deliverySlot}</span>
            </div>
            {orderDetails.customer.notes && (
              <div className="detail-line">
                <span className="detail-label">Special Note:</span>
                <span className="detail-val italic">"{orderDetails.customer.notes}"</span>
              </div>
            )}
          </div>

          {/* Items Summary */}
          <div className="order-items-recap">
            <span className="recap-header">Treats Ordered:</span>
            <ul className="recap-list">
              {orderDetails.items.map((it) => (
                <li key={it.id} className="recap-item">
                  <span>{it.quantity}x {it.name}</span>
                  <span>₹{it.price * it.quantity}</span>
                </li>
              ))}
            </ul>

            <div className="recap-total-row">
              <span>Total Paid (Demo)</span>
              <strong>₹{orderDetails.grandTotal}</strong>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="success-actions text-center">
          <button 
            onClick={onClose}
            className="btn-primary-sweet pulse-hover"
          >
            Order More Sweet Treats 🍰
          </button>
        </div>
      </div>
    </div>
  );
}

