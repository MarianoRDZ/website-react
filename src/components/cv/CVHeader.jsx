import { useTranslation } from 'react-i18next';
import { personalInfo, siteConfig } from '../../constants/data';
import { Button } from '../common';
import ContactInfo from './ContactInfo';

const CVHeader = () => {
  const { t } = useTranslation();

  // Build PDF path using basePath from config and resumeFileName
  const pdfPath = `${siteConfig.basePath}${siteConfig.basePath.endsWith('/') ? '' : '/'}${personalInfo.resumeFileName}`;

  return (
    <header className="mb-12 text-center">
      <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{personalInfo.name}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400">{t('hero.title')}</p>

      <ContactInfo />

      <div className="mt-6 flex justify-center">
        <Button
          as="a"
          href={pdfPath}
          download={personalInfo.resumeFileName}
          variant="primary"
          size="md"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {t('cv.downloadPDF')}
        </Button>
      </div>
    </header>
  );
};

export default CVHeader;
