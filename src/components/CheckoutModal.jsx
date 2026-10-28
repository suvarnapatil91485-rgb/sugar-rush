import React, { useState } from 'react';
import { CloseIcon, CheckCircleIcon } from './Icons';

export function CheckoutModal({
  isOpen,
  onClose,
  cart,
  onOrderSuccess
}) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
    deliverySlot: 'Instant Delivery (30-45 mins)'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const deliveryFee = subtotal >= 500 || subtotal === 0 ? 0 : 40;
  const grandTotal = subtotal + deliveryFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your sweet name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.address.trim()) {
      errs.address = 'Please provide your delivery address';
    } else if (formData.address.trim().length < 6) {
      errs.address = 'Please enter a complete address with street/locality';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate sweet order processing
    setTimeout(() => {
      setIsSubmitting(false);
      onOrderSuccess({
        orderId: `SR-${Math.floor(100000 + Math.random() * 900000)}`,
        customer: formData,
        items: [...cart],
        subtotal,
        deliveryFee,
        grandTotal,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 700);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-card checkout-modal-card" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Checkout"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="modal-eyebrow">🍰 Sugar Rush Checkout</span>
            <h3 className="modal-title">Complete Your Sweet Order</h3>
          </div>
          <button 
            onClick={onClose} 
            className="modal-close-btn"
            aria-label="Close modal"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Demo Notice Banner */}
        <div className="demo-notice-banner">
          <span className="demo-notice-icon">ℹ️</span>
          <span>
            <strong>Demo Checkout:</strong> No real payments or orders are processed. Enjoy the sweet experience!
          </span>
        </div>

        <div className="checkout-modal-body">
          {/* Order Summary Recap */}
          <div className="checkout-summary-box">
            <h4 className="summary-title">Order Summary ({totalItemCount} items)</h4>
            <div className="summary-items-scroller">
              {cart.map((item) => (
                <div key={item.id} className="summary-item-line">
                  <div className="summary-item-info">
                    <span className="summary-qty">{item.quantity}x</span>
                    <span className="summary-name">{item.name}</span>
                  </div>
                  <span className="summary-cost">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="summary-costs">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="summary-row">
                <span>Delivery:</span>
                <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
              </div>
              <div className="summary-row grand-total">
                <strong>Total to Pay:</strong>
                <strong className="grand-price">₹{grandTotal}</strong>
              </div>
            </div>
          </div>

          {/* Customer Delivery Form */}
          <form onSubmit={handleSubmit} className="checkout-form">
            <h4 className="form-section-title">Delivery Information</h4>

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name <span className="req">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Maya Sharma"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'input-error' : ''}`}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number <span className="req">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={handleChange}
                className={`form-input ${errors.phone ? 'input-error' : ''}`}
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="address" className="form-label">
                Delivery Address <span className="req">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                placeholder="House/Flat number, Building name, Street, Landmark, Pin code"
                value={formData.address}
                onChange={handleChange}
                className={`form-input ${errors.address ? 'input-error' : ''}`}
              ></textarea>
              {errors.address && <span className="field-error">{errors.address}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="notes" className="form-label">
                Special Note / Cake Message (Optional)
              </label>
              <input
                id="notes"
                name="notes"
                type="text"
                placeholder="e.g. Write 'Happy Birthday Riya!' on cake, extra napkins"
                value={formData.notes}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Delivery Speed</label>
              <select
                name="deliverySlot"
                value={formData.deliverySlot}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Instant Delivery (30-45 mins)">🚀 Instant Delivery (30-45 mins)</option>
                <option value="Evening Slot (6:00 PM - 8:00 PM)">🌙 Evening Delivery (6:00 PM - 8:00 PM)</option>
                <option value="Tomorrow Morning (9:00 AM - 11:00 AM)">☀️ Tomorrow Morning (9:00 AM - 11:00 AM)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary-sweet btn-block place-order-btn pulse-hover"
            >
              {isSubmitting ? (
                <span>Baking your order... 🧁</span>
              ) : (
                <span>Place Order (₹{grandTotal}) 🎉</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

