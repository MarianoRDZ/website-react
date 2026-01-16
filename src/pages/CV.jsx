import { useTranslation } from 'react-i18next';
import {
  personalInfo,
  experience,
  education,
  certifications,
  skills,
  languages,
} from '../constants/data';

const ExperienceItem = ({ title, company, period, responsibilities }) => (
  <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-blue-600 dark:text-blue-400">{company}</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{period}</p>
    </div>
    <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
      {responsibilities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const SkillCard = ({ title, skills }) => (
  <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
    <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const CV = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-8">
      <header className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">{personalInfo.title}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-gray-600 md:gap-4 dark:text-gray-400">
          <span>{personalInfo.location}</span>
          <span className="hidden md:inline">•</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {personalInfo.email}
          </a>
          <span className="hidden md:inline">•</span>
          <a
            href={`https://linkedin.com/in/${personalInfo.linkedinUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            linkedin.com/in/{personalInfo.linkedinUsername}
          </a>
          <span className="hidden md:inline">•</span>
          <span>{personalInfo.phone}</span>
        </div>
      </header>

      <section>
        <h2 className="mb-6 border-b-2 border-blue-600 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {t('cv.summary')}
        </h2>
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <p className="text-gray-700 dark:text-gray-300">{personalInfo.summary}</p>
        </div>
      </section>

      <section>
        <h2 className="mb-6 border-b-2 border-blue-600 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {t('cv.experience')}
        </h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <ExperienceItem key={exp.id} {...exp} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 border-b-2 border-blue-600 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {t('cv.education')} & {t('cv.certifications')}
        </h2>
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    {edu.institution} | {edu.location}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
              </div>
            </div>
          ))}
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              {t('cv.certifications')}
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {certifications.map((cert, index) => (
                <li key={index}>• {cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 border-b-2 border-blue-600 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {t('cv.skills')}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCard key={category} title={category} skills={skillList} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 border-b-2 border-blue-600 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {t('cv.languages')}
        </h2>
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="grid gap-4 md:grid-cols-2">
            {languages.map((lang) => (
              <div key={lang.name}>
                <h3 className="font-semibold text-gray-900 dark:text-white">{lang.name}</h3>
                <p className="text-gray-700 dark:text-gray-300">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
