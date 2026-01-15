import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/cv', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900/80 shadow-lg backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-blue-400"
            onClick={closeMenu}
          >
            <div className="rounded bg-blue-500 px-2 py-1">
              <span className="font-bold text-white">Ⓜ</span>
            </div>
            <span>MARIANORDZ.DEV.AR</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(path) ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded text-gray-300 transition-colors hover:text-blue-400 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`h-0.5 w-6 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={closeMenu}
              className={`border-b border-gray-800 py-4 text-lg font-medium transition-colors duration-200 ${
                isActive(path) ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
