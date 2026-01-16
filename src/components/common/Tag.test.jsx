import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tag from './Tag';

describe('Tag Component', () => {
  describe('Rendering', () => {
    it('renders children content', () => {
      render(<Tag>React</Tag>);
      expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('renders with default props', () => {
      render(<Tag>TypeScript</Tag>);
      const tag = screen.getByText('TypeScript');

      expect(tag).toHaveClass('bg-transparent', 'text-accent', 'border-accent');
      expect(tag).toHaveClass('px-md', 'py-sm', 'text-sm');
    });

    it('renders text in uppercase', () => {
      render(<Tag>react native</Tag>);
      const tag = screen.getByText('react native');

      expect(tag).toHaveClass('uppercase');
    });
  });

  describe('Variants', () => {
    it('renders outline variant (default)', () => {
      render(<Tag variant="outline">Outline</Tag>);
      const tag = screen.getByText('Outline');

      expect(tag).toHaveClass('bg-transparent', 'text-accent', 'border-accent');
    });

    it('renders solid variant', () => {
      render(<Tag variant="solid">Solid</Tag>);
      const tag = screen.getByText('Solid');

      expect(tag).toHaveClass('bg-accent', 'text-background');
    });

    it('renders subtle variant', () => {
      render(<Tag variant="subtle">Subtle</Tag>);
      const tag = screen.getByText('Subtle');

      expect(tag).toHaveClass('bg-accent/10', 'text-accent');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Tag size="sm">Small</Tag>);
      const tag = screen.getByText('Small');

      expect(tag).toHaveClass('px-sm', 'py-xs', 'text-xs', 'rounded-full');
    });

    it('renders medium size (default)', () => {
      render(<Tag size="md">Medium</Tag>);
      const tag = screen.getByText('Medium');

      expect(tag).toHaveClass('px-md', 'py-sm', 'text-sm', 'rounded-full');
    });

    it('renders large size', () => {
      render(<Tag size="lg">Large</Tag>);
      const tag = screen.getByText('Large');

      expect(tag).toHaveClass('px-lg', 'py-sm', 'text-body', 'rounded-full');
    });
  });

  describe('Interactive Tags', () => {
    it('renders as span when onClick is not provided', () => {
      render(<Tag>Non-interactive</Tag>);
      const tag = screen.getByText('Non-interactive');

      expect(tag.tagName).toBe('SPAN');
    });

    it('renders as button when onClick is provided', () => {
      const handleClick = vi.fn();
      render(<Tag onClick={handleClick}>Interactive</Tag>);
      const tag = screen.getByRole('button');

      expect(tag).toBeInTheDocument();
      expect(tag.tagName).toBe('BUTTON');
    });

    it('calls onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Tag onClick={handleClick}>Click Me</Tag>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick multiple times', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Tag onClick={handleClick}>Click Me</Tag>);
      const button = screen.getByRole('button');

      await user.click(button);
      await user.click(button);
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it('applies hover styles when interactive', () => {
      const handleClick = vi.fn();
      render(<Tag onClick={handleClick}>Hover Me</Tag>);
      const tag = screen.getByRole('button');

      expect(tag).toHaveClass('cursor-pointer', 'transition-colors');
    });

    it('does not apply hover styles when not interactive', () => {
      render(<Tag>Static</Tag>);
      const tag = screen.getByText('Static');

      expect(tag).not.toHaveClass('cursor-pointer');
    });

    it('has button type when interactive', () => {
      const handleClick = vi.fn();
      render(<Tag onClick={handleClick}>Button</Tag>);
      const button = screen.getByRole('button');

      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('Additional Classes', () => {
    it('applies custom className', () => {
      render(<Tag className="custom-class">Tag</Tag>);
      const tag = screen.getByText('Tag');

      expect(tag).toHaveClass('custom-class');
    });

    it('combines custom className with default classes', () => {
      render(<Tag className="mx-2 font-bold">Tag</Tag>);
      const tag = screen.getByText('Tag');

      expect(tag).toHaveClass('mx-2', 'font-bold', 'uppercase', 'rounded-full');
    });
  });

  describe('Additional Props', () => {
    it('forwards additional HTML attributes', () => {
      render(
        <Tag data-testid="custom-tag" aria-label="Technology Tag">
          React
        </Tag>
      );
      const tag = screen.getByTestId('custom-tag');

      expect(tag).toHaveAttribute('aria-label', 'Technology Tag');
    });

    it('supports data attributes', () => {
      render(<Tag data-category="frontend">React</Tag>);
      const tag = screen.getByText('React');

      expect(tag).toHaveAttribute('data-category', 'frontend');
    });

    it('forwards props to button when interactive', () => {
      const handleClick = vi.fn();
      render(
        <Tag onClick={handleClick} data-testid="interactive-tag" aria-label="Click me">
          Button Tag
        </Tag>
      );
      const button = screen.getByRole('button');

      expect(button).toHaveAttribute('data-testid', 'interactive-tag');
      expect(button).toHaveAttribute('aria-label', 'Click me');
    });
  });

  describe('Accessibility', () => {
    it('non-interactive tag has no role', () => {
      render(<Tag>Static Tag</Tag>);
      const tag = screen.getByText('Static Tag');

      expect(tag).not.toHaveAttribute('role');
    });

    it('interactive tag has button role', () => {
      const handleClick = vi.fn();
      render(<Tag onClick={handleClick}>Interactive</Tag>);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('supports keyboard interaction when interactive', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Tag onClick={handleClick}>Keyboard Tag</Tag>);
      const button = screen.getByRole('button');

      button.focus();
      await user.keyboard('{Enter}');

      expect(handleClick).toHaveBeenCalled();
    });

    it('can be focused when interactive', () => {
      const handleClick = vi.fn();
      render(<Tag onClick={handleClick}>Focus Me</Tag>);
      const button = screen.getByRole('button');

      button.focus();
      expect(button).toHaveFocus();
    });

    it('cannot be focused when not interactive', () => {
      render(<Tag>Non-focusable</Tag>);
      const tag = screen.getByText('Non-focusable');

      expect(tag.tabIndex).toBe(-1);
    });
  });

  describe('Complex Scenarios', () => {
    it('combines all custom props correctly', () => {
      const handleClick = vi.fn();

      render(
        <Tag
          variant="solid"
          size="lg"
          onClick={handleClick}
          className="shadow-lg"
          data-testid="complex-tag"
        >
          Complex Tag
        </Tag>
      );

      const button = screen.getByRole('button');

      expect(button).toHaveClass('bg-accent', 'text-background');
      expect(button).toHaveClass('px-lg', 'py-sm', 'text-body');
      expect(button).toHaveClass('shadow-lg', 'cursor-pointer');
      expect(button).toHaveAttribute('data-testid', 'complex-tag');
    });

    it('renders multiple tags in a list', () => {
      const tags = ['React', 'TypeScript', 'Node.js'];

      render(
        <div>
          {tags.map((tag) => (
            <Tag key={tag} variant="outline">
              {tag}
            </Tag>
          ))}
        </div>
      );

      tags.forEach((tag) => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });

    it('handles variant and size changes', () => {
      const { rerender } = render(
        <Tag variant="outline" size="sm">
          Tag
        </Tag>
      );
      let tag = screen.getByText('Tag');

      expect(tag).toHaveClass('bg-transparent', 'text-xs');

      rerender(
        <Tag variant="solid" size="lg">
          Tag
        </Tag>
      );
      tag = screen.getByText('Tag');

      expect(tag).toHaveClass('bg-accent', 'text-body');
    });

    it('toggles between interactive and static', () => {
      const handleClick = vi.fn();
      const { rerender } = render(<Tag onClick={handleClick}>Tag</Tag>);

      expect(screen.getByRole('button')).toBeInTheDocument();

      rerender(<Tag>Tag</Tag>);

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
      expect(screen.getByText('Tag')).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('has rounded-full shape', () => {
      render(<Tag>Round Tag</Tag>);
      const tag = screen.getByText('Round Tag');

      expect(tag).toHaveClass('rounded-full');
    });

    it('prevents text wrapping', () => {
      render(<Tag>Long Tag Name That Should Not Wrap</Tag>);
      const tag = screen.getByText('Long Tag Name That Should Not Wrap');

      expect(tag).toHaveClass('whitespace-nowrap');
    });

    it('has uppercase tracking', () => {
      render(<Tag>tracking</Tag>);
      const tag = screen.getByText('tracking');

      expect(tag).toHaveClass('tracking-wide');
    });

    it('displays as inline-flex', () => {
      render(<Tag>Flex Tag</Tag>);
      const tag = screen.getByText('Flex Tag');

      expect(tag).toHaveClass('inline-flex', 'items-center', 'justify-center');
    });
  });
});
