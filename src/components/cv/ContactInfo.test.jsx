import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactInfo from './ContactInfo';

vi.mock('../../constants/data', () => ({
  personalInfo: {
    email: 'john@example.com',
    phone: '+1234567890',
    location: 'Buenos Aires, Argentina',
    linkedinUsername: 'johndoe',
  },
}));

describe('ContactInfo', () => {
  it('renders all contact information', () => {
    render(<ContactInfo />);
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('+1234567890')).toBeInTheDocument();
    expect(screen.getByText('Buenos Aires, Argentina')).toBeInTheDocument();
  });

  it('email renders as mailto link', () => {
    render(<ContactInfo />);
    expect(screen.getByText('john@example.com')).toHaveAttribute('href', 'mailto:john@example.com');
  });

  it('LinkedIn link opens in new tab', () => {
    render(<ContactInfo />);
    const link = screen.getByText('linkedin.com/in/johndoe');
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/johndoe');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
