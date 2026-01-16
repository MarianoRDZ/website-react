import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-1 rounded-full bg-gray-800 p-1">
      <button
        onClick={() => changeLanguage('en')}
        className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
          i18n.language === 'en'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-gray-400 hover:text-gray-300'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
          i18n.language === 'es'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-gray-400 hover:text-gray-300'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSelector;
