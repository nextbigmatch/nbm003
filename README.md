# NBM™ - Next Big Match

> Premium 3D Conversion & Immersive Content Production Studio

## About

NBM (Next Big Match) is a premium 3D conversion and immersive content production studio specializing in:

- 3D Movie Conversion (Feature-length films)
- 3D Short Films & Vertical Content (Reels, Stories)
- Immersive Advertising
- Depth Compositing & Cleanup
- VR / Apple Vision Pro Optimization

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v4 + Custom NBM Brand System
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React + Custom NBM Icons
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/nextbigmatch/nbm003.git
cd nbm003

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
nbm003/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/           # Shadcn UI components
│   │   ├── icons/        # Custom NBM icons
│   │   ├── figma/        # Figma-imported components
│   │   └── ...           # Brand & utility components
│   ├── pages/           # Page components (20 pages)
│   ├── imports/         # SVG path imports
│   ├── styles/          # Global styles & CSS
│   ├── App.tsx          # Main app with routing
│   └── main.tsx         # React entry point
├── public/              # Static assets
├── index.html           # HTML entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Features

- ✨ **Apple Vision Pro Inspired Design** - Glassmorphism UI with depth layers
- 🎨 **NBM Brand System** - Custom color palette (NBM Blue #1172BA)
- 🚀 **Interactive Depth Reveal** - Mouse-driven RGB/Depth map interactions
- 🎬 **21 Pages** - Complete multi-page website structure
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Optimized Performance** - Vite + React best practices
- 🎥 **Smooth Animations** - Motion-powered micro-interactions

## Brand Colors

- **NBM Blue**: `#1172BA`
- **NBM Blue Light**: `#1E88E5`
- **NBM Blue Dark**: `#0D5A94`

## Typography

- **Headings**: Afacad Flux (Bold, Uppercase)
- **Body**: Inter (Regular/Medium)

## License

© 2025 NBM™ (Next Big Match). All rights reserved.
