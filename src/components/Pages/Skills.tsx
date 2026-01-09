import { FaPalette, FaDesktop, FaLayerGroup, FaCheckCircle, FaEye, FaLightbulb } from "react-icons/fa";

const Skills = () => {
  const designTools = [
    { icon: <FaPalette />, title: "Adobe Photoshop", description: "Digital design & photo editing" },
    { icon: <FaLayerGroup />, title: "Adobe Illustrator", description: "Vector graphics & branding" },
    { icon: <FaDesktop />, title: "Corel Draw", description: "Layout design & printing prep" },
    { icon: "🎨", title: "Canva", description: "Quick social media & marketing designs" },
  ];

  const technicalSkills = [
    { icon: "📐", title: "Layout Design", description: "Document templates & professional layouts" },
    { icon: <FaCheckCircle />, title: "Brand Consistency", description: "Maintaining visual standards" },
    { icon: <FaEye />, title: "Attention to Detail", description: "Precision in design execution" },
    { icon: <FaLightbulb />, title: "Creative Problem Solving", description: "Innovative design solutions" },
  ];

  return (
    <section id="skills" className="px-6 md:px-20 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Professional <span className="text-indigo-600">Skills</span>
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Design Tools & Software</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designTools.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="text-3xl text-indigo-600 mb-4">{skill.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{skill.title}</h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Design Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-indigo-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-indigo-100">
                <div className="text-3xl text-indigo-600 mb-4">{skill.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{skill.title}</h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Digital Design", "Branding", "Visual Content Creation", 
              "Document Layouts", "Social Media Graphics", "Marketing Materials",
              "Template Design", "HTML & CSS Basics", "Microsoft Office Suite",
              "Version Control", "Cross-functional Collaboration"
            ].map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;