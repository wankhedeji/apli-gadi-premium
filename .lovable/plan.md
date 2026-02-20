

# Apli Gadi – Premium Pre-Owned Car Dealership Website

## Overview
A modern, dark-themed, premium website for "Apli Gadi" – a trusted pre-owned car dealership in Nagpur, Maharashtra. The site will feature a striking 3D car hero section, smooth animations, and a professional automotive aesthetic.

---

## Design System
- **Theme**: Dark mode with charcoal black/deep blue backgrounds
- **Accent Colors**: Orange/red for CTAs, subtle gold highlights for premium feel
- **Typography**: Clean, modern fonts (Poppins/Montserrat style via Google Fonts)
- **Effects**: Glassmorphism cards, 3D tilt on hover, smooth scroll animations, depth shadows

---

## Pages & Features

### 1. Home Page
- **Hero Section** with an interactive 3D rotating car model (using React Three Fiber) on a dramatic dark backdrop
- Tagline: *"Apli Gadi – Bharosemand Pre-Owned Cars"*
- Three bold CTA buttons: Buy Car, Sell Your Car, Exchange Car
- **Featured Cars** section with animated card grid (3D tilt hover effects)
- **Why Choose Apli Gadi** – trust badges with icons (Verified Cars, RC Transfer Support, Transparent Pricing)
- **Customer Testimonials** carousel with star ratings
- **Floating Buttons** – WhatsApp (pre-filled message) and Call Now, persistent across all pages

### 2. Buy Cars Page
- Responsive grid of car listing cards (image, price, year, km driven, fuel type)
- **Filter sidebar/bar**: Price range, Brand, Fuel Type, Transmission
- Each card has a 3D tilt hover effect with "View Details" and "WhatsApp Inquiry" buttons
- Car detail modal or expandable view with full specs and image gallery

### 3. Sell Your Car Page
- Clean, step-style form: Brand, Model, Year, KM Driven, Expected Price
- Image upload area (visual dropzone)
- Animated submit button with confirmation feedback
- WhatsApp fallback CTA

### 4. Exchange Car Page
- Side-by-side form layout: Your Current Car ↔ Desired Car
- Clean comparison visual
- CTA to contact the dealer via WhatsApp or call

### 5. About Us Page
- Story of Apli Gadi with focus on trust, transparency, and local Nagpur roots
- Professional layout with icons, stats (e.g., "500+ Cars Sold"), and subtle animations
- Slight Marathi touch in language

### 6. Contact Page
- Embedded Google Map showing Nagpur location
- Contact details: Phone, WhatsApp, Email
- Contact form with smooth field transitions and validation

---

## Technical Highlights
- **3D Car Model**: Interactive rotating car in hero using React Three Fiber + Drei
- **Animations**: Fade-in on scroll, hover tilt effects, smooth page transitions
- **Responsive**: Fully optimized for mobile, tablet, and desktop
- **Static Data**: Car listings stored as local data (no backend needed initially)
- **Forms**: Submit via WhatsApp pre-filled links (no backend required)
- **SEO-friendly**: Proper meta tags, semantic HTML structure

---

## Data Approach
All car listings and testimonials will use local mock data. Forms will link to WhatsApp with pre-filled messages. No backend or database is needed for the initial version – this keeps the site fast and simple to maintain.

