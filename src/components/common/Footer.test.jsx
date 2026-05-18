import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const mockT = (key) => {
  const translations = {
    'footer.builtWith': 'Built with React & Vite',
    'footer.viewSource': 'View Source Code',
  };
  return translations[key] || key;
};

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: mockT }),
}));

vi.mock('./SocialLinks', () => ({
  default: () => <div data-testid="social-links">Social Links</div>,
}));

vi.mock('../../constants/data', () => ({
  personalInfo: {
    repository: 'https://github.com/testuser/repo',
  },
}));

describe('Footer', () => {
  it('renders', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('renders social links, copyright and year', () => {
    render(<Footer />);
    expect(screen.getByTestId('social-links')).toBeInTheDocument();
    expect(screen.getByText(/MARIANO/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(new Date().getFullYear().toString()))).toBeInTheDocument();
  });

  it('renders repository link with correct attributes', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /view source code/i });
    expect(link).toHaveAttribute('href', 'https://github.com/testuser/repo');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
