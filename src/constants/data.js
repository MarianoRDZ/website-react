/**
 * Data Constants
 *
 * This file imports and re-exports data from the central portfolio.config.js
 * This maintains backwards compatibility while centralizing configuration.
 */

import { portfolioConfig } from '../../portfolio.config';

// Re-export all data from central config
export const personalInfo = portfolioConfig.personalInfo;
export const experience = portfolioConfig.experience.map((exp) => ({
  ...exp,
  responsibilities: exp.description, // Map description to responsibilities for compatibility
}));
export const education = portfolioConfig.education;
export const certifications = portfolioConfig.certifications;
export const skills = portfolioConfig.skills;
export const languages = portfolioConfig.languages;
export const techStack = portfolioConfig.techStack;

// Site config (useful for components that need it)
export const siteConfig = portfolioConfig.siteConfig;
