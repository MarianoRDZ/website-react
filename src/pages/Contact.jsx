import { useTranslation } from 'react-i18next';
import { ContactInfo, ContactForm } from '../components/contact';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl px-6 py-4">
      <div className="mb-6 text-center">
        <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
          {t('contact.title')}
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-400">{t('contact.subtitle')}</p>
      </div>

      <div className="grid gap-8 py-4 lg:grid-cols-2 lg:items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
