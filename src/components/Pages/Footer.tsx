const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold">Aasif Saneeth</p>
            <p className="text-gray-400 text-sm">Graphic Designer | Digital Design & Branding Specialist</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © {currentYear} | All rights reserved | Designed and Developed by: 
            <span className="text-white font-semibold ml-1">Aasif Saneeth</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Creative Graphic Designer with experience in digital design, branding, and visual content creation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;