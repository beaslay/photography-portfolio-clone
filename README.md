# 🖤 Julien – Escort Masculin

Site vitrine sobre et moderne présentant les services d'accompagnement de Julien. Construit avec React, TypeScript et Tailwind CSS.

## ✨ Features

- **Responsive Design**: Fully responsive across all devices
- **Video Background**: Hero section with autoplay video background
- **Portfolio Grid**: Interactive portfolio gallery with hover effects
- **Smooth Scrolling**: Seamless navigation between sections
- **Modern Tech Stack**: Built with React, TypeScript, Vite, and Tailwind CSS
- **Optimized Performance**: Lazy loading images and optimized assets
- **Clean Architecture**: Component-based structure with reusable components

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Linting**: Biome
- **Package Manager**: Bun

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone le dépôt:
```bash
git clone <repo-url>
cd photography-portfolio-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Video hero section
│   ├── PortfolioGrid.tsx # Portfolio gallery
│   ├── AboutSection.tsx # About section
│   └── Footer.tsx      # Site footer
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.ts
├── lib/                # Utility functions
│   └── utils.ts
├── App.tsx             # Main app component
├── index.css           # Global styles
└── main.tsx            # App entry point
```

## 🎨 Design Features

### Color Palette
- **Primary**: `#2d241d` (Dark Brown)
- **Accent**: `#dd1e17` (Red)
- **Background**: `#fbfafa` (Off White)
- **Secondary**: `#b78b63`, `#d1a788`, `#9e978f`

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Strong contrast between bold headings and light body text
- **Tracking**: Wide letter spacing for uppercase headings

### Animations
- Smooth scroll navigation
- Image hover scale effects
- Video background autoplay
- Fade in/out transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🧩 Components Overview

### Header
- Fixed navigation with backdrop blur
- Smooth scroll to sections
- Responsive mobile menu

### Hero Section
- Full-screen video background
- Text overlay with call-to-action
- Scroll indicator animation

### Portfolio Grid
- Responsive 3-column grid (1 on mobile)
- Hover effects with image scaling
- Project metadata overlay

### About Section
- Split layout with portrait and bio
- Contact information
- Decorative border element

### Footer
- Contact details and social links
- Legal links and credits
- Satirical cookie notice

## 🔧 Development

### Available Scripts

```bash
# Démarrage du serveur de développement
npm run dev

# Build pour la production
npm run build

# Aperçu de la build
npm run preview

# Lint du code
npm run lint

# Vérification TypeScript
npm run type-check
```

### Adding New Components

1. Create component in `src/components/`
2. Export from component file
3. Import and use in `App.tsx` or other components

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow existing color palette from design system
- Maintain responsive design patterns
- Use semantic HTML elements

## 🌐 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm add -D gh-pages`
2. Add deploy script to package.json
3. Run `npm run deploy`

## 📄 License

This project is for educational purposes. Original design inspiration from fabianfallend.com.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Contact

- Email: hello@photographer.com
- Instagram: @photographer
- Based in: Berlin & Vienna

---

**Note**: This is a clone/inspiration project for learning purposes. All placeholder content is used for demonstration only.
