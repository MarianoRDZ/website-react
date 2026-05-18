import { forwardRef } from 'react';
import { inputVariants, inputSizes } from './variants';

// containerClassName para estilar el wrapper, className para el input en sí
const Input = forwardRef(
  (
    {
      type = 'text',
      size = 'lg',
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = '',
      containerClassName = '',
      ...props
    },
    ref
  ) => {
    const variantStyles = inputVariants.default;
    const sizeStyles = inputSizes[size];

    const inputClasses = [
      variantStyles.base,
      variantStyles.hover,
      variantStyles.focus,
      variantStyles.disabled,
      error && variantStyles.error,
      sizeStyles,
      leftIcon && 'pl-10',
      rightIcon && 'pr-10',
      fullWidth && 'w-full',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const containerClasses = ['relative', fullWidth && 'w-full', containerClassName]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        {label && <label className="mb-sm block text-sm font-medium text-white">{label}</label>}

        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute top-1/2 left-3 flex -translate-y-1/2 items-center text-gray-400">
              {leftIcon}
            </div>
          )}

          <input ref={ref} type={type} className={inputClasses} {...props} />

          {rightIcon && (
            <div className="pointer-events-none absolute top-1/2 right-3 flex -translate-y-1/2 items-center text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <p className={`mt-xs text-sm ${error ? 'text-red-500' : 'text-gray-400'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
