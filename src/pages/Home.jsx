const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Mariano Rodriguez</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Frontend Developer | React Enthusiast | Problem Solver
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/cv"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View CV
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm a passionate frontend developer with expertise in modern web technologies.
          I love building beautiful, responsive, and user-friendly applications.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Git', 'Vite'].map((skill) => (
            <div
              key={skill}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center"
            >
              <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
