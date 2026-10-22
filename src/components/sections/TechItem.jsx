import { getTechIcon } from '../common/icons';

const TechItem = ({ name }) => {
  const Icon = getTechIcon(name);

  return (
    <div className="group flex cursor-pointer flex-col items-center gap-3">
      <div className="p-3">
        <div className="text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(96,217,253,0.6)]">
          {Icon && <Icon />}
        </div>
      </div>
      <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-accent/80">
        {name}
      </span>
    </div>
  );
};

export default TechItem;
