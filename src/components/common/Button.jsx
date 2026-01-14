import { forwardRef } from 'react';
import { buttonVariants, buttonSizes } from './variants';

/**
 * Button Component
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} children - Button content
 * @property {'primary' | 'secondary' | 'outline' | 'ghost'} [variant='primary'] - Visual style variant
 * @property {'sm' | 'md' | 'lg' | 'xl'} [size='lg'] - Button size
 * @property {'button' | 'submit' | 'reset'} [type='button'] - HTML button type
 * @property {boolean} [disabled=false] - Whether the button is disabled
 * @property {boolean} [loading=false] - Whether to show loading state
 * @property {React.ReactNode} [leftIcon] - Icon to display on the left
 * @property {React.ReactNode} [rightIcon] - Icon to display on the right
 * @property {boolean} [fullWidth=false] - Whether button should take full width
 * @property {string} [className=''] - Additional CSS classes
 * @property {() => void} [onClick] - Click handler
 *
 * @example
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Get in Touch
 * </Button>
 */
const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'lg',
      type = 'button',
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = '',
      onClick,
      ...props
    },
    ref
  ) => {
    const variantStyles = buttonVariants[variant];
    const sizeStyles = buttonSizes[size];

    const baseClasses = [
      variantStyles.base,
      variantStyles.hover,
      variantStyles.active,
      variantStyles.disabled,
      sizeStyles,
      'inline-flex items-center justify-center gap-2',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      fullWidth && 'w-full',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={baseClasses}
        onClick={onClick}
        {...props}
      >
        {loading ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
