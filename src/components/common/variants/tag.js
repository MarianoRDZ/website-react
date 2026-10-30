export const tagVariants = {
  solid: {
    base: 'bg-accent text-background font-medium',
    hover: 'hover:bg-accent-hover',
  },
  outline: {
    base: 'bg-transparent text-accent border border-accent font-medium',
    hover: 'hover:bg-accent/10',
  },
  subtle: {
    base: 'bg-accent/10 text-accent font-medium',
    hover: 'hover:bg-accent/20',
  },
};

export const tagSizes = {
  sm: 'px-sm py-xs text-xs rounded-full',
  md: 'px-md py-sm text-sm rounded-full',
  lg: 'px-lg py-sm text-body rounded-full',
};
