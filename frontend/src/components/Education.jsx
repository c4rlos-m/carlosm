import React from 'react';
import { FaGraduationCap, FaCode } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      title: 'Bachillerato Tecnológico',
      institution: 'Ins. Estany de la Ricarda',
      period: '2017 - 2019',
      location: 'España',
      type: 'secondary',
      description: 'Formación orientada hacia las ciencias y la tecnología, con énfasis en matemáticas, física y tecnología industrial.',
      subjects: ['Matemáticas', 'Física', 'Tecnología Industrial', 'Dibujo Técnico', 'Química'],
      skills: [
        'Pensamiento analítico y lógico',
        'Resolución de problemas técnicos',
        'Conocimientos científicos aplicados'
      ]
    },
    {
      title: 'CFGS Desarrollo de Aplicaciones Web',
      institution: 'Ins. les Salines',
      period: '2023 - 2025',
      location: 'España',
      type: 'vocational',
      description: 'Ciclo Formativo de Grado Superior especializado en el desarrollo de aplicaciones web, bases de datos y tecnologías del lado del servidor y cliente.',
      subjects: ['Programación', 'Bases de Datos', 'Desarrollo Web', 'Sistemas Informáticos', 'Lenguajes de Marcas'],
      skills: [
        'Desarrollo Full Stack',
        'Gestión de bases de datos',
        'Metodologías de desarrollo ágil',
        'Trabajo colaborativo en proyectos'
      ]
    }
  ];

  return (
    <section className="py-12 px-4 ">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white mb-2">Formación Académica</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>

        </div>
        
        {/* Education Cards - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-slate-800 rounded-lg border border-slate-700 p-6 transition-colors duration-200 hover:bg-slate-750">
              <div className="flex gap-4">
                {/* Education Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-700 rounded border border-slate-600 flex items-center justify-center">
                    {edu.type === 'vocational' ? (
                      <FaCode className="text-2xl text-green-500" />
                    ) : (
                      <FaGraduationCap className="text-2xl text-blue-500" />
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow min-w-0">
                  {/* Title & Institution */}
                  <div className="mb-1">
                    <h3 className="text-lg font-semibold text-white">
                      {edu.title}
                    </h3>
                    <p className="text-base text-gray-300 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  
                  {/* Period & Location */}
                  <div className="mb-3">
                    <p className="text-sm text-gray-400">
                      {edu.period}
                    </p>
                    <p className="text-sm text-gray-400">
                      {edu.location}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                  
                  {/* Subjects */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Materias principales:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/30 rounded-lg border border-purple-700/50"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Competencies Acquired */}
                  <div>
                    <details className="group">
                      <summary className="flex items-center cursor-pointer text-sm font-medium text-blue-400 hover:text-blue-300 mb-2">
                        <span>Ver competencias adquiridas</span>
                        <svg className="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="mt-2 pl-4 border-l-2 border-slate-600">
                        <ul className="space-y-1">
                          {edu.skills.map((skill, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-xs text-gray-400 mt-1.5 mr-2">•</span>
                              <span className="text-sm text-gray-400">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
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

export default Education;