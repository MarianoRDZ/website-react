import { useTranslation } from 'react-i18next';
import SocialLinks from './SocialLinks';
import { personalInfo } from '../../constants/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="border-t border-background-tertiary bg-background/80 py-3">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <SocialLinks />

          <div className="flex flex-col items-center gap-1 text-text-secondary md:items-end">
            <div className="text-xs">
              © {currentYear} MARIANO. {t('footer.builtWith').toUpperCase()}.
            </div>
            <a
              href={personalInfo.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-accent"
            >
              {t('footer.viewSource')} →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
