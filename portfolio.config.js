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
    email: 'rdzc.mariano@gmail.com',
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
      'Senior Front-End Developer with 10+ years in software development, specializing in React, TypeScript and Svelte, with full-stack experience in Node.js. Proven track record building healthcare and e-commerce products at scale — from migrating legacy frontends to achieving 100% test coverage in production apps. Strong frontend focus backed by a QA background that translates into high-quality, well-tested code',

    // Resume/CV
    // Place your PDF in /public folder and update the filename here
    resumeFileName: 'Mariano Rodriguez - Resume.pdf',
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
        'Built and maintained React/Svelte healthcare web apps with 100% test coverage using Jest/Vitest, eliminating entire categories of production bugs',
        'Developed a Next.js application acting as a data integration layer between external financial market data services (stocks, real-time pricing) and internal systems, improving reliability and reducing service failures',
        'Acted as Technical Leader, owning architectural decisions and coordinating frontend development across the team',
        'Led a full refactor of a patient/practitioner scheduling system using React, Redux, Tailwind and GraphQL, improving maintainability and performance',
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
      title: 'Productivity Engineer',
      period: 'Aug 2017 - Feb 2020',
      description: [
        "Kicked off the migration of Fury — MercadoLibre's largest internal frontend — from Angular 1 to React (16.8/17), adopting the then-new hooks API and modern function components",
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
        "Was the first engineer assigned to Intelligize — which grew into intive's largest project — running automated feature testing and manual regression testing for production releases",
      ],
    },
    {
      id: 6,
      slug: 'accenture',
      company: 'ACCENTURE',
      title: 'Backend Developer',
      period: 'Sep 2014 - Mar 2016',
      description: [
        'Developed an internal C# application to help managers track expenses and cash flow',
        "Led a proof of concept to migrate the team's UI automation from CodedUI to Selenium, improving maintainability",
      ],
    },
  ],

  // ============================================================================
  // EDUCATION
  // ============================================================================
  education: [
    {
      id: 1,
      degree: 'Technical Degree in Programming',
      institution: 'Universidad Tecnológica Nacional',
      location: 'Avellaneda, Buenos Aires',
      period: '2009 - 2011',
    },
  ],

  // ============================================================================
  // CERTIFICATIONS
  // ============================================================================
  certifications: ['Currently pursuing AWS Certified Developer – Associate (DVA-C02)'],

  // ============================================================================
  // TECHNICAL SKILLS
  // ============================================================================
  // Organize skills by category. You can add/remove categories as needed.
  skills: {
    Frontend: ['JavaScript', 'React', 'TypeScript', 'Svelte', 'Redux', 'Tailwind', 'React Native', 'GraphQL'],
    Backend: ['Node.js', 'Next.js', 'Express', 'REST'],
    Databases: ['MongoDB', 'PostgreSQL'],
    Testing: ['Jest', 'Vitest', 'E2E'],
    'Dev Tools': ['Git', 'Docker', 'CI/CD', 'Agile/Scrum'],
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
