import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import PageLoader from './components/common/PageLoader';
import ScrollToTop from './components/common/ScrollToTop';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import { routes } from './routes';

function App() {
  useDocumentTitle();

  return (
    <BrowserRouter basename="/website-react">
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Layout>
          <Routes>
            {routes.map(({ path, element: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
