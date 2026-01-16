import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// Mock react-i18next
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

// Mock SocialLinks
vi.mock('./SocialLinks', () => ({
  default: () => <div data-testid="social-links">Social Links</div>,
}));

// Mock personalInfo data
vi.mock('../../constants/data', () => ({
  personalInfo: {
    repository: 'https://github.com/testuser/repo',
  },
}));

describe('Footer Component', () => {
  describe('Rendering', () => {
    it('renders the footer element', () => {
      const { container } = render(<Footer />);
      const footer = container.querySelector('footer');
      expect(footer).toBeInTheDocument();
    });

    it('renders social links component', () => {
      render(<Footer />);
      expect(screen.getByTestId('social-links')).toBeInTheDocument();
    });

    it('renders current year', () => {
      render(<Footer />);
      const currentYear = new Date().getFullYear();
      expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
    });

    it('renders copyright text', () => {
      render(<Footer />);
      expect(screen.getByText(/MARIANO/i)).toBeInTheDocument();
    });

    it('renders built with text', () => {
      render(<Footer />);
      expect(screen.getByText(/BUILT WITH REACT & VITE/i)).toBeInTheDocument();
    });

    it('renders view source link', () => {
      render(<Footer />);
      expect(screen.getByText(/view source code/i)).toBeInTheDocument();
    });
  });

  describe('Copyright Text', () => {
    it('displays current year dynamically', () => {
      render(<Footer />);
      const currentYear = new Date().getFullYear();
      const copyrightText = screen.getByText(new RegExp(`© ${currentYear}`));
      expect(copyrightText).toBeInTheDocument();
    });

    it('includes developer name', () => {
      render(<Footer />);
      expect(screen.getByText(/MARIANO/)).toBeInTheDocument();
    });

    it('converts built with text to uppercase', () => {
      render(<Footer />);
      const builtWithText = screen.getByText(/BUILT WITH REACT & VITE/);
      expect(builtWithText.textContent).toMatch(/[A-Z]/);
    });
  });

  describe('Repository Link', () => {
    it('renders repository link', () => {
      render(<Footer />);
      const repoLink = screen.getByRole('link', { name: /view source code/i });
      expect(repoLink).toBeInTheDocument();
    });

    it('has correct href from personalInfo', () => {
      render(<Footer />);
      const repoLink = screen.getByRole('link', { name: /view source code/i });
      expect(repoLink).toHaveAttribute('href', 'https://github.com/testuser/repo');
    });

    it('opens in new tab', () => {
      render(<Footer />);
      const repoLink = screen.getByRole('link', { name: /view source code/i });
      expect(repoLink).toHaveAttribute('target', '_blank');
    });

    it('has security attributes for external link', () => {
      render(<Footer />);
      const repoLink = screen.getByRole('link', { name: /view source code/i });
      expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('includes arrow icon', () => {
      render(<Footer />);
      const repoLink = screen.getByRole('link', { name: /view source code/i });
      expect(repoLink.textContent).toContain('→');
    });

    it('has hover transition', () => {
      render(<Footer />);
      const repoLink = screen.getByRole('link', { name: /view source code/i });
      expect(repoLink).toHaveClass('transition-colors', 'hover:text-blue-400');
    });
  });

  describe('Styling', () => {
    it('has border and background', () => {
      const { container } = render(<Footer />);
      const footer = container.querySelector('footer');
      expect(footer).toHaveClass('border-t', 'border-gray-800', 'bg-gray-900/80');
    });

    it('has proper padding', () => {
      const { container } = render(<Footer />);
      const footer = container.querySelector('footer');
      expect(footer).toHaveClass('py-3');
    });

    it('text is in gray color', () => {
      render(<Footer />);
      const copyrightDiv = screen.getByText(/MARIANO/).closest('div');
      expect(copyrightDiv?.parentElement).toHaveClass('text-gray-400');
    });

    it('text is small', () => {
      render(<Footer />);
      const copyrightText = screen.getByText(/MARIANO/);
      expect(copyrightText).toHaveClass('text-xs');
    });
  });

  describe('Layout', () => {
    it('uses flex layout', () => {
      const { container } = render(<Footer />);
      const flexContainer = container.querySelector('.flex.items-center.justify-between');
      expect(flexContainer).toBeInTheDocument();
    });

    it('is responsive - column on mobile, row on desktop', () => {
      const { container } = render(<Footer />);
      const flexContainer = container.querySelector('.flex.flex-col.md\\:flex-row');
      expect(flexContainer).toBeInTheDocument();
    });

    it('has proper gap between elements', () => {
      const { container } = render(<Footer />);
      const flexContainer = container.querySelector('.flex-col.md\\:flex-row');
      expect(flexContainer).toHaveClass('gap-3');
    });

    it('centers items on mobile', () => {
      const { container } = render(<Footer />);
      const flexContainer = container.querySelector('.flex-col.md\\:flex-row');
      expect(flexContainer).toHaveClass('items-center');
    });

    it('has max-width container', () => {
      const { container } = render(<Footer />);
      const innerContainer = container.querySelector('.max-w-7xl');
      expect(innerContainer).toBeInTheDocument();
    });

    it('has horizontal padding', () => {
      const { container } = render(<Footer />);
      const innerContainer = container.querySelector('.max-w-7xl');
      expect(innerContainer).toHaveClass('px-6');
    });
  });

  describe('Text Alignment', () => {
    it('text group is centered on mobile', () => {
      const { container } = render(<Footer />);
      const textGroup = container.querySelector('.flex.flex-col.items-center.md\\:items-end');
      expect(textGroup).toHaveClass('items-center');
    });

    it('text group aligns to end on desktop', () => {
      const { container } = render(<Footer />);
      const textGroup = container.querySelector('.flex.flex-col.items-center.md\\:items-end');
      expect(textGroup).toHaveClass('md:items-end');
    });

    it('text elements are stacked vertically', () => {
      const { container } = render(<Footer />);
      const textGroup = container.querySelector('.flex.flex-col');
      expect(textGroup).toBeInTheDocument();
    });

    it('text elements have gap', () => {
      const { container } = render(<Footer />);
      const textGroup = container.querySelector('.flex.flex-col.items-center.gap-1');
      expect(textGroup).toBeInTheDocument();
      expect(textGroup).toHaveClass('gap-1');
    });
  });

  describe('Accessibility', () => {
    it('uses semantic footer element', () => {
      const { container } = render(<Footer />);
      const footer = container.querySelector('footer');
      expect(footer).toBeInTheDocument();
    });

    it('repository link is accessible', () => {
      render(<Footer />);
      const link = screen.getByRole('link', { name: /view source code/i });
      expect(link).toBeInTheDocument();
    });

    it('repository link has descriptive text', () => {
      render(<Footer />);
      const link = screen.getByRole('link', { name: /view source code/i });
      expect(link.textContent).toBeTruthy();
      expect(link.textContent).not.toBe('');
    });
  });

  describe('Responsive Behavior', () => {
    it('social links come first in layout', () => {
      const { container } = render(<Footer />);
      const flexContainer = container.querySelector('.flex-col.md\\:flex-row');
      const firstChild = flexContainer?.firstChild;
      expect(firstChild).toHaveAttribute('data-testid', 'social-links');
    });

    it('copyright text comes after social links', () => {
      const { container } = render(<Footer />);
      const flexContainer = container.querySelector('.flex-col.md\\:flex-row');
      const children = flexContainer?.children;
      expect(children?.[0]).toHaveAttribute('data-testid', 'social-links');
      expect(children?.[1]).toHaveClass('flex-col');
    });
  });

  describe('Component Integration', () => {
    it('integrates SocialLinks component', () => {
      render(<Footer />);
      expect(screen.getByTestId('social-links')).toBeInTheDocument();
    });

    it('uses translated text from i18n', () => {
      render(<Footer />);
      expect(screen.getByText(/BUILT WITH REACT & VITE/i)).toBeInTheDocument();
      expect(screen.getByText(/view source code/i)).toBeInTheDocument();
    });

    it('uses repository URL from constants', () => {
      render(<Footer />);
      const repoLink = screen.getByRole('link', { name: /view source code/i });
      expect(repoLink).toHaveAttribute('href', 'https://github.com/testuser/repo');
    });
  });

  describe('Content Structure', () => {
    it('has two main sections', () => {
      const { container } = render(<Footer />);
      const mainFlex = container.querySelector('.flex-col.md\\:flex-row');
      expect(mainFlex?.children.length).toBe(2);
    });

    it('copyright section has two text elements', () => {
      const { container } = render(<Footer />);
      const textGroup = container.querySelector('.flex.flex-col.items-center.md\\:items-end');
      const textElements = textGroup?.children;
      expect(textElements?.length).toBe(2);
    });
  });

  describe('Year Updates', () => {
    it('year updates automatically', () => {
      const { rerender } = render(<Footer />);
      const year1 = new Date().getFullYear();
      expect(screen.getByText(new RegExp(year1.toString()))).toBeInTheDocument();

      // Year should remain current on rerender
      rerender(<Footer />);
      const year2 = new Date().getFullYear();
      expect(screen.getByText(new RegExp(year2.toString()))).toBeInTheDocument();
      expect(year1).toBe(year2);
    });
  });
});
