/**
 * Design Tokens - Typography
 * Font families, sizes, weights, and text styles
 */

export const fontFamily = {
  sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
  mono: ['Fira Code', 'monospace'],
};

export const fontSize = {
  h1: [
    '32px',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '700',
    },
  ],
  h2: [
    '22px',
    {
      lineHeight: '1.3',
      letterSpacing: '0em',
      fontWeight: '600',
    },
  ],
  body: [
    '14px',
    {
      lineHeight: '1.5',
      letterSpacing: '0em',
      fontWeight: '400',
    },
  ],
};
