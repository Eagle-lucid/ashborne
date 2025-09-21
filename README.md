Ashborne
Strategy. Innovation. Growth.

A modern, high-performance Single Page Application (SPA) for a business consulting agency. Built with React, TypeScript, Tailwind CSS, and Vite, Ashborne combines a sleek, futuristic UI with smooth interactions to showcase credibility and drive client engagement.

https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white

✨ Features
⚡ Blazing Fast Development: Powered by Vite for instant server start and HMR.

🎯 Type-Safe Foundation: Built with TypeScript for robust, error-resistant code.

🎨 Elegant UI Design: Features glassmorphism, smooth gradients, and a purposeful "Eagle Clarity" aesthetic.

📱 Fully Responsive: Flawless experience across all device sizes.

✨ Immersive Animations: Scroll-triggered effects and subtle micro-interactions.

🧩 Component-Driven Architecture: Reusable, modular components for easy scaling.

📧 Interactive Contact Form: Functional consultation form with validation.

🛠 Tech Stack
Frontend Framework: React 18

Build Tool: Vite

Language: TypeScript

Styling: Tailwind CSS

UI Design: Glassmorphism, Custom Color Palette

🎨 Design Language: Eagle Clarity Theme
Ashborne’s design is guided by minimal elegance with eagle-like clarity. We strip away distractions and let typography, space, and color speak with confidence.

Color Palette
Role HSL Usage
Primary hsl(0, 0%, 100%) Base background, clean foundation
Secondary hsl(0, 0%, 95%) Subtle section dividers, secondary backgrounds
Accent hsl(145, 63%, 42%) Primary buttons, key highlights, growth symbolism
Dark hsl(0, 0%, 12%) Headings, body text, strong anchors
Note: A secondary gold accent (hsl(43, 85%, 55%)) is defined for potential future use.

Typography
Headings: Bold, modern sans-serif (Clarity, strength)

Body: Clean, highly readable text for smooth scanning

Principles
Spacious Layouts: Never cluttered. Ample whitespace emphasizes content.

Intentional Animation: Smooth, gliding animations that enhance UX without distraction.

Consistent Accent Usage: Emerald green highlights key actions only, not decoration.

📁 Project Structure

ashborne/
├── public/
│ └── images/ # Static assets (hero, services, testimonials)
├── src/
│ ├── assets/ # Icons, illustrations (for import)
│ ├── components/
│ │ ├── ui/ # Reusable primitives (Button, Card, Input)
│ │ ├── layout/ # Structural components (Header, Footer)
│ │ └── shared/ # Shared widgets (SectionTitle, Carousel)
│ ├── sections/ # Page sections (Hero, About, Services, etc.)
│ ├── hooks/ # Custom React hooks (useScroll, useInView)
│ ├── data/ # Typed static data arrays
│ ├── types/ # TypeScript interface definitions
│ ├── styles/ # Global styles & Tailwind imports
│ └── pages/ # SPA page components (Home.tsx)
├── tailwind.config.ts # Tailwind theme extension
├── vite.config.ts # Vite configuration
└── package.json
🚀 Getting Started
Prerequisites
Node.js (v18 or higher)

npm, yarn, or pnpm

Installation
Clone the repository:

git clone https://github.com/Eagle-lucid/ashborne.git
cd ashborne
Install dependencies:

npm install
Start the development server:

npm run dev
Open your browser and navigate to the local address provided (typically http://localhost:5173).

Other Scripts
Command Action
npm run build Builds the app for production to ./dist
npm run preview Previews the production build locally
npm run dev Starts the development server

📈 Roadmap
Project Setup & Architecture

Define TypeScript Interfaces & Data

Build Core UI Components (Button, Card)

Implement All Page Sections

Add Scroll & Hover Animations

Build Testimonial Carousel

Build Consultation Form with Validation

Deploy to Vercel/Netlify

📄 License
This project is open source and available under a standard MIT License, primarily intended for learning and portfolio purposes.

👨‍💻 Author
Ashborne is designed and built by Lucid the Eagle.
