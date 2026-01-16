import { forwardRef } from 'react';
import { inputVariants, inputSizes } from './variants';

/**
 * Textarea Component
 * Multiline text field with design system-consistent styling.
 *
 * @typedef {Object} TextareaProps
 * @property {string} [label] - Label text above the textarea.
 * @property {string} [error] - Error message (activates error state).
 * @property {string} [helperText] - Helper text below the textarea.
 * @property {number} [rows=4] - Number of rows.
 * @property {'sm'|'md'|'lg'} [size='lg'] - Component size (affects padding/typography).
 * @property {boolean} [fullWidth=false] - Expands to full container width.
 * @property {boolean} [resizable=false] - Allows manual resizing.
 * @property {string} [className=''] - Additional CSS classes for the textarea.
 * @property {string} [containerClassName=''] - Additional CSS classes for the container.
 *
 * @example
 * <Textarea placeholder="Your message..." rows={4} fullWidth />
 */
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
