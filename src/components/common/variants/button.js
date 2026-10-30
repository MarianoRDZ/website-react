export const buttonVariants = {
  primary: {
    base: 'bg-blue-600 text-white font-semibold transition-all duration-200',
    hover: 'hover:bg-blue-700 hover:shadow-button',
    active: 'active:bg-blue-800 active:scale-[0.98]',
    disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600',
  },
  secondary: {
    base: 'bg-background-surface text-text-primary border border-text-secondary font-semibold transition-all duration-200',
    hover: 'hover:bg-background-tertiary hover:border-accent',
    active: 'active:scale-[0.98]',
    disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
  },
  outline: {
    base: 'bg-transparent text-accent border border-accent font-semibold transition-all duration-200',
    hover: 'hover:bg-accent hover:text-background',
    active: 'active:scale-[0.98]',
    disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
  },
  ghost: {
    base: 'bg-transparent text-text-secondary font-medium transition-all duration-200',
    hover: 'hover:bg-background-surface hover:text-text-primary',
    active: 'active:scale-[0.98]',
    disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
  },
};

export const buttonSizes = {
  sm: 'px-sm py-xs text-sm h-8 rounded',
  md: 'px-md py-sm text-body h-10 rounded-md',
  lg: 'px-lg py-md text-body h-12 rounded-md',
  xl: 'px-xl py-md text-h2 h-[48px] rounded-md',
};
