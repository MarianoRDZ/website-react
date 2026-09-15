import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const isEN = i18n.language === 'en';

  return (
    <div className="relative flex items-center rounded-full bg-gray-800 p-1">
      <div
        className={`absolute inset-y-1 left-1 w-12 rounded-full bg-blue-600 shadow-sm transition-transform duration-200 ease-in-out ${
          isEN ? 'translate-x-0' : 'translate-x-full'
        }`}
      />
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`relative z-10 w-12 py-1.5 text-sm font-semibold transition-colors duration-200 ${
          isEN ? 'text-white' : 'text-gray-400 hover:text-gray-300'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('es')}
        className={`relative z-10 w-12 py-1.5 text-sm font-semibold transition-colors duration-200 ${
          !isEN ? 'text-white' : 'text-gray-400 hover:text-gray-300'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSelector;
