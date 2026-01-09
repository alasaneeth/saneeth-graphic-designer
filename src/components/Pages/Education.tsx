const Education = () => {
  return (
    <section id="education" className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Education & <span className="text-indigo-600">Qualifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-start mb-6">
              <div className="bg-indigo-100 p-4 rounded-lg mr-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">BEng in Software Engineering</h3>
                <p className="text-lg text-indigo-600 font-semibold">London Metropolitan University</p>
                <p className="text-gray-600">Graduated: 2025</p>
              </div>
            </div>
            <p className="text-gray-700">
              <strong>Class:</strong> Second Class Lower Division<br/>
              Comprehensive education in software development principles with design applications
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-start mb-6">
              <div className="bg-indigo-100 p-4 rounded-lg mr-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">HND in Software Development</h3>
                <p className="text-lg text-indigo-600 font-semibold">London Metropolitan University</p>
                <p className="text-gray-600">Graduated: 2024</p>
              </div>
            </div>
            <p className="text-gray-700">
              <strong>Achievement:</strong> Second Class Lower Division<br/>
              Technical foundation in software development with focus on user interface design
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-600 mb-1"><strong>Date of Birth:</strong></p>
              <p className="text-gray-800">11 May 1999</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1"><strong>Nationality:</strong></p>
              <p className="text-gray-800">Sri Lankan</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1"><strong>Passport No:</strong></p>
              <p className="text-gray-800">N10656881</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1"><strong>Passport Expiry:</strong></p>
              <p className="text-gray-800">14 June 2033</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1"><strong>Marital Status:</strong></p>
              <p className="text-gray-800">Single</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1"><strong>Visa Status:</strong></p>
              <p className="text-gray-800 font-semibold text-indigo-600">Visit Visa (Available Immediately)</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-indigo-50 rounded-lg border border-indigo-200">
          <p className="text-gray-700 italic">
            <strong>Declaration:</strong> I hereby declare that all the information mentioned above is true to the best of my knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;