import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/common/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import Home from './pages/Home';
import CV from './pages/CV';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { portfolioConfig } from '../portfolio.config';
import { initializeAnalytics, trackPageView } from './utils/analytics';

// Component to track page views
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

  // Initialize Google Analytics
  useEffect(() => {
    const gaId = portfolioConfig.siteConfig.googleAnalyticsId;
    if (gaId) {
      initializeAnalytics(gaId);
    }
  }, []);

  // Use basePath from config
  const basename = portfolioConfig.siteConfig.basePath;

  return (
    <BrowserRouter basename={basename}>
      <AnalyticsTracker />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
