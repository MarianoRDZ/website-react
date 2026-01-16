# Personal Portfolio Template

A modern, fully customizable personal portfolio website built with React, Vite, and Tailwind CSS. **Designed to be easily customizable** - just edit one configuration file and you're ready to go!

## ✨ Features

- 🎨 Modern, responsive design (mobile to desktop)
- 🌙 Dark theme optimized
- ⚡ Built with Vite for lightning-fast development
- 🧩 Component-based architecture
- 📧 Working contact form (EmailJS)
- 🎯 100% test coverage on core components
- 🌍 i18n ready (English/Spanish)
- 📱 Fully responsive
- ♿ Accessibility focused
- 🚀 Easy deployment to GitHub Pages

## 🚀 Quick Start (For Your Own Portfolio)

### 1. Fork/Clone This Repository

```bash
git clone https://github.com/yourusername/portfolio-template.git my-portfolio
cd my-portfolio
npm install
```

### 2. Personalize Your Portfolio

**This is the ONLY file you need to edit:**

Open `portfolio.config.js` and update all sections with your information:

```javascript
export const portfolioConfig = {
  siteConfig: {
    basePath: '/my-portfolio', // Your repo name or '/' for custom domain
    title: 'Your Name | Your Title',
  },

  personalInfo: {
    name: 'Your Name',
    title: 'Your Professional Title',
    email: 'your.email@example.com',
    // ... update all fields
  },

  experience: [
    // Add your work experience
  ],

  skills: {
    // Add your skills by category
  },
  // ... and more
};
```

### 3. Set Up Contact Form (Optional)

If you want the contact form to work:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service and template
3. Copy `.env.example` to `.env`
4. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Add Your Resume/CV PDF

Place your PDF file in the `public/` folder and update the filename in `portfolio.config.js`:

```javascript
personalInfo: {
  resumeFileName: 'Your-Resume.pdf',
}
```

### 5. Update Translations (Optional)

If you want to customize text in multiple languages:

- Edit `src/i18n/locales/en.json` for English
- Edit `src/i18n/locales/es.json` for Spanish

### 6. Run Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## 📦 Deployment

### GitHub Pages

1. Update `portfolio.config.js`:

```javascript
siteConfig: {
  basePath: '/your-repo-name',  // Must match your repository name
}
```

2. Add EmailJS secrets to repository:
   - Go to Settings → Secrets → Actions
   - Add: `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`

3. Push to main branch - GitHub Actions will automatically deploy

4. Enable GitHub Pages:
   - Settings → Pages → Source: gh-pages branch

### Custom Domain (Vercel/Netlify)

1. Update `portfolio.config.js`:

```javascript
siteConfig: {
  basePath: '/',  // Root path for custom domain
}
```

2. Add environment variables in your hosting platform dashboard

3. Deploy via Git integration

## 📁 Project Structure

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
