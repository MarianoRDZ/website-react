import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ChevronIcon from './ChevronIcon';

describe('ChevronIcon Component', () => {
  describe('Rendering', () => {
    it('renders SVG element', () => {
      const { container } = render(<ChevronIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders with correct default classes', () => {
      const { container } = render(<ChevronIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('mt-1', 'h-4', 'w-4', 'shrink-0');
    });

    it('renders path element', () => {
      const { container } = render(<ChevronIcon />);
      const path = container.querySelector('path');
      expect(path).toBeInTheDocument();
    });
  });

  describe('Props', () => {
    it('accepts custom className', () => {
      const { container } = render(<ChevronIcon className="custom-class" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('custom-class');
    });

    it('overrides default className', () => {
      const { container } = render(<ChevronIcon className="text-red-500" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('text-red-500');
    });
  });

  describe('SVG Attributes', () => {
    it('has correct viewBox', () => {
      const { container } = render(<ChevronIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    });

    it('has fill attribute set to none', () => {
      const { container } = render(<ChevronIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('fill', 'none');
    });

    it('path has correct d attribute', () => {
      const { container } = render(<ChevronIcon />);
      const path = container.querySelector('path');
      expect(path).toHaveAttribute('d');
      expect(path?.getAttribute('d')).toContain('M9');
    });
  });
});
