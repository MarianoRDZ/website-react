import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';
import * as dataConstants from '../../constants/data';

// Mock the icons
vi.mock('./icons', () => ({
  GitHubIcon: ({ className }) => <svg data-testid="github-icon" className={className} />,
  LinkedInIcon: ({ className }) => <svg data-testid="linkedin-icon" className={className} />,
  EmailIcon: ({ className }) => <svg data-testid="email-icon" className={className} />,
}));

// Mock personal info data
vi.mock('../../constants/data', () => ({
  personalInfo: {
    github: 'https://github.com/testuser',
    linkedinUsername: 'testuser',
    email: 'test@example.com',
  },
}));

describe('SocialLinks Component', () => {
  describe('Rendering', () => {
    it('renders all three social links', () => {
      render(<SocialLinks />);

      expect(screen.getByText('GitHub')).toBeInTheDocument();
      expect(screen.getByText('LinkedIn')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
    });

    it('renders all icons', () => {
      render(<SocialLinks />);

      expect(screen.getByTestId('github-icon')).toBeInTheDocument();
      expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
      expect(screen.getByTestId('email-icon')).toBeInTheDocument();
    });

    it('renders with default class names', () => {
      const { container } = render(<SocialLinks />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('flex', 'items-center', 'gap-3');
    });
  });

  describe('Custom ClassName', () => {
    it('applies custom className', () => {
      const { container } = render(<SocialLinks className="custom-class" />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('custom-class');
    });

    it('combines custom className with default classes', () => {
      const { container } = render(<SocialLinks className="mt-4 justify-center" />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('mt-4', 'justify-center', 'flex', 'items-center', 'gap-3');
    });

    it('renders without custom className when not provided', () => {
      const { container } = render(<SocialLinks />);
      const wrapper = container.firstChild;

      expect(wrapper.className).toContain('flex items-center gap-3');
    });
  });

  describe('Link Attributes', () => {
    it('GitHub link has correct href', () => {
      render(<SocialLinks />);
      const githubLink = screen.getByText('GitHub').closest('a');

      expect(githubLink).toHaveAttribute('href', 'https://github.com/testuser');
    });

    it('LinkedIn link has correct href', () => {
      render(<SocialLinks />);
      const linkedinLink = screen.getByText('LinkedIn').closest('a');

      expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/testuser');
    });

    it('Email link has correct mailto href', () => {
      render(<SocialLinks />);
      const emailLink = screen.getByText('Email').closest('a');

      expect(emailLink).toHaveAttribute('href', 'mailto:test@example.com');
    });
  });

  describe('External Links', () => {
    it('GitHub link opens in new tab', () => {
      render(<SocialLinks />);
      const githubLink = screen.getByText('GitHub').closest('a');

      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('LinkedIn link opens in new tab', () => {
      render(<SocialLinks />);
      const linkedinLink = screen.getByText('LinkedIn').closest('a');

      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('Email link does not open in new tab', () => {
      render(<SocialLinks />);
      const emailLink = screen.getByText('Email').closest('a');

      expect(emailLink).not.toHaveAttribute('target');
      expect(emailLink).not.toHaveAttribute('rel');
    });
  });

  describe('Icon Styling', () => {
    it('icons have correct size classes', () => {
      render(<SocialLinks />);

      const githubIcon = screen.getByTestId('github-icon');
      const linkedinIcon = screen.getByTestId('linkedin-icon');
      const emailIcon = screen.getByTestId('email-icon');

      expect(githubIcon).toHaveClass('h-4', 'w-4');
      expect(linkedinIcon).toHaveClass('h-4', 'w-4');
      expect(emailIcon).toHaveClass('h-4', 'w-4');
    });
  });

  describe('Link Styling', () => {
    it('links have correct base styles', () => {
      render(<SocialLinks />);

      const githubLink = screen.getByText('GitHub').closest('a');
      const linkedinLink = screen.getByText('LinkedIn').closest('a');
      const emailLink = screen.getByText('Email').closest('a');

      [githubLink, linkedinLink, emailLink].forEach((link) => {
        expect(link).toHaveClass(
          'flex',
          'items-center',
          'gap-2',
          'text-xs',
          'text-gray-400',
          'transition-colors',
          'hover:text-blue-400'
        );
      });
    });

    it('link labels have span wrapper', () => {
      render(<SocialLinks />);

      const githubSpan = screen.getByText('GitHub');
      const linkedinSpan = screen.getByText('LinkedIn');
      const emailSpan = screen.getByText('Email');

      expect(githubSpan.tagName).toBe('SPAN');
      expect(linkedinSpan.tagName).toBe('SPAN');
      expect(emailSpan.tagName).toBe('SPAN');
    });
  });

  describe('Accessibility', () => {
    it('all links are accessible', () => {
      render(<SocialLinks />);

      const links = screen.getAllByRole('link');
      expect(links).toHaveLength(3);
    });

    it('GitHub link is accessible by text', () => {
      render(<SocialLinks />);
      const link = screen.getByRole('link', { name: /github/i });

      expect(link).toBeInTheDocument();
    });

    it('LinkedIn link is accessible by text', () => {
      render(<SocialLinks />);
      const link = screen.getByRole('link', { name: /linkedin/i });

      expect(link).toBeInTheDocument();
    });

    it('Email link is accessible by text', () => {
      render(<SocialLinks />);
      const link = screen.getByRole('link', { name: /email/i });

      expect(link).toBeInTheDocument();
    });

    it('external links have appropriate security attributes', () => {
      render(<SocialLinks />);

      const githubLink = screen.getByText('GitHub').closest('a');
      const linkedinLink = screen.getByText('LinkedIn').closest('a');

      // noopener prevents access to window.opener
      // noreferrer prevents sending referrer information
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Layout', () => {
    it('renders links in flex container', () => {
      const { container } = render(<SocialLinks />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('flex');
    });

    it('centers items vertically', () => {
      const { container } = render(<SocialLinks />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('items-center');
    });

    it('has gap between items', () => {
      const { container } = render(<SocialLinks />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('gap-3');
    });
  });

  describe('Link Order', () => {
    it('renders links in correct order: GitHub, LinkedIn, Email', () => {
      render(<SocialLinks />);
      const links = screen.getAllByRole('link');

      expect(links[0]).toHaveTextContent('GitHub');
      expect(links[1]).toHaveTextContent('LinkedIn');
      expect(links[2]).toHaveTextContent('Email');
    });
  });

  describe('Data Integration', () => {
    it('uses personal info from data constants', () => {
      render(<SocialLinks />);

      const githubLink = screen.getByText('GitHub').closest('a');
      const linkedinLink = screen.getByText('LinkedIn').closest('a');
      const emailLink = screen.getByText('Email').closest('a');

      expect(githubLink.href).toBe(dataConstants.personalInfo.github);
      expect(linkedinLink.href).toContain(dataConstants.personalInfo.linkedinUsername);
      expect(emailLink.href).toContain(dataConstants.personalInfo.email);
    });
  });

  describe('Icon and Text Layout', () => {
    it('each link contains both icon and text', () => {
      render(<SocialLinks />);

      const githubLink = screen.getByText('GitHub').closest('a');
      const linkedinLink = screen.getByText('LinkedIn').closest('a');
      const emailLink = screen.getByText('Email').closest('a');

      expect(githubLink).toContainElement(screen.getByTestId('github-icon'));
      expect(githubLink).toContainElement(screen.getByText('GitHub'));

      expect(linkedinLink).toContainElement(screen.getByTestId('linkedin-icon'));
      expect(linkedinLink).toContainElement(screen.getByText('LinkedIn'));

      expect(emailLink).toContainElement(screen.getByTestId('email-icon'));
      expect(emailLink).toContainElement(screen.getByText('Email'));
    });

    it('links display as flex with gap', () => {
      render(<SocialLinks />);

      const githubLink = screen.getByText('GitHub').closest('a');

      expect(githubLink).toHaveClass('flex', 'items-center', 'gap-2');
    });
  });

  describe('Hover Behavior', () => {
    it('links have hover transition classes', () => {
      render(<SocialLinks />);

      const links = screen.getAllByRole('link');

      links.forEach((link) => {
        expect(link).toHaveClass('transition-colors');
      });
    });

    it('links change color on hover', () => {
      render(<SocialLinks />);

      const links = screen.getAllByRole('link');

      links.forEach((link) => {
        expect(link).toHaveClass('hover:text-blue-400');
      });
    });
  });
});
