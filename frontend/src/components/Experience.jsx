import React from 'react';
import { SiMcdonalds } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";

const Experience = () => {

    const now = new Date();
    const startDate = new Date('2023-05-01');
    const duration = Math.floor((now - startDate) / (1000 * 60 * 60 * 24)); // en días
    const months = Math.floor(duration / 30);
    const years = Math.floor(months / 12);
    const formattedDuration = `${years > 0 ? years + ' año' + (years > 1 ? 's' : '') : ''} ${months % 12} mes${months % 12 !== 1 ? 'es' : ''}`.trim();



  const experiences = [
    {
      title: 'Operario de Almacén',
      company: 'Amazon',
      period: 'mar. 2020 - oct. 2020 · 8 meses',
      location: 'El Prat de Llobregat, España',
      type: 'work',
      description: 'Gestión eficiente de inventario y cumplimiento de objetivos de productividad en entorno de alto rendimiento.',
      skills: ['Trabajo bajo presión', 'Atención al detalle', 'Gestión del tiempo', 'Trabajo en equipo']
      
    },
    {
      title: 'Crew Member',
      company: 'McDonald\'s',  
      period: `may. 2023 - Actualidad · ${formattedDuration}`,
      location: 'El Prat de Llobregat, España',
      type: 'work',
      description: 'Atención al cliente, trabajo en diferentes puestos del restaurante y manejo de múltiples tareas en ambiente de alta demanda.',
      skills: ['Atención al cliente', 'Multitarea', 'Comunicación', 'Trabajo en equipo']
      
    }
  ];

  return (
    <section className="py-12 px-4 ">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white mb-2">Experiencia Laboral</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>

        </div>
        
        {/* Experience Cards - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800 rounded-lg border border-slate-700 p-6 transition-colors duration-200 hover:bg-slate-750">
              <div className="flex gap-4">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-700 rounded border border-slate-600 flex items-center justify-center">
                    {exp.company === 'Amazon' ? (
                      <FaAmazon className="text-2xl text-orange-500" />
                    ) : (
                      <SiMcdonalds className="text-2xl text-yellow-500" />
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow min-w-0">
                  {/* Job Title & Company */}
                  <div className="mb-1">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-base text-gray-300 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Period & Location */}
                  <div className="mb-3">
                    <p className="text-sm text-gray-400">
                      {exp.period}
                    </p>
                    <p className="text-sm text-gray-400">
                      {exp.location}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Aptitudes:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-lg border border-blue-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;