/**
 * Portfolio Configuration
 *
 * This is the ONLY file you need to modify to personalize this portfolio.
 * All content, links, and personal information are centralized here.
 *
 * Instructions:
 * 1. Replace all values with your own information
 * 2. For experience/education, you can add or remove items as needed
 * 3. Skills can be customized by category
 * 4. Update the siteConfig section with your deployment details
 */

export const portfolioConfig = {
  // ============================================================================
  // SITE CONFIGURATION
  // ============================================================================
  siteConfig: {
    // Used for router basename and deployment paths
    // If deploying to username.github.io/repo-name, set this to '/repo-name'
    // If deploying to custom domain or username.github.io, set to '/'
    basePath: '/',

    // Your site title (appears in browser tab)
    title: 'Mariano Rodriguez | Senior Front-End Developer | marianordz.com.ar',

    // Site description for SEO
    description:
      'Senior Front-End Developer portfolio - marianordz.com.ar. Specializing in React, TypeScript and Svelte with 10+ years in software development.',

    // Google Analytics 4 Measurement ID
    // Get your ID from: https://analytics.google.com/
    // Format: G-XXXXXXXXXX
    // Leave empty or undefined to disable analytics
    googleAnalyticsId: 'G-Q5B90Z4FRW',
  },

  // ============================================================================
  // PERSONAL INFORMATION
  // ============================================================================
  personalInfo: {
    // Basic Info
    name: 'Mariano Rodriguez',
    title: 'Senior Front-End Developer',

    // Contact Details
    email: 'rdzc.mariano@proton.me',
    phone: '+54 9 11 5131 3502',
    location: 'Buenos Aires, Argentina',

    // Social Links
    github: 'https://github.com/MarianoRDZ',
    linkedin: 'https://linkedin.com/in/marianordz',
    linkedinUsername: 'marianordz', // Used for display

    // Repository (link to this portfolio's source code)
    repository: 'https://github.com/MarianoRDZ/website-react',

    // About Me
    description:
      'Specializing in building performant, scalable, and beautifully intuitive web experiences with a focus on modern React architecture.',
    summary:
      'Frontend Developer with 10+ years in software development, specializing in React and TypeScript, with full-stack experience in Svelte and Node.js — shipped products in healthcare and e-commerce at scale, from migrating legacy frontends to achieving 100% test coverage in production apps. Frontend-focused engineer with a QA background, producing well-tested, production-ready code across React, TypeScript, and Svelte.',

    // Resume/CV
    // Place your PDF in /public folder and update the filename here
    resumeFileName: 'MarianoRodriguez_Resume.pdf',
  },

  // ============================================================================
  // PROFESSIONAL EXPERIENCE
  // ============================================================================
  // Metadata only (company, period, slug). Titles and responsibilities live in
  // src/i18n/locales/{en,es}.json under cv.jobs.<slug> — that's the source of truth.
  experience: [
    { id: 1, slug: 'kopius',      company: 'KOPIUS',       period: 'Dec 2022 - Present'    },
    { id: 2, slug: 'solvd',       company: 'SOLVD',        period: 'Oct 2021 - Dec 2022'   },
    { id: 3, slug: 'endava',      company: 'ENDAVA',       period: 'Feb 2020 - Oct 2021'   },
    { id: 4, slug: 'mercadolibre',company: 'MERCADOLIBRE', period: 'Aug 2017 - Feb 2020'   },
    { id: 5, slug: 'intive',      company: 'INTIVE',       period: 'Mar 2016 - Aug 2017'   },
    { id: 6, slug: 'accenture',   company: 'ACCENTURE',    period: 'Sep 2014 - Mar 2016'   },
  ],

  // ============================================================================
  // EDUCATION
  // ============================================================================
  education: [
    {
      id: 1,
      degree: 'Technical Degree in Programming (Incomplete)',
      institution: 'Universidad Tecnológica Nacional',
      location: 'Avellaneda, Buenos Aires',
      period: '2009 - 2011',
    },
  ],

  // ============================================================================
  // CERTIFICATIONS
  // ============================================================================
  certifications: [],

  // ============================================================================
  // TECHNICAL SKILLS
  // ============================================================================
  // Organize skills by category. You can add/remove categories as needed.
  skills: {
    Frontend: ['JavaScript', 'HTML5', 'CSS3', 'React', 'TypeScript', 'Next.js', 'Svelte', 'Redux Toolkit', 'Tailwind', 'React Native', 'GraphQL', 'Apollo Client'],
    Backend: ['Node.js', 'Express', 'REST'],
    Databases: ['MongoDB', 'PostgreSQL'],
    Testing: ['Jest', 'Vitest', 'WebDriverIO', 'Selenium', 'Nightwatch'],
    'Dev Tools': ['Git', 'Docker', 'Jenkins'],
  },

  // ============================================================================
  // LANGUAGES
  // ============================================================================
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Professional working proficiency' },
  ],

  // ============================================================================
  // TECH STACK (Displayed on Home Page)
  // ============================================================================
  // These are your core/featured technologies
  techStack: [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind',
    'JavaScript',
    'Redux',
    'HTML',
    'CSS',
    'Node.js',
  ],
};

export default portfolioConfig;
