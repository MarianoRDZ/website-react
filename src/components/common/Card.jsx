// variant="transparent" para cards sin fondo (útil dentro de otros cards)
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
