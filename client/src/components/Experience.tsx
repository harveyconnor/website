export default function Experience() {
  const experiences = [
    {
      title: "Lead Software Engineer",
      company: "Nura Space",
      period: "Jan 2023 – Present",
      color: "indigo",
      achievements: [
        "Managed team of 10+ developers whilst maintaining full development workload with React, TypeScript, and NodeJS applications integrated with Azure cloud services",
        "Collaborated with UI/UX designers in Figma to develop highly functional applications with optimal user experience",
        "Improved PostgreSQL database performance and load management, saving the company $50,000",
        "Reduced development build time by 50% by introducing SWC Core into webpack with React",
        "Built mobile apps with React Native and reduced mobile app battery usage by 90% by sending silent push notifications to trigger BLE scanning",
        "Built NestJS API and created GraphQL client that optimistically updates in React.js TypeScript"
      ]
    },
    {
      title: "Full Stack Software Engineer",
      company: "Nura Space",
      period: "Jan 2021 – Dec 2022",
      color: "blue",
      achievements: [
        "Architected entire Serverless PostgreSQL application for background processing user operations",
        "Improved React Native mobile application performance by >50%, reducing initial load times by 3-4 seconds",
        "Built stable backend handling 10M+ requests daily with <200ms response using Node, NestJS, and TypeScript",
        "Scaled platform from 300 to 50,000+ concurrent users",
        "Designed a packet protocol to exchange encrypted information between hardware beacons and mobile phones using React, React Native, Bluetooth LE, AES and Diffie-Hellman key exchange"
      ]
    },
    {
      title: "Application Developer",
      company: "Smart Guide",
      period: "Nov 2018 – Dec 2020",
      color: "cyan",
      achievements: [
        "Built stateful applications using React and React Native with Redux for state management",
        "Developed IoT device integrations connecting hardware and mobile phones with React Native",
        "Designed GPS tracking system using LoRA with 3km range capability",
        "Integrated turn-by-turn navigation with Google Maps Directions API to locate lost trolleys",
        "Triangulated estimate position of people indoors using relative RSSI of BLE beacons"
      ]
    },
    {
      title: "Freelance Web & Mobile Developer",
      company: "Independent",
      period: "Jan 2017 – Nov 2018",
      color: "green",
      achievements: [
        "Developed SpareMusic platform using PHP (Laravel) and VueJS, generating millions in revenue through Spotify and Apple Music",
        "Created WeWorld MVP - social media platform built with React, Node.JS, and React Native for travel photo sharing"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            7+ years of building scalable applications and leading development teams
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-blue-600 transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center">
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-indigo-600 rounded-full transform -translate-x-1.5 shadow-lg"></div>
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">{exp.company}</p>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
