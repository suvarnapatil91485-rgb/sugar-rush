import React from 'react';
import { CupcakeLogo, SparklesIcon } from './Icons';

export function Hero({ onShopNowClick }) {
  return (
    <section id="home" className="hero-section">
      {/* Decorative background blurs & sprinkles */}
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      
      <div className="hero-container">
        {/* Left Column: Hero Copy & CTA */}
        <div className="hero-content">
          <div className="hero-badge">
            <SparklesIcon size={16} />
            <span>Freshly Baked with Love Every Morning</span>
          </div>

          <h1 className="hero-title">
            A Little <span className="highlight-text">Sweetness</span> in Every Bite! 🍰
          </h1>

          <p className="hero-subtitle">
            Welcome to <strong>Sugar Rush</strong>, your neighborhood artisanal haven for fluffy cupcakes, decadent drip cakes, gourmet glazed donuts, and warm buttery cookies.
          </p>

          <div className="hero-cta-group">
            <button 
              onClick={onShopNowClick} 
              className="btn-primary-sweet pulse-hover"
            >
              <span>Shop Now</span>
              <span className="btn-icon">🛍️</span>
            </button>
            <a 
              href="#reviews" 
              className="btn-secondary-sweet"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>See Sweet Reviews</span>
              <span className="star-emojis">⭐⭐⭐⭐⭐</span>
            </a>
          </div>

          {/* Quick social proof */}
          <div className="hero-social-proof">
            <div className="avatar-stack">
              <span className="mini-avatar av1">🧁</span>
              <span className="mini-avatar av2">🍓</span>
              <span className="mini-avatar av3">🍪</span>
              <span className="mini-avatar av4">🍩</span>
            </div>
            <div className="social-proof-text">
              <strong>4.9 / 5 Rating</strong>
              <span>from 1,200+ happy sweet lovers in town</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Bakery Banner */}
        <div className="hero-visual">
          <div className="hero-banner-card">
            {/* Main Showcase Image: Cakes & Cupcakes Banner */}
            <div className="banner-image-container">
              <img 
                src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=900&auto=format&fit=crop&q=80" 
                alt="Sugar Rush Sweet Bakery Cakes and Cupcakes" 
                className="banner-main-img"
                loading="eager"
              />
              <div className="banner-gradient-overlay"></div>
            </div>

            {/* Floating Cute Badges */}
            <div className="floating-badge badge-top-right bounce-slow">
              <div className="badge-emoji-box">🍓</div>
              <div className="badge-text-box">
                <span className="badge-label">Fresh Today</span>
                <span className="badge-title">Strawberry Swirl</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left float-slow">
              <div className="badge-emoji-box">🎂</div>
              <div className="badge-text-box">
                <span className="badge-label">Signature Favorite</span>
                <span className="badge-title">Belgian Ganache</span>
              </div>
            </div>

            <div className="floating-pill-badge badge-center-top">
              <span>✨ 100% Eggless Options</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bakery Features Row */}
      <div className="features-strip">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon-box">🧁</div>
            <div className="feature-info">
              <h4>Baked Fresh Daily</h4>
              <p>Handmade every sunrise with 100% natural butter</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">🚚</div>
            <div className="feature-info">
              <h4>30-Min Express Delivery</h4>
              <p>Arrives chilled or warm in protective sweet boxes</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">💖</div>
            <div className="feature-info">
              <h4>Pure Ingredients</h4>
              <p>No artificial preservatives or synthetic flavors</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">🎉</div>
            <div className="feature-info">
              <h4>Free Gift Box</h4>
              <p>Complimentary ribbon box on orders above ₹500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

