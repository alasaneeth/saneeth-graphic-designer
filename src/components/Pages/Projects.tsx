import { projects } from "../ExportedFiles/Projects";

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-20 bg-gray-50">
<h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
  My <span className="text-indigo-600">Projects</span>{" - "}
  <a
    href="https://www.linkedin.com/company/titumofficial/posts/?feedView=all"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-indigo-100 text-indigo-700 font-medium px-3 py-1 rounded-full hover:bg-indigo-200 transition"
  >
   Associated with titum (PVT)Ltd
  </a>
</h2>



      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: any, idx: number) => (
                  <span
                    key={idx}
                    className="bg-indigo-100 text-indigo-600 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;