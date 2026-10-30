import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFormState } from './useFormState';

const initial = { name: '', email: '', message: '' };

describe('useFormState', () => {
  it('initializes with given values', () => {
    const { result } = renderHook(() => useFormState(initial));
    expect(result.current.formData).toEqual(initial);
  });

  it('handleChange updates the correct field', () => {
    const { result } = renderHook(() => useFormState(initial));
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'Mariano' } });
    });
    expect(result.current.formData.name).toBe('Mariano');
    expect(result.current.formData.email).toBe('');
    expect(result.current.formData.message).toBe('');
  });

  it('handleChange does not mutate other fields', () => {
    const { result } = renderHook(() => useFormState(initial));
    act(() => result.current.handleChange({ target: { name: 'email', value: 'a@b.com' } }));
    act(() => result.current.handleChange({ target: { name: 'message', value: 'Hello' } }));
    expect(result.current.formData.name).toBe('');
    expect(result.current.formData.email).toBe('a@b.com');
    expect(result.current.formData.message).toBe('Hello');
  });

  it('resetForm restores initial values', () => {
    const { result } = renderHook(() => useFormState(initial));
    act(() => result.current.handleChange({ target: { name: 'name', value: 'Mariano' } }));
    act(() => result.current.resetForm());
    expect(result.current.formData).toEqual(initial);
  });
});
