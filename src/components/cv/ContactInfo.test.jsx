import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactInfo from './ContactInfo';

vi.mock('../../constants/data', () => ({
  personalInfo: {
    email: 'john@example.com',
    phone: '+1234567890',
    location: 'Buenos Aires, Argentina',
    linkedinUsername: 'johndoe',
  },
}));

describe('ContactInfo Component', () => {
  describe('Rendering', () => {
    it('renders all contact information', () => {
      render(<ContactInfo />);
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
      expect(screen.getByText('+1234567890')).toBeInTheDocument();
      expect(screen.getByText('Buenos Aires, Argentina')).toBeInTheDocument();
    });

    it('renders email as mailto link', () => {
      render(<ContactInfo />);
      const emailLink = screen.getByText('john@example.com');
      expect(emailLink).toHaveAttribute('href', 'mailto:john@example.com');
    });

    it('renders LinkedIn link with correct href', () => {
      render(<ContactInfo />);
      const linkedinLink = screen.getByText('linkedin.com/in/johndoe');
      expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/johndoe');
    });

    it('LinkedIn link opens in new tab', () => {
      render(<ContactInfo />);
      const linkedinLink = screen.getByText('linkedin.com/in/johndoe');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Styling', () => {
    it('applies correct wrapper classes', () => {
      const { container } = render(<ContactInfo />);
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('flex', 'flex-wrap', 'text-sm');
    });

    it('renders separator dots', () => {
      const { container } = render(<ContactInfo />);
      const spans = Array.from(container.querySelectorAll('span'));
      const separators = spans.filter((span) => span.textContent === '•');
      expect(separators.length).toBeGreaterThan(0);
    });
  });

  describe('Links', () => {
    it('email link has hover styles', () => {
      render(<ContactInfo />);
      const emailLink = screen.getByText('john@example.com');
      expect(emailLink).toHaveClass('hover:text-blue-600', 'dark:hover:text-blue-400');
    });

    it('LinkedIn link has hover styles', () => {
      render(<ContactInfo />);
      const linkedinLink = screen.getByText('linkedin.com/in/johndoe');
      expect(linkedinLink).toHaveClass('hover:text-blue-600', 'dark:hover:text-blue-400');
    });
  });

  describe('Data Integration', () => {
    it('uses personalInfo from constants', () => {
      render(<ContactInfo />);
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
      expect(screen.getByText('+1234567890')).toBeInTheDocument();
      expect(screen.getByText('Buenos Aires, Argentina')).toBeInTheDocument();
      expect(screen.getByText('linkedin.com/in/johndoe')).toBeInTheDocument();
    });
  });
});
