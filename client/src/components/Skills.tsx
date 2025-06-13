export default function Skills() {
  const frontendSkills = [
    "React", "TypeScript", "JavaScript", "React Native", "Redux", "Tailwind CSS", "Material UI", "PWA"
  ];

  const backendSkills = [
    "Node.JS", "NestJS", "GraphQL", "Azure", "PostgreSQL", "Docker", "Serverless", "CI/CD"
  ];

  const mobileToolsSkills = [
    "Swift", "Kotlin", "Java", "Git", "Figma", "Swagger", "UNIX", "Bash"
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-code text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Frontend Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-700/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-server text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Backend & Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-green-100 dark:bg-green-800/50 text-green-800 dark:text-green-200 rounded-full text-sm font-medium hover:bg-green-200 dark:hover:bg-green-700/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile & Tools */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-mobile-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Mobile & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {mobileToolsSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-700/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
