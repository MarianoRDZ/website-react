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
    renderLayout();
    const nav = screen.getByTestId('navbar');
    const main = screen.getByRole('main');
    const footer = screen.getByTestId('footer');

    expect(nav.compareDocumentPosition(main) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(main.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
