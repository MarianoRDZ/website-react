import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input Component', () => {
  describe('Rendering', () => {
    it('renders basic input', () => {
      render(<Input placeholder="Enter text" />);
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('renders with default props', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('type', 'text');
      expect(input).not.toBeDisabled();
    });

    it('applies custom className', () => {
      render(<Input className="custom-class" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('custom-class');
    });

    it('renders with displayName', () => {
      expect(Input.displayName).toBe('Input');
    });
  });

  describe('Label', () => {
    it('renders with label', () => {
      render(<Input label="Username" />);
      expect(screen.getByText('Username')).toBeInTheDocument();
    });

    it('associates label with input', () => {
      render(<Input label="Email" id="email-input" />);
      const label = screen.getByText('Email');

      expect(label.tagName).toBe('LABEL');
      expect(label).toHaveClass('mb-sm', 'block', 'text-sm', 'font-medium');
    });

    it('renders without label when not provided', () => {
      const { container } = render(<Input />);
      const label = container.querySelector('label');

      expect(label).not.toBeInTheDocument();
    });
  });

  describe('Input Types', () => {
    it('renders as text input by default', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
    });

    it('renders as email input', () => {
      render(<Input type="email" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('type', 'email');
    });

    it('renders as password input', () => {
      render(<Input type="password" />);
      const input = document.querySelector('input[type="password"]');

      expect(input).toBeInTheDocument();
    });

    it('renders as number input', () => {
      render(<Input type="number" />);
      const input = screen.getByRole('spinbutton');

      expect(input).toHaveAttribute('type', 'number');
    });

    it('renders as search input', () => {
      render(<Input type="search" />);
      const input = screen.getByRole('searchbox');

      expect(input).toHaveAttribute('type', 'search');
    });
  });

  describe('Sizes', () => {
    it('renders small size correctly', () => {
      render(<Input size="sm" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('px-sm', 'py-xs', 'text-sm', 'h-8');
    });

    it('renders medium size correctly', () => {
      render(<Input size="md" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('px-md', 'py-sm', 'h-10');
    });

    it('renders large size correctly (default)', () => {
      render(<Input size="lg" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('px-lg', 'py-md', 'h-12');
    });
  });

  describe('Error State', () => {
    it('displays error message', () => {
      render(<Input error="This field is required" />);

      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('applies error styles', () => {
      render(<Input error="Error message" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('border-red-500');
    });

    it('shows error text in red', () => {
      render(<Input error="Error" />);
      const errorText = screen.getByText('Error');

      expect(errorText).toHaveClass('text-red-500');
    });

    it('prioritizes error over helperText', () => {
      render(<Input error="Error message" helperText="Helper text" />);

      expect(screen.getByText('Error message')).toBeInTheDocument();
      expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
    });
  });

  describe('Helper Text', () => {
    it('displays helper text', () => {
      render(<Input helperText="Enter your email address" />);

      expect(screen.getByText('Enter your email address')).toBeInTheDocument();
    });

    it('shows helper text in gray', () => {
      render(<Input helperText="Helper" />);
      const helperText = screen.getByText('Helper');

      expect(helperText).toHaveClass('text-gray-400');
    });

    it('renders without helper text when not provided', () => {
      const { container } = render(<Input />);
      const helperElement = container.querySelector('.text-sm');

      expect(helperElement).not.toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    const LeftIcon = () => <svg data-testid="left-icon">L</svg>;
    const RightIcon = () => <svg data-testid="right-icon">R</svg>;

    it('renders left icon', () => {
      render(<Input leftIcon={<LeftIcon />} />);

      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    });

    it('renders right icon', () => {
      render(<Input rightIcon={<RightIcon />} />);

      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('renders both icons', () => {
      render(<Input leftIcon={<LeftIcon />} rightIcon={<RightIcon />} />);

      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('adjusts padding when left icon is present', () => {
      render(<Input leftIcon={<LeftIcon />} />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('pl-10');
    });

    it('adjusts padding when right icon is present', () => {
      render(<Input rightIcon={<RightIcon />} />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('pr-10');
    });

    it('positions left icon correctly', () => {
      const { container } = render(<Input leftIcon={<LeftIcon />} />);
      const iconContainer = screen.getByTestId('left-icon').parentElement;

      expect(iconContainer).toHaveClass('left-3', 'pointer-events-none');
    });

    it('positions right icon correctly', () => {
      const { container } = render(<Input rightIcon={<RightIcon />} />);
      const iconContainer = screen.getByTestId('right-icon').parentElement;

      expect(iconContainer).toHaveClass('right-3', 'pointer-events-none');
    });
  });

  describe('Full Width', () => {
    it('applies full width to input when fullWidth is true', () => {
      render(<Input fullWidth />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('w-full');
    });

    it('applies full width to container when fullWidth is true', () => {
      const { container } = render(<Input fullWidth />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('w-full');
    });

    it('does not apply full width by default', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');

      expect(input).not.toHaveClass('w-full');
    });
  });

  describe('Container ClassName', () => {
    it('applies custom container className', () => {
      const { container } = render(<Input containerClassName="custom-container" />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('custom-container');
    });

    it('combines container classes correctly', () => {
      const { container } = render(<Input containerClassName="custom-container" fullWidth />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('custom-container', 'w-full', 'relative');
    });
  });

  describe('Disabled State', () => {
    it('disables input when disabled prop is true', () => {
      render(<Input disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('applies disabled styles', () => {
      render(<Input disabled />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed');
    });
  });

  describe('User Interaction', () => {
    it('accepts user input', async () => {
      const user = userEvent.setup();
      render(<Input />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'Hello World');
      expect(input).toHaveValue('Hello World');
    });

    it('calls onChange handler', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Input onChange={handleChange} />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'a');
      expect(handleChange).toHaveBeenCalled();
    });

    it('handles focus and blur events', async () => {
      const handleFocus = vi.fn();
      const handleBlur = vi.fn();
      const user = userEvent.setup();

      render(<Input onFocus={handleFocus} onBlur={handleBlur} />);
      const input = screen.getByRole('textbox');

      await user.click(input);
      expect(handleFocus).toHaveBeenCalled();

      await user.tab();
      expect(handleBlur).toHaveBeenCalled();
    });
  });

  describe('Forward Ref', () => {
    it('forwards ref to input element', () => {
      const ref = { current: null };
      render(<Input ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current).toBe(screen.getByRole('textbox'));
    });

    it('can access ref methods', () => {
      const ref = { current: null };
      render(<Input ref={ref} />);

      expect(ref.current.focus).toBeDefined();
      expect(ref.current.select).toBeDefined();
    });

    it('can focus input programmatically', () => {
      const ref = { current: null };
      render(<Input ref={ref} />);

      ref.current.focus();
      expect(ref.current).toHaveFocus();
    });
  });

  describe('Additional Props', () => {
    it('forwards additional HTML attributes', () => {
      render(
        <Input data-testid="custom-input" aria-label="Custom Label" placeholder="Enter text" />
      );

      const input = screen.getByTestId('custom-input');
      expect(input).toHaveAttribute('aria-label', 'Custom Label');
      expect(input).toHaveAttribute('placeholder', 'Enter text');
    });

    it('supports required attribute', () => {
      render(<Input required />);
      expect(screen.getByRole('textbox')).toBeRequired();
    });

    it('supports readonly attribute', () => {
      render(<Input readOnly />);
      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    });

    it('supports maxLength attribute', () => {
      render(<Input maxLength={10} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('maxLength', '10');
    });
  });

  describe('Accessibility', () => {
    it('has correct role', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('supports aria-describedby for error messages', () => {
      render(<Input error="Error message" aria-describedby="error-msg" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('aria-describedby', 'error-msg');
    });

    it('can be navigated with keyboard', async () => {
      const user = userEvent.setup();
      render(<Input />);
      const input = screen.getByRole('textbox');

      await user.tab();
      expect(input).toHaveFocus();
    });
  });

  describe('Complex Scenarios', () => {
    it('combines multiple props correctly', () => {
      const LeftIcon = () => <svg data-testid="icon">Icon</svg>;
      const handleChange = vi.fn();

      render(
        <Input
          type="email"
          size="md"
          label="Email Address"
          leftIcon={<LeftIcon />}
          error="Invalid email"
          onChange={handleChange}
          className="custom-class"
          fullWidth
        />
      );

      expect(screen.getByText('Email Address')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Invalid email')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveClass('custom-class', 'w-full');
    });

    it('handles state changes correctly', () => {
      const { rerender } = render(<Input />);
      let input = screen.getByRole('textbox');

      expect(input).not.toHaveClass('border-red-500');

      rerender(<Input error="Error" />);
      input = screen.getByRole('textbox');

      expect(input).toHaveClass('border-red-500');
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
  });
});
