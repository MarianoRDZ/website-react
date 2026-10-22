import { Card } from '../common';

const SkillCard = ({ title, skills }) => (
  <Card hover>
    <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm font-medium text-accent/70 transition-all duration-200 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
        >
          {skill}
        </span>
      ))}
    </div>
  </Card>
);

export default SkillCard;
