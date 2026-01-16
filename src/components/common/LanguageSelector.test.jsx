import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LanguageSelector from './LanguageSelector';

// Mock react-i18next
const mockChangeLanguage = vi.fn();
const mockI18n = {
  language: 'en',
  changeLanguage: mockChangeLanguage,
};

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: mockI18n,
  }),
}));

describe('LanguageSelector Component', () => {
  beforeEach(() => {
    mockChangeLanguage.mockClear();
    mockI18n.language = 'en';
  });

  describe('Rendering', () => {
    it('renders both language buttons', () => {
      render(<LanguageSelector />);

      expect(screen.getByRole('button', { name: /switch to english/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /cambiar a español/i })).toBeInTheDocument();
    });

    it('renders EN button', () => {
      render(<LanguageSelector />);

      expect(screen.getByText('EN')).toBeInTheDocument();
    });

    it('renders ES button', () => {
      render(<LanguageSelector />);

      expect(screen.getByText('ES')).toBeInTheDocument();
    });

    it('renders with rounded container', () => {
      const { container } = render(<LanguageSelector />);
      const wrapper = container.querySelector('.rounded-full.bg-gray-800');

      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Active Language State', () => {
    it('highlights English button when English is active', () => {
      mockI18n.language = 'en';
      render(<LanguageSelector />);

      const enButton = screen.getByRole('button', { name: /switch to english/i });

      expect(enButton).toHaveClass('bg-blue-600', 'text-white', 'shadow-sm');
    });

    it('does not highlight Spanish button when English is active', () => {
      mockI18n.language = 'en';
      render(<LanguageSelector />);

      const esButton = screen.getByRole('button', { name: /cambiar a español/i });

      expect(esButton).toHaveClass('text-gray-400');
      expect(esButton).not.toHaveClass('bg-blue-600');
    });

    it('highlights Spanish button when Spanish is active', () => {
      mockI18n.language = 'es';
      render(<LanguageSelector />);

      const esButton = screen.getByRole('button', { name: /cambiar a español/i });

      expect(esButton).toHaveClass('bg-blue-600', 'text-white', 'shadow-sm');
    });

    it('does not highlight English button when Spanish is active', () => {
      mockI18n.language = 'es';
      render(<LanguageSelector />);

      const enButton = screen.getByRole('button', { name: /switch to english/i });

      expect(enButton).toHaveClass('text-gray-400');
      expect(enButton).not.toHaveClass('bg-blue-600');
    });
  });

  describe('Language Switching', () => {
    it('calls changeLanguage with "en" when EN button is clicked', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector />);

      await user.click(screen.getByRole('button', { name: /switch to english/i }));

      expect(mockChangeLanguage).toHaveBeenCalledWith('en');
      expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
    });

    it('calls changeLanguage with "es" when ES button is clicked', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector />);

      await user.click(screen.getByRole('button', { name: /cambiar a español/i }));

      expect(mockChangeLanguage).toHaveBeenCalledWith('es');
      expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
    });

    it('handles multiple language switches', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector />);

      await user.click(screen.getByRole('button', { name: /cambiar a español/i }));
      await user.click(screen.getByRole('button', { name: /switch to english/i }));
      await user.click(screen.getByRole('button', { name: /cambiar a español/i }));

      expect(mockChangeLanguage).toHaveBeenCalledTimes(3);
      expect(mockChangeLanguage).toHaveBeenNthCalledWith(1, 'es');
      expect(mockChangeLanguage).toHaveBeenNthCalledWith(2, 'en');
      expect(mockChangeLanguage).toHaveBeenNthCalledWith(3, 'es');
    });
  });

  describe('Styling', () => {
    it('applies transition classes to buttons', () => {
      render(<LanguageSelector />);

      const enButton = screen.getByRole('button', { name: /switch to english/i });
      const esButton = screen.getByRole('button', { name: /cambiar a español/i });

      expect(enButton).toHaveClass('transition-all', 'duration-200');
      expect(esButton).toHaveClass('transition-all', 'duration-200');
    });

    it('applies hover styles to inactive button', () => {
      mockI18n.language = 'en';
      render(<LanguageSelector />);

      const esButton = screen.getByRole('button', { name: /cambiar a español/i });

      expect(esButton).toHaveClass('hover:text-gray-300');
    });

    it('buttons have rounded-full shape', () => {
      render(<LanguageSelector />);

      const enButton = screen.getByRole('button', { name: /switch to english/i });
      const esButton = screen.getByRole('button', { name: /cambiar a español/i });

      expect(enButton).toHaveClass('rounded-full');
      expect(esButton).toHaveClass('rounded-full');
    });

    it('buttons have consistent padding and text size', () => {
      render(<LanguageSelector />);

      const enButton = screen.getByRole('button', { name: /switch to english/i });
      const esButton = screen.getByRole('button', { name: /cambiar a español/i });

      expect(enButton).toHaveClass('px-4', 'py-1.5', 'text-sm', 'font-semibold');
      expect(esButton).toHaveClass('px-4', 'py-1.5', 'text-sm', 'font-semibold');
    });
  });

  describe('Accessibility', () => {
    it('EN button has correct aria-label', () => {
      render(<LanguageSelector />);

      const enButton = screen.getByRole('button', { name: /switch to english/i });

      expect(enButton).toHaveAttribute('aria-label', 'Switch to English');
    });

    it('ES button has correct aria-label', () => {
      render(<LanguageSelector />);

      const esButton = screen.getByRole('button', { name: /cambiar a español/i });

      expect(esButton).toHaveAttribute('aria-label', 'Cambiar a Español');
    });

    it('buttons are keyboard accessible', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector />);

      // Tab to first button
      await user.tab();
      const enButton = screen.getByRole('button', { name: /switch to english/i });
      expect(enButton).toHaveFocus();

      // Press Enter
      await user.keyboard('{Enter}');
      expect(mockChangeLanguage).toHaveBeenCalledWith('en');

      // Tab to second button
      await user.tab();
      const esButton = screen.getByRole('button', { name: /cambiar a español/i });
      expect(esButton).toHaveFocus();

      // Press Enter
      await user.keyboard('{Enter}');
      expect(mockChangeLanguage).toHaveBeenCalledWith('es');
    });

    it('supports Space key for activation', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector />);

      const enButton = screen.getByRole('button', { name: /switch to english/i });
      enButton.focus();

      await user.keyboard(' ');
      expect(mockChangeLanguage).toHaveBeenCalledWith('en');
    });
  });

  describe('Button Types', () => {
    it('buttons are of type button', () => {
      render(<LanguageSelector />);

      const enButton = screen.getByRole('button', { name: /switch to english/i });
      const esButton = screen.getByRole('button', { name: /cambiar a español/i });

      // HTML buttons without explicit type default to 'button', but it's better to be explicit
      expect(enButton.tagName).toBe('BUTTON');
      expect(esButton.tagName).toBe('BUTTON');
    });
  });

  describe('Layout', () => {
    it('buttons are in a flex container with gap', () => {
      const { container } = render(<LanguageSelector />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('flex', 'items-center', 'gap-1');
    });

    it('container has background and padding', () => {
      const { container } = render(<LanguageSelector />);
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass('bg-gray-800', 'p-1');
    });
  });

  describe('Edge Cases', () => {
    it('handles unknown language code gracefully', () => {
      mockI18n.language = 'fr';
      render(<LanguageSelector />);

      // Neither button should be highlighted
      const enButton = screen.getByRole('button', { name: /switch to english/i });
      const esButton = screen.getByRole('button', { name: /cambiar a español/i });

      expect(enButton).not.toHaveClass('bg-blue-600');
      expect(esButton).not.toHaveClass('bg-blue-600');
    });

    it('renders correctly when language changes', () => {
      mockI18n.language = 'en';
      const { rerender } = render(<LanguageSelector />);

      let enButton = screen.getByRole('button', { name: /switch to english/i });
      expect(enButton).toHaveClass('bg-blue-600');

      mockI18n.language = 'es';
      rerender(<LanguageSelector />);

      const esButton = screen.getByRole('button', { name: /cambiar a español/i });
      expect(esButton).toHaveClass('bg-blue-600');
    });
  });
});
