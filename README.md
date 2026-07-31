# 🚀 eCell NSUT Official Website

Welcome to the official repository for the **Entrepreneurship Cell (eCell) of Netaji Subhas University of Technology (NSUT)** website.

Our platform is designed to foster a culture of innovation, providing students with the resources, mentorship, and community needed to turn their startup dreams into reality.

## 🛠️ Tech Stack

This project is built with a modern, high-performance web stack:
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **Animations:** GSAP (GreenSock) for advanced timeline animations (including our custom SVG intro)
- **3D Rendering:** Three.js & React Three Fiber (for dynamic 3D elements)
- **Icons:** Lucide React & React Icons

## ✨ Key Features

- **Custom GSAP Intro:** A meticulously crafted, strict-mode-safe SVG stroke-and-zoom animation that runs on initial load.
- **Magic Bento UI:** A highly responsive, modern "bento box" layout for contact cards, integrated with hover effects and spotlight styling.
- **Dynamic Routing:** Client-side routing with `react-router-dom` ensuring snappy navigation between the Home, Team, and ESummit pages.
- **Scroll Lock & Accessibility:** Mobile navigation prevents background scrolling when open and is fully accessible.

## 📂 Project Structure

```text
eCell_NSUT/
└── ecellweb/
    ├── src/
    │   ├── assets/       # Images, videos, and SVGs
    │   ├── components/   # Reusable UI elements (Hero, Navbar, IntroAnimation, etc.)
    │   ├── constants/    # Data constants (Nav links, stats, team info)
    │   ├── pages/        # Route-level components (Home, TheTeam, ESummit)
    │   ├── App.jsx       # Root wrapper and global layout
    │   ├── main.jsx      # Vite entry point and router definition
    │   └── index.css     # Global Tailwind styles
    ├── index.html        # HTML template
    ├── package.json      # Dependencies and scripts
    └── vite.config.js    # Vite configuration
```

## 💻 Local Development Setup

To run this project locally, follow these steps:

1. **Navigate to the web directory:**
   ```bash
   cd ecellweb
   ```

2. **Install dependencies:**
   Make sure you have Node.js and `npm` installed.
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open your browser and navigate to `http://localhost:5173/`.

## 🚢 Deployment

The website is optimized for deployment on Vercel. 
The production build is handled via:
```bash
npm run build
```
Vite will output the optimized static files into the `dist/` directory.

---
*Built with ❤️ by the eCell NSUT Tech Team.*
