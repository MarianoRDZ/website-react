import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-purple-600/[0.06] blur-[100px]" />
        <div className="bg-noise absolute inset-0 opacity-[0.025]" />
      </div>
      <Navbar />
      <main className="relative flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
