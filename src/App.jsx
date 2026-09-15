import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Layout from './components/common/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import PageLoader from './components/common/PageLoader';
import { portfolioConfig } from '../portfolio.config';
import { initializeAnalytics, trackPageView } from './utils/analytics';

const Home = lazy(() => import('./pages/Home'));
const CV = lazy(() => import('./pages/CV'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = document.title;
    trackPageView(location.pathname + location.search, pageTitle);
  }, [location]);

  return null;
}

function App() {
  useDocumentTitle();

  useEffect(() => {
    const gaId = portfolioConfig.siteConfig.googleAnalyticsId;
    if (gaId) {
      initializeAnalytics(gaId);
    }
  }, []);

  const basename = portfolioConfig.siteConfig.basePath;

  return (
    <BrowserRouter basename={basename}>
      <AnalyticsTracker />
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
