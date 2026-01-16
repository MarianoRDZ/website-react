import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactInfoItem from './ContactInfoItem';

const MockIcon = ({ className }) => (
  <svg className={className} data-testid="icon">
    Icon
  </svg>
);

describe('ContactInfoItem Component', () => {
  describe('Rendering', () => {
    it('renders icon component', () => {
      render(<ContactInfoItem icon={MockIcon} label="Email" value="test@example.com" />);
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('renders label', () => {
      render(<ContactInfoItem icon={MockIcon} label="Email" value="test@example.com" />);
      expect(screen.getByText('Email')).toBeInTheDocument();
    });

    it('renders value', () => {
      render(<ContactInfoItem icon={MockIcon} label="Email" value="test@example.com" />);
      expect(screen.getByText('test@example.com')).toBeInTheDocument();
    });

    it('renders all props together', () => {
      render(<ContactInfoItem icon={MockIcon} label="Location" value="Buenos Aires" />);
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Location')).toBeInTheDocument();
      expect(screen.getByText('Buenos Aires')).toBeInTheDocument();
    });
  });

  describe('Icon Rendering', () => {
    it('passes className to icon component', () => {
      render(<ContactInfoItem icon={MockIcon} label="Test" value="Value" />);
      const icon = screen.getByTestId('icon');
      expect(icon).toHaveClass('h-6', 'w-6', 'text-blue-400');
    });

    it('renders different icon components', () => {
      const AnotherIcon = ({ className }) => (
        <svg className={className} data-testid="another-icon">
          Another
        </svg>
      );
      render(<ContactInfoItem icon={AnotherIcon} label="Test" value="Value" />);
      expect(screen.getByTestId('another-icon')).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('applies flex layout', () => {
      const { container } = render(<ContactInfoItem icon={MockIcon} label="Test" value="Value" />);
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('flex', 'gap-4');
    });

    it('applies shrink-0 to icon wrapper', () => {
      const { container } = render(<ContactInfoItem icon={MockIcon} label="Test" value="Value" />);
      const iconWrapper = container.querySelector('.shrink-0');
      expect(iconWrapper).toBeInTheDocument();
    });

    it('applies correct label classes', () => {
      render(<ContactInfoItem icon={MockIcon} label="Test Label" value="Value" />);
      const label = screen.getByText('Test Label');
      expect(label).toHaveClass(
        'text-xs',
        'font-semibold',
        'tracking-wider',
        'text-gray-600',
        'uppercase',
        'dark:text-gray-400'
      );
    });

    it('applies correct value classes', () => {
      render(<ContactInfoItem icon={MockIcon} label="Label" value="Test Value" />);
      const value = screen.getByText('Test Value');
      expect(value).toHaveClass(
        'mt-1',
        'text-lg',
        'font-medium',
        'text-gray-900',
        'dark:text-white'
      );
    });
  });

  describe('Content Variations', () => {
    it('handles long labels', () => {
      const longLabel = 'This is a very long label for testing purposes';
      render(<ContactInfoItem icon={MockIcon} label={longLabel} value="Value" />);
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });

    it('handles long values', () => {
      const longValue = 'verylongemailaddress@verylongdomainname.com';
      render(<ContactInfoItem icon={MockIcon} label="Email" value={longValue} />);
      expect(screen.getByText(longValue)).toBeInTheDocument();
    });

    it('handles special characters in value', () => {
      render(<ContactInfoItem icon={MockIcon} label="Phone" value="+54 11 1234-5678" />);
      expect(screen.getByText('+54 11 1234-5678')).toBeInTheDocument();
    });

    it('handles empty string value', () => {
      render(<ContactInfoItem icon={MockIcon} label="Test" value="" />);
      const value = screen.getByText('', { selector: '.mt-1' });
      expect(value).toBeInTheDocument();
    });
  });

  describe('Layout Structure', () => {
    it('renders icon before content', () => {
      const { container } = render(<ContactInfoItem icon={MockIcon} label="Test" value="Value" />);
      const children = Array.from(container.firstChild.children);
      expect(children[0].querySelector('[data-testid="icon"]')).toBeInTheDocument();
    });

    it('renders label before value', () => {
      const { container } = render(<ContactInfoItem icon={MockIcon} label="Label" value="Value" />);
      const content = container.querySelectorAll('p');
      expect(content[0].textContent).toBe('Label');
      expect(content[1].textContent).toBe('Value');
    });
  });

  describe('Accessibility', () => {
    it('uses semantic p tags for text', () => {
      render(<ContactInfoItem icon={MockIcon} label="Label" value="Value" />);
      const paragraphs = document.querySelectorAll('p');
      expect(paragraphs.length).toBe(2);
    });

    it('label has uppercase styling', () => {
      render(<ContactInfoItem icon={MockIcon} label="email" value="test@test.com" />);
      const label = screen.getByText('email');
      expect(label).toHaveClass('uppercase');
    });
  });

  describe('Icon Integration', () => {
    it('icon receives correct size classes', () => {
      render(<ContactInfoItem icon={MockIcon} label="Test" value="Value" />);
      const icon = screen.getByTestId('icon');
      expect(icon).toHaveClass('h-6', 'w-6');
    });

    it('icon receives correct color class', () => {
      render(<ContactInfoItem icon={MockIcon} label="Test" value="Value" />);
      const icon = screen.getByTestId('icon');
      expect(icon).toHaveClass('text-blue-400');
    });
  });
});
