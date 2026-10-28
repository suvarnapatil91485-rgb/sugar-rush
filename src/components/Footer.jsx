import React, { useState } from 'react';
import { CupcakeLogo } from './Icons';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 4000);
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-top-waves">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" fill="#FFE8EE"></path>
        </svg>
      </div>

      <div className="footer-main-container">
        <div className="footer-grid">
          {/* Column 1: Bakery Identity */}
          <div className="footer-col brand-col">
            <div className="footer-brand-title">
              <CupcakeLogo size={46} />
              <div className="brand-texts">
                <h3>Sugar Rush</h3>
                <span>Artisan Sweet Bakery</span>
              </div>
            </div>
            <p className="footer-about">
              Crafting unforgettable moments of sweetness with every slice, swirl, and crumb. Freshly baked daily in our whimsical kitchen.
            </p>
            <div className="footer-social-row">
              <span className="social-pill" title="Instagram">📸 @sugarrushbakery</span>
              <span className="social-pill" title="WhatsApp">💬 +91 98765 43210</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              <li><button onClick={() => scrollTo('home')}>🍰 Home & Banner</button></li>
              <li><button onClick={() => scrollTo('menu')}>🎂 Sweet Menu</button></li>
              <li><button onClick={() => scrollTo('reviews')}>⭐ Customer Reviews</button></li>
              <li><a href="#menu" onClick={() => scrollTo('menu')}>🍪 Cookies & Macarons</a></li>
              <li><a href="#menu" onClick={() => scrollTo('menu')}>🍩 Gourmet Donuts</a></li>
            </ul>
          </div>

          {/* Column 3: Bakery Hours & Location */}
          <div className="footer-col">
            <h4 className="footer-heading">Bakery Hours & Visit</h4>
            <div className="hours-block">
              <p><strong>Mon – Fri:</strong> 8:00 AM – 10:00 PM</p>
              <p><strong>Sat – Sun:</strong> 8:00 AM – 11:00 PM</p>
            </div>
            <div className="location-block">
              <p>📍 <strong>Boutique:</strong> 42 Blossom Boulevard, Pastel Meadows</p>
              <p>💌 <strong>Email:</strong> hello@sugarrushbakery.com</p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h4 className="footer-heading">Join The Sugar Club 🎀</h4>
            <p className="newsletter-desc">
              Subscribe for secret dessert drops, weekend tasting boxes, and sweet discounts!
            </p>

            {newsletterSubmitted ? (
              <div className="newsletter-success">
                <span>🎉 Sweet! Check your inbox for a 10% discount cupcake coupon!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="btn-primary-sweet newsletter-btn">
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Sugar Rush Bakery. All rights reserved. A Little Sweetness in Every Bite!</p>
          <p className="crafted-with-love">
            Crafted with 💕, flour, and pure organic butter 🧈
          </p>
        </div>
      </div>
    </footer>
  );
}

