import { describe, it, expect } from 'vitest';
import { buildInputClasses, buildContainerClasses } from './inputClasses';

describe('buildInputClasses', () => {
  it('returns base variant classes', () => {
    const result = buildInputClasses({});
    expect(result).toContain('bg-background-surface');
    expect(result).toContain('text-text-primary');
  });

  it('adds error class when error is truthy', () => {
    const withError = buildInputClasses({ error: 'Required' });
    const withoutError = buildInputClasses({});
    expect(withError).toContain('border-red-500');
    expect(withoutError).not.toContain('border-red-500');
  });

  it('adds w-full when fullWidth is true', () => {
    expect(buildInputClasses({ fullWidth: true })).toContain('w-full');
    expect(buildInputClasses({ fullWidth: false })).not.toContain('w-full');
  });

  it('appends extra classes', () => {
    const result = buildInputClasses({ extra: ['resize-none'] });
    expect(result).toContain('resize-none');
  });

  it('appends custom className', () => {
    const result = buildInputClasses({ className: 'custom-class' });
    expect(result).toContain('custom-class');
  });

  it('applies size classes', () => {
    expect(buildInputClasses({ size: 'sm' })).toContain('h-8');
    expect(buildInputClasses({ size: 'md' })).toContain('h-10');
    expect(buildInputClasses({ size: 'lg' })).toContain('h-12');
  });
});

describe('buildContainerClasses', () => {
  it('always includes relative', () => {
    expect(buildContainerClasses({})).toContain('relative');
  });

  it('adds w-full when fullWidth is true', () => {
    expect(buildContainerClasses({ fullWidth: true })).toContain('w-full');
    expect(buildContainerClasses({ fullWidth: false })).not.toContain('w-full');
  });

  it('appends containerClassName', () => {
    expect(buildContainerClasses({ containerClassName: 'mt-4' })).toContain('mt-4');
  });
});
