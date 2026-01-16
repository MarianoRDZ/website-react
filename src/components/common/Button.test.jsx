import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders with children text', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('renders with default props', () => {
      render(<Button>Default Button</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveAttribute('type', 'button');
      expect(button).not.toBeDisabled();
    });

    it('applies custom className', () => {
      render(<Button className="custom-class">Button</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('custom-class');
    });

    it('renders with displayName', () => {
      expect(Button.displayName).toBe('Button');
    });
  });

  describe('Variants', () => {
    it('renders primary variant correctly', () => {
      render(<Button variant="primary">Primary</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('bg-blue-600', 'text-white');
    });

    it('renders secondary variant correctly', () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('bg-background-surface', 'text-text-primary');
    });

    it('renders outline variant correctly', () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('bg-transparent', 'text-accent', 'border-accent');
    });

    it('renders ghost variant correctly', () => {
      render(<Button variant="ghost">Ghost</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('bg-transparent', 'text-text-secondary');
    });
  });

  describe('Sizes', () => {
    it('renders small size correctly', () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('px-sm', 'py-xs', 'text-sm', 'h-8');
    });

    it('renders medium size correctly', () => {
      render(<Button size="md">Medium</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('px-md', 'py-sm', 'h-10');
    });

    it('renders large size correctly (default)', () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('px-lg', 'py-md', 'h-12');
    });

    it('renders extra large size correctly', () => {
      render(<Button size="xl">Extra Large</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('px-xl', 'h-[48px]');
    });
  });

  describe('Button Types', () => {
    it('renders as submit button', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('renders as reset button', () => {
      render(<Button type="reset">Reset</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });

    it('renders as button by default', () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });
  });

  describe('Disabled State', () => {
    it('disables button when disabled prop is true', () => {
      render(<Button disabled>Disabled Button</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('does not call onClick when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <Button disabled onClick={handleClick}>
          Disabled Button
        </Button>
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('applies disabled styles', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed');
    });
  });

  describe('Loading State', () => {
    it('shows loading spinner when loading is true', () => {
      render(<Button loading>Loading Button</Button>);

      expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
      expect(screen.queryByText('Loading Button')).not.toBeInTheDocument();
    });

    it('disables button when loading', () => {
      render(<Button loading>Loading</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('does not call onClick when loading', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <Button loading onClick={handleClick}>
          Loading
        </Button>
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('renders spinner with correct animation class', () => {
      const { container } = render(<Button loading>Loading</Button>);
      const spinner = container.querySelector('.animate-spin');

      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveClass('rounded-full', 'border-2');
    });
  });

  describe('Icons', () => {
    const LeftIcon = () => <svg data-testid="left-icon">L</svg>;
    const RightIcon = () => <svg data-testid="right-icon">R</svg>;

    it('renders left icon', () => {
      render(<Button leftIcon={<LeftIcon />}>With Left Icon</Button>);

      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
      expect(screen.getByText('With Left Icon')).toBeInTheDocument();
    });

    it('renders right icon', () => {
      render(<Button rightIcon={<RightIcon />}>With Right Icon</Button>);

      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
      expect(screen.getByText('With Right Icon')).toBeInTheDocument();
    });

    it('renders both icons', () => {
      render(
        <Button leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>
          With Both Icons
        </Button>
      );

      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('does not render icons when loading', () => {
      render(
        <Button loading leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>
          Loading
        </Button>
      );

      expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
    });
  });

  describe('Full Width', () => {
    it('applies full width class when fullWidth is true', () => {
      render(<Button fullWidth>Full Width</Button>);
      expect(screen.getByRole('button')).toHaveClass('w-full');
    });

    it('does not apply full width class by default', () => {
      render(<Button>Normal Width</Button>);
      expect(screen.getByRole('button')).not.toHaveClass('w-full');
    });
  });

  describe('Click Handler', () => {
    it('calls onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click Me</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick multiple times', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click Me</Button>);
      const button = screen.getByRole('button');

      await user.click(button);
      await user.click(button);
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it('works without onClick handler', async () => {
      const user = userEvent.setup();

      render(<Button>No Handler</Button>);

      // Should not throw error
      await expect(user.click(screen.getByRole('button'))).resolves.not.toThrow();
    });
  });

  describe('Forward Ref', () => {
    it('forwards ref to button element', () => {
      const ref = { current: null };

      render(<Button ref={ref}>Button with Ref</Button>);

      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
      expect(ref.current).toBe(screen.getByRole('button'));
    });

    it('can access ref methods', () => {
      const ref = { current: null };

      render(<Button ref={ref}>Button</Button>);

      expect(ref.current.focus).toBeDefined();
      expect(ref.current.blur).toBeDefined();
    });
  });

  describe('Additional Props', () => {
    it('forwards additional HTML attributes', () => {
      render(
        <Button data-testid="custom-button" aria-label="Custom Label">
          Button
        </Button>
      );

      const button = screen.getByTestId('custom-button');
      expect(button).toHaveAttribute('aria-label', 'Custom Label');
    });

    it('forwards data attributes', () => {
      render(<Button data-analytics="button-click">Analytics Button</Button>);

      expect(screen.getByRole('button')).toHaveAttribute('data-analytics', 'button-click');
    });

    it('supports aria-describedby', () => {
      render(<Button aria-describedby="description">Accessible Button</Button>);

      expect(screen.getByRole('button')).toHaveAttribute('aria-describedby', 'description');
    });
  });

  describe('Focus Management', () => {
    it('applies focus-visible styles', () => {
      render(<Button>Focus Me</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass(
        'focus-visible:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-accent'
      );
    });

    it('can be focused programmatically', () => {
      const ref = { current: null };
      render(<Button ref={ref}>Button</Button>);

      ref.current.focus();
      expect(ref.current).toHaveFocus();
    });
  });

  describe('Accessibility', () => {
    it('has correct role', () => {
      render(<Button>Accessible Button</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('supports keyboard interaction', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Keyboard Button</Button>);
      const button = screen.getByRole('button');

      button.focus();
      await user.keyboard('{Enter}');

      expect(handleClick).toHaveBeenCalled();
    });

    it('indicates disabled state to screen readers', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('disabled');
    });

    it('provides loading state context', () => {
      render(<Button loading>Loading</Button>);

      // Loading text is visible
      expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
      // Button is disabled during loading
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('Complex Scenarios', () => {
    it('combines multiple props correctly', () => {
      const handleClick = vi.fn();
      const LeftIcon = () => <svg data-testid="icon">Icon</svg>;

      render(
        <Button
          variant="outline"
          size="md"
          leftIcon={<LeftIcon />}
          onClick={handleClick}
          className="custom-class"
          fullWidth
        >
          Complex Button
        </Button>
      );

      const button = screen.getByRole('button');

      expect(button).toHaveClass('bg-transparent', 'text-accent', 'custom-class', 'w-full');
      expect(button).toHaveClass('px-md', 'py-sm', 'h-10');
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Complex Button')).toBeInTheDocument();
    });

    it('handles variant and size transitions', () => {
      const { rerender } = render(
        <Button variant="primary" size="sm">
          Button
        </Button>
      );
      let button = screen.getByRole('button');

      expect(button).toHaveClass('bg-blue-600', 'h-8');

      rerender(
        <Button variant="secondary" size="lg">
          Button
        </Button>
      );
      button = screen.getByRole('button');

      expect(button).toHaveClass('bg-background-surface', 'h-12');
    });

    it('handles state changes correctly', () => {
      const { rerender } = render(<Button>Normal</Button>);
      let button = screen.getByRole('button');

      expect(button).not.toBeDisabled();
      expect(screen.getByText('Normal')).toBeInTheDocument();

      rerender(<Button loading>Loading</Button>);
      button = screen.getByRole('button');

      expect(button).toBeDisabled();
      expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
      expect(screen.queryByText('Loading')).not.toBeInTheDocument();
    });
  });
});
