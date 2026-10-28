import React, { useState } from 'react';
import { StarIcon, SparklesIcon } from './Icons';

export function ReviewsSection({ reviews, onAddReview }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [product, setProduct] = useState('Red Velvet Cake');
  const [comment, setComment] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Rating labels
  const getRatingLabel = (val) => {
    switch (val) {
      case 1: return '1 Star — Needs More Sugar 🧁';
      case 2: return '2 Stars — Okayish 🙂';
      case 3: return '3 Stars — Sweet & Tasty! 😋';
      case 4: return '4 Stars — Deliciously Good! 🍓';
      case 5: return '5 Stars — Heavenly Perfection! 🌟';
      default: return 'Rate your sweetness';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError('Please enter your name');
      return;
    }
    if (!comment.trim()) {
      setFormError('Please share a few sweet words of feedback');
      return;
    }
    if (comment.trim().length < 5) {
      setFormError('Feedback is too short, tell us a bit more about what you enjoyed!');
      return;
    }

    // Avatar pastel colors
    const colors = [
      { bg: '#FFE4E6', text: '#E11D48' },
      { bg: '#FCE7F3', text: '#BE185D' },
      { bg: '#EDE9FE', text: '#7C3AED' },
      { bg: '#FEF3C7', text: '#D97706' },
      { bg: '#E0F2FE', text: '#0284C7' }
    ];
    const pickedColor = colors[Math.floor(Math.random() * colors.length)];

    const newReview = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      rating,
      date: 'Just now',
      product,
      comment: comment.trim(),
      avatarBg: pickedColor.bg,
      avatarColor: pickedColor.text,
      verified: true,
      likes: 1
    };

    onAddReview(newReview);
    setName('');
    setComment('');
    setRating(5);
    setFormError('');
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 4000);
  };

  // Compute average rating
  const avgRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '5.0';

  return (
    <section id="reviews" className="reviews-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="cute-subheading">
            <SparklesIcon size={16} />
            <span>Customer Love & Reviews</span>
          </div>
          <h2 className="section-main-title">Sweet Words From Sweet People 💕</h2>
          <p className="section-subtitle">
            See what our lovely customers say about their Sugar Rush experience, or leave your own review below!
          </p>

          {/* Average Rating Scorecard */}
          <div className="reviews-score-card">
            <div className="score-big">{avgRating}</div>
            <div className="score-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} filled={star <= Math.round(Number(avgRating))} size={22} color="#FFB800" />
              ))}
            </div>
            <div className="score-label">Based on {reviews.length} customer reviews</div>
          </div>
        </div>

        {/* Content Layout: Left = Add Review Form, Right = Reviews List */}
        <div className="reviews-grid-layout">
          {/* Review Submission Form */}
          <div className="review-form-card">
            <div className="form-card-header">
              <span className="card-badge-mini">Leave Feedback</span>
              <h3 className="form-card-title">Share Your Sweet Experience ✨</h3>
              <p className="form-card-desc">Your rating helps us bake happier smiles every day!</p>
            </div>

            {formSuccess && (
              <div className="review-success-alert">
                <span>🎉 Thank you! Your review has been published below!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="new-review-form">
              {/* Star Rating Selector */}
              <div className="form-group">
                <label className="form-label">
                  Your Rating: <strong>{getRatingLabel(hoverRating || rating)}</strong>
                </label>
                <div className="star-picker">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      className={`star-pick-btn ${star <= (hoverRating || rating) ? 'active' : ''}`}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      aria-label={`Rate ${star} star`}
                    >
                      <StarIcon 
                        size={28} 
                        filled={star <= (hoverRating || rating)} 
                        color="#FFB800" 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Input */}
              <div className="form-group">
                <label htmlFor="rev-name" className="form-label">
                  Your Name <span className="req">*</span>
                </label>
                <input
                  id="rev-name"
                  type="text"
                  placeholder="e.g. Diya Patel"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              {/* Product Select */}
              <div className="form-group">
                <label htmlFor="rev-product" className="form-label">
                  Sweet Treat You Tried
                </label>
                <select
                  id="rev-product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="form-select"
                >
                  <option value="Chocolate Cake">Chocolate Cake 🍫</option>
                  <option value="Strawberry Cupcake">Strawberry Cupcake 🍓</option>
                  <option value="Red Velvet Cake">Red Velvet Cake ❤️</option>
                  <option value="Chocolate Donut">Chocolate Donut 🍩</option>
                  <option value="Macarons">Macarons 🌸</option>
                  <option value="Choco Chip Cookies">Choco Chip Cookies 🍪</option>
                  <option value="General Bakery Experience">General Sweet Experience ✨</option>
                </select>
              </div>

              {/* Feedback Textbox */}
              <div className="form-group">
                <label htmlFor="rev-comment" className="form-label">
                  Your Feedback <span className="req">*</span>
                </label>
                <textarea
                  id="rev-comment"
                  rows="4"
                  placeholder="How was the taste, sweetness, texture, and packaging? We'd love to know!"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="form-input"
                ></textarea>
              </div>

              {formError && <div className="field-error review-err">{formError}</div>}

              <button type="submit" className="btn-primary-sweet btn-block pulse-hover">
                <span>Submit Sweet Review 💌</span>
              </button>
            </form>
          </div>

          {/* Customer Reviews Feed */}
          <div className="reviews-feed">
            <h3 className="feed-title">
              Recent Customer Reviews ({reviews.length})
            </h3>

            <div className="reviews-cards-list">
              {reviews.map((rev) => (
                <div key={rev.id} className="review-card">
                  <div className="review-card-top">
                    {/* Reviewer Avatar */}
                    <div 
                      className="reviewer-avatar" 
                      style={{ backgroundColor: rev.avatarBg, color: rev.avatarColor }}
                    >
                      {rev.name.charAt(0).toUpperCase()}
                    </div>

                    <div className="reviewer-info">
                      <div className="reviewer-name-row">
                        <h4 className="reviewer-name">{rev.name}</h4>
                        {rev.verified && (
                          <span className="verified-buyer-tag">Verified Sweet Tooth ✓</span>
                        )}
                      </div>
                      <div className="review-meta-row">
                        <div className="review-stars-list">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon 
                              key={star} 
                              size={15} 
                              filled={star <= rev.rating} 
                              color="#FFB800" 
                            />
                          ))}
                        </div>
                        <span className="review-date">• {rev.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Tag */}
                  {rev.product && (
                    <div className="review-product-tag">
                      <span>Ordered: <strong>{rev.product}</strong></span>
                    </div>
                  )}

                  {/* Feedback text */}
                  <p className="review-text">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

