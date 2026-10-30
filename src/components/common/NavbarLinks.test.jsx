import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';

vi.mock('./LanguageSelector', () => ({
  default: () => <div data-testid="lang-selector" />,
}));

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/cv', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
];

const renderLinks = (isActive = () => false) =>
  render(
    <BrowserRouter>
      <NavbarLinks navLinks={navLinks} isActive={isActive} />
    </BrowserRouter>
  );

describe('NavbarLinks', () => {
  it('renders all nav links', () => {
    renderLinks();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Resume' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('applies active class to current path', () => {
    renderLinks((path) => path === '/cv');
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveClass('text-accent');
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveClass('text-accent');
  });

  it('renders LanguageSelector', () => {
    renderLinks();
    expect(screen.getByTestId('lang-selector')).toBeInTheDocument();
  });

  it('links have correct hrefs', () => {
    renderLinks();
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/cv');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
  });
});
