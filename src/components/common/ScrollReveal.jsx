import useScrollReveal from '../../hooks/useScrollReveal';

const ScrollReveal = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal-init${isVisible ? ' reveal-show' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
