# Subash Sunuwar - Personal Portfolio

A custom-built, highly optimized personal portfolio and professional brand website for Subash Sunuwar, an AI Engineer & Automation Specialist.

## 🚀 Tech Stack Architecture
This project is completely custom-coded tailored to strict design requirements. It does not rely on any proprietary site builders or theme templates.

- **Framework**: React 18
- **Build Tool**: Vite (Lightning-fast frontend tooling)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (Custom theme architecture implemented directly in `src/index.css`)
- **Animations**: Framer Motion (Scroll-triggered cinematic reveals, spring physics, dynamic blurs)
- **Icons**: Lucide React

## ⚡ Custom Implementations 
Instead of dropping in template plugins, this codebase maintains lean logic custom-built for specific aesthetic behavior:
- **`Typewriter.tsx`**: A zero-dependency typing text effect built exclusively with React Hooks.
- **`SectionWrapper.tsx`**: A global abstraction component passing strict view-port observer triggers down to nested stagger animations.
- **`Navbar.tsx`**: A responsive, state-driven navigation component reacting smoothly to client window scroll listeners.
- **`utils.ts`**: Safely merges deep utility styling classes without collision natively.

## 🛠️ Development Setup

To run the project locally on your machine:

1. **Install Node.js & Dependencies**
   Run the following inside the root directory:
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   This will start Vite's local development environment (usually accessible via `http://localhost:5173`).

3. **Production Build**
   ```bash
   npm run build
   ```
   This compiles and optimizes all React and CSS code perfectly for native deployment on platforms like Vercel, Netlify, or standard NGINX servers.
