const Experience = () => {
  return (
    <section id="experience" className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Work <span className="text-indigo-600">Experience</span>
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-300"></div>

          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Graphic Designer
                </h3>
                <p className="text-lg text-indigo-600 font-semibold mb-2">
                  Mr. Luk Printing Solutions
                </p>
                <p className="text-gray-600 mb-3">Sri Lanka</p>
                <p className="text-gray-500">Oct 2023 - Oct 2025</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center justify-center md:w-1/12">
              <div className="w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-lg"></div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Designed and maintained professional document layouts, covers, and templates for reports and submissions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Ensured visual consistency and formatting standards across all project documents
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Collaborated with cross-functional teams to prepare visually clear and well-structured materials
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Managed digital files and version control with strong attention to layout accuracy and presentation quality
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Supported presentations and visual documentation for internal and external stakeholders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;