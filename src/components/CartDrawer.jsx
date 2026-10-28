import React from 'react';
import { CloseIcon, TrashIcon, CartIcon } from './Icons';

export function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToCheckout
}) {
  if (!isOpen) return null;

  // Calculate Subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Delivery calculation: Free delivery over ₹500, else ₹40
  const FREE_DELIVERY_THRESHOLD = 500;
  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0;
  const deliveryFee = subtotal === 0 ? 0 : (isFreeDelivery ? 0 : 40);
  const amountNeededForFree = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const deliveryProgress = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);

  const grandTotal = subtotal + deliveryFee;

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div 
        className="cart-drawer-panel" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Shopping Cart"
      >
        {/* Cart Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <CartIcon size={24} />
            <h3>Your Sweet Basket</h3>
            <span className="cart-count-badge">
              {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button 
            onClick={onClose} 
            className="cart-close-btn"
            aria-label="Close cart"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Free Delivery Bar */}
        {cart.length > 0 && (
          <div className="delivery-progress-strip">
            <div className="delivery-progress-text">
              {isFreeDelivery ? (
                <span className="free-unlocked">🎉 You unlocked <strong>FREE Express Delivery</strong>!</span>
              ) : (
                <span>Add <strong>₹{amountNeededForFree}</strong> more to get <strong>FREE Delivery</strong>!</span>
              )}
            </div>
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${deliveryProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Cart Content */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="empty-cart-view">
              <div className="empty-cart-animation">🧁💭</div>
              <h4>Your basket is feeling empty!</h4>
              <p>Add some fresh bakery treats to bring sweet smiles to your day.</p>
              <button 
                onClick={onClose}
                className="btn-primary-sweet"
              >
                Explore Sweet Treats 🍰
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-row">
                  {/* Thumbnail */}
                  <div className="cart-item-thumb">
                    <img src={item.image} alt={item.name} />
                  </div>

                  {/* Details */}
                  <div className="cart-item-details">
                    <div className="cart-item-title-row">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="btn-remove-item"
                        title="Remove product"
                      >
                        <TrashIcon size={16} />
                      </button>
                    </div>

                    <div className="cart-item-unit-price">
                      ₹{item.price} each
                    </div>

                    {/* Quantity Selector & Item Total */}
                    <div className="cart-item-bottom">
                      <div className="quantity-controls">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="qty-btn minus"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="qty-btn plus"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <div className="cart-item-total">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer Summary */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-breakdown">
              <div className="breakdown-row">
                <span>Items Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="breakdown-row">
                <span>Delivery Charges</span>
                <span className={deliveryFee === 0 ? 'text-free' : ''}>
                  {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                </span>
              </div>
              <div className="breakdown-row total-row">
                <span>Total Amount</span>
                <span className="grand-total-val">₹{grandTotal}</span>
              </div>
            </div>

            <div className="cart-action-buttons">
              <button 
                onClick={onProceedToCheckout}
                className="btn-primary-sweet btn-block pulse-hover"
              >
                <span>Proceed to Checkout</span>
                <span>₹{grandTotal} →</span>
              </button>

              <button 
                onClick={onClearCart}
                className="btn-clear-cart"
              >
                Empty Basket
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

