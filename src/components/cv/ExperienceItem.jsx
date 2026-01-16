import { Card } from '../common';
import ChevronIcon from './ChevronIcon';

const ExperienceItem = ({ title, company, period, responsibilities }) => (
  <Card>
    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-blue-600 dark:text-blue-400">{company}</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{period}</p>
    </div>
    <ul className="space-y-2">
      {responsibilities.map((item, index) => (
        <li key={index} className="flex gap-2 text-gray-700 dark:text-gray-300">
          <ChevronIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </Card>
);

export default ExperienceItem;
