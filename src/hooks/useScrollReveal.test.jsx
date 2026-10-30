import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import useScrollReveal from './useScrollReveal';

const TestComponent = ({ options } = {}) => {
  const [ref, isVisible] = useScrollReveal(options);
  return <div ref={ref} data-testid="target">{isVisible ? 'visible' : 'hidden'}</div>;
};

describe('useScrollReveal', () => {
  it('starts hidden by default', () => {
    window.matchMedia.mockReturnValue({ matches: false });
    render(<TestComponent />);
    expect(screen.getByTestId('target')).toHaveTextContent('hidden');
  });

  it('is immediately visible with reduced motion', () => {
    window.matchMedia.mockReturnValue({ matches: true });
    render(<TestComponent />);
    expect(screen.getByTestId('target')).toHaveTextContent('visible');
  });

  it('observes the element on mount', () => {
    window.matchMedia.mockReturnValue({ matches: false });
    render(<TestComponent />);
    const instance = IntersectionObserver.mock.instances.at(-1);
    expect(instance.observe).toHaveBeenCalledWith(screen.getByTestId('target'));
  });

  it('becomes visible when element intersects', () => {
    window.matchMedia.mockReturnValue({ matches: false });
    render(<TestComponent />);
    const instance = IntersectionObserver.mock.instances.at(-1);
    act(() => {
      instance._callback([{ isIntersecting: true, target: screen.getByTestId('target') }]);
    });
    expect(screen.getByTestId('target')).toHaveTextContent('visible');
  });
});
