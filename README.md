# 📸 Photography Portfolio Clone

A modern, responsive photography portfolio website inspired by fabianfallend.com, built with React, TypeScript, and Tailwind CSS.

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

1. Clone the repository:
```bash
git clone https://github.com/yourusername/photography-portfolio.git
cd photography-portfolio
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Start the development server:
```bash
bun run dev
# or
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
# Development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Lint code
bun run lint

# Type check
bun run type-check
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
2. Set build command: `bun run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `bun add -D gh-pages`
2. Add deploy script to package.json
3. Run `bun run deploy`

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
