# 📝 Portfolio Customization Guide

This guide walks you through customizing this portfolio template for your own use.

## 🎯 Overview

**Good news!** You only need to edit **ONE main file** to personalize the entire portfolio:

- `portfolio.config.js` - Contains all your personal data

Optional files to customize:

- `.env` - For EmailJS contact form
- `public/Your-CV.pdf` - Your resume
- `src/i18n/locales/` - Translations (if using multiple languages)

---

## Step 1: Clone and Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-template.git my-portfolio
cd my-portfolio

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev
```

---

## Step 2: Edit Main Configuration

Open `portfolio.config.js` and update each section:

### 📍 Site Configuration

```javascript
siteConfig: {
  // IMPORTANT: Must match your GitHub repository name or deployment path
  // GitHub Pages: '/repository-name'
  // Custom domain: '/'
  // Subdirectory: '/portfolio'
  basePath: '/my-portfolio',

  // Browser tab title
  title: 'Jane Doe | Software Engineer',

  // SEO description
  description: 'Full-stack developer portfolio...',
}
```

### 👤 Personal Information

```javascript
personalInfo: {
  name: 'Jane Doe',
  title: 'Software Engineer',

  // Contact
  email: 'jane@example.com',
  phone: '+1 234 567 8900',
  location: 'San Francisco, CA',

  // Social (full URLs)
  github: 'https://github.com/janedoe',
  linkedin: 'https://linkedin.com/in/janedoe',
  linkedinUsername: 'janedoe', // For display only

  // Portfolio repo
  repository: 'https://github.com/janedoe/portfolio',

  // About section
  description: 'Your short tagline...',
  summary: 'Your longer bio...',

  // PDF filename (must be in /public folder)
  resumeFileName: 'Jane-Doe-Resume.pdf',
}
```

### 💼 Work Experience

```javascript
experience: [
  {
    id: 1,
    slug: 'company-slug', // Used for translations (optional)
    company: 'COMPANY NAME',
    title: 'Your Position',
    period: 'Jan 2020 - Present',
    description: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      'Achievement or responsibility 3',
    ],
  },
  // Add more experiences...
];
```

**Tips:**

- List most recent first
- Use action verbs (Led, Developed, Implemented)
- Include metrics when possible (increased by 50%, reduced by 30%)
- Each description item appears as a bullet point with a chevron icon

### 🎓 Education

```javascript
education: [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    location: 'City, State',
    period: '2015 - 2019',
  },
];
```

### 🏆 Certifications

```javascript
certifications: [
  'AWS Certified Solutions Architect',
  'Google Cloud Professional',
  // Add more...
];
```

### 🛠️ Technical Skills

Organize by category (you can add/remove categories):

```javascript
skills: {
  'Frontend': ['React', 'Vue', 'TypeScript'],
  'Backend': ['Node.js', 'Python', 'Java'],
  'Databases': ['PostgreSQL', 'MongoDB'],
  'DevOps': ['Docker', 'Kubernetes', 'AWS'],
  'Tools': ['Git', 'Jest', 'Webpack'],
}
```

### 🌍 Languages

```javascript
languages: [
  { name: 'English', level: 'Native' },
  { name: 'Spanish', level: 'Professional' },
];
```

### ⭐ Tech Stack (Homepage)

These appear prominently on the homepage:

```javascript
techStack: [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'AWS',
  // Add 5-10 of your core technologies
];
```

---

## Step 3: Set Up Contact Form

### Option A: Use EmailJS (Free)

1. **Create Account**: Visit [emailjs.com](https://www.emailjs.com/)

2. **Add Email Service**:
   - Dashboard → Email Services → Add New Service
   - Connect Gmail, Outlook, or other provider

3. **Create Template**:
   - Dashboard → Email Templates → Create New Template
   - Use these template variables:

     ```
     From: {{from_name}} <{{from_email}}>
     Subject: Portfolio Contact

     {{message}}
     ```

4. **Get Credentials**:
   - Copy Service ID, Template ID, and Public Key

5. **Update .env**:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Option B: Skip Contact Form

Remove or hide the contact page:

1. Comment out route in `src/App.jsx`
2. Remove link from `src/components/common/Navbar.jsx`

---

## Step 4: Add Your Resume/CV

1. **Export** your resume as PDF

2. **Rename** (optional but recommended):
   - Good: `Jane-Doe-Resume.pdf`
   - Bad: `resume-final-v3.pdf`

3. **Copy** to `public/` folder

4. **Update config**:
   ```javascript
   personalInfo: {
     resumeFileName: 'Jane-Doe-Resume.pdf',
   }
   ```

---

## Step 5: Customize Translations (Optional)

If you want to modify text that appears on the site:

### English: `src/i18n/locales/en.json`

### Spanish: `src/i18n/locales/es.json`

```json
{
  "nav": {
    "home": "Home",
    "cv": "Resume",
    "contact": "Contact"
  },
  "hero": {
    "greeting": "Hi, I'm",
    "subtitle": "Your custom subtitle"
  }
  // ... more translations
}
```

**Adding a new language:**

1. Copy `en.json` to `[language-code].json`
2. Translate all values
3. Import in `src/i18n/index.js`:

   ```javascript
   import de from './locales/de.json'; // German

   resources: {
     en: { translation: en },
     es: { translation: es },
     de: { translation: de }, // Add here
   }
   ```

4. Update `LanguageSelector.jsx` to include new option

---

## Step 6: Customize Styling (Optional)

### Colors

Edit `src/styles/tokens/colors.js`:

```javascript
export const colors = {
  background: {
    main: '#yourColor',
    surface: '#yourColor',
  },
  text: {
    primary: '#yourColor',
  },
  accent: '#yourColor',
};
```

### Typography

Edit `src/styles/tokens/typography.js`:

```javascript
export const typography = {
  fontFamily: {
    sans: ['Your Font', 'sans-serif'],
  },
};
```

### Spacing & Shadows

- `src/styles/tokens/spacing.js`
- `src/styles/tokens/shadows.js`

**Tip:** All tokens are automatically available in Tailwind classes

---

## Step 7: Test Locally

```bash
# Development server
npm run dev

# Check tests
npm run test

# Check formatting
npm run lint
```

**Visit:** `http://localhost:5173`

**Test checklist:**

- [ ] All personal information displays correctly
- [ ] Navigation works
- [ ] Contact form sends emails (if enabled)
- [ ] CV downloads with correct filename
- [ ] Mobile responsive
- [ ] All links work

---

## Step 8: Deploy

### GitHub Pages

1. **Update config**:

   ```javascript
   siteConfig: {
     basePath: '/your-repo-name', // Must match!
   }
   ```

2. **Add secrets** (if using contact form):
   - Repo → Settings → Secrets → Actions
   - Add: `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`

3. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Customize portfolio"
   git push origin main
   ```

4. **Enable Pages**:
   - Settings → Pages
   - Source: gh-pages branch
   - Save

5. **Visit**: `https://yourusername.github.io/your-repo-name`

### Vercel/Netlify

1. **Update config**:

   ```javascript
   siteConfig: {
     basePath: '/', // Root path for custom domain
   }
   ```

2. **Connect** repo via dashboard

3. **Add environment variables** in project settings

4. **Deploy** automatically on push

---

## 🎨 Advanced Customization

### Add New Page

1. Create component in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
   ```javascript
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add nav link in `src/components/common/Navbar.jsx`
4. Add translations in `src/i18n/locales/`

### Modify Components

- **Layout**: `src/components/common/Layout.jsx`
- **Navbar**: `src/components/common/Navbar.jsx`
- **Footer**: `src/components/common/Footer.jsx`
- **Home sections**: `src/components/sections/`
- **CV components**: `src/components/cv/`

### Add Social Links

In `src/components/common/SocialLinks.jsx`, add your social media:

```javascript
// Add icon import
import { TwitterIcon } from './icons';

// Add link
<a href="https://twitter.com/yourhandle">
  <TwitterIcon />
</a>;
```

---

## 🐛 Common Issues

### "Module not found" errors

- Run `npm install` again
- Delete `node_modules/` and reinstall

### Contact form not working

- Check `.env` file exists
- Verify EmailJS credentials
- Check browser console for errors

### Broken paths after deployment

- Ensure `basePath` matches deployment path exactly
- GitHub Pages: must match repo name
- Custom domain: use `'/'`

### Styles not applying

- Check Tailwind class names
- Run `npm run dev` to rebuild
- Clear browser cache

---

## 📞 Need Help?

- Check [GitHub Issues](https://github.com/yourusername/repo/issues)
- Read the main [README.md](./README.md)
- Review [GitHub Discussions](https://github.com/yourusername/repo/discussions)

---

**Happy customizing! 🚀**
