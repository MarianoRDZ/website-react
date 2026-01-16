const PageLoader = () => (
  <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center">
    <div className="text-center">
      <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
      <p className="text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  </div>
);

export default PageLoader;
