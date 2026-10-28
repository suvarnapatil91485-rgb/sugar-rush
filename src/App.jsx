import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { INITIAL_REVIEWS } from './data/initialReviews';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export function App() {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('sugar_rush_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed reading cart from localStorage', e);
      return [];
    }
  });

  // Reviews state persisted to localStorage
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('sugar_rush_reviews');
      return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    } catch (e) {
      console.error('Failed reading reviews from localStorage', e);
      return INITIAL_REVIEWS;
    }
  });

  // UI Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('sugar_rush_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed writing cart to localStorage', e);
    }
  }, [cart]);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('sugar_rush_reviews', JSON.stringify(reviews));
    } catch (e) {
      console.error('Failed writing reviews to localStorage', e);
    }
  }, [reviews]);

  // Section observer to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'reviews'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart operations
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setToastMessage(`Added "${product.name}" to your sweet basket! 🧁✨`);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    const itemToRemove = cart.find(i => i.id === productId);
    setCart((prev) => prev.filter((item) => item.id !== productId));
    if (itemToRemove) {
      setToastMessage(`Removed "${itemToRemove.name}" from basket.`);
    }
  };

  const handleClearCart = () => {
    setCart([]);
    setToastMessage('Sweet basket cleared.');
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = (orderData) => {
    setIsCheckoutOpen(false);
    setCart([]); // Clear cart upon successful order
    setOrderDetails(orderData);
  };

  const handleAddReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
    setToastMessage('Thank you for your sweet feedback! 💕');
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sugar-rush-app">
      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Bakery Sections */}
      <main>
        {/* 1. Home / Hero Banner */}
        <Hero onShopNowClick={scrollToMenu} />

        {/* 2. Bakery Menu */}
        <MenuSection
          products={PRODUCTS}
          cart={cart}
          onAddToCart={handleAddToCart}
        />

        {/* 3. Customer Reviews */}
        <ReviewsSection
          reviews={reviews}
          onAddReview={handleAddReview}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Order Celebration Modal */}
      <OrderSuccessModal
        orderDetails={orderDetails}
        onClose={() => {
          setOrderDetails(null);
          scrollToMenu();
        }}
      />

      {/* Floating Sweet Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}

export default App;

