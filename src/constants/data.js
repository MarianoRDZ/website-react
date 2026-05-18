import { portfolioConfig } from '../../portfolio.config';

export const personalInfo = portfolioConfig.personalInfo;
export const experience = portfolioConfig.experience.map((exp) => ({
  ...exp,
  responsibilities: exp.description, // description → responsibilities para los componentes viejos
}));
export const education = portfolioConfig.education;
export const certifications = portfolioConfig.certifications;
export const skills = portfolioConfig.skills;
export const languages = portfolioConfig.languages;
export const techStack = portfolioConfig.techStack;

export const siteConfig = portfolioConfig.siteConfig;
