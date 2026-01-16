import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { EmailIcon, LocationIcon, ClockIcon, SendIcon } from './ContactIcons';

describe('ContactIcons', () => {
  describe('EmailIcon', () => {
    it('renders SVG element', () => {
      const { container } = render(<EmailIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('accepts className prop', () => {
      const { container } = render(<EmailIcon className="custom-class" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('custom-class');
    });

    it('has correct viewBox', () => {
      const { container } = render(<EmailIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    });

    it('has fill none and stroke currentColor', () => {
      const { container } = render(<EmailIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('fill', 'none');
      expect(svg).toHaveAttribute('stroke', 'currentColor');
    });

    it('renders path elements', () => {
      const { container } = render(<EmailIcon />);
      const paths = container.querySelectorAll('path');
      expect(paths.length).toBeGreaterThan(0);
    });
  });

  describe('LocationIcon', () => {
    it('renders SVG element', () => {
      const { container } = render(<LocationIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('accepts className prop', () => {
      const { container } = render(<LocationIcon className="test-class" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('test-class');
    });

    it('has correct viewBox', () => {
      const { container } = render(<LocationIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    });

    it('renders multiple path elements', () => {
      const { container } = render(<LocationIcon />);
      const paths = container.querySelectorAll('path');
      expect(paths.length).toBe(2);
    });

    it('has stroke attributes on paths', () => {
      const { container } = render(<LocationIcon />);
      const paths = container.querySelectorAll('path');
      paths.forEach((path) => {
        expect(path).toHaveAttribute('stroke-width', '2');
      });
    });
  });

  describe('ClockIcon', () => {
    it('renders SVG element', () => {
      const { container } = render(<ClockIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('accepts className prop', () => {
      const { container } = render(<ClockIcon className="clock-class" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('clock-class');
    });

    it('has correct viewBox', () => {
      const { container } = render(<ClockIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    });

    it('has fill none and stroke currentColor', () => {
      const { container } = render(<ClockIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('fill', 'none');
      expect(svg).toHaveAttribute('stroke', 'currentColor');
    });

    it('renders path elements', () => {
      const { container } = render(<ClockIcon />);
      const paths = container.querySelectorAll('path');
      expect(paths.length).toBeGreaterThan(0);
    });
  });

  describe('SendIcon', () => {
    it('renders SVG element', () => {
      const { container } = render(<SendIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('accepts className prop', () => {
      const { container } = render(<SendIcon className="send-class" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('send-class');
    });

    it('has correct viewBox', () => {
      const { container } = render(<SendIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    });

    it('has fill currentColor and stroke none', () => {
      const { container } = render(<SendIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('fill', 'currentColor');
      expect(svg).toHaveAttribute('stroke', 'none');
    });

    it('renders path element', () => {
      const { container } = render(<SendIcon />);
      const path = container.querySelector('path');
      expect(path).toBeInTheDocument();
    });
  });

  describe('Common Properties', () => {
    const icons = [
      { component: EmailIcon, name: 'EmailIcon' },
      { component: LocationIcon, name: 'LocationIcon' },
      { component: ClockIcon, name: 'ClockIcon' },
      { component: SendIcon, name: 'SendIcon' },
    ];

    icons.forEach(({ component: Icon, name }) => {
      describe(name, () => {
        it('renders without className', () => {
          const { container } = render(<Icon />);
          expect(container.querySelector('svg')).toBeInTheDocument();
        });

        it('applies multiple classNames', () => {
          const { container } = render(<Icon className="class1 class2 class3" />);
          const svg = container.querySelector('svg');
          expect(svg).toHaveClass('class1', 'class2', 'class3');
        });

        it('has viewBox attribute', () => {
          const { container } = render(<Icon />);
          const svg = container.querySelector('svg');
          expect(svg).toHaveAttribute('viewBox');
        });

        it('renders correctly with size classes', () => {
          const { container } = render(<Icon className="h-6 w-6" />);
          const svg = container.querySelector('svg');
          expect(svg).toHaveClass('h-6', 'w-6');
        });

        it('renders correctly with color classes', () => {
          const { container } = render(<Icon className="text-blue-500" />);
          const svg = container.querySelector('svg');
          expect(svg).toHaveClass('text-blue-500');
        });
      });
    });
  });

  describe('Stroke Icons Group', () => {
    const strokeIcons = [EmailIcon, LocationIcon, ClockIcon];

    strokeIcons.forEach((Icon) => {
      it('has stroke-based rendering', () => {
        const { container } = render(<Icon />);
        const svg = container.querySelector('svg');
        expect(svg).toHaveAttribute('stroke', 'currentColor');
      });
    });
  });

  describe('Fill Icon', () => {
    it('SendIcon has fill-based rendering', () => {
      const { container } = render(<SendIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('fill', 'currentColor');
    });
  });
});
