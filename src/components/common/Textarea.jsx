import { forwardRef } from 'react';
import { inputVariants, inputSizes } from './variants';

/**
 * Componente Textarea
 * Campo de texto multilínea con estilos coherentes al sistema de diseño.
 *
 * @typedef {Object} TextareaProps
 * @property {string} [label] - Texto de etiqueta encima del textarea.
 * @property {string} [error] - Mensaje de error (activa estado de error).
 * @property {string} [helperText] - Texto de ayuda debajo del textarea.
 * @property {number} [rows=4] - Número de filas.
 * @property {'sm'|'md'|'lg'} [size='lg'] - Tamaño del componente (afecta padding/tipografía).
 * @property {boolean} [fullWidth=false] - Ocupa todo el ancho del contenedor.
 * @property {boolean} [resizable=false] - Permite redimensionar manualmente.
 * @property {string} [className=''] - Clases CSS adicionales para el textarea.
 * @property {string} [containerClassName=''] - Clases CSS adicionales para el contenedor.
 *
 * @example
 * <Textarea placeholder="Tu mensaje..." rows={4} fullWidth />
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
