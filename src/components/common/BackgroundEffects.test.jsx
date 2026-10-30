import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import BackgroundEffects from './BackgroundEffects';

describe('BackgroundEffects', () => {
  it('renders with aria-hidden', () => {
    const { container } = render(<BackgroundEffects />);
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('is pointer-events-none so it never blocks interaction', () => {
    const { container } = render(<BackgroundEffects />);
    expect(container.firstChild).toHaveClass('pointer-events-none');
  });

  it('is fixed and covers the full viewport', () => {
    const { container } = render(<BackgroundEffects />);
    expect(container.firstChild).toHaveClass('fixed', 'inset-0');
  });
});
