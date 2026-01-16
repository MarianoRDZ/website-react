/**
 * Card Component
 * Reusable container with rounded corners, padding, and background variants.
 *
 * @typedef {Object} CardProps
 * @property {React.ReactNode} children - Content of the card.
 * @property {"surface"|"transparent"|"background"} [variant="surface"] - Visual background variant.
 * @property {boolean} [shadow=true] - Display subtle shadow.
 * @property {string} [className=''] - Additional CSS classes.
 * @property {string} [padding='p-6'] - Padding classes (default p-6).
 * @property {string} [rounded='rounded-lg'] - Border radius classes.
 *
 * @example
 * <Card>Content</Card>
 * <Card variant="transparent" className="space-y-4">...</Card>
 */
const Card = ({
  children,
  variant = 'surface',
  shadow = true,
  className = '',
  padding = 'p-6',
  rounded = 'rounded-lg',
  ...props
}) => {
  const bgClass =
    variant === 'surface'
      ? 'bg-white dark:bg-gray-800'
      : variant === 'background'
        ? 'bg-gray-900'
        : 'bg-transparent';

  const classes = [rounded, padding, shadow ? 'shadow-md' : '', bgClass, 'h-fit', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
