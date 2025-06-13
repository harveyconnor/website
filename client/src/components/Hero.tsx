import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 opacity-90"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-2xl animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '-4s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Harvey <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">Connor</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-100">
            Lead Software Engineer & Full Stack Developer
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into scalable applications with 7+ years of experience in React, TypeScript, and cloud architecture. 
            Leading teams while building innovative solutions that serve 50,000+ concurrent users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="group px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
              <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>
            <a 
              href="https://www.linkedin.com/in/harveyrconnor/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fab fa-linkedin-in mr-2"></i>
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
