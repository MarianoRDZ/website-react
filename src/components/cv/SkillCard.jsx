import { Card } from '../common';

const SkillCard = ({ title, skills }) => (
  <Card>
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
  </Card>
);

export default SkillCard;
