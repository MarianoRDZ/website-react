import Button from './Button';

/**
 * Button component documentation for Storybook
 *
 * The Button component is a versatile, accessible button following SOLID principles.
 * It supports multiple variants, sizes, loading states, and icons.
 */
export default {
  title: 'UI Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible button component with multiple variants and states.

**Features:**
- 4 visual variants (primary, secondary, outline, ghost)
- 4 size options (sm, md, lg, xl)
- Loading state with spinner
- Left and right icon support
- Full width option
- Accessible (keyboard navigation, focus states)
- ForwardRef support for form libraries

**Design tokens:**
- Uses design system colors and spacing
- Consistent with brand guidelines
- Smooth transitions and hover effects
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Visual style variant',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Button size',
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interaction',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Expand button to full container width',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
  },
};

// Default story
export const Primary = {
  args: {
    children: 'Get in Touch',
    variant: 'primary',
    size: 'lg',
    rightIcon: <span>▶</span>,
  },
};

export const Secondary = {
  args: {
    children: 'Learn More',
    variant: 'secondary',
    size: 'lg',
  },
};

export const Outline = {
  args: {
    children: 'View Details',
    variant: 'outline',
    size: 'md',
  },
};

export const Ghost = {
  args: {
    children: 'Cancel',
    variant: 'ghost',
    size: 'md',
  },
};

// Size variations
export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra Large</Button>
  </div>
);

Sizes.parameters = {
  layout: 'centered',
};

// All variants
export const AllVariants = () => (
  <div className="flex flex-wrap gap-4">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);

AllVariants.parameters = {
  layout: 'centered',
};

// With icons
export const WithIcons = () => (
  <div className="flex flex-col gap-4">
    <Button leftIcon={<span>←</span>}>Back</Button>
    <Button rightIcon={<span>→</span>}>Next</Button>
    <Button leftIcon={<span>📧</span>} rightIcon={<span>▶</span>}>
      Send Email
    </Button>
  </div>
);

WithIcons.parameters = {
  layout: 'centered',
};

// States
export const States = () => (
  <div className="flex flex-col gap-4">
    <Button>Normal</Button>
    <Button disabled>Disabled</Button>
    <Button loading>Loading</Button>
  </div>
);

States.parameters = {
  layout: 'centered',
};

// Full width
export const FullWidth = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
    size: 'lg',
  },
  parameters: {
    layout: 'padded',
  },
};

// Interactive example
export const Interactive = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Try changing the controls to see different button states and variants.',
      },
    },
  },
};
