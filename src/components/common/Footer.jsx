import SocialLinks from './SocialLinks';
import { personalInfo } from '../../constants/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900/80 py-6">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <SocialLinks />

          <div className="flex flex-col items-center gap-2 text-sm text-gray-400 md:items-end">
            <div>© {currentYear} MARIANO. BUILT WITH REACT & TAILWIND.</div>
            <a
              href={personalInfo.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-blue-400"
            >
              View source code →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
