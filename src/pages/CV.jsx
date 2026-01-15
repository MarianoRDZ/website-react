const CV = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-8">
      <header className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">Curriculum Vitae</h1>
        <p className="text-gray-600 dark:text-gray-400">Frontend Developer</p>
      </header>

      <section>
        <h2 className="mb-6 border-b-2 border-blue-600 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Position Title</h3>
            <p className="mb-2 text-blue-600 dark:text-blue-400">Company Name | 2023 - Present</p>
            <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
              <li>Developed and maintained React applications</li>
              <li>Collaborated with design and backend teams</li>
              <li>Implemented responsive designs using Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 border-b-2 border-blue-600 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Degree Name</h3>
          <p className="mb-2 text-blue-600 dark:text-blue-400">University Name | 2019 - 2023</p>
          <p className="text-gray-700 dark:text-gray-300">Relevant coursework and achievements</p>
        </div>
      </section>

      <section>
        <h2 className="mb-6 border-b-2 border-blue-600 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'Vite', 'npm', 'VS Code'].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
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
