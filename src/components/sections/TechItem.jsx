import { getTechIcon } from '../common/icons';

const TechItem = ({ name }) => {
  const Icon = getTechIcon(name);

  return (
    <div className="group flex cursor-pointer flex-col items-center gap-3">
      <div className="text-gray-400 transition-colors group-hover:text-blue-400">
        {Icon && <Icon />}
      </div>
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );
};

export default TechItem;
