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
    basePath: '/website-react',

    // Your site title (appears in browser tab)
    title: 'Mariano Rodriguez | Full-stack Developer',

    // Site description for SEO
    description:
      'Full-Stack Developer portfolio showcasing projects and experience in React, Node.js, and modern web technologies.',
  },

  // ============================================================================
  // PERSONAL INFORMATION
  // ============================================================================
  personalInfo: {
    // Basic Info
    name: 'Mariano Rodriguez',
    title: 'Full-Stack Developer',

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
      'Full-Stack Developer with 4+ years of experience in technologies such as React & Svelte and experience in Node.js, MongoDB and C#',

    // Resume/CV
    // Place your PDF in /public folder and update the filename here
    resumeFileName: 'CV-Mariano-Rodriguez.pdf',
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
        'Development of various web apps in React, Svelte, Redux, TypeScript and Tailwind related to healthcare, reaching 100% test coverage using Jest/Vitest, reducing production bugs',
        'Developed a NodeJS app to connect an external API and our internal services, improving reliability and reducing failures',
        "Led the complete refactor of a 'patient/practitioner' calendar using React, Redux, Tailwind and GraphQL, improving its structure and efficiency",
      ],
    },
    {
      id: 2,
      slug: 'solvd',
      company: 'SOLVD',
      title: 'Frontend Developer',
      period: 'Oct 2021 - Dec 2022',
      description: [
        'Increased the registration rate by simplifying the onboarding flow and redesigning the registration process using React, Redux, and Tailwind, improving the UX/UI',
      ],
    },
    {
      id: 3,
      slug: 'endava',
      company: 'ENDAVA',
      title: 'Full-Stack Developer',
      period: 'Feb 2020 - Oct 2021',
      description: [
        'Development of an app using React, Redux, NodeJS, and MongoDB/PostgreSQL',
        'Built and maintained a React Native app with focus on compliance with WCAG 2.0 accessibility standards',
      ],
    },
    {
      id: 4,
      slug: 'mercadolibre',
      company: 'MERCADOLIBRE',
      title: 'Productivity Engineer',
      period: 'Aug 2017 - Feb 2020',
      description: [
        'Led the development of internal tools that enhanced the developer experience, including NPM packages, testing kits, and frontends/backends in React and Java',
        'Improved code quality across the company through workshops, talks, and support on automation and testing for various development teams',
      ],
    },
    {
      id: 5,
      slug: 'intive',
      company: 'INTIVE',
      title: 'QA Automation Engineer',
      period: 'Mar 2016 - Aug 2017',
      description: [
        'Designed the automation solution architecture using C#, Selenium WebDriver, and the Page Object design pattern',
        'Performed manual testing of features to ensure functionality and quality',
        'Created, maintained, and executed test cases for regression testing',
      ],
    },
    {
      id: 6,
      slug: 'accenture',
      company: 'ACCENTURE',
      title: 'Backend Developer',
      period: 'Sep 2014 - Mar 2016',
      description: [
        'Development of an internal app in C# to assist company managers in expense tracking and cash flows',
        'Automation of an internal tool using CodedUI',
        'Led a POC to swap from CodedUI to Selenium WebDriver',
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
  certifications: [
    'AWS Certified Developer - Associate (DVA-002)',
    'Meta Front-End Developer Certificate',
  ],

  // ============================================================================
  // TECHNICAL SKILLS
  // ============================================================================
  // Organize skills by category. You can add/remove categories as needed.
  skills: {
    Frontend: ['React', 'Svelte', 'Redux', 'Tailwind', 'TypeScript', 'React Native', 'GraphQL'],
    Backend: ['Node.js', 'C#', 'Express', 'REST', 'GraphQL'],
    Databases: ['MongoDB', 'PostgreSQL'],
    Testing: ['Jest', 'Vitest', 'Selenium WebDriver', 'Nightwatch', 'WebDriverIO'],
    'Dev Tools': ['Git', 'Docker', 'CI/CD', 'AWS', 'Agile/Scrum'],
  },

  // ============================================================================
  // LANGUAGES
  // ============================================================================
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'B2 (Upper Intermediate)' },
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
