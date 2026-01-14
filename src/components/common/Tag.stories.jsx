import Tag from './Tag';

/**
 * Tag component documentation for Storybook
 *
 * A composable tag/badge component for labels, categories, and status indicators.
 */
export default {
  title: 'UI Primitives/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile tag component for displaying labels, categories, and status.

**Features:**
- 3 visual variants (solid, outline, subtle)
- 3 size options (sm, md, lg)
- Interactive mode with onClick support
- Uppercase styling with proper tracking
- Rounded pill shape
- Accessible and semantic

**Use cases:**
- Technology tags (React, TypeScript, etc.)
- Category labels
- Status indicators
- Skill badges
- Filter chips (when interactive)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'subtle'],
      description: 'Visual style variant',
      table: {
        defaultValue: { summary: 'outline' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tag size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    children: {
      control: 'text',
      description: 'Tag text content',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler (makes tag interactive)',
    },
  },
};

// Default story
export const Outline = {
  args: {
    children: 'REACT NATIVE',
    variant: 'outline',
    size: 'md',
  },
};

export const Solid = {
  args: {
    children: 'TYPESCRIPT',
    variant: 'solid',
    size: 'md',
  },
};

export const Subtle = {
  args: {
    children: 'JAVASCRIPT',
    variant: 'subtle',
    size: 'md',
  },
};

// Different sizes
export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Tag size="sm">SMALL</Tag>
    <Tag size="md">MEDIUM</Tag>
    <Tag size="lg">LARGE</Tag>
  </div>
);

// All variants
export const AllVariants = () => (
  <div className="flex flex-wrap gap-3">
    <Tag variant="solid">SOLID</Tag>
    <Tag variant="outline">OUTLINE</Tag>
    <Tag variant="subtle">SUBTLE</Tag>
  </div>
);

// Technology stack example
export const TechnologyStack = () => (
  <div className="flex flex-wrap gap-2">
    <Tag variant="outline">REACT</Tag>
    <Tag variant="outline">TAILWIND</Tag>
    <Tag variant="solid">TYPESCRIPT</Tag>
    <Tag variant="subtle">VITE</Tag>
    <Tag variant="outline">NODEJS</Tag>
    <Tag variant="subtle" size="sm">
      POSTGRESQL
    </Tag>
  </div>
);

// Interactive tags
export const InteractiveTags = () => {
  const handleClick = (tag) => {
    alert(`Clicked: ${tag}`);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Tag variant="outline" onClick={() => handleClick('React')}>
        REACT
      </Tag>
      <Tag variant="outline" onClick={() => handleClick('JavaScript')}>
        JAVASCRIPT
      </Tag>
      <Tag variant="solid" onClick={() => handleClick('TypeScript')}>
        TYPESCRIPT
      </Tag>
    </div>
  );
};

// Skills showcase
export const SkillsShowcase = () => (
  <div className="max-w-md">
    <h3 className="text-h2 text-text-primary mb-3">Frontend</h3>
    <div className="mb-6 flex flex-wrap gap-2">
      <Tag variant="outline">REACT</Tag>
      <Tag variant="outline">JAVASCRIPT</Tag>
      <Tag variant="outline">HTML</Tag>
      <Tag variant="outline">CSS</Tag>
      <Tag variant="outline">TAILWIND</Tag>
    </div>

    <h3 className="text-h2 text-text-primary mb-3">Tools</h3>
    <div className="flex flex-wrap gap-2">
      <Tag variant="subtle" size="sm">
        GIT
      </Tag>
      <Tag variant="subtle" size="sm">
        VITE
      </Tag>
      <Tag variant="subtle" size="sm">
        NPM
      </Tag>
      <Tag variant="subtle" size="sm">
        VS CODE
      </Tag>
    </div>
  </div>
);

// Project tags (from design)
export const ProjectTags = () => (
  <div>
    <p className="text-text-accent mb-4 text-sm tracking-wide uppercase">variant: outline</p>
    <div className="flex flex-wrap gap-2">
      <Tag variant="outline">REACT NATIVE</Tag>
      <Tag variant="outline">TAILWIND</Tag>
      <Tag variant="outline" className="opacity-50">
        TYPESCRIPT
      </Tag>
    </div>
  </div>
);

// Interactive example
export const Interactive = {
  args: {
    children: 'INTERACTIVE TAG',
    variant: 'outline',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the controls to customize the tag. Add an onClick handler to make it interactive.',
      },
    },
  },
};
