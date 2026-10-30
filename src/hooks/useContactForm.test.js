import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import emailjs from '@emailjs/browser';
import { useContactForm } from './useContactForm';

vi.mock('@emailjs/browser', () => ({ default: { send: vi.fn() } }));

const mockCheck = vi.fn();
vi.mock('./useSpamProtection', () => ({
  useSpamProtection: () => ({
    check: mockCheck,
    recordSubmit: vi.fn(),
    resetTimer: vi.fn(),
  }),
}));

const t = (key) => key;

describe('useContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockCheck.mockReturnValue({ blocked: false });
  });

  it('initializes with empty fields and idle status', () => {
    const { result } = renderHook(() => useContactForm());
    expect(result.current.formData).toEqual({ name: '', email: '', message: '', honeypot: '' });
    expect(result.current.status).toEqual({ loading: false, success: false, error: null });
  });

  it('handleChange updates form fields', () => {
    const { result } = renderHook(() => useContactForm());
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'Mariano' } });
    });
    expect(result.current.formData.name).toBe('Mariano');
  });

  it('sets loading state while submitting', async () => {
    emailjs.send.mockReturnValue(new Promise(() => {}));
    const { result } = renderHook(() => useContactForm());

    act(() => { result.current.handleSubmit({ preventDefault: vi.fn() }, t); });

    expect(result.current.status.loading).toBe(true);
  });

  it('sets success state after successful submission', async () => {
    emailjs.send.mockResolvedValue({});
    const { result } = renderHook(() => useContactForm());

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() }, t);
    });

    expect(result.current.status.success).toBe(true);
    expect(result.current.status.error).toBeNull();
  });

  it('resets form on success', async () => {
    emailjs.send.mockResolvedValue({});
    const { result } = renderHook(() => useContactForm());

    act(() => result.current.handleChange({ target: { name: 'name', value: 'Mariano' } }));

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() }, t);
    });

    expect(result.current.formData.name).toBe('');
  });

  it('sets error state on emailjs failure', async () => {
    emailjs.send.mockRejectedValue(new Error('Network error'));
    const { result } = renderHook(() => useContactForm());

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() }, t);
    });

    expect(result.current.status.success).toBe(false);
    expect(result.current.status.error).toBe('contact.errors.failed');
  });

  it('blocks submission when spam check fails', async () => {
    mockCheck.mockReturnValue({ blocked: true, error: 'contact.errors.tooFast' });
    const { result } = renderHook(() => useContactForm());

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() }, t);
    });

    expect(emailjs.send).not.toHaveBeenCalled();
    expect(result.current.status.error).toBe('contact.errors.tooFast');
  });

  it('silent block does not show error message', async () => {
    mockCheck.mockReturnValue({ blocked: true, silent: true });
    const { result } = renderHook(() => useContactForm());

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() }, t);
    });

    expect(emailjs.send).not.toHaveBeenCalled();
    expect(result.current.status.error).toBeNull();
  });
});
