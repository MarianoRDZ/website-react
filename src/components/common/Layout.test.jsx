import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

// Mock Navbar component
vi.mock('./Navbar', () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}));

// Mock Footer component
vi.mock('./Footer', () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}));

const renderLayout = (children = <div>Test Content</div>) => {
  return render(
    <BrowserRouter>
      <Layout>{children}</Layout>
    </BrowserRouter>
  );
};

describe('Layout Component', () => {
  describe('Rendering', () => {
    it('renders the layout structure', () => {
      const { container } = renderLayout();
      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders Navbar component', () => {
      renderLayout();
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });

    it('renders Footer component', () => {
      renderLayout();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('renders children content', () => {
      renderLayout(<div>Custom Content</div>);
      expect(screen.getByText('Custom Content')).toBeInTheDocument();
    });

    it('renders main element', () => {
      renderLayout();
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });

  describe('Component Order', () => {
    it('renders Navbar first', () => {
      const { container } = renderLayout();
      const wrapper = container.firstChild;
      const firstChild = wrapper?.firstChild;
      expect(firstChild).toHaveAttribute('data-testid', 'navbar');
    });

    it('renders main content in the middle', () => {
      const { container } = renderLayout();
      const wrapper = container.firstChild;
      const children = Array.from(wrapper?.children || []);
      const main = children.find((child) => child.tagName === 'MAIN');
      expect(main).toBeInTheDocument();
      expect(children.indexOf(main)).toBe(1);
    });

    it('renders Footer last', () => {
      const { container } = renderLayout();
      const wrapper = container.firstChild;
      const lastChild = wrapper?.lastChild;
      expect(lastChild).toHaveAttribute('data-testid', 'footer');
    });
  });

  describe('Layout Structure', () => {
    it('has flex column layout', () => {
      const { container } = renderLayout();
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('flex', 'flex-col');
    });

    it('has minimum full screen height', () => {
      const { container } = renderLayout();
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('min-h-screen');
    });

    it('has dark background', () => {
      const { container } = renderLayout();
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('bg-gray-900');
    });

    it('main content is flex-1', () => {
      renderLayout();
      const main = screen.getByRole('main');
      expect(main).toHaveClass('flex-1');
    });

    it('main content has top padding', () => {
      renderLayout();
      const main = screen.getByRole('main');
      expect(main).toHaveClass('pt-16');
    });
  });

  describe('Children Rendering', () => {
    it('renders single child', () => {
      renderLayout(<h1>Single Child</h1>);
      expect(screen.getByText('Single Child')).toBeInTheDocument();
    });

    it('renders multiple children', () => {
      renderLayout(
        <>
          <h1>Title</h1>
          <p>Paragraph</p>
          <button>Button</button>
        </>
      );

      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Paragraph')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument();
    });

    it('renders complex children with nesting', () => {
      renderLayout(
        <div>
          <section>
            <article>
              <h2>Nested Content</h2>
            </article>
          </section>
        </div>
      );

      expect(screen.getByText('Nested Content')).toBeInTheDocument();
    });

    it('renders empty children', () => {
      renderLayout(null);
      const main = screen.getByRole('main');
      expect(main).toBeEmptyDOMElement();
    });

    it('renders text node as children', () => {
      renderLayout('Plain text content');
      expect(screen.getByText('Plain text content')).toBeInTheDocument();
    });
  });

  describe('Main Content Area', () => {
    it('main has semantic role', () => {
      renderLayout();
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('main wraps children content', () => {
      renderLayout(<div data-testid="child-content">Content</div>);
      const main = screen.getByRole('main');
      const childContent = screen.getByTestId('child-content');
      expect(main).toContainElement(childContent);
    });

    it('main content starts after navbar padding', () => {
      renderLayout();
      const main = screen.getByRole('main');
      // pt-16 provides space for fixed navbar
      expect(main).toHaveClass('pt-16');
    });
  });

  describe('Component Integration', () => {
    it('integrates Navbar component correctly', () => {
      renderLayout();
      const navbar = screen.getByTestId('navbar');
      expect(navbar).toBeInTheDocument();
      expect(navbar.tagName).toBe('NAV');
    });

    it('integrates Footer component correctly', () => {
      renderLayout();
      const footer = screen.getByTestId('footer');
      expect(footer).toBeInTheDocument();
      expect(footer.tagName).toBe('FOOTER');
    });

    it('Navbar and Footer are siblings of main', () => {
      const { container } = renderLayout();
      const wrapper = container.firstChild;
      const children = wrapper?.children;

      expect(children?.[0]).toHaveAttribute('data-testid', 'navbar');
      expect(children?.[1]?.tagName).toBe('MAIN');
      expect(children?.[2]).toHaveAttribute('data-testid', 'footer');
    });
  });

  describe('Responsive Layout', () => {
    it('maintains structure on different screen sizes', () => {
      const { container } = renderLayout();
      const wrapper = container.firstChild;

      // Layout should work on all screens with flex-col
      expect(wrapper).toHaveClass('flex-col');
      expect(wrapper).not.toHaveClass('md:flex-row');
    });

    it('flex-1 allows main to grow', () => {
      renderLayout();
      const main = screen.getByRole('main');

      // flex-1 ensures main takes remaining space
      expect(main).toHaveClass('flex-1');
    });
  });

  describe('Accessibility', () => {
    it('uses semantic HTML elements', () => {
      renderLayout();

      expect(screen.getByTestId('navbar').tagName).toBe('NAV');
      expect(screen.getByRole('main').tagName).toBe('MAIN');
      expect(screen.getByTestId('footer').tagName).toBe('FOOTER');
    });

    it('has proper landmark structure', () => {
      renderLayout();

      // Main landmark should be present
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('content is properly nested', () => {
      renderLayout(
        <article>
          <h1>Article Title</h1>
        </article>
      );

      const main = screen.getByRole('main');
      const article = screen.getByRole('article');
      expect(main).toContainElement(article);
    });
  });

  describe('Layout Flow', () => {
    it('Navbar is fixed, main has padding', () => {
      renderLayout();
      const main = screen.getByRole('main');

      // Main has pt-16 to account for fixed navbar
      expect(main).toHaveClass('pt-16');
    });

    it('Footer stays at bottom', () => {
      const { container } = renderLayout();
      const wrapper = container.firstChild;

      // flex-col with main having flex-1 pushes footer to bottom
      expect(wrapper).toHaveClass('flex', 'flex-col', 'min-h-screen');
    });
  });

  describe('Content Props', () => {
    it('passes children prop correctly', () => {
      const TestComponent = () => <div data-testid="test-component">Test</div>;
      renderLayout(<TestComponent />);

      expect(screen.getByTestId('test-component')).toBeInTheDocument();
    });

    it('handles functional components as children', () => {
      const FunctionalChild = () => <span>Functional Component</span>;
      renderLayout(<FunctionalChild />);

      expect(screen.getByText('Functional Component')).toBeInTheDocument();
    });

    it('handles fragments as children', () => {
      renderLayout(
        <>
          <div>First</div>
          <div>Second</div>
        </>
      );

      expect(screen.getByText('First')).toBeInTheDocument();
      expect(screen.getByText('Second')).toBeInTheDocument();
    });
  });

  describe('Styling Consistency', () => {
    it('uses consistent dark theme', () => {
      const { container } = renderLayout();
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('bg-gray-900');
    });

    it('all three sections are present', () => {
      const { container } = renderLayout();
      const wrapper = container.firstChild;
      expect(wrapper?.children.length).toBe(3);
    });
  });

  describe('Edge Cases', () => {
    it('handles undefined children', () => {
      renderLayout(undefined);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });

    it('handles children with conditional rendering', () => {
      const showContent = true;
      renderLayout(
        <div>
          {showContent && <p>Conditional Content</p>}
          {!showContent && <p>Hidden Content</p>}
        </div>
      );

      expect(screen.getByText('Conditional Content')).toBeInTheDocument();
      expect(screen.queryByText('Hidden Content')).not.toBeInTheDocument();
    });

    it('handles children with keys', () => {
      const items = ['Item 1', 'Item 2', 'Item 3'];
      renderLayout(
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );

      items.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });
  });

  describe('Full Page Structure', () => {
    it('creates complete page layout', () => {
      renderLayout(<div>Page Content</div>);

      expect(screen.getByTestId('navbar')).toBeInTheDocument();
      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByText('Page Content')).toBeInTheDocument();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('maintains layout with dynamic content', () => {
      const { rerender } = renderLayout(<div>Initial Content</div>);
      expect(screen.getByText('Initial Content')).toBeInTheDocument();

      rerender(
        <BrowserRouter>
          <Layout>
            <div>Updated Content</div>
          </Layout>
        </BrowserRouter>
      );

      expect(screen.getByText('Updated Content')).toBeInTheDocument();
      expect(screen.queryByText('Initial Content')).not.toBeInTheDocument();
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
  });
});
