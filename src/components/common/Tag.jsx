import { tagVariants, tagSizes } from './variants';

// sin onClick es <span>, con onClick se convierte en <button>
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
