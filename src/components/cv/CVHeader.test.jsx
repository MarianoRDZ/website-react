import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CVHeader from './CVHeader';

vi.mock('../../constants/data', () => ({
  personalInfo: {
    name: 'John Doe',
    title: 'Full Stack Developer',
  },
}));

vi.mock('./ContactInfo', () => ({
  default: () => <div data-testid="contact-info">Contact Info</div>,
}));

vi.mock('../common', () => ({
  Button: ({ children, href, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: 'en' },
  }),
}));

describe('CVHeader Component', () => {
  describe('Rendering', () => {
    it('renders name from personalInfo', () => {
      render(<CVHeader />);
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('renders title from personalInfo', () => {
      render(<CVHeader />);
      expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
    });

    it('renders ContactInfo component', () => {
      render(<CVHeader />);
      expect(screen.getByTestId('contact-info')).toBeInTheDocument();
    });

    it('renders download PDF button', () => {
      render(<CVHeader />);
      const button = screen.getByRole('link', { name: /cv.downloadPDF/ });
      expect(button).toBeInTheDocument();
    });

    it('download button has correct href', () => {
      render(<CVHeader />);
      const button = screen.getByRole('link', { name: /cv.downloadPDF/ });
      expect(button).toHaveAttribute('href', '/website-react/CV-Mariano-Rodriguez.pdf');
    });

    it('download button has download attribute', () => {
      render(<CVHeader />);
      const button = screen.getByRole('link', { name: /cv.downloadPDF/ });
      expect(button).toHaveAttribute('download');
    });
  });

  describe('Styling', () => {
    it('applies correct header wrapper classes', () => {
      const { container } = render(<CVHeader />);
      const header = container.firstChild;
      expect(header).toHaveClass('mb-8');
    });

    it('applies correct name classes', () => {
      render(<CVHeader />);
      const name = screen.getByText('John Doe');
      expect(name).toHaveClass('mb-2', 'text-4xl', 'font-bold', 'text-gray-900', 'dark:text-white');
    });

    it('applies correct title classes', () => {
      render(<CVHeader />);
      const title = screen.getByText('Full Stack Developer');
      expect(title).toHaveClass('mb-4', 'text-xl', 'text-gray-600', 'dark:text-gray-400');
    });

    it('applies correct button wrapper classes', () => {
      const { container } = render(<CVHeader />);
      const buttonWrapper = container.querySelector('.mt-4');
      expect(buttonWrapper).toBeInTheDocument();
    });
  });

  describe('Translation', () => {
    it('uses translation for download button text', () => {
      render(<CVHeader />);
      expect(screen.getByText('cv.downloadPDF')).toBeInTheDocument();
    });
  });

  describe('Component Integration', () => {
    it('renders ContactInfo component', () => {
      render(<CVHeader />);
      expect(screen.getByTestId('contact-info')).toBeInTheDocument();
    });

    it('renders Button component', () => {
      render(<CVHeader />);
      const button = screen.getByRole('link');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Data Integration', () => {
    it('uses personalInfo.name', () => {
      render(<CVHeader />);
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('uses personalInfo.title', () => {
      render(<CVHeader />);
      expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('uses semantic h1 for name', () => {
      render(<CVHeader />);
      const name = screen.getByText('John Doe');
      expect(name.tagName).toBe('H1');
    });

    it('uses semantic h2 for title', () => {
      render(<CVHeader />);
      const title = screen.getByText('Full Stack Developer');
      expect(title.tagName).toBe('H2');
    });

    it('download link is keyboard accessible', () => {
      render(<CVHeader />);
      const button = screen.getByRole('link');
      expect(button).toBeInTheDocument();
    });
  });

  describe('PDF Download', () => {
    it('PDF link points to correct path', () => {
      render(<CVHeader />);
      const button = screen.getByRole('link');
      expect(button.getAttribute('href')).toContain('CV-Mariano-Rodriguez.pdf');
    });

    it('PDF link has basename prefix', () => {
      render(<CVHeader />);
      const button = screen.getByRole('link');
      expect(button.getAttribute('href')).toContain('/website-react/');
    });
  });

  describe('Layout', () => {
    it('renders elements in correct order', () => {
      const { container } = render(<CVHeader />);
      const children = Array.from(container.firstChild.children);
      expect(children.length).toBeGreaterThan(0);
    });

    it('ContactInfo appears before download button', () => {
      const { container } = render(<CVHeader />);
      const contactInfo = screen.getByTestId('contact-info');
      const button = screen.getByRole('link');
      const elements = Array.from(container.querySelectorAll('*'));
      expect(elements.indexOf(contactInfo)).toBeLessThan(elements.indexOf(button));
    });
  });
});
