import { useTranslation } from 'react-i18next';
import { experience, education, skills } from '../constants/data';
import { Card } from '../components/common';
import { CVHeader, CVSection, ExperienceItem, SkillCard, ChevronIcon } from '../components/cv';

const CV = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-4">
      <CVHeader />

      <section className="py-4">
        <CVSection title={t('cv.summary')}>
          <Card>
            <p className="text-gray-700 dark:text-gray-300">{t('cv.summaryText')}</p>
          </Card>
        </CVSection>
      </section>

      <CVSection title={t('cv.experience')}>
        <div className="space-y-6">
          {experience.map((exp) => (
            <ExperienceItem
              key={exp.id}
              title={t(`cv.jobs.${exp.id}.title`)}
              company={exp.company}
              period={exp.period}
              responsibilities={t(`cv.jobs.${exp.id}.responsibilities`, { returnObjects: true })}
            />
          ))}
        </div>
      </CVSection>

      <CVSection title={`${t('cv.education')} & ${t('cv.certifications')}`}>
        <div className="space-y-4">
          {education.map((edu) => (
            <Card key={edu.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t('cv.educationData.degree')}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    {t('cv.educationData.institution')} | {t('cv.educationData.location')}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
              </div>
            </Card>
          ))}
          <Card>
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              {t('cv.certifications')}
            </h3>
            <ul className="space-y-2">
              {t('cv.certificationsData', { returnObjects: true }).map((cert, index) => (
                <li key={index} className="flex gap-2 text-gray-700 dark:text-gray-300">
                  <ChevronIcon />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </CVSection>

      <CVSection title={t('cv.skills')}>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCard key={category} title={category} skills={skillList} />
          ))}
        </div>
      </CVSection>

      <CVSection title={t('cv.languages')}>
        <Card>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {t('cv.languageLevels.spanish')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{t('cv.languageLevels.native')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {t('cv.languageLevels.english')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{t('cv.languageLevels.b2')}</p>
            </div>
          </div>
        </Card>
      </CVSection>
    </div>
  );
};

export default CV;
