import { inputVariants, inputSizes } from './variants/input';

const v = inputVariants.default;

export const buildInputClasses = ({ size = 'lg', error, fullWidth, extra = [], className = '' }) =>
  [v.base, v.hover, v.focus, v.disabled, error && v.error, inputSizes[size], fullWidth && 'w-full', ...extra, className]
    .filter(Boolean)
    .join(' ');

export const buildContainerClasses = ({ fullWidth, containerClassName = '' }) =>
  ['relative', fullWidth && 'w-full', containerClassName].filter(Boolean).join(' ');
