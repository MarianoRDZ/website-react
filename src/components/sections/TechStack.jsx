import { techStack, uiText } from '../../constants/data';
import { getTechIcon } from '../common/icons';

const TechStack = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <h3 className="mb-6 text-center text-sm font-semibold tracking-wider text-gray-400 uppercase">
          {uiText.techStack.title}
        </h3>
        <div className="grid grid-cols-3 gap-8 md:flex md:flex-wrap md:items-center md:justify-center md:gap-12">
          {techStack.map((tech) => {
            const Icon = getTechIcon(tech);
            return (
              <div key={tech} className="group flex cursor-pointer flex-col items-center gap-3">
                <div className="text-gray-400 transition-colors group-hover:text-blue-400">
                  {Icon && <Icon />}
                </div>
                <span className="text-sm text-gray-300">{tech}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
