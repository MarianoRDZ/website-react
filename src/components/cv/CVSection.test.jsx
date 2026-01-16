import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CVSection from './CVSection';

describe('CVSection Component', () => {
  describe('Rendering', () => {
    it('renders section element', () => {
      const { container } = render(
        <CVSection title="Experience">
          <div>Content</div>
        </CVSection>
      );
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('renders title', () => {
      render(
        <CVSection title="Experience">
          <div>Content</div>
        </CVSection>
      );
      expect(screen.getByText('Experience')).toBeInTheDocument();
    });

    it('renders children content', () => {
      render(
        <CVSection title="Section">
          <div>Test Content</div>
        </CVSection>
      );
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders multiple children', () => {
      render(
        <CVSection title="Section">
          <div>First</div>
          <div>Second</div>
          <div>Third</div>
        </CVSection>
      );
      expect(screen.getByText('First')).toBeInTheDocument();
      expect(screen.getByText('Second')).toBeInTheDocument();
      expect(screen.getByText('Third')).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('applies correct title classes', () => {
      render(
        <CVSection title="Section">
          <div>Content</div>
        </CVSection>
      );
      const title = screen.getByText('Section');
      expect(title).toHaveClass(
        'mb-6',
        'border-b-2',
        'border-blue-600',
        'pb-2',
        'text-3xl',
        'font-bold',
        'text-gray-900',
        'dark:text-white'
      );
    });

    it('children render directly without wrapper', () => {
      const { container } = render(
        <CVSection title="Section">
          <div data-testid="content">Content</div>
        </CVSection>
      );
      const section = container.querySelector('section');
      const content = screen.getByTestId('content');
      expect(section).toContainElement(content);
    });
  });

  describe('Accessibility', () => {
    it('renders semantic HTML section element', () => {
      const { container } = render(
        <CVSection title="Section">
          <div>Content</div>
        </CVSection>
      );
      expect(container.querySelector('section')).toBeInTheDocument();
    });

    it('renders h2 heading for title', () => {
      render(
        <CVSection title="Section">
          <div>Content</div>
        </CVSection>
      );
      const heading = screen.getByText('Section');
      expect(heading.tagName).toBe('H2');
    });
  });
});
