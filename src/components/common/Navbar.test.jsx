import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

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

const mockT = (key) => {
  const translations = { 'nav.home': 'Home', 'nav.resume': 'Resume', 'nav.contact': 'Contact' };
  return translations[key] || key;
};

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: mockT }),
}));

vi.mock('./LanguageSelector', () => ({
  default: () => <div data-testid="language-selector">Language Selector</div>,
}));

const renderNavbar = () =>
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

describe('Navbar', () => {
  beforeEach(() => {
    mockLocation = { pathname: '/' };
    mockNavigate.mockClear();
  });

  it('renders logo, links and language selector', () => {
    renderNavbar();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText(/MARIANORDZ/i)).toBeInTheDocument();
    expect(screen.getByText(/\.COM\.AR/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /home/i })).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: /resume/i })).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: /contact/i })).toHaveLength(2);
  });

  it('highlights the active link', () => {
    mockLocation = { pathname: '/cv' };
    renderNavbar();
    screen.getAllByRole('link', { name: /resume/i }).forEach((link) => {
      expect(link).toHaveClass('text-blue-400');
    });
  });

  it('inactive links are not highlighted', () => {
    mockLocation = { pathname: '/' };
    renderNavbar();
    screen.getAllByRole('link', { name: /resume/i }).forEach((link) => {
      expect(link).toHaveClass('text-gray-300');
    });
  });

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup();
    const { container } = renderNavbar();
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    const mobileMenu = () => container.querySelector('.md\\:hidden .flex-col')?.parentElement;

    await user.click(toggle);
    expect(mobileMenu()).toHaveClass('opacity-100', 'max-h-screen');

    await user.click(toggle);
    expect(mobileMenu()).toHaveClass('opacity-0', 'max-h-0');
  });

  it('closes menu when a nav link is clicked', async () => {
    const user = userEvent.setup();
    const { container } = renderNavbar();
    await user.click(screen.getByRole('button', { name: /toggle menu/i }));

    const mobileLink = screen
      .getAllByRole('link', { name: /resume/i })
      .find((link) => link.closest('.md\\:hidden'));
    if (mobileLink) {
      await user.click(mobileLink);
      expect(container.querySelector('.md\\:hidden .flex-col')?.parentElement).toHaveClass('opacity-0');
    }
  });

  it('closes menu when logo is clicked', async () => {
    const user = userEvent.setup();
    const { container } = renderNavbar();
    await user.click(screen.getByRole('button', { name: /toggle menu/i }));
    await user.click(screen.getByRole('link', { name: /MARIANORDZ/i }));
    expect(container.querySelector('.md\\:hidden .flex-col')?.parentElement).toHaveClass('opacity-0');
  });

  it('animates hamburger icon on open', async () => {
    const user = userEvent.setup();
    const { container } = renderNavbar();
    const lines = container.querySelectorAll('button span');

    await user.click(screen.getByRole('button', { name: /toggle menu/i }));
    expect(lines[0]).toHaveClass('rotate-45');
    expect(lines[1]).toHaveClass('opacity-0');
    expect(lines[2]).toHaveClass('-rotate-45');
  });

  it('toggle button has aria-label', () => {
    renderNavbar();
    expect(screen.getByRole('button', { name: /toggle menu/i })).toHaveAttribute(
      'aria-label',
      'Toggle menu'
    );
  });

  it('nav links have correct paths', () => {
    renderNavbar();
    screen.getAllByRole('link', { name: /home/i }).forEach((l) => expect(l).toHaveAttribute('href', '/'));
    screen.getAllByRole('link', { name: /resume/i }).forEach((l) => expect(l).toHaveAttribute('href', '/cv'));
    screen.getAllByRole('link', { name: /contact/i }).forEach((l) => expect(l).toHaveAttribute('href', '/contact'));
  });

  // el logo y home comparten '/', por eso son 3 paths únicos
  it('has 3 unique navigation paths', () => {
    renderNavbar();
    const uniquePaths = new Set(screen.getAllByRole('link').map((l) => l.getAttribute('href')));
    expect(uniquePaths.size).toBe(3);
  });
});
