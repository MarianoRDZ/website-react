import Input from './Input';

/**
 * Input component documentation for Storybook
 *
 * A flexible, accessible input field component with label, error states, and icon support.
 */
export default {
  title: 'UI Primitives/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A versatile input field component for forms and user input.

**Features:**
- Optional label and helper text
- Error state with validation messages
- Left and right icon support
- Multiple size options
- Full width capability
- Accessible (proper labeling, error announcements)
- ForwardRef support for form libraries

**Use cases:**
- Text input fields
- Search boxes
- Form fields with validation
- Password fields
- Email inputs
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      description: 'HTML input type',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input field size',
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text above input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    error: {
      control: 'text',
      description: 'Error message (activates error state)',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable input interaction',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Expand to full container width',
    },
  },
};

// Search icon component
const SearchIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

// Default story
export const Default = {
  args: {
    placeholder: 'Enter text...',
    size: 'lg',
  },
};

export const WithLabel = {
  args: {
    label: 'Email Address',
    placeholder: 'your@email.com',
    type: 'email',
    size: 'md',
  },
};

export const WithHelperText = {
  args: {
    label: 'Username',
    placeholder: 'johndoe',
    helperText: 'Choose a unique username',
    size: 'md',
  },
};

export const WithError = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    error: 'Password must be at least 8 characters',
    size: 'md',
  },
};

export const SearchField = {
  args: {
    placeholder: 'Enter component name...',
    size: 'lg',
    rightIcon: <SearchIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with search icon on the right side.',
      },
    },
  },
};

// Different sizes
export const Sizes = () => (
  <div className="w-full max-w-md space-y-4">
    <Input placeholder="Small input" size="sm" fullWidth />
    <Input placeholder="Medium input" size="md" fullWidth />
    <Input placeholder="Large input" size="lg" fullWidth />
  </div>
);

Sizes.parameters = {
  layout: 'padded',
};

// All states
export const States = () => (
  <div className="w-full max-w-md space-y-4">
    <Input label="Normal" placeholder="Type something..." fullWidth />
    <Input label="Disabled" placeholder="Disabled..." disabled fullWidth />
    <Input
      label="With Error"
      placeholder="Invalid input"
      error="This field is required"
      fullWidth
    />
    <Input
      label="With Helper"
      placeholder="Username"
      helperText="This will be visible to others"
      fullWidth
    />
  </div>
);

States.parameters = {
  layout: 'padded',
};

// Form example
export const FormExample = () => (
  <div className="w-full max-w-md space-y-4">
    <Input label="Full Name" placeholder="John Doe" size="md" fullWidth />
    <Input label="Email" type="email" placeholder="john@example.com" size="md" fullWidth />
    <Input
      label="Password"
      type="password"
      placeholder="••••••••"
      helperText="Minimum 8 characters"
      size="md"
      fullWidth
    />
  </div>
);

FormExample.parameters = {
  layout: 'padded',
};

// Interactive example
export const Interactive = {
  args: {
    label: 'Interactive Input',
    placeholder: 'Try typing...',
    size: 'lg',
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls to customize the input field appearance and behavior.',
      },
    },
  },
};
