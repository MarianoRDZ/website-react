import { forwardRef } from 'react';
import { buildInputClasses, buildContainerClasses } from './inputClasses';

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
    const textareaClasses = buildInputClasses({
      size,
      error,
      fullWidth,
      extra: [!resizable && 'resize-none'],
      className,
    });

    const containerClasses = buildContainerClasses({ fullWidth, containerClassName });

    return (
      <div className={containerClasses}>
        {label && <label className="mb-sm block text-sm font-medium text-white">{label}</label>}
        <textarea ref={ref} rows={rows} className={textareaClasses} {...props} />
        {(error || helperText) && (
          <p className={`mt-xs text-sm ${error ? 'text-red-500' : 'text-text-secondary'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
