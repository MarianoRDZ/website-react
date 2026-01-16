import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkillCard from './SkillCard';

vi.mock('../common', () => ({
  Card: ({ children }) => <div data-testid="card">{children}</div>,
}));

describe('SkillCard Component', () => {
  const mockTitle = 'Frontend Development';
  const mockSkills = ['React', 'Vue', 'Angular'];

  describe('Rendering', () => {
    it('renders skill title', () => {
      render(<SkillCard title={mockTitle} skills={mockSkills} />);
      expect(screen.getByText('Frontend Development')).toBeInTheDocument();
    });

    it('renders all skills', () => {
      render(<SkillCard title={mockTitle} skills={mockSkills} />);
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Vue')).toBeInTheDocument();
      expect(screen.getByText('Angular')).toBeInTheDocument();
    });

    it('renders empty skills array', () => {
      render(<SkillCard title="Backend" skills={[]} />);
      expect(screen.getByText('Backend')).toBeInTheDocument();
      expect(screen.queryByText('React')).not.toBeInTheDocument();
    });

    it('renders single skill', () => {
      render(<SkillCard title="Tools" skills={['Git']} />);
      expect(screen.getByText('Git')).toBeInTheDocument();
    });

    it('renders many skills', () => {
      const manySkills = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go'];
      render(<SkillCard title="Languages" skills={manySkills} />);
      manySkills.forEach((skill) => {
        expect(screen.getByText(skill)).toBeInTheDocument();
      });
    });
  });

  describe('Styling', () => {
    it('renders title with correct heading level', () => {
      render(<SkillCard title={mockTitle} skills={mockSkills} />);
      const title = screen.getByText('Frontend Development');
      expect(title.tagName).toBe('H3');
    });

    it('applies correct title classes', () => {
      render(<SkillCard title={mockTitle} skills={mockSkills} />);
      const title = screen.getByText('Frontend Development');
      expect(title).toHaveClass(
        'mb-3',
        'text-lg',
        'font-semibold',
        'text-gray-900',
        'dark:text-white'
      );
    });

    it('applies flex wrap layout to skills', () => {
      const { container } = render(<SkillCard title={mockTitle} skills={mockSkills} />);
      const skillsContainer = container.querySelector('.flex');
      expect(skillsContainer).toHaveClass('flex', 'flex-wrap', 'gap-2');
    });

    it('applies skill badge classes', () => {
      render(<SkillCard title={mockTitle} skills={['React']} />);
      const skill = screen.getByText('React');
      expect(skill).toHaveClass(
        'rounded-full',
        'bg-blue-100',
        'px-3',
        'py-1',
        'text-sm',
        'text-blue-800'
      );
    });
  });

  describe('Component Integration', () => {
    it('uses Card component', () => {
      render(<SkillCard title={mockTitle} skills={mockSkills} />);
      expect(screen.getByTestId('card')).toBeInTheDocument();
    });

    it('renders skills as span elements', () => {
      const { container } = render(<SkillCard title={mockTitle} skills={mockSkills} />);
      const skills = container.querySelectorAll('span');
      expect(skills.length).toBe(mockSkills.length);
    });
  });

  describe('Edge Cases', () => {
    it('handles special characters in skill names', () => {
      const specialSkills = ['React.js', 'Node.js', 'ASP.NET Core'];
      render(<SkillCard title="Frameworks" skills={specialSkills} />);
      expect(screen.getByText('React.js')).toBeInTheDocument();
      expect(screen.getByText('Node.js')).toBeInTheDocument();
      expect(screen.getByText('ASP.NET Core')).toBeInTheDocument();
    });

    it('renders skills in order', () => {
      const { container } = render(<SkillCard title={mockTitle} skills={mockSkills} />);
      const spans = Array.from(container.querySelectorAll('span'));
      const texts = spans.map((span) => span.textContent);
      expect(texts).toEqual(['React', 'Vue', 'Angular']);
    });
  });
});
