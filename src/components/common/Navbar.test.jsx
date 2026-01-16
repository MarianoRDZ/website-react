import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Mock react-router-dom
const mockNavigate = vi.fn();
let mockLocation = { pathname: '/' };

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLocation: () => mockLocation,
    useNavigate: () => mockNavigate,
  };
});

// Mock react-i18next
const mockT = (key) => {
  const translations = {
    'nav.home': 'Home',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
  };
  return translations[key] || key;
};

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: mockT }),
}));

// Mock LanguageSelector
vi.mock('./LanguageSelector', () => ({
  default: () => <div data-testid="language-selector">Language Selector</div>,
}));

const renderNavbar = () => {
  return render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

describe('Navbar Component', () => {
  beforeEach(() => {
    mockLocation = { pathname: '/' };
    mockNavigate.mockClear();
  });

  describe('Rendering', () => {
    it('renders the navbar', () => {
      renderNavbar();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders logo with text', () => {
      renderNavbar();
      expect(screen.getByText(/MARIANORDZ/i)).toBeInTheDocument();
      expect(screen.getByText(/\.DEV\.AR/i)).toBeInTheDocument();
    });

    it('renders all navigation links', () => {
      renderNavbar();
      expect(screen.getAllByRole('link', { name: /home/i })).toHaveLength(2);
      expect(screen.getAllByRole('link', { name: /resume/i })).toHaveLength(2);
      expect(screen.getAllByRole('link', { name: /contact/i })).toHaveLength(2);
    });

    it('renders language selector', () => {
      renderNavbar();
      expect(screen.getAllByTestId('language-selector')).toHaveLength(2);
    });

    it('renders mobile menu toggle button', () => {
      renderNavbar();
      expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
    });

    it('renders logo SVG', () => {
      const { container } = renderNavbar();
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Active Link Styling', () => {
    it('highlights home link when on home page', () => {
      mockLocation = { pathname: '/' };
      renderNavbar();
      const homeLinks = screen.getAllByRole('link', { name: /home/i });
      homeLinks.forEach((link) => {
        expect(link).toHaveClass('text-blue-400');
      });
    });

    it('highlights resume link when on resume page', () => {
      mockLocation = { pathname: '/cv' };
      renderNavbar();
      const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
      resumeLinks.forEach((link) => {
        expect(link).toHaveClass('text-blue-400');
      });
    });

    it('highlights contact link when on contact page', () => {
      mockLocation = { pathname: '/contact' };
      renderNavbar();
      const contactLinks = screen.getAllByRole('link', { name: /contact/i });
      contactLinks.forEach((link) => {
        expect(link).toHaveClass('text-blue-400');
      });
    });

    it('does not highlight inactive links', () => {
      mockLocation = { pathname: '/' };
      renderNavbar();
      const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
      const contactLinks = screen.getAllByRole('link', { name: /contact/i });

      resumeLinks.forEach((link) => {
        expect(link).toHaveClass('text-gray-300');
      });
      contactLinks.forEach((link) => {
        expect(link).toHaveClass('text-gray-300');
      });
    });
  });

  describe('Mobile Menu', () => {
    it('mobile menu is closed by default', () => {
      const { container } = renderNavbar();
      const mobileMenu = container.querySelector('.md\\:hidden .flex-col');

      expect(mobileMenu?.parentElement).toHaveClass('opacity-0', 'max-h-0');
    });

    it('opens mobile menu when toggle button is clicked', async () => {
      const user = userEvent.setup();
      const { container } = renderNavbar();

      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
      await user.click(toggleButton);

      const mobileMenu = container.querySelector('.md\\:hidden .flex-col');
      expect(mobileMenu?.parentElement).toHaveClass('opacity-100', 'max-h-screen');
    });

    it('closes mobile menu when toggle button is clicked again', async () => {
      const user = userEvent.setup();
      const { container } = renderNavbar();

      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });

      // Open
      await user.click(toggleButton);
      let mobileMenu = container.querySelector('.md\\:hidden .flex-col');
      expect(mobileMenu?.parentElement).toHaveClass('opacity-100');

      // Close
      await user.click(toggleButton);
      mobileMenu = container.querySelector('.md\\:hidden .flex-col');
      expect(mobileMenu?.parentElement).toHaveClass('opacity-0', 'max-h-0');
    });

    it('shows all navigation links in mobile menu', async () => {
      const user = userEvent.setup();
      renderNavbar();

      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
      await user.click(toggleButton);

      const links = screen.getAllByRole('link');
      const linkTexts = links.map((link) => link.textContent);

      expect(linkTexts).toContain('Home');
      expect(linkTexts).toContain('Resume');
      expect(linkTexts).toContain('Contact');
    });

    it('closes mobile menu when a link is clicked', async () => {
      const user = userEvent.setup();
      const { container } = renderNavbar();

      // Open menu
      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
      await user.click(toggleButton);

      // Click a link
      const links = screen.getAllByRole('link', { name: /resume/i });
      const mobileLink = links.find((link) => link.closest('.md\\:hidden'));

      if (mobileLink) {
        await user.click(mobileLink);

        const mobileMenu = container.querySelector('.md\\:hidden .flex-col');
        expect(mobileMenu?.parentElement).toHaveClass('opacity-0', 'max-h-0');
      }
    });
  });

  describe('Hamburger Icon Animation', () => {
    it('animates hamburger icon when menu opens', async () => {
      const user = userEvent.setup();
      const { container } = renderNavbar();

      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
      const lines = container.querySelectorAll('button span');

      // Before opening
      expect(lines[0]).not.toHaveClass('rotate-45');
      expect(lines[1]).not.toHaveClass('opacity-0');
      expect(lines[2]).not.toHaveClass('-rotate-45');

      // After opening
      await user.click(toggleButton);

      expect(lines[0]).toHaveClass('rotate-45');
      expect(lines[1]).toHaveClass('opacity-0');
      expect(lines[2]).toHaveClass('-rotate-45');
    });

    it('reverses animation when menu closes', async () => {
      const user = userEvent.setup();
      const { container } = renderNavbar();

      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
      const lines = container.querySelectorAll('button span');

      // Open
      await user.click(toggleButton);
      expect(lines[0]).toHaveClass('rotate-45');

      // Close
      await user.click(toggleButton);
      expect(lines[0]).not.toHaveClass('rotate-45');
      expect(lines[1]).not.toHaveClass('opacity-0');
      expect(lines[2]).not.toHaveClass('-rotate-45');
    });
  });

  describe('Logo', () => {
    it('logo links to home page', () => {
      renderNavbar();
      const logoLink = screen.getByRole('link', { name: /MARIANORDZ/i });
      expect(logoLink).toHaveAttribute('href', '/');
    });

    it('logo has hover effect', () => {
      renderNavbar();
      const logoLink = screen.getByRole('link', { name: /MARIANORDZ/i });
      expect(logoLink).toHaveClass('hover:text-blue-400');
    });

    it('logo closes mobile menu when clicked', async () => {
      const user = userEvent.setup();
      const { container } = renderNavbar();

      // Open menu
      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
      await user.click(toggleButton);

      // Click logo
      const logoLink = screen.getByRole('link', { name: /MARIANORDZ/i });
      await user.click(logoLink);

      const mobileMenu = container.querySelector('.md\\:hidden .flex-col');
      expect(mobileMenu?.parentElement).toHaveClass('opacity-0');
    });
  });

  describe('Styling', () => {
    it('has fixed positioning', () => {
      const { container } = renderNavbar();
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('fixed', 'top-0', 'z-50');
    });

    it('has backdrop blur effect', () => {
      const { container } = renderNavbar();
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('backdrop-blur-md');
    });

    it('has full width', () => {
      const { container } = renderNavbar();
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('w-full');
    });

    it('desktop links are hidden on mobile', () => {
      const { container } = renderNavbar();
      const desktopLinksContainer = container.querySelector('.hidden.md\\:flex');
      expect(desktopLinksContainer).toBeInTheDocument();
      expect(desktopLinksContainer).toHaveClass('hidden');
    });
  });

  describe('Responsive Behavior', () => {
    it('shows language selector in both desktop and mobile views', () => {
      renderNavbar();
      const selectors = screen.getAllByTestId('language-selector');
      expect(selectors.length).toBeGreaterThanOrEqual(1);
    });

    it('mobile menu has smooth transitions', () => {
      const { container } = renderNavbar();
      const mobileMenu = container.querySelector('.md\\:hidden.absolute');

      expect(mobileMenu).toHaveClass('transition-all', 'duration-300');
    });
  });

  describe('Accessibility', () => {
    it('has navigation role', () => {
      renderNavbar();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('toggle button has aria-label', () => {
      renderNavbar();
      const button = screen.getByRole('button', { name: /toggle menu/i });
      expect(button).toHaveAttribute('aria-label', 'Toggle menu');
    });

    it('all links are keyboard accessible', async () => {
      const user = userEvent.setup();
      renderNavbar();

      await user.tab();
      const logoLink = screen.getByRole('link', { name: /MARIANORDZ/i });
      expect(logoLink).toHaveFocus();
    });

    it('navigation links have descriptive text', () => {
      renderNavbar();

      expect(screen.getAllByRole('link', { name: /home/i })).toHaveLength(2);
      expect(screen.getAllByRole('link', { name: /resume/i })).toHaveLength(2);
      expect(screen.getAllByRole('link', { name: /contact/i })).toHaveLength(2);
    });
  });

  describe('Navigation Links Structure', () => {
    it('renders correct number of navigation links', () => {
      renderNavbar();
      // Logo + 3 nav links = 4 unique hrefs: '/' (logo), '/' (home), '/cv', '/contact'
      // But home and logo share same href, so 3 unique paths
      const allLinks = screen.getAllByRole('link');
      const uniquePaths = new Set(allLinks.map((link) => link.getAttribute('href')));
      expect(uniquePaths.size).toBe(3); // '/', '/cv', '/contact'
    });

    it('home link has correct path', () => {
      renderNavbar();
      const homeLinks = screen.getAllByRole('link', { name: /home/i });
      homeLinks.forEach((link) => {
        expect(link).toHaveAttribute('href', '/');
      });
    });

    it('resume link has correct path', () => {
      renderNavbar();
      const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
      resumeLinks.forEach((link) => {
        expect(link).toHaveAttribute('href', '/cv');
      });
    });

    it('contact link has correct path', () => {
      renderNavbar();
      const contactLinks = screen.getAllByRole('link', { name: /contact/i });
      contactLinks.forEach((link) => {
        expect(link).toHaveAttribute('href', '/contact');
      });
    });
  });

  describe('Layout', () => {
    it('logo and navigation are in a flex container', () => {
      const { container } = renderNavbar();
      const flexContainer = container.querySelector('.flex.items-center.justify-between');
      expect(flexContainer).toBeInTheDocument();
    });

    it('has proper spacing in desktop view', () => {
      const { container } = renderNavbar();
      const navLinksContainer = container.querySelector('.hidden.md\\:flex');
      expect(navLinksContainer).toHaveClass('gap-8');
    });

    it('mobile menu has proper padding', () => {
      const { container } = renderNavbar();
      const mobileMenuContent = container.querySelector('.flex-col.px-6.py-4');
      expect(mobileMenuContent).toBeInTheDocument();
    });
  });

  describe('State Management', () => {
    it('maintains menu state across multiple toggles', async () => {
      const user = userEvent.setup();
      const { container } = renderNavbar();
      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });

      for (let i = 0; i < 3; i++) {
        await user.click(toggleButton);
        const mobileMenu = container.querySelector('.md\\:hidden .flex-col');
        expect(mobileMenu?.parentElement).toHaveClass('opacity-100');

        await user.click(toggleButton);
        expect(mobileMenu?.parentElement).toHaveClass('opacity-0');
      }
    });
  });
});
