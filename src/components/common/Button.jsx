import { forwardRef } from 'react';
import { buttonVariants, buttonSizes } from './variants';

// as="a" + href para renderizarlo como link; loading deshabilita el botón y muestra spinner
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
      as = 'button',
      href,
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

    const content = loading ? (
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
    );

    if (as === 'a') {
      return (
        <a ref={ref} href={href} className={baseClasses} {...props}>
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={baseClasses}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
