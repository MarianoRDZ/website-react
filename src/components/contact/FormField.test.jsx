import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormField from './FormField';

describe('FormField', () => {
  it('renders the label', () => {
    render(<FormField id="name" label="Full Name"><input /></FormField>);
    expect(screen.getByText('Full Name')).toBeInTheDocument();
  });

  it('associates label with input via htmlFor', () => {
    render(<FormField id="email" label="Email"><input id="email" /></FormField>);
    const label = screen.getByText('Email');
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveAttribute('for', 'email');
  });

  it('renders children', () => {
    render(
      <FormField id="msg" label="Message">
        <textarea data-testid="field-child" />
      </FormField>
    );
    expect(screen.getByTestId('field-child')).toBeInTheDocument();
  });

  it('label has correct styles', () => {
    render(<FormField id="x" label="Test"><input /></FormField>);
    const label = screen.getByText('Test');
    expect(label).toHaveClass('text-text-secondary', 'uppercase', 'text-xs', 'font-semibold');
  });
});
