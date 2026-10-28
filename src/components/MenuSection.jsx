import React, { useState, useMemo } from 'react';
import { CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { SearchIcon } from './Icons';

export function MenuSection({ products, cart, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Map category to cute emoji
  const getCategoryEmoji = (cat) => {
    switch (cat) {
      case 'Cakes': return '🎂';
      case 'Cupcakes': return '🧁';
      case 'Donuts': return '🍩';
      case 'Cookies': return '🍪';
      default: return '✨';
    }
  };

  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();
      
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  // Compute quantity in cart for a product
  const getCartQuantity = (productId) => {
    const found = cart.find((item) => item.id === productId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="menu-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="cute-subheading">
            <span>🍰 Fresh Out Of The Oven</span>
          </div>
          <h2 className="section-main-title">Our Sweet Menu</h2>
          <p className="section-subtitle">
            Explore our handcrafted selection of cakes, cupcakes, donuts, and cookies made with organic cream and Belgian cocoa.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="menu-filter-bar">
          {/* Category Tabs */}
          <div className="category-pill-group">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All' 
                ? products.length 
                : products.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`category-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <span className="cat-emoji">{getCategoryEmoji(cat)}</span>
                  <span className="cat-name">{cat}</span>
                  <span className="cat-count">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="search-input-wrapper">
            <SearchIcon size={18} />
            <input
              type="text"
              placeholder="Search sweet treats (e.g. Red Velvet, Cupcake)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="clear-search-btn"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cartQuantity={getCartQuantity(product.id)}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="empty-filter-state">
            <span className="empty-state-emoji">🔍🧁</span>
            <h3>No sweet treats matched "{searchQuery}"</h3>
            <p>Try searching for Chocolate, Strawberry, Donut, or reset the filters.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="btn-secondary-sweet"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

