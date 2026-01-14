# Storybook Component Library

This project uses Storybook to document and showcase all UI components in isolation.

## Running Storybook

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006/`

## Building Storybook

```bash
npm run build-storybook
```

This creates a static build in the `storybook-static` folder that can be deployed.

## Component Documentation

All primitive UI components are fully documented with:

- **Props documentation**: All props with types, defaults, and descriptions
- **Interactive controls**: Live editing of component props
- **Multiple examples**: Different variants, sizes, and states
- **Code samples**: Copy-paste ready examples
- **Accessibility info**: Built-in a11y addon

### Available Components

#### Button

- 4 variants: primary, secondary, outline, ghost
- 4 sizes: sm, md, lg, xl
- Loading states, icons, full width option
- Located in `src/components/common/Button.stories.jsx`

#### Input

- Label, error, and helper text support
- Left and right icon slots
- Multiple sizes and types
- Located in `src/components/common/Input.stories.jsx`

#### Tag

- 3 variants: solid, outline, subtle
- Interactive mode with onClick
- Perfect for skills, categories, labels
- Located in `src/components/common/Tag.stories.jsx`

## Story Structure

Each component story includes:

1. **Default exports**: Component metadata and controls
2. **Named exports**: Individual story variations
3. **Interactive examples**: Real-world usage scenarios
4. **Documentation**: JSDoc comments and descriptions

## Design Tokens Integration

All components use the centralized design token system from `src/styles/tokens/`, ensuring consistency across the application and Storybook.

## Best Practices

- Stories are co-located with components (`.stories.jsx` next to `.jsx`)
- Each story demonstrates a specific use case
- Controls are properly typed and documented
- Accessibility is tested via the a11y addon
