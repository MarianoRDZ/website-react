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
  const bgVariants = {
    surface: 'bg-background-surface',
    background: 'bg-background',
    transparent: 'bg-transparent',
  };
  const bgClass = bgVariants[variant] ?? 'bg-transparent';

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
