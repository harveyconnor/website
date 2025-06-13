export default function Education() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Bachelor of Information Technology</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">RMIT University</p>
                <p className="text-gray-600 dark:text-gray-300">March 2017 – November 2019</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Bachelor of Science</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Monash University</p>
                <p className="text-gray-600 dark:text-gray-300">March 2016 – November 2016</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">(Transferred to RMIT)</p>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Awards & Recognition
            </h2>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-trophy text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">2023 Schiavello Young Achiever Award</h3>
                  <p className="text-orange-600 dark:text-orange-400 font-semibold">Schiavello Group</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Recognized as a Young Achiever under 30 at Schiavello Group, the parent company of Nura Space, 
                for exceptional contributions to software engineering and team leadership.
              </p>
            </div>

            {/* Athletic Coaching */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Athletic Coaching Experience</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Athletics Coach - St Kevin's College</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">August 2017 – Present | APS Premierships 2018 & 2019</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Horizontal jumps specialist (Long Jump & Triple Jump) and high jump coach</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Athletics Coach - Loreto Mandeville Hall</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">June 2018 – September 2019 | GSV Premiership 2018</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Throws coaching specialist, focusing on Discus preparation for GSV Division 1 Championships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
