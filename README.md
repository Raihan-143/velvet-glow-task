# VelvetGlow — Modern Fashion Landing Page

A responsive and user-friendly landing page for a fictional beauty & fashion brand **VelvetGlow**, designed using **React** and **Tailwind CSS**. This project highlights clean UI/UX, optimized layout, sticky behavior, dynamic content from JSON, and modern web practices.

---

## Project Purpose

- Build a **fashion landing page** with real-life sections (Hero, Products, Testimonials, Blogs).
- Load **content from external JSON files** to mimic real-world API integration.
- Make layout **responsive** and mobile-friendly with appropriate stacking, reordering & visibility handling.
- Handle **layout challenges**, font management, sticky navbar, and spacing issues smoothly.

---

## Technologies Used

- **React.js (with Vite)**
- **Tailwind CSS**
- **Custom CSS Variables & Tailwind Config**
- **Local JSON-based content**

---

## Folder Structure

VelvetGlow/
│
├── public/
│ ├── blogs.json
│ ├── catogories.json
│ ├── perfumes.json
│ ├── popularProducts.json
│ └── testimonial.json
│
├── src/
│ ├── Component/
│ │ ├── CollectionSection.jsx
│ │ ├── CustomerTestimonial.jsx
│ │ ├── Footer.jsx
│ │ ├── Hero.jsx
│ │ ├── LatestBlog.jsx
│ │ ├── Navbar.jsx
│ │ ├── PerfumeSlider.jsx
│ │ └── PopularProducts.jsx
│ │
│ ├── Layout/
│ │ └── MainLayout.jsx
│ │
│ ├── Pages/
│ │ └── Home.jsx
│ │
│ └── router/
│ └── router.jsx



---

## 📸 Page Features

###  Sticky Navbar
Navbar remains visible when user scrolls up (using `sticky top-0 z-50`).

### Responsive Hero Section
- 3-column layout on desktop: two images and one text card
- On mobile: 2 images first, then text in center

###  Collection Section
- Highlights different perfume categories (data from `catogories.json`)

###  Perfume Slider
- Horizontally scrollable perfume items
- Loads from `perfumes.json

###  Popular Products Section
Displays featured products with:
-Discount tags
- Price details
-Helps users quickly find trending items and offers.

###  Customer Testimonial Section
-Shows real reviews from happy customers
-Builds trust and authenticity
-Includes user names, ratings, and short feedback

###  Latest News & Blog Section
-Users can see updates about new arrivals, fashion tips, or company news
-Designed for better engagement and regular return visits

### Responsive Behavior
Desktop
-Full 3/4-column Hero, side-by-side layout
Tablet
-Slight stacking with flex wrap
Mobile
-Reordered: 2 images first → text second
Extra Small
-Quote section hidden, buttons resized

## Challenges & Solutions

| Problem | Solution |
|--------|----------|
| Navbar not staying on top | Used `sticky` with `top-0 z-50` |
| Spacing too large between hero elements | Used `gap-x-*` and margin fixes |
| Mobile overflow | Controlled image sizes and used flex wrap |
| JSON loading | Used `useEffect` and `fetch('/file.json')` pattern |
| Conditional display on mobile | Used Tailwind's `hidden md:block` |

## 🛒 Future Ideas

- Add dark/light theme toggle  
- Add working product cart  
- Enable newsletter subscription form  
- Use Firebase or a backend to manage products/blogs dynamically  
- Add AOS or Framer Motion animation

## ✅ Live Demo  
[[🔗 See Live](https://calm-maamoul-766a91.netlify.app/)]
---

## Developed By

**Md. Raihan Hasan Rana**  
Passionate about learning full-stack development & building real-world web apps.
