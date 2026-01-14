# Personal Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Built with Vite for lightning-fast development
- React 19 with React Router for navigation
- Tailwind CSS with custom design system
- Dark theme optimized
- Fully responsive (mobile to 1080p)
- Clean architecture with design tokens
- ESLint + Prettier configured

## Project Structure

```
src/
├── components/
│   ├── common/         # Reusable components (Layout, Navbar, Button)
│   └── sections/       # Page-specific sections
├── pages/              # Main pages (Home, CV, Contact)
├── styles/
│   └── tokens/         # Design tokens (colors, typography, spacing)
├── constants/          # App constants and data
├── hooks/              # Custom React hooks
└── utils/              # Helper functions
```

## Design System

The project uses a centralized design token system located in `src/styles/tokens/`:

### Colors

- **Background**: `#121212` (main), `#1E1E1E` (surface), `#2A2A2A` (tertiary)
- **Text**: `#FFFFFF` (primary), `#B3B3B3` (secondary)
- **Accent**: `#60D9FD` (cyan blue)

### Typography

- **Font Family**: Space Grotesk (main), Fira Code (mono)
- **Sizes**: `h1` (32px), `h2` (22px), `body` (14px)

### Spacing

- `xs` (4px), `sm` (8px), `md` (16px), `lg` (24px), `xl` (32px), `2xl` (48px)

### Shadows

- `shadow-card`: Elevated card shadow
- `shadow-button`: Button with glow effect
- `shadow-subtle`: Subtle elevation

### Usage Example

```jsx
// Button with design tokens
<button className="bg-accent hover:bg-accent-hover text-text-primary px-lg py-sm rounded-md shadow-button">
  Click me
</button>

// Card component
<div className="bg-background-surface p-lg rounded-lg shadow-card">
  <h2 className="text-h2 text-text-primary mb-sm">Title</h2>
  <p className="text-body text-text-secondary">Description</p>
</div>
```

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with PostCSS
- **Routing**: React Router
- **Linting**: ESLint + Prettier
- **Fonts**: Space Grotesk, Fira Code

## Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## Pages

- **Home** (`/`) - Hero section with introduction and skills showcase
- **CV** (`/cv`) - Experience, education, and technical skills
- **Contact** (`/contact`) - Contact form and social links

## Configuration

### Tailwind Config

All design tokens are imported from `src/styles/tokens/` into `tailwind.config.js`, making it easy to maintain a consistent design system.

### ESLint & Prettier

Pre-configured with sensible defaults:

- Auto-format on save
- Tailwind class sorting
- React hooks rules
- Consistent code style

## Customization

1. Update your personal information in `src/constants/data.js`
2. Modify design tokens in `src/styles/tokens/`
3. Customize components in `src/components/`
4. Add your content to pages in `src/pages/`

## Contributing

This is a personal portfolio project, but feel free to use it as a template for your own portfolio!

## License

MIT
