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
  // Each experience should have: company, title, period, description (array)
  // The system will automatically handle translations if provided in i18n files
  experience: [
    {
      id: 1,
      slug: 'kopius', // Used for translation keys (optional)
      company: 'KOPIUS',
      title: 'Frontend Developer',
      period: 'Dec 2022 - Present',
      description: [
        'Built and maintained React/Svelte healthtech web apps with 100% test coverage using Jest/Vitest, eliminating entire categories of production bugs',
        'Migrated 2 React apps from CRA to Next.js, enabling SSR (server-side rendering)',
        'Refactored the patient/practitioner scheduling system (React, Redux, GraphQL, Tailwind), extracting a shared component library that reduced duplication',
      ],
    },
    {
      id: 2,
      slug: 'solvd',
      company: 'SOLVD',
      title: 'Frontend Developer',
      period: 'Oct 2021 - Dec 2022',
      description: [
        'Redesigned and simplified a multi-step user onboarding flow using React, Redux and Tailwind for a B2C SaaS product, directly increasing registration conversion rate by 13%',
        'Integrated GraphQL APIs on the frontend using Apollo Client to handle efficient data fetching and avoid over-fetching',
      ],
    },
    {
      id: 3,
      slug: 'endava',
      company: 'ENDAVA',
      title: 'Full-Stack Developer',
      period: 'Feb 2020 - Oct 2021',
      description: [
        'Built a full-stack internal HR application end to end, developing the React/Redux frontend and a Node.js/Express backend with MongoDB and PostgreSQL',
        'Developed and maintained a client-facing React Native app, ensuring full compliance with WCAG 2.0 accessibility standards',
      ],
    },
    {
      id: 4,
      slug: 'mercadolibre',
      company: 'MERCADOLIBRE',
      title: 'Frontend / DevEx Engineer (Productivity Engineer)',
      period: 'Aug 2017 - Feb 2020',
      description: [
        'Deployed and maintained frontend tooling on AWS (S3, EC2, Route 53, ELB) to support build pipelines and application infrastructure',
        "Kicked off the migration of Fury — MercadoLibre's largest internal frontend, a micro-frontend architecture where independently-deployed apps coexisted — from Angular 1 to React (16.8/17), adopting the then-new hooks API and modern function components",
        'Built internal DevEx tooling to speed up frontend teams: NPM boilerplate packages and a CLI to scaffold WebDriverIO setups in a single command',
        'Developed a dashboard that surfaced per-PR test coverage, reading CI-generated reports by commit hash and displaying an expandable per-file breakdown',
        'Introduced and evangelized end-to-end testing across frontend teams (Nightwatch, later WebDriverIO), delivering hands-on talks at multiple MercadoLibre offices',
        'Operated and maintained CI/CD pipelines in Jenkins — debugging build failures via log analysis, enforcing a 90% coverage threshold on GitHub checks, and running a rotating on-call to keep teams unblocked',
      ],
    },
    {
      id: 5,
      slug: 'intive',
      company: 'INTIVE',
      title: 'QA Automation Engineer',
      period: 'Mar 2016 - Aug 2017',
      description: [
        "Built intive's test automation solution from the ground up as the company's first automation engineer, using C#, Selenium and the Page Object Model",
        "Served as the founding engineer on a project (intive's largest account), owning automated feature testing and manual regression testing across production releases",
      ],
    },
    {
      id: 6,
      slug: 'accenture',
      company: 'ACCENTURE',
      title: 'Backend Developer',
      period: 'Sep 2014 - Mar 2016',
      description: [
        'Developed an internal C# and SQL application to help managers track expenses and cash flow',
        "Led a proof of concept to migrate the team's UI automation from CodedUI to Selenium",
      ],
    },
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
