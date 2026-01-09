import heroImage from "../../assets/images/Hero.jpg";

const Hero = () => {
  return (
    <section id='home' className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-[#f9fafb] to-[#e5e7eb]">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Hi, I'm <span className="text-indigo-600">Aasif Saneeth</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-4">
          <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-gray-500 pr-5">
            Graphic Designer
          </span>
        </p>
        
        <p className="text-lg text-gray-600 mb-6">
          Creative & detail-oriented designer with experience in digital design, branding, and visual content creation | 
          Currently available on Visit Visa in Dubai
        </p>

        <div className="mt-8">
          <a
            href="#contacts"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 inline-block mr-4"
          >
            Contact Me
          </a>
          <a
            href="#experience"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition duration-300 inline-block"
          >
            View Experience
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          className="rounded-2xl shadow-lg max-w-xs md:max-w-md lg:max-w-lg"
          src={heroImage}
          alt="Aasif Saneeth - Graphic Designer"
        />
      </div>
    </section>
  );
};

export default Hero;