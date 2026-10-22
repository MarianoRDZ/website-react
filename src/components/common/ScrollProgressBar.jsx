import useScrollProgress from '../../hooks/useScrollProgress';

const ScrollProgressBar = () => {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[60] h-[2px] bg-accent transition-none"
      style={{ width: `${progress}%` }}
    />
  );
};

export default ScrollProgressBar;
