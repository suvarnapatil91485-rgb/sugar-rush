import React, { useState } from 'react';
import { StarIcon, CartIcon } from './Icons';

export function ProductCard({ product, onAddToCart, cartQuantity = 0 }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    onAddToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 450);
  };

  return (
    <div className="product-card">
      {/* Product Image Container */}
      <div className="card-image-wrap">
        {!imgLoaded && (
          <div className="image-skeleton">
            <span className="skeleton-emoji">{product.fallbackEmoji}</span>
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`card-image ${imgLoaded ? 'loaded' : ''}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={(e) => {
            // In case offline, keep cute placeholder
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Badges Overlay */}
        <div className="card-badges-top">
          {product.tag && (
            <span className="product-tag-pill" style={{ backgroundColor: product.badgeColor }}>
              {product.tag}
            </span>
          )}
          {product.eggless && (
            <span className="dietary-badge" title="100% Eggless">
              🟢 Eggless
            </span>
          )}
        </div>

        {/* Rating Floating Tag */}
        <div className="card-rating-float">
          <StarIcon size={14} filled={true} color="#FFB800" />
          <span className="rating-num">{product.rating}</span>
          <span className="rating-count">({product.reviewsCount})</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-body">
        <div className="card-category-strip">
          <span className="category-pill">{product.category}</span>
          <span className="serves-pill">{product.serves}</span>
        </div>

        <h3 className="card-title">{product.name}</h3>
        <p className="card-description">{product.description}</p>

        {/* Price & Action Area */}
        <div className="card-footer-action">
          <div className="card-price-block">
            <span className="price-symbol">₹</span>
            <span className="price-current">{product.price}</span>
            {product.originalPrice && (
              <span className="price-original">₹{product.originalPrice}</span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`btn-add-to-cart ${isAdding ? 'adding-pop' : ''} ${cartQuantity > 0 ? 'in-cart' : ''}`}
            aria-label={`Add ${product.name} to cart`}
          >
            <CartIcon size={18} />
            <span>{cartQuantity > 0 ? `Add More (${cartQuantity})` : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

