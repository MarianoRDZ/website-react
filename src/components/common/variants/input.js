export const inputVariants = {
  default: {
    base: 'bg-background-surface text-text-primary border border-background-tertiary transition-colors duration-200',
    hover: 'hover:border-text-secondary',
    focus: 'focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20',
    disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
    error: 'border-red-500 focus:ring-red-500/20',
  },
};

export const inputSizes = {
  sm: 'px-sm py-xs text-sm h-8 rounded',
  md: 'px-md py-sm text-body h-10 rounded-md',
  lg: 'px-lg py-md text-body h-12 rounded-md',
};
