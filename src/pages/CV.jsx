const CV = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Curriculum Vitae
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Frontend Developer
        </p>
      </header>

      {/* Experience Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2">
          Experience
        </h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Position Title
            </h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">
              Company Name | 2023 - Present
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Developed and maintained React applications</li>
              <li>Collaborated with design and backend teams</li>
              <li>Implemented responsive designs using Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2">
          Education
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Degree Name
          </h3>
          <p className="text-blue-600 dark:text-blue-400 mb-2">
            University Name | 2019 - 2023
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Relevant coursework and achievements
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'Vite', 'npm', 'VS Code'].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
