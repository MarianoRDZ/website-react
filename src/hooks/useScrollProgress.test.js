import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useScrollProgress from './useScrollProgress';

const setScrollState = ({ scrollTop, scrollHeight, clientHeight }) => {
  Object.defineProperty(document.documentElement, 'scrollTop', { value: scrollTop, configurable: true });
  Object.defineProperty(document.documentElement, 'scrollHeight', { value: scrollHeight, configurable: true });
  Object.defineProperty(document.documentElement, 'clientHeight', { value: clientHeight, configurable: true });
};

describe('useScrollProgress', () => {
  it('starts at 0', () => {
    const { result } = renderHook(() => useScrollProgress());
    expect(result.current).toBe(0);
  });

  it('calculates correct progress on scroll', () => {
    const { result } = renderHook(() => useScrollProgress());

    act(() => {
      setScrollState({ scrollTop: 500, scrollHeight: 1500, clientHeight: 500 });
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBeCloseTo(50);
  });

  it('returns 0 when page is not scrollable', () => {
    const { result } = renderHook(() => useScrollProgress());

    act(() => {
      setScrollState({ scrollTop: 0, scrollHeight: 500, clientHeight: 500 });
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(0);
  });

  it('removes scroll listener on unmount', () => {
    const removeEventListener = vi.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useScrollProgress());
    unmount();
    expect(removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
