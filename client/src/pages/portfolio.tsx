import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Portfolio() {
  return (
    <div className="font-inter bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Harvey Connor
            </h3>
            <p className="text-gray-400 mb-6">
              Lead Software Engineer • Full Stack Developer • Innovation Driver
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://www.linkedin.com/in/harveyrconnor/" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com/harveyconnor" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Harvey Connor. Built with passion for innovation and excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
