import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSpamProtection } from './useSpamProtection';

const t = (key) => key;

describe('useSpamProtection', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(0);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('blocks immediately when honeypot is filled', () => {
    const { result } = renderHook(() => useSpamProtection());
    const res = result.current.check('bot-value', t);
    expect(res.blocked).toBe(true);
    expect(res.silent).toBe(true);
  });

  it('blocks if form filled under minimum time', () => {
    const { result } = renderHook(() => useSpamProtection());
    vi.setSystemTime(1000);
    const res = result.current.check('', t);
    expect(res.blocked).toBe(true);
    expect(res.error).toBe('contact.errors.tooFast');
  });

  it('passes after minimum fill time', () => {
    const { result } = renderHook(() => useSpamProtection());
    vi.setSystemTime(4000);
    const res = result.current.check('', t);
    expect(res.blocked).toBe(false);
  });

  it('blocks if submitted again within rate limit window', () => {
    const { result } = renderHook(() => useSpamProtection());
    vi.setSystemTime(4000);
    act(() => result.current.recordSubmit());

    vi.setSystemTime(34000);
    act(() => result.current.resetTimer());
    vi.setSystemTime(38000);

    const res = result.current.check('', t);
    expect(res.blocked).toBe(true);
    expect(res.error).toBe('contact.errors.rateLimit');
  });

  it('passes after rate limit window expires', () => {
    const { result } = renderHook(() => useSpamProtection());
    vi.setSystemTime(4000);
    act(() => result.current.recordSubmit());

    vi.setSystemTime(65000);
    act(() => result.current.resetTimer());
    vi.setSystemTime(69000);

    const res = result.current.check('', t);
    expect(res.blocked).toBe(false);
  });

  it('resetTimer allows resubmission after resetting fill time', () => {
    const { result } = renderHook(() => useSpamProtection());
    vi.setSystemTime(4000);
    act(() => result.current.resetTimer());

    const res = result.current.check('', t);
    expect(res.blocked).toBe(true);
    expect(res.error).toBe('contact.errors.tooFast');
  });
});
