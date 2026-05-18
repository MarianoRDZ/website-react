import { forwardRef } from 'react';
import { inputVariants, inputSizes } from './variants';

// resizable=false por defecto para que no rompa el layout
const Textarea = forwardRef(
  (
    {
      label,
      error,
      helperText,
      rows = 4,
      size = 'lg',
      fullWidth = false,
      resizable = false,
      className = '',
      containerClassName = '',
      ...props
    },
    ref
  ) => {
    const variantStyles = inputVariants.default;
    const sizeStyles = inputSizes[size];

    const textareaClasses = [
      variantStyles.base,
      variantStyles.hover,
      variantStyles.focus,
      variantStyles.disabled,
      error && variantStyles.error,
      sizeStyles,
      fullWidth && 'w-full',
      !resizable && 'resize-none',
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
        <textarea ref={ref} rows={rows} className={textareaClasses} {...props} />
        {(error || helperText) && (
          <p className={`mt-xs text-sm ${error ? 'text-red-500' : 'text-gray-400'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
