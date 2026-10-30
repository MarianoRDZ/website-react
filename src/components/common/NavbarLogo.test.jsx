import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import NavbarLogo from './NavbarLogo';

const renderLogo = (props = {}) =>
  render(<BrowserRouter><NavbarLogo {...props} /></BrowserRouter>);

describe('NavbarLogo', () => {
  it('renders brand name', () => {
    renderLogo();
    expect(screen.getByText(/MARIANORDZ/i)).toBeInTheDocument();
    expect(screen.getByText(/\.COM\.AR/i)).toBeInTheDocument();
  });

  it('links to home', () => {
    renderLogo();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    renderLogo({ onClick });
    await user.click(screen.getByRole('link'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders logo SVG', () => {
    const { container } = renderLogo();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
