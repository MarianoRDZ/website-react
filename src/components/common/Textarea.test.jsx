import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Textarea from './Textarea';

describe('Textarea Component', () => {
  describe('Rendering', () => {
    it('renders basic textarea', () => {
      render(<Textarea placeholder="Enter message" />);
      expect(screen.getByPlaceholderText('Enter message')).toBeInTheDocument();
    });

    it('renders with default props', () => {
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveAttribute('rows', '4');
      expect(textarea).not.toBeDisabled();
    });

    it('applies custom className', () => {
      render(<Textarea className="custom-class" />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveClass('custom-class');
    });

    it('renders with displayName', () => {
      expect(Textarea.displayName).toBe('Textarea');
    });
  });

  describe('Label', () => {
    it('renders with label', () => {
      render(<Textarea label="Message" />);
      expect(screen.getByText('Message')).toBeInTheDocument();
    });

    it('renders label with correct styling', () => {
      render(<Textarea label="Description" />);
      const label = screen.getByText('Description');

      expect(label.tagName).toBe('LABEL');
      expect(label).toHaveClass('mb-sm', 'block', 'text-sm', 'font-medium');
    });

    it('renders without label when not provided', () => {
      const { container } = render(<Textarea />);
      const label = container.querySelector('label');

      expect(label).not.toBeInTheDocument();
    });
  });

  describe('Rows', () => {
    it('renders with default 4 rows', () => {
      render(<Textarea />);
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '4');
    });

    it('renders with custom rows', () => {
      render(<Textarea rows={8} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '8');
    });

    it('renders with single row', () => {
      render(<Textarea rows={1} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '1');
    });
  });

  describe('Sizes', () => {
    it('renders small size correctly', () => {
      render(<Textarea size="sm" />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveClass('px-sm', 'py-xs', 'text-sm', 'h-8');
    });

    it('renders medium size correctly', () => {
      render(<Textarea size="md" />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveClass('px-md', 'py-sm', 'h-10');
    });

    it('renders large size correctly (default)', () => {
      render(<Textarea size="lg" />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveClass('px-lg', 'py-md', 'h-12');
    });
  });

  describe('Error State', () => {
    it('displays error message', () => {
      render(<Textarea error="This field is required" />);

      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('applies error styles', () => {
      render(<Textarea error="Error message" />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveClass('border-red-500');
    });

    it('shows error text in red', () => {
      render(<Textarea error="Error" />);
      const errorText = screen.getByText('Error');

      expect(errorText).toHaveClass('text-red-500');
    });

    it('prioritizes error over helperText', () => {
      render(<Textarea error="Error message" helperText="Helper text" />);

      expect(screen.getByText('Error message')).toBeInTheDocument();
      expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
    });
  });

  describe('Helper Text', () => {
    it('displays helper text', () => {
      render(<Textarea helperText="Enter a detailed message" />);

      expect(screen.getByText('Enter a detailed message')).toBeInTheDocument();
    });

    it('shows helper text in gray', () => {
      render(<Textarea helperText="Helper" />);
      const helperText = screen.getByText('Helper');

      expect(helperText).toHaveClass('text-gray-400');
    });

    it('renders without helper text when not provided', () => {
      const { container } = render(<Textarea />);
      const helperElement = container.querySelector('.text-sm');

      expect(helperElement).not.toBeInTheDocument();
    });
  });

  describe('Resizable', () => {
    it('is not resizable by default', () => {
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveClass('resize-none');
    });

    it('is resizable when resizable prop is true', () => {
      render(<Textarea resizable />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).not.toHaveClass('resize-none');
    });
  });

  describe('Full Width', () => {
    it('applies full width to textarea when fullWidth is true', () => {
      render(<Textarea fullWidth />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveClass('w-full');
    });

    it('applies full width to container when fullWidth is true', () => {
      const { container } = render(<Textarea fullWidth />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('w-full');
    });

    it('does not apply full width by default', () => {
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).not.toHaveClass('w-full');
    });
  });

  describe('Container ClassName', () => {
    it('applies custom container className', () => {
      const { container } = render(<Textarea containerClassName="custom-container" />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('custom-container');
    });

    it('combines container classes correctly', () => {
      const { container } = render(<Textarea containerClassName="custom-container" fullWidth />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('custom-container', 'w-full', 'relative');
    });
  });

  describe('Disabled State', () => {
    it('disables textarea when disabled prop is true', () => {
      render(<Textarea disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('applies disabled styles', () => {
      render(<Textarea disabled />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed');
    });
  });

  describe('User Interaction', () => {
    it('accepts user input', async () => {
      const user = userEvent.setup();
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');

      await user.type(textarea, 'Hello World');
      expect(textarea).toHaveValue('Hello World');
    });

    it('accepts multiline input', async () => {
      const user = userEvent.setup();
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');

      await user.type(textarea, 'Line 1{Enter}Line 2');
      expect(textarea.value).toContain('Line 1\nLine 2');
    });

    it('calls onChange handler', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Textarea onChange={handleChange} />);
      const textarea = screen.getByRole('textbox');

      await user.type(textarea, 'a');
      expect(handleChange).toHaveBeenCalled();
    });

    it('handles focus and blur events', async () => {
      const handleFocus = vi.fn();
      const handleBlur = vi.fn();
      const user = userEvent.setup();

      render(<Textarea onFocus={handleFocus} onBlur={handleBlur} />);
      const textarea = screen.getByRole('textbox');

      await user.click(textarea);
      expect(handleFocus).toHaveBeenCalled();

      await user.tab();
      expect(handleBlur).toHaveBeenCalled();
    });
  });

  describe('Forward Ref', () => {
    it('forwards ref to textarea element', () => {
      const ref = { current: null };
      render(<Textarea ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
      expect(ref.current).toBe(screen.getByRole('textbox'));
    });

    it('can access ref methods', () => {
      const ref = { current: null };
      render(<Textarea ref={ref} />);

      expect(ref.current.focus).toBeDefined();
      expect(ref.current.select).toBeDefined();
    });

    it('can focus textarea programmatically', () => {
      const ref = { current: null };
      render(<Textarea ref={ref} />);

      ref.current.focus();
      expect(ref.current).toHaveFocus();
    });
  });

  describe('Additional Props', () => {
    it('forwards additional HTML attributes', () => {
      render(
        <Textarea
          data-testid="custom-textarea"
          aria-label="Custom Label"
          placeholder="Enter text"
        />
      );

      const textarea = screen.getByTestId('custom-textarea');
      expect(textarea).toHaveAttribute('aria-label', 'Custom Label');
      expect(textarea).toHaveAttribute('placeholder', 'Enter text');
    });

    it('supports required attribute', () => {
      render(<Textarea required />);
      expect(screen.getByRole('textbox')).toBeRequired();
    });

    it('supports readonly attribute', () => {
      render(<Textarea readOnly />);
      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    });

    it('supports maxLength attribute', () => {
      render(<Textarea maxLength={100} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('maxLength', '100');
    });

    it('supports name attribute', () => {
      render(<Textarea name="message" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'message');
    });
  });

  describe('Accessibility', () => {
    it('has correct role', () => {
      render(<Textarea />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('supports aria-describedby', () => {
      render(<Textarea aria-describedby="description" />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveAttribute('aria-describedby', 'description');
    });

    it('can be navigated with keyboard', async () => {
      const user = userEvent.setup();
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');

      await user.tab();
      expect(textarea).toHaveFocus();
    });
  });

  describe('Complex Scenarios', () => {
    it('combines multiple props correctly', () => {
      const handleChange = vi.fn();

      render(
        <Textarea
          rows={6}
          size="md"
          label="Message"
          error="Required field"
          onChange={handleChange}
          className="custom-class"
          fullWidth
          resizable
        />
      );

      expect(screen.getByText('Message')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '6');
      expect(screen.getByText('Required field')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveClass('custom-class', 'w-full');
      expect(screen.getByRole('textbox')).not.toHaveClass('resize-none');
    });

    it('handles state changes correctly', () => {
      const { rerender } = render(<Textarea />);
      let textarea = screen.getByRole('textbox');

      expect(textarea).not.toHaveClass('border-red-500');

      rerender(<Textarea error="Error" />);
      textarea = screen.getByRole('textbox');

      expect(textarea).toHaveClass('border-red-500');
      expect(screen.getByText('Error')).toBeInTheDocument();
    });

    it('handles controlled component', async () => {
      const TestComponent = () => {
        const [value, setValue] = React.useState('');
        return <Textarea value={value} onChange={(e) => setValue(e.target.value)} />;
      };

      const { default: React } = await import('react');
      const user = userEvent.setup();
      render(<TestComponent />);
      const textarea = screen.getByRole('textbox');

      await user.type(textarea, 'Test');
      expect(textarea).toHaveValue('Test');
    });
  });
});
