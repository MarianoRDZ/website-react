const CVSection = ({ title, children }) => (
  <section>
    <h2 className="mb-6 border-b-2 border-blue-600 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
      {title}
    </h2>
    {children}
  </section>
);

export default CVSection;
