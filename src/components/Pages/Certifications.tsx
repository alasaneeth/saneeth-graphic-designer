import { CERTIFICATIONS } from "../ExportedFiles/Certifications";

const Certifications = () => {
  return (
    <section id="certifications" className="w-full py-12 bg-white">
      <h2 className="mx-4 text-xl md:text-2xl font-semibold text-gray-800 text-center mb-12">
        Certifications and Badges
      </h2>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {CERTIFICATIONS.map((providerGroup) => (
          <div key={providerGroup.provider} className="mb-12">
            {/* Divider with Title */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 border-t border-gray-300"></div>
              <h3 className="mx-4 text-lg md:text-xl font-semibold text-gray-700 capitalize">
                From {providerGroup.provider}
              </h3>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {providerGroup.items.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-gray-50"
                >
                  <img 
                    className="w-12 h-12 flex-shrink-0 mt-1" 
                    src={cert.logo} 
                    alt={`${providerGroup.provider} logo`} 
                  />
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base leading-relaxed"
                  >
                    {cert.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;