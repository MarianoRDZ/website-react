import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import Home from './pages/Home';
import CV from './pages/CV';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { portfolioConfig } from '../portfolio.config';

function App() {
  useDocumentTitle();

  // Use basePath from config
  const basename = portfolioConfig.siteConfig.basePath;

  return (
    <BrowserRouter basename={basename}>
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
