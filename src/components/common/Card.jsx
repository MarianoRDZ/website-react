const Card = ({
  children,
  variant = 'surface',
  shadow = true,
  className = '',
  padding = 'p-6',
  rounded = 'rounded-lg',
  hover = false,
  ...props
}) => {
  const bgClass =
    variant === 'surface'
      ? 'bg-white dark:bg-gray-800'
      : variant === 'background'
        ? 'bg-gray-900'
        : 'bg-transparent';

  const hoverClass = hover
    ? 'border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(96,217,253,0.12)] hover:border-[rgba(96,217,253,0.2)]'
    : '';

  const classes = [rounded, padding, shadow ? 'shadow-md' : '', bgClass, hoverClass, 'h-fit', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
