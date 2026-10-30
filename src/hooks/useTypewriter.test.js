import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useTypewriter from './useTypewriter';

describe('useTypewriter', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('returns full text immediately with reduced motion', () => {
    window.matchMedia.mockReturnValue({ matches: true });
    const { result } = renderHook(() => useTypewriter('Hello'));
    expect(result.current.displayedText).toBe('Hello');
    expect(result.current.isDone).toBe(true);
  });

  it('starts with empty text', () => {
    window.matchMedia.mockReturnValue({ matches: false });
    const { result } = renderHook(() => useTypewriter('Hello', 60, 0));
    expect(result.current.displayedText).toBe('');
    expect(result.current.isDone).toBe(false);
  });

  it('types characters progressively after delay', () => {
    window.matchMedia.mockReturnValue({ matches: false });
    const { result } = renderHook(() => useTypewriter('Hi', 100, 0));

    act(() => vi.advanceTimersByTime(100));
    expect(result.current.displayedText).toBe('H');

    act(() => vi.advanceTimersByTime(100));
    expect(result.current.displayedText).toBe('Hi');
  });

  it('sets isDone when all characters are typed', () => {
    window.matchMedia.mockReturnValue({ matches: false });
    const { result } = renderHook(() => useTypewriter('Hi', 100, 0));

    act(() => vi.advanceTimersByTime(200));
    expect(result.current.isDone).toBe(true);
  });

  it('respects initial delay before typing starts', () => {
    window.matchMedia.mockReturnValue({ matches: false });
    const { result } = renderHook(() => useTypewriter('Hi', 100, 500));

    act(() => vi.advanceTimersByTime(499));
    expect(result.current.displayedText).toBe('');

    act(() => vi.advanceTimersByTime(101));
    expect(result.current.displayedText).toBe('H');
  });
});
