import { personalInfo } from '../../constants/data';

const ContactInfo = () => (
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
);

export default ContactInfo;
