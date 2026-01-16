import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../common';
import { personalInfo } from '../../constants/data';

/**
 * HeroContent Component
 * Displays hero section text, description, and call-to-action buttons.
 * Handles navigation to CV and Contact pages.
 *
 * @example
 * <HeroContent />
 */
const HeroContent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-3 text-sm font-semibold tracking-wider text-blue-400 uppercase">
          {t('hero.title')}
        </p>
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          {t('hero.greeting')} {personalInfo.name.split(' ')[0]}.
        </h1>
        <p className="text-base leading-relaxed text-gray-300 md:text-lg">
          {t('hero.description')}
        </p>
      </div>

      <div className="flex gap-4">
        <Button variant="primary" size="lg" onClick={() => navigate('/cv')}>
          {t('hero.viewResume')}
        </Button>
        <Button variant="secondary" size="lg" onClick={() => navigate('/contact')}>
          {t('hero.getInTouch')}
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
