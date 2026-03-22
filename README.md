# SoulCenter Therapy & Wellness

A professional, minimalist therapy and spiritual website with a calm, soul-centered aesthetic. Built with React, Tailwind CSS, and Framer Motion.

![SoulCenter Preview](https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000)

## ✨ Features

- **Soul-Centered Aesthetic:** Calming palette of Sage Green and Warm Stone.
- **Elegant Typography:** Refined serif headings (Cormorant Garamond) and clean sans-serif body text (Inter).
- **Responsive Design:** Mobile-first approach with a smooth, glass-morphism navbar.
- **Interactive UI:** Subtle entrance animations and hover effects powered by Framer Motion.
- **Comprehensive Sections:**
  - Home, About, Services, Resources (Blog), and Contact.
  - Appointment booking call-to-actions.
  - Newsletter signup.
  - Fully functional contact form (UI).

## 🚀 Tech Stack

- **Framework:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/soulcenter-wellness.git
   cd soulcenter-wellness
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🌐 Deployment to GitHub Pages

To host this on GitHub Pages, you can use the `gh-pages` package:

1. Install the package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Update `vite.config.ts` to include your repository name as the base path:
   ```typescript
   export default defineConfig({
     base: '/soulcenter-wellness/', // Replace with your repo name
     // ... other config
   })
   ```

4. Run the deploy command:
   ```bash
   npm run deploy
   ```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
