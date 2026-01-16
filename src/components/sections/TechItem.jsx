import { getTechIcon } from '../common/icons';

/**
 * TechItem Component
 * Individual technology icon and label with hover effects.
 * Used by TechStackGrid to display tech stack items.
 *
 * @typedef {Object} TechItemProps
 * @property {string} name - Technology name to display.
 *
 * @example
 * <TechItem name="React" />
 * <TechItem name="TypeScript" />
 */
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
