import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  describe('Rendering', () => {
    it('renders children content', () => {
      render(<Card>Test Content</Card>);
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders with default props', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('bg-white', 'dark:bg-gray-800');
      expect(card).toHaveClass('shadow-md');
      expect(card).toHaveClass('p-6');
      expect(card).toHaveClass('rounded-lg');
    });

    it('renders complex children', () => {
      render(
        <Card>
          <h2>Title</h2>
          <p>Description</p>
          <button>Action</button>
        </Card>
      );

      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders surface variant (default)', () => {
      const { container } = render(<Card variant="surface">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('bg-white', 'dark:bg-gray-800');
    });

    it('renders transparent variant', () => {
      const { container } = render(<Card variant="transparent">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('bg-transparent');
      expect(card).not.toHaveClass('bg-white');
    });

    it('renders background variant', () => {
      const { container } = render(<Card variant="background">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('bg-gray-900');
    });
  });

  describe('Shadow', () => {
    it('applies shadow by default', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('shadow-md');
    });

    it('applies shadow when shadow prop is true', () => {
      const { container } = render(<Card shadow={true}>Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('shadow-md');
    });

    it('removes shadow when shadow prop is false', () => {
      const { container } = render(<Card shadow={false}>Content</Card>);
      const card = container.firstChild;

      expect(card).not.toHaveClass('shadow-md');
    });
  });

  describe('Padding', () => {
    it('applies default padding', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('p-6');
    });

    it('applies custom padding', () => {
      const { container } = render(<Card padding="p-8">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('p-8');
      expect(card).not.toHaveClass('p-6');
    });

    it('applies no padding', () => {
      const { container } = render(<Card padding="p-0">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('p-0');
    });

    it('applies custom x-y padding', () => {
      const { container } = render(<Card padding="px-4 py-8">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('px-4', 'py-8');
    });
  });

  describe('Border Radius', () => {
    it('applies default rounded corners', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('rounded-lg');
    });

    it('applies custom rounded value', () => {
      const { container } = render(<Card rounded="rounded-xl">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('rounded-xl');
      expect(card).not.toHaveClass('rounded-lg');
    });

    it('applies no rounding', () => {
      const { container } = render(<Card rounded="rounded-none">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('rounded-none');
    });

    it('applies full rounding', () => {
      const { container } = render(<Card rounded="rounded-full">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('rounded-full');
    });
  });

  describe('Additional Classes', () => {
    it('applies custom className', () => {
      const { container } = render(<Card className="custom-class">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('custom-class');
    });

    it('combines custom className with default classes', () => {
      const { container } = render(<Card className="custom-class another-class">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('custom-class', 'another-class', 'p-6', 'rounded-lg');
    });

    it('preserves default classes when adding custom ones', () => {
      const { container } = render(<Card className="text-center">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('text-center', 'bg-white', 'shadow-md');
    });
  });

  describe('Height', () => {
    it('applies h-fit class by default', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('h-fit');
    });
  });

  describe('Additional Props', () => {
    it('forwards additional HTML attributes', () => {
      const { container } = render(
        <Card data-testid="custom-card" aria-label="Info Card">
          Content
        </Card>
      );
      const card = container.firstChild;

      expect(card).toHaveAttribute('data-testid', 'custom-card');
      expect(card).toHaveAttribute('aria-label', 'Info Card');
    });

    it('supports onClick handler', () => {
      const handleClick = vi.fn();
      const { container } = render(<Card onClick={handleClick}>Content</Card>);
      const card = container.firstChild;

      card.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('supports id attribute', () => {
      const { container } = render(<Card id="my-card">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveAttribute('id', 'my-card');
    });

    it('supports role attribute', () => {
      const { container } = render(<Card role="article">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveAttribute('role', 'article');
    });
  });

  describe('Complex Scenarios', () => {
    it('combines all custom props correctly', () => {
      const { container } = render(
        <Card
          variant="transparent"
          shadow={false}
          padding="p-8"
          rounded="rounded-xl"
          className="custom-class"
        >
          Content
        </Card>
      );
      const card = container.firstChild;

      expect(card).toHaveClass('bg-transparent');
      expect(card).not.toHaveClass('shadow-md');
      expect(card).toHaveClass('p-8');
      expect(card).toHaveClass('rounded-xl');
      expect(card).toHaveClass('custom-class');
    });

    it('renders as clickable card with hover effects', () => {
      const handleClick = vi.fn();
      const { container } = render(
        <Card onClick={handleClick} className="cursor-pointer hover:shadow-lg">
          Clickable Content
        </Card>
      );
      const card = container.firstChild;

      expect(card).toHaveClass('cursor-pointer');
      card.click();
      expect(handleClick).toHaveBeenCalled();
    });

    it('renders with nested Cards', () => {
      render(
        <Card variant="background" data-testid="outer">
          <h2>Outer Card</h2>
          <Card data-testid="inner">Inner Card</Card>
        </Card>
      );

      const outerCard = screen.getByTestId('outer');
      const innerCard = screen.getByTestId('inner');

      expect(outerCard).toContainElement(innerCard);
      expect(outerCard).toHaveClass('bg-gray-900');
      expect(innerCard).toHaveClass('bg-white');
    });
  });

  describe('Responsive Design', () => {
    it('applies responsive padding', () => {
      const { container } = render(<Card padding="p-4 md:p-8">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('p-4', 'md:p-8');
    });

    it('applies responsive rounding', () => {
      const { container } = render(<Card rounded="rounded md:rounded-lg">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('rounded', 'md:rounded-lg');
    });
  });

  describe('Accessibility', () => {
    it('renders as a div by default', () => {
      const { container } = render(<Card>Content</Card>);
      expect(container.firstChild.tagName).toBe('DIV');
    });

    it('supports aria attributes', () => {
      const { container } = render(
        <Card aria-labelledby="card-title" aria-describedby="card-desc">
          Content
        </Card>
      );
      const card = container.firstChild;

      expect(card).toHaveAttribute('aria-labelledby', 'card-title');
      expect(card).toHaveAttribute('aria-describedby', 'card-desc');
    });
  });

  describe('Dark Mode Support', () => {
    it('includes dark mode classes for surface variant', () => {
      const { container } = render(<Card variant="surface">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('dark:bg-gray-800');
    });

    it('does not include dark mode for transparent variant', () => {
      const { container } = render(<Card variant="transparent">Content</Card>);
      const card = container.firstChild;

      expect(card).toHaveClass('bg-transparent');
      expect(card).not.toHaveClass('dark:bg-gray-800');
    });
  });
});
