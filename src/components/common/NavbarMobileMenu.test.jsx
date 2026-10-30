import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import NavbarMobileMenu from './NavbarMobileMenu';

vi.mock('./LanguageSelector', () => ({
  default: () => <div data-testid="lang-selector" />,
}));

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/cv', label: 'Resume' },
];

const renderMenu = (props = {}) =>
  render(
    <BrowserRouter>
      <NavbarMobileMenu
        isOpen={false}
        navLinks={navLinks}
        isActive={() => false}
        closeMenu={vi.fn()}
        {...props}
      />
    </BrowserRouter>
  );

describe('NavbarMobileMenu', () => {
  it('is hidden when isOpen is false', () => {
    const { container } = renderMenu({ isOpen: false });
    expect(container.firstChild).toHaveClass('opacity-0', 'max-h-0');
  });

  it('is visible when isOpen is true', () => {
    const { container } = renderMenu({ isOpen: true });
    expect(container.firstChild).toHaveClass('opacity-100', 'max-h-screen');
  });

  it('renders all nav links', () => {
    renderMenu({ isOpen: true });
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Resume' })).toBeInTheDocument();
  });

  it('calls closeMenu when a link is clicked', async () => {
    const closeMenu = vi.fn();
    const user = userEvent.setup();
    renderMenu({ isOpen: true, closeMenu });
    await user.click(screen.getByRole('link', { name: 'Home' }));
    expect(closeMenu).toHaveBeenCalledTimes(1);
  });

  it('applies active class to current path', () => {
    renderMenu({ isOpen: true, isActive: (path) => path === '/cv' });
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveClass('text-accent');
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveClass('text-accent');
  });

  it('renders LanguageSelector', () => {
    renderMenu({ isOpen: true });
    expect(screen.getByTestId('lang-selector')).toBeInTheDocument();
  });
});
