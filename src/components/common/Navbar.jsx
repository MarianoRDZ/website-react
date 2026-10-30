import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarMobileMenu from './NavbarMobileMenu';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const isActive = (path) => location.pathname === path;

  const navLinks = useMemo(
    () => [
      { path: '/', label: t('nav.home') },
      { path: '/cv', label: t('nav.resume') },
      { path: '/contact', label: t('nav.contact') },
    ],
    [t]
  );

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 shadow-lg backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <NavbarLogo onClick={closeMenu} />
          <NavbarLinks navLinks={navLinks} isActive={isActive} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded text-text-secondary transition-colors hover:text-accent md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>
      <NavbarMobileMenu isOpen={isMenuOpen} navLinks={navLinks} isActive={isActive} closeMenu={closeMenu} />
    </nav>
  );
};

export default Navbar;
