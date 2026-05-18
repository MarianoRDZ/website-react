import { useTranslation } from 'react-i18next';
import TechStackGrid from './TechStackGrid';

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <h3 className="mb-6 text-center text-sm font-semibold tracking-wider text-gray-400 uppercase">
          {t('techStack.title')}
        </h3>
        <TechStackGrid />
      </div>
    </section>
  );
};

export default TechStack;
