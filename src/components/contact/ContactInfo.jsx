import { useTranslation } from 'react-i18next';
import { personalInfo } from '../../constants/data';
import ContactInfoItem from './ContactInfoItem';
import { EmailIcon, LocationIcon, ClockIcon, PhoneIcon } from './ContactIcons';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="h-fit p-8">
        <h2 className="mb-8 text-xl font-bold text-gray-900 dark:text-white">
          {t('contact.directContact')}
        </h2>

        <div className="mb-8">
          <ContactInfoItem
            icon={EmailIcon}
            label={t('contact.emailLabel')}
            value={personalInfo.email}
          />
        </div>

        <div className="mb-8">
          <ContactInfoItem
            icon={PhoneIcon}
            label={t('contact.phoneLabel')}
            value={personalInfo.phone}
          />
        </div>

        <div className="mb-8">
          <ContactInfoItem
            icon={LocationIcon}
            label={t('contact.locationLabel')}
            value={personalInfo.location}
          />
        </div>

        <div className="border-t border-blue-600 pt-8">
          <ContactInfoItem
            icon={ClockIcon}
            label={t('contact.availabilityLabel')}
            value={t('contact.availabilityText')}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
