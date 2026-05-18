import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

vi.mock('./Navbar', () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}));

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

describe('Layout', () => {
  it('renders navbar, main and footer', () => {
    renderLayout();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders children inside main', () => {
    renderLayout(<div data-testid="content">Content</div>);
    expect(screen.getByRole('main')).toContainElement(screen.getByTestId('content'));
  });

  it('renders in correct order: navbar → main → footer', () => {
    const { container } = renderLayout();
    const children = Array.from(container.firstChild.children);
    expect(children[0]).toHaveAttribute('data-testid', 'navbar');
    expect(children[1].tagName).toBe('MAIN');
    expect(children[2]).toHaveAttribute('data-testid', 'footer');
  });
});
