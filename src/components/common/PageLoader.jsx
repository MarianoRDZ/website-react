const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="text-center">
      <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-accent border-r-transparent"></div>
      <p className="text-text-secondary">Loading...</p>
    </div>
  </div>
);

export default PageLoader;
