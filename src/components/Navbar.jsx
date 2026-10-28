import React, { useState, useEffect } from 'react';
import { CupcakeLogo, CartIcon } from './Icons';

export function Navbar({ cartCount, onOpenCart, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [badgeBump, setBadgeBump] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger bounce animation when cart count changes
  useEffect(() => {
    if (cartCount > 0) {
      setBadgeBump(true);
      const timer = setTimeout(() => setBadgeBump(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo & Name */}
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="navbar-brand">
          <div className="logo-icon-wrapper">
            <CupcakeLogo size={42} className="logo-cupcake" />
          </div>
          <div className="brand-text">
            <span className="brand-title">Sugar Rush</span>
            <span className="brand-subtitle">Artisan Sweet Bakery</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <button 
            className={`nav-link-btn ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollTo('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link-btn ${activeSection === 'menu' ? 'active' : ''}`}
            onClick={() => scrollTo('menu')}
          >
            Menu
          </button>
          <button 
            className={`nav-link-btn ${activeSection === 'reviews' ? 'active' : ''}`}
            onClick={() => scrollTo('reviews')}
          >
            Reviews
          </button>
        </nav>

        {/* Right Action: Cart Button & Mobile Hamburger */}
        <div className="navbar-actions">
          <button 
            onClick={onOpenCart} 
            className="cart-toggle-btn"
            aria-label="View shopping cart"
          >
            <div className="cart-icon-wrap">
              <CartIcon size={22} />
              {cartCount > 0 && (
                <span className={`cart-badge ${badgeBump ? 'bump' : ''}`}>
                  {cartCount}
                </span>
              )}
            </div>
            <span className="cart-btn-label">Cart</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <button 
            className="mobile-nav-link"
            onClick={() => scrollTo('home')}
          >
            🍰 Home
          </button>
          <button 
            className="mobile-nav-link"
            onClick={() => scrollTo('menu')}
          >
            🎂 Bakery Menu
          </button>
          <button 
            className="mobile-nav-link"
            onClick={() => scrollTo('reviews')}
          >
            ⭐ Customer Reviews
          </button>
          <button 
            className="mobile-nav-link highlight"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenCart();
            }}
          >
            🛍️ View Cart ({cartCount})
          </button>
        </div>
      )}
    </header>
  );
}

