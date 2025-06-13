export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '-1s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-envelope text-white text-xl"></i>
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <a href="mailto:harveyconnor97@gmail.com" className="text-gray-200 hover:text-white transition-colors">
              harveyconnor97@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-phone text-white text-xl"></i>
            </div>
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <a href="tel:+61418578194" className="text-gray-200 hover:text-white transition-colors">
              +61 418 578 194
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fab fa-linkedin text-white text-xl"></i>
            </div>
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/harveyrconnor/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">
              Connect with me
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fab fa-github text-white text-xl"></i>
            </div>
            <h3 className="text-white font-semibold mb-2">GitHub</h3>
            <a href="https://github.com/harveyconnor" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">
              View my code
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <i className="fas fa-map-marker-alt text-white mr-3"></i>
            <span className="text-white">Nunawading, Victoria, Australia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
