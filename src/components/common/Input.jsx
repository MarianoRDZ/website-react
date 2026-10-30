import { forwardRef } from 'react';
import { buildInputClasses, buildContainerClasses } from './inputClasses';

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
    const inputClasses = buildInputClasses({
      size,
      error,
      fullWidth,
      extra: [leftIcon && 'pl-10', rightIcon && 'pr-10'],
      className,
    });

    const containerClasses = buildContainerClasses({ fullWidth, containerClassName });

    return (
      <div className={containerClasses}>
        {label && <label className="mb-sm block text-sm font-medium text-white">{label}</label>}

        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute top-1/2 left-3 flex -translate-y-1/2 items-center text-text-secondary">
              {leftIcon}
            </div>
          )}

          <input ref={ref} type={type} className={inputClasses} {...props} />

          {rightIcon && (
            <div className="pointer-events-none absolute top-1/2 right-3 flex -translate-y-1/2 items-center text-text-secondary">
              {rightIcon}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <p className={`mt-xs text-sm ${error ? 'text-red-500' : 'text-text-secondary'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
