import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactInfo from './ContactInfo';

vi.mock('../../constants/data', () => ({
  personalInfo: {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    location: 'Buenos Aires, Argentina',
    linkedin: 'https://linkedin.com/in/johndoe',
  },
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: 'en' },
  }),
}));

describe('ContactInfo Component', () => {
  describe('Rendering', () => {
    it('renders all contact information', () => {
      render(<ContactInfo />);
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
      expect(screen.getByText('+1234567890')).toBeInTheDocument();
      expect(screen.getByText('Buenos Aires, Argentina')).toBeInTheDocument();
    });

    it('renders email label', () => {
      render(<ContactInfo />);
      expect(screen.getByText('cv.email')).toBeInTheDocument();
    });

    it('renders phone label', () => {
      render(<ContactInfo />);
      expect(screen.getByText('cv.phone')).toBeInTheDocument();
    });

    it('renders location label', () => {
      render(<ContactInfo />);
      expect(screen.getByText('cv.location')).toBeInTheDocument();
    });

    it('renders LinkedIn link with correct href', () => {
      render(<ContactInfo />);
      const linkedinLink = screen.getByRole('link');
      expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/johndoe');
    });

    it('renders LinkedIn link with target _blank', () => {
      render(<ContactInfo />);
      const linkedinLink = screen.getByRole('link');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
    });

    it('renders LinkedIn link with rel noopener noreferrer', () => {
      render(<ContactInfo />);
      const linkedinLink = screen.getByRole('link');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders LinkedIn label', () => {
      render(<ContactInfo />);
      expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('applies correct wrapper classes', () => {
      const { container } = render(<ContactInfo />);
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('flex', 'flex-wrap', 'gap-4', 'text-sm');
    });

    it('renders contact items with correct separator', () => {
      const { container } = render(<ContactInfo />);
      const separators = container.querySelectorAll('.text-gray-400');
      expect(separators.length).toBeGreaterThan(0);
    });
  });

  describe('Links', () => {
    it('renders LinkedIn as clickable link', () => {
      render(<ContactInfo />);
      const link = screen.getByRole('link');
      expect(link.tagName).toBe('A');
    });

    it('LinkedIn link has hover styles', () => {
      render(<ContactInfo />);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('text-blue-400', 'hover:text-blue-300', 'transition-colors');
    });
  });

  describe('Accessibility', () => {
    it('LinkedIn link opens in new tab securely', () => {
      render(<ContactInfo />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Data Integration', () => {
    it('uses personalInfo from constants', () => {
      render(<ContactInfo />);
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
      expect(screen.getByText('+1234567890')).toBeInTheDocument();
      expect(screen.getByText('Buenos Aires, Argentina')).toBeInTheDocument();
    });

    it('uses translation keys for labels', () => {
      render(<ContactInfo />);
      expect(screen.getByText('cv.email')).toBeInTheDocument();
      expect(screen.getByText('cv.phone')).toBeInTheDocument();
      expect(screen.getByText('cv.location')).toBeInTheDocument();
    });
  });
});
