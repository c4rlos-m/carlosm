import React from 'react';

const CTA = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="relative w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Imagen Profesional */}
          <div className="w-auto flex justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img
                src="/images/carlos.jpg"
                alt="Carlos Márquez - Desarrollador Web"
                className="relative w-72 h-72 rounded-2xl shadow-2xl "
              />
            </div>
          </div>
          
          {/* Contenido Principal */}
          <div className="w-auto px-12 mx-auto text-center lg:text-left space-y-6">
            <div className="space-y-2 w-[72%]">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Carlos Márquez
              </h1>
              <div className="flex items-center justify-center lg:justify-between gap-3">
                <h2 className="text-xl font-medium text-blue-400">
                  Desarrollador Web Junior
                </h2>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-lg border border-blue-500/30">
                  Full Stack
                </span>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Desarrollador apasionado por crear soluciones web escalables y mantener código limpio. 
              Buscando oportunidades para crecer en un equipo dinámico y contribuir con ideas frescas.
            </p>
            
            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#experience"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10">Ver Proyectos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#contact"
                className="group px-8 py-4 border-2 border-slate-600 text-gray-200 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/5 transform hover:-translate-y-1 transition-all duration-300"
              >
                Contactar
              </a>
            </div>
            
            {/* Indicadores Profesionales */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 ">
              <div className="flex items-center justify-center lg:justify-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Abierto a oportunidades</span>
              </div>
              <div className="flex items-center justify-center lg:justify-center gap-2 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Trabajo en equipo</span>
              </div>
              <div className="flex items-center justify-center lg:justify-center gap-2 text-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Metodologías ágiles</span>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;