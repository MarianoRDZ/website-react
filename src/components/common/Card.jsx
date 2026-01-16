/**
 * Componente Card
 * Contenedor reutilizable con esquinas redondeadas, padding y variantes de fondo.
 *
 * @typedef {Object} CardProps
 * @property {React.ReactNode} children - Contenido del card.
 * @property {"surface"|"transparent"|"background"} [variant="surface"] - Variante visual del fondo.
 * @property {boolean} [shadow=true] - Muestra sombra sutil.
 * @property {string} [className=''] - Clases CSS adicionales.
 * @property {string} [padding='p-6'] - Clases de padding (por defecto p-6).
 * @property {string} [rounded='rounded-lg'] - Clases de borde redondeado.
 *
 * @example
 * <Card>Contenido</Card>
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
