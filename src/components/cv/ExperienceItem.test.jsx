import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceItem from './ExperienceItem';

vi.mock('../common', () => ({
  Card: ({ children }) => <div data-testid="card">{children}</div>,
}));

vi.mock('./ChevronIcon', () => ({
  default: () => <span data-testid="chevron-icon">→</span>,
}));

describe('ExperienceItem Component', () => {
  const mockExperience = {
    title: 'Senior Full Stack Developer',
    company: 'Kopius',
    period: '2023 - Present',
    responsibilities: ['Led development team', 'Implemented CI/CD', 'Code reviews'],
  };

  describe('Rendering', () => {
    it('renders experience title', () => {
      render(<ExperienceItem {...mockExperience} />);
      expect(screen.getByText('Senior Full Stack Developer')).toBeInTheDocument();
    });

    it('renders company name', () => {
      render(<ExperienceItem {...mockExperience} />);
      expect(screen.getByText('Kopius')).toBeInTheDocument();
    });

    it('renders period', () => {
      render(<ExperienceItem {...mockExperience} />);
      expect(screen.getByText('2023 - Present')).toBeInTheDocument();
    });

    it('renders all responsibilities', () => {
      render(<ExperienceItem {...mockExperience} />);
      expect(screen.getByText('Led development team')).toBeInTheDocument();
      expect(screen.getByText('Implemented CI/CD')).toBeInTheDocument();
      expect(screen.getByText('Code reviews')).toBeInTheDocument();
    });

    it('renders chevron icons for each responsibility', () => {
      render(<ExperienceItem {...mockExperience} />);
      const chevrons = screen.getAllByTestId('chevron-icon');
      expect(chevrons.length).toBe(3);
    });

    it('renders with no responsibilities', () => {
      render(<ExperienceItem {...mockExperience} responsibilities={[]} />);
      expect(screen.getByText('Senior Full Stack Developer')).toBeInTheDocument();
      const chevrons = screen.queryAllByTestId('chevron-icon');
      expect(chevrons.length).toBe(0);
    });
  });

  describe('Styling', () => {
    it('applies correct title classes', () => {
      render(<ExperienceItem {...mockExperience} />);
      const title = screen.getByText('Senior Full Stack Developer');
      expect(title).toHaveClass('text-xl', 'font-semibold', 'text-gray-900', 'dark:text-white');
    });

    it('applies correct company classes', () => {
      render(<ExperienceItem {...mockExperience} />);
      const company = screen.getByText('Kopius');
      expect(company).toHaveClass('text-blue-600', 'dark:text-blue-400');
    });

    it('applies correct period classes', () => {
      render(<ExperienceItem {...mockExperience} />);
      const period = screen.getByText('2023 - Present');
      expect(period).toHaveClass('text-gray-600', 'dark:text-gray-400');
    });

    it('applies flex layout to responsibilities', () => {
      const { container } = render(<ExperienceItem {...mockExperience} />);
      const respItems = container.querySelectorAll('li.flex');
      expect(respItems.length).toBeGreaterThan(0);
    });
  });

  describe('Layout', () => {
    it('renders header section with flex layout', () => {
      const { container } = render(<ExperienceItem {...mockExperience} />);
      const header = container.querySelector('.flex.flex-wrap');
      expect(header).toBeInTheDocument();
    });

    it('renders responsibilities list with spacing', () => {
      const { container } = render(<ExperienceItem {...mockExperience} />);
      const list = container.querySelector('ul.space-y-2');
      expect(list).toBeInTheDocument();
    });
  });

  describe('Data Structure', () => {
    it('handles single responsibility', () => {
      render(<ExperienceItem {...mockExperience} responsibilities={['Single task']} />);
      const chevrons = screen.getAllByTestId('chevron-icon');
      expect(chevrons.length).toBe(1);
    });

    it('handles many responsibilities', () => {
      const manyResp = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'];
      render(<ExperienceItem {...mockExperience} responsibilities={manyResp} />);
      const chevrons = screen.getAllByTestId('chevron-icon');
      expect(chevrons.length).toBe(6);
    });
  });

  describe('Component Integration', () => {
    it('uses Card component', () => {
      render(<ExperienceItem {...mockExperience} />);
      expect(screen.getByTestId('card')).toBeInTheDocument();
    });

    it('uses ChevronIcon for each responsibility', () => {
      render(<ExperienceItem {...mockExperience} />);
      const chevrons = screen.getAllByTestId('chevron-icon');
      expect(chevrons.length).toBe(mockExperience.responsibilities.length);
    });
  });

  describe('Accessibility', () => {
    it('uses semantic list for responsibilities', () => {
      const { container } = render(<ExperienceItem {...mockExperience} />);
      const list = container.querySelector('ul');
      expect(list).toBeInTheDocument();
    });

    it('each responsibility is a list item', () => {
      const { container } = render(<ExperienceItem {...mockExperience} />);
      const items = container.querySelectorAll('li');
      expect(items.length).toBe(mockExperience.responsibilities.length);
    });

    it('title uses h3 heading', () => {
      render(<ExperienceItem {...mockExperience} />);
      const title = screen.getByText('Senior Full Stack Developer');
      expect(title.tagName).toBe('H3');
    });
  });
});
