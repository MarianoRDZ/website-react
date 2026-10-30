import { Link } from 'react-router-dom';

const NavbarLogo = ({ onClick }) => (
  <Link
    to="/"
    className="flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-accent"
    onClick={onClick}
  >
    <div className="relative h-9 w-9">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent to-accent-secondary opacity-20 blur-sm" />
      <div className="relative flex h-full w-full items-center justify-center rounded-lg border border-accent/30 bg-background">
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" className="text-accent" />
          <path d="M2 17l10 5 10-5" className="text-accent-secondary" />
          <path d="M2 12l10 5 10-5" className="text-accent" />
        </svg>
      </div>
    </div>
    <span>
      MARIANORDZ<span className="text-accent">.COM.AR</span>
    </span>
  </Link>
);

export default NavbarLogo;
