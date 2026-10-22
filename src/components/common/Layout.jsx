import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0d1117]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-[rgba(96,217,253,0.07)] blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[rgba(139,92,246,0.06)] blur-[100px]" />
      </div>
      <Navbar />
      <main className="relative flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
