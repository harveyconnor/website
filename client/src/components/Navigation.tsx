import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Harvey Connor
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                Home
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                Experience
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-indigo-600"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200">
              <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 w-full text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 w-full text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 w-full text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 w-full text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
