import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';

vi.mock('./icons', () => ({
  GitHubIcon: ({ className }) => <svg data-testid="github-icon" className={className} />,
  LinkedInIcon: ({ className }) => <svg data-testid="linkedin-icon" className={className} />,
  EmailIcon: ({ className }) => <svg data-testid="email-icon" className={className} />,
}));

vi.mock('../../constants/data', () => ({
  personalInfo: {
    github: 'https://github.com/testuser',
    linkedinUsername: 'testuser',
    email: 'test@example.com',
  },
}));

describe('SocialLinks', () => {
  it('renders GitHub, LinkedIn and Email links', () => {
    render(<SocialLinks />);
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument();
  });

  it('links have correct hrefs', () => {
    render(<SocialLinks />);
    expect(screen.getByText('GitHub').closest('a')).toHaveAttribute('href', 'https://github.com/testuser');
    expect(screen.getByText('LinkedIn').closest('a')).toHaveAttribute('href', 'https://linkedin.com/in/testuser');
    expect(screen.getByText('Email').closest('a')).toHaveAttribute('href', 'mailto:test@example.com');
  });

  it('external links open in new tab with security attributes', () => {
    render(<SocialLinks />);
    ['GitHub', 'LinkedIn'].forEach((name) => {
      const link = screen.getByText(name).closest('a');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('email link does not open in new tab', () => {
    render(<SocialLinks />);
    expect(screen.getByText('Email').closest('a')).not.toHaveAttribute('target');
  });

  it('applies custom className', () => {
    const { container } = render(<SocialLinks className="mt-4" />);
    expect(container.firstChild).toHaveClass('mt-4');
  });
});
