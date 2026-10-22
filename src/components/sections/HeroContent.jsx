import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../common';
import { personalInfo } from '../../constants/data';
import useTypewriter from '../../hooks/useTypewriter';

const HeroContent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const heroText = `${t('hero.greeting')} ${personalInfo.name.split(' ')[0]}.`;
  const { displayedText, isDone } = useTypewriter(heroText, 60, 600);

  return (
    <div className="space-y-5">
      <div>
        <p className="animate-stagger-1 mb-3 text-sm font-semibold tracking-wider text-blue-400 uppercase">
          {t('hero.title')}
        </p>
        <h1 className="animate-stagger-2 mb-4 text-4xl font-bold text-white md:text-5xl">
          {isDone ? (
            <>
              {t('hero.greeting')}{' '}
              <span className="text-gradient-animate">
                {personalInfo.name.split(' ')[0]}
              </span>
              .
            </>
          ) : (
            displayedText
          )}
          <span
            aria-hidden="true"
            className="ml-0.5 inline-block h-[1em] w-0.5 bg-accent align-middle animate-blink-cursor"
          />
        </h1>
        <p className="animate-stagger-3 text-base leading-relaxed text-gray-300 md:text-lg">
          {t('hero.description')}
        </p>
      </div>

      <div className="animate-stagger-4 flex gap-4">
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
