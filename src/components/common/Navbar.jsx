import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/cv', label: t('nav.resume') },
    { path: '/contact', label: t('nav.contact') },
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
            <div className="relative h-9 w-9">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-sm"></div>
              <div className="relative flex h-full w-full items-center justify-center rounded-lg border border-blue-400/30 bg-gray-900">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" className="text-blue-400" />
                  <path d="M2 17l10 5 10-5" className="text-purple-400" />
                  <path d="M2 12l10 5 10-5" className="text-blue-300" />
                </svg>
              </div>
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
            <LanguageSelector />
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
          <div className="mt-4 flex justify-center py-2">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
