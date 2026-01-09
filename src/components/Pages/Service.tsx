// src/components/Services.jsx

import { SERVICES } from "../ExportedFiles/Services";



export default function Services() {
  return (
    <section id="services" className="py-12 bg-slate-500 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow"
            >
              {service.icon}
              <h3 className="mt-4 text-center text-lg font-medium">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
