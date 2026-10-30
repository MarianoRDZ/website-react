import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgressBar from './ScrollProgressBar';
import BackgroundEffects from './BackgroundEffects';

const Layout = ({ children }) => (
  <div className="relative flex min-h-screen flex-col bg-background">
    <BackgroundEffects />
    <ScrollProgressBar />
    <Navbar />
    <main className="relative flex-1 pt-16">{children}</main>
    <Footer />
  </div>
);

export default Layout;
