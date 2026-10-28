# Sugar Rush 🍰 — Artisan Bakery Website

> *"A Little Sweetness in Every Bite!"*

**Sugar Rush** is a cute, modern, responsive, and fully functional bakery e-commerce web application built with **React**, **CSS3**, and **Vite**. It features a soft pastel pink, cream, and white aesthetic, mouthwatering dessert photography, smooth micro-interactions, an interactive shopping cart with `localStorage` persistence, a demo checkout experience with celebration confetti, and an interactive customer review board.

---

## 🎂 Features Overview

### 1. Home Page & Hero Banner
- **Sweet Branding:** Custom animated cupcake mascot and typography.
- **Hero Banner:** Showcase featuring cakes, cupcakes, and floating pastel badges (*Fresh Today*, *100% Eggless Options*, *Belgian Ganache*).
- **Bakery Highlights:** 30-min express delivery, baked fresh daily with pure butter, 4.9★ community rating, and complimentary gift packaging.
- **Shop Now CTA:** Smooth scrolling button straight to the bakery menu.

### 2. Bakery Menu
- 6 Handcrafted Bakery Products:
  1. **Chocolate Cake** — ₹450 *(Cakes)*
  2. **Strawberry Cupcake** — ₹120 *(Cupcakes)*
  3. **Red Velvet Cake** — ₹550 *(Cakes)*
  4. **Chocolate Donut** — ₹90 *(Donuts)*
  5. **Macarons** — ₹200 *(Cookies / Sweets)*
  6. **Choco Chip Cookies** — ₹150 *(Cookies)*
- **Interactive Category Filters:** Filter by `All`, `Cakes`, `Cupcakes`, `Donuts`, and `Cookies` with live item counts.
- **Real-Time Search Bar:** Instantly filter treats by name or description.
- **Attractive Cards:** High-resolution food photography, dietary eggless markers, ratings, discount badges, and smooth hover elevation.

### 3. Shopping Cart Drawer
- **Slide-out Cart Panel:** Effortlessly slides in from the right with a backdrop blur.
- **Quantity Controls:** Increase (`+`) or decrease (`-`) item counts directly.
- **Item Removal:** Remove individual items or clear the entire basket with one click.
- **Free Delivery Calculator:** Real-time progress bar unlocking **FREE delivery** for orders above ₹500 (otherwise ₹40 standard delivery).
- **Cart Badge:** Live animated item counter in the header navbar.
- **Persistence:** Saved in browser `localStorage` so items remain even after refreshing.

### 4. Demo Checkout & Celebration
- **Order Summary:** Detailed breakdown of items, quantities, subtotal, delivery fee, and grand total.
- **Customer Form:** Validated inputs for Name, Phone Number, Delivery Address, Delivery Time Slot, and optional Sweet Note (e.g., custom cake messages).
- **Celebration Popup:** Confetti bursts with the message:
  > **"Yay! Your sweet treats are on their way! 🎉"**
- **Order Reference Code:** Unique order ID (e.g., `#SR-84920`) and estimated delivery details.
- **Demo Notice:** Friendly reminder that no actual payment or banking information is required.

### 5. Customer Reviews System
- **Interactive Star Rating:** 1 to 5 clickable stars with live hover preview and cheerful feedback labels.
- **Submit Feedback:** Add reviewer name, choose the treat enjoyed, and write review comments.
- **Community Feed:** Pre-loaded with authentic bakery reviews and automatically updates with newly submitted reviews.
- **Saved to `localStorage`:** All user reviews persist across sessions.

---

## 🎨 Theme & Design System
- **Colors:** Soft pastel pink (`#FF6B8B`, `#FFE6ED`, `#FFF6F8`), whipped cream white (`#FFFFFF`, `#FFFCF7`), warm chocolate accents (`#3F231D`, `#5E3932`), and warm gold (`#F59E0B`).
- **Typography:** `Fredoka` (playful, rounded dessert headings) and `Quicksand` (warm, legible rounded body copy).
- **Shapes & Radii:** Extra-rounded cards (`20px - 28px`), pill buttons, soft drop shadows.
- **Responsiveness:** Fluid grid and drawer transitions for Mobile (< 640px), Tablet (768px - 1024px), and Desktop (1200px+).

---

## 🚀 How to Run Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your system.

### Steps

1. **Open your terminal or command prompt** and navigate to the project directory:
   ```bash
   cd "C:\Users\Welcome\.gemini\antigravity\scratch\sugar-rush"
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

5. **Build for production (optional):**
   ```bash
   npm run build
   ```
   To preview the built production site:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
sugar-rush/
├── index.html                   # HTML template with Google Fonts and favicon
├── package.json                 # Project dependencies and npm scripts
├── vite.config.js               # Vite configuration
├── README.md                    # Project documentation
├── src/
│   ├── main.jsx                 # React DOM root entry point
│   ├── App.jsx                  # Main application state & layout coordinator
│   ├── index.css                # Global pastel styling, variables & animations
│   ├── data/
│   │   ├── products.js          # Product data (6 bakery treats with prices & tags)
│   │   └── initialReviews.js    # Pre-seeded customer reviews
│   ├── utils/
│   │   └── confetti.js          # Celebration confetti effects
│   └── components/
│       ├── Icons.jsx            # Custom SVG cupcake logo & UI icons
│       ├── Navbar.jsx           # Sticky glassmorphic navbar with cart counter
│       ├── Hero.jsx             # Hero banner with welcome message & badges
│       ├── ProductCard.jsx      # Rounded product card with image & add button
│       ├── MenuSection.jsx      # Menu grid with category filters & search
│       ├── CartDrawer.jsx       # Slide-out shopping cart with total calculator
│       ├── CheckoutModal.jsx    # Demo checkout form with order summary
│       ├── OrderSuccessModal.jsx# Celebratory order confirmation with confetti
│       ├── ReviewsSection.jsx   # Interactive 1-5 star review form & feed
│       ├── Footer.jsx           # Bakery hours, newsletter & contact details
│       └── Toast.jsx            # Floating feedback notification popups
```

---

*Made with 💕, flour, and pure butter for dessert lovers!*

