import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useDocumentTitle } from './useDocumentTitle';

const mockT = vi.fn((key) => `Translated: ${key}`);
const mockI18n = { language: 'en' };

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: mockT, i18n: mockI18n }),
}));

describe('useDocumentTitle', () => {
  it('sets document title on mount', () => {
    renderHook(() => useDocumentTitle());
    expect(document.title).toBe('Translated: meta.title');
  });

  it('calls t with meta.title key', () => {
    renderHook(() => useDocumentTitle());
    expect(mockT).toHaveBeenCalledWith('meta.title');
  });
});
