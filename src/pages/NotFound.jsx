import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common';

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
          <div className="mx-auto mb-4 h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          {t('notFound.title')}
        </h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">{t('notFound.description')}</p>

        <Button variant="primary" size="lg" onClick={() => navigate('/')}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          {t('notFound.backHome')}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
