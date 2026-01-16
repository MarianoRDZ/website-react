import { techStack } from '../../constants/data';
import TechItem from './TechItem';

/**
 * TechStackGrid Component
 * Grid layout for displaying technology stack items.
 * Maps over techStack array and renders TechItem components.
 *
 * @example
 * <TechStackGrid />
 */
const TechStackGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-8 md:flex md:flex-wrap md:items-center md:justify-center md:gap-12">
      {techStack.map((tech) => (
        <TechItem key={tech} name={tech} />
      ))}
    </div>
  );
};

export default TechStackGrid;
