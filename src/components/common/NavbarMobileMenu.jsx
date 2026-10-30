import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const NavbarMobileMenu = ({ isOpen, navLinks, isActive, closeMenu }) => (
  <div
    className={`absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
      isOpen ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden opacity-0'
    }`}
  >
    <div className="flex flex-col px-6 py-4">
      {navLinks.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          onClick={closeMenu}
          className={`border-b border-background-tertiary py-4 text-lg font-medium transition-colors duration-200 ${
            isActive(path) ? 'text-accent' : 'text-gray-300 hover:text-white'
          }`}
        >
          {label}
        </Link>
      ))}
      <div className="mt-4 flex justify-center py-2">
        <LanguageSelector />
      </div>
    </div>
  </div>
);

export default NavbarMobileMenu;
