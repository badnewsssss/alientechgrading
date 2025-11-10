# Alien Tech Grading

AI-Powered Trading Card Grading Platform

## Project Overview

Alien Tech Grading is a revolutionary trading card grading platform that leverages advanced AI and computer vision technology to provide accurate, consistent, and lightning-fast card grading services.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alientechgrading
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
/Users/josh/Developer/alientechgrading/
├── public/                  # Static assets
│   └── images/             # Image assets
│       ├── hero/
│       ├── cards/
│       ├── logos/
│       └── trust-badges/
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   ├── globals.css     # Global styles
│   │   ├── how-it-works/   # How it works page
│   │   ├── pricing/        # Pricing page
│   │   └── api/            # API routes
│   │       └── waitlist/
│   ├── components/         # React components
│   │   ├── landing/        # Landing page components
│   │   ├── ui/             # Reusable UI components
│   │   └── layout/         # Layout components
│   ├── lib/                # Utility functions
│   │   ├── utils.ts        # Common utilities
│   │   └── constants.ts    # App constants
│   └── styles/             # Additional styles
│       └── animations.css
├── docs/                   # Documentation
├── .env.example            # Environment variables template
├── .env.local              # Local environment variables
├── .gitignore              # Git ignore rules
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Design System

### Colors

- **Primary:** Gradient from #6366f1 to #8b5cf6 (Indigo to Purple)
- **Secondary:** #10b981 (Emerald Green)
- **Accent:** #f59e0b (Amber)

### Custom CSS Classes

- `.btn-primary`, `.btn-secondary`, `.btn-outline` - Button variants
- `.card`, `.card-hover` - Card components
- `.gradient-text` - Gradient text effect
- `.animate-fade-in`, `.animate-scale-in` - Custom animations

## Features

- Fully responsive design
- Dark mode support
- Custom animation system
- Type-safe with TypeScript
- Optimized for performance
- SEO-friendly metadata
- Accessible UI components

## Configuration

### TypeScript

Strict mode enabled with comprehensive type checking. Path aliases configured for cleaner imports:

- `@/*` - src directory
- `@/components/*` - components directory
- `@/lib/*` - lib directory
- `@/styles/*` - styles directory

### Tailwind CSS

Custom design tokens and utility classes. Extended color palette with primary, secondary, and accent colors. Custom animations and keyframes.

## Next Steps

1. Build landing page components
2. Implement waitlist functionality
3. Create "How It Works" page
4. Design pricing page
5. Set up authentication
6. Integrate AI grading service

## License

All rights reserved - Alien Tech Grading

## Support

For support, email support@alientechgrading.com
