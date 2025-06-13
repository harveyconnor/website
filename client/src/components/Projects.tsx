export default function Projects() {
  const projects = [
    {
      title: "Medi-Kinect",
      description: "Advanced medical monitoring system utilizing Microsoft Kinect's infrared technology to detect patient movements and falls, with automated alert systems for healthcare providers.",
      features: [
        "Real-time motion detection using Microsoft Kinect",
        "Voice-to-text integration with Google's Java library",
        "Web-socket based alert system with push notifications"
      ],
      technologies: ["Java", "React", "TypeScript", "Node.JS", "MongoDB"],
      gradient: "from-blue-50 to-indigo-50",
      techColor: "blue",
      imageUrl: "https://images.fastcompany.com/image/upload/f_webp,q_auto,c_fit/wp-cms/uploads/2017/10/p-1-kinect-tk-1.jpg"
    },
    {
      title: "Timing Gate System",
      description: "High-precision athletic timing system using ESP-32 microcontrollers with long-range WiFi communication, achieving millisecond accuracy for competitive sports training.",
      features: [
        "1/1000th second accuracy for competition use",
        "Multi-sensor detection: Laser, LiDAR, and infrared",
        "Synchronized RTC timing with NTP protocol"
      ],
      technologies: ["C/C++", "Python", "Node.JS", "ESP-32", "IoT"],
      gradient: "from-purple-50 to-pink-50",
      techColor: "purple",
      imageUrl: "https://statathlon.com/wp-content/uploads/2018/03/gty_826741938_92856413.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative solutions combining hardware integration with modern software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`group bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
              {/* Project Image */}
              <div className="h-64 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-gray-600">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 bg-${project.techColor}-100 text-${project.techColor}-800 rounded-full text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
