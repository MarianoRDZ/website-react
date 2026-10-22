import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const lerp = (a, b, t) => a + (b - a) * t;

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        ringEl.style.width = '48px';
        ringEl.style.height = '48px';
        dot.style.opacity = '0';
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        ringEl.style.width = '32px';
        ringEl.style.height = '32px';
        dot.style.opacity = '1';
      }
    };

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.1);
      ringEl.style.transform = `translate(calc(${ring.current.x}px - 50%), calc(${ring.current.y}px - 50%))`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.body.classList.add('custom-cursor');

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.body.classList.remove('custom-cursor');
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--color-accent)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transform: 'translate(-200px, -200px)',
          transition: 'opacity 0.15s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid rgba(96, 217, 253, 0.5)',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          transform: 'translate(-200px, -200px)',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </>
  );
};

export default CustomCursor;
