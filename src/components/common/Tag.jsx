import { tagVariants, tagSizes } from './variants';

/**
 * Tag Component (Badge/Label)
 * @typedef {Object} TagProps
 * @property {React.ReactNode} children - Tag content (required)
 * @property {'solid' | 'outline' | 'subtle'} [variant='outline'] - Visual style variant
 * @property {'sm' | 'md' | 'lg'} [size='md'] - Tag size
 * @property {() => void} [onClick] - Click handler (makes tag interactive)
 * @property {string} [className=''] - Additional CSS classes
 *
 * @example
 * <Tag variant="outline">REACT NATIVE</Tag>
 * <Tag variant="solid" size="sm" onClick={handleClick}>TypeScript</Tag>
 */
const Tag = ({ children, variant = 'outline', size = 'md', onClick, className = '', ...props }) => {
  const variantStyles = tagVariants[variant];
  const sizeStyles = tagSizes[size];

  const isInteractive = !!onClick;

  const baseClasses = [
    variantStyles.base,
    isInteractive && variantStyles.hover,
    isInteractive && 'cursor-pointer transition-colors duration-200',
    sizeStyles,
    'inline-flex items-center justify-center whitespace-nowrap',
    'uppercase tracking-wide',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Component = onClick ? 'button' : 'span';

  return (
    <Component
      type={onClick ? 'button' : undefined}
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Tag;
