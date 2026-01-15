import { GitHubIcon, LinkedInIcon, EmailIcon } from './icons';
import { personalInfo } from '../../constants/data';

const SocialLinks = ({ className = '' }) => {
  const links = [
    {
      href: personalInfo.github,
      icon: GitHubIcon,
      label: 'GitHub',
      external: true,
    },
    {
      href: personalInfo.linkedin,
      icon: LinkedInIcon,
      label: 'LinkedIn',
      external: true,
    },
    {
      href: `mailto:${personalInfo.email}`,
      icon: EmailIcon,
      label: 'Email',
      external: false,
    },
  ];

  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {links.map(({ href, icon: Icon, label, external }) => (
        <a
          key={label}
          href={href}
          {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
          className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-blue-400"
        >
          <Icon />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
