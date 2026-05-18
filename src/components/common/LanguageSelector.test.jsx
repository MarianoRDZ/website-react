import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LanguageSelector from './LanguageSelector';

const mockChangeLanguage = vi.fn();
const mockI18n = { language: 'en', changeLanguage: mockChangeLanguage };

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ i18n: mockI18n }),
}));

describe('LanguageSelector', () => {
  beforeEach(() => {
    mockChangeLanguage.mockClear();
    mockI18n.language = 'en';
  });

  it('renders EN and ES buttons', () => {
    render(<LanguageSelector />);
    expect(screen.getByRole('button', { name: /switch to english/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cambiar a español/i })).toBeInTheDocument();
  });

  it('highlights the active language', () => {
    mockI18n.language = 'es';
    render(<LanguageSelector />);
    expect(screen.getByRole('button', { name: /cambiar a español/i })).toHaveClass('bg-blue-600');
    expect(screen.getByRole('button', { name: /switch to english/i })).not.toHaveClass('bg-blue-600');
  });

  it('calls changeLanguage on click', async () => {
    const user = userEvent.setup();
    render(<LanguageSelector />);
    await user.click(screen.getByRole('button', { name: /cambiar a español/i }));
    expect(mockChangeLanguage).toHaveBeenCalledWith('es');
  });

  it('buttons have correct aria-labels', () => {
    render(<LanguageSelector />);
    expect(screen.getByRole('button', { name: /switch to english/i })).toHaveAttribute(
      'aria-label',
      'Switch to English'
    );
    expect(screen.getByRole('button', { name: /cambiar a español/i })).toHaveAttribute(
      'aria-label',
      'Cambiar a Español'
    );
  });

  it('is keyboard accessible', async () => {
    const user = userEvent.setup();
    render(<LanguageSelector />);
    await user.tab();
    expect(screen.getByRole('button', { name: /switch to english/i })).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(mockChangeLanguage).toHaveBeenCalledWith('en');
  });
});
