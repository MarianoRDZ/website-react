# Personal Portfolio Template

A personal portfolio website built with React, Vite, and Tailwind CSS. Edit one configuration file and you're done.

## Features

- Responsive design (mobile to desktop)
- Dark theme
- Contact form via EmailJS
- i18n (English/Spanish)
- Test coverage on core components
- GitHub Pages deployment with GitHub Actions

## Quick Start

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

## Deployment

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

## Architecture

### Single configuration file

All personal data, site settings, and content live in `portfolio.config.js`. The idea is that forking this repo requires editing exactly one file — not hunting through components to change a name or update an email. Everything else (pages, components, i18n) reads from that config.

### Design tokens + Tailwind

Colors, spacing, typography, and shadows are defined in `src/styles/tokens/` and fed into `tailwind.config.js`. The entire palette lives in one place — changing the accent color or the spacing scale doesn't require touching individual components. The component variants (`src/components/common/variants.js`) follow the same idea: instead of conditional class strings scattered across Button, Input, and Tag, all the variant logic is centralized.

### Contact form without a backend

EmailJS handles email delivery client-side. No server, no API to maintain — reasonable for a portfolio that isn't going to handle sensitive data or high volume. The contact form includes a honeypot field to catch basic bots without adding a CAPTCHA.

### SPA routing on GitHub Pages

GitHub Pages doesn't support SPA routing natively — any direct URL beyond the root returns a 404. The fix is a `404.html` that redirects to the root with the path encoded as a query param, and `main.jsx` decodes and restores the real URL before React Router takes over.

### Analytics

Google Analytics 4 is only initialized if a `googleAnalyticsId` is set in `portfolio.config.js`. No ID configured means no tracking code runs at all. Keeps the template clean for people who don't want analytics.

### Lazy loading

Pages are lazy-loaded via `React.lazy()` in `src/routes/index.jsx`. The CV page has enough content that splitting it out of the main bundle makes a visible difference on first load.

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
<button className="bg-accent hover:bg-accent-hover text-text-primary px-lg py-sm rounded-md shadow-button">
  Click me
</button>

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
git clone <your-repo-url>
npm install
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

- Auto-format on save
- Tailwind class sorting
- React hooks rules

## Customization

1. Update your personal information in `src/constants/data.js`
2. Modify design tokens in `src/styles/tokens/`
3. Customize components in `src/components/`
4. Add your content to pages in `src/pages/`

## Contributing

Feel free to fork and adapt it for your own portfolio.

## License

MIT
