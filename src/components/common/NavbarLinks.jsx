import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const NavbarLinks = ({ navLinks, isActive }) => (
  <div className="hidden items-center gap-8 md:flex">
    {navLinks.map(({ path, label }) => (
      <Link
        key={path}
        to={path}
        className={`relative pb-1 text-base font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:content-[''] ${
          isActive(path)
            ? 'text-accent after:w-full'
            : 'text-gray-300 after:w-0 hover:text-white hover:after:w-full'
        }`}
      >
        {label}
      </Link>
    ))}
    <LanguageSelector />
  </div>
);

export default NavbarLinks;
