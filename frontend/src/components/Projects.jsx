/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [animatedCards, setAnimatedCards] = useState([]);

  // Datos de los proyectos
  const projects = [
    {
      id: 'proyecto1',
      title: 'Aplicación E-commerce',
      description: 'Una plataforma completa de comercio electrónico con carrito de compras, sistema de pagos y panel de administración avanzado.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Completado',
      statusType: 'completed',
      icon: '🚀',
      gradient: 'from-red-400 to-teal-400'
    },
    {
      id: 'proyecto2',
      title: 'App de Fitness',
      description: 'Aplicación móvil para seguimiento de ejercicios con rutinas personalizadas, estadísticas detalladas y comunidad integrada.',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      status: 'En desarrollo',
      statusType: 'progress',
      icon: '📱',
      gradient: 'from-teal-200 to-pink-200'
    }
  ];

  // Animación de entrada
  useEffect(() => {
    projects.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedCards(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  // Navegación a proyecto individual
  const navigateToProject = (projectId) => {
    // En producción usarías React Router o Next.js Router
    window.location.href = `/${projectId}`;
  };

  return (
    <div className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header - Clear and readable */}
        <div className="mb-16 relative z-10">
          <h1 className="text-3xl font-bold text-white mb-4">
            Mis Proyectos
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Background content - Only cards blurred */}
        <div className="filter blur-sm opacity-30">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`
                  relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden 
                  border border-white/20 cursor-pointer group
                  transition-all duration-500 ease-out
                  hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20
                  hover:border-white/40
                  ${animatedCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                  }
                `}
                style={{
                  transition: animatedCards.includes(index) 
                    ? 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
                    : 'opacity 0.6s ease, transform 0.6s ease'
                }}
              >
                {/* Project Image/Icon */}
                <div className={`
                  h-64 bg-gradient-to-br ${project.gradient} 
                  relative overflow-hidden
                `}>
                  {/* Grid Pattern */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40H0V0h40v40zM30 10v20h-20V10h20z'/%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  />
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl filter drop-shadow-lg opacity-90">
                      {project.icon}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-lg 
                                 border border-white/30 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between">
                    <span className={`
                      px-4 py-2 rounded-lg text-sm font-medium border
                      ${project.statusType === 'completed' 
                        ? 'bg-green-400/20 text-green-300 border-green-400/50' 
                        : 'bg-yellow-400/20 text-yellow-300 border-yellow-400/50'
                      }
                    `}>
                      {project.status}
                    </span>

                    <button 
                      className="
                        bg-gradient-to-r from-indigo-500 to-purple-600 
                        text-white px-6 py-3 rounded-lg font-medium
                        border border-white/30 backdrop-blur-sm
                        transition-all duration-300 ease-out
                        hover:from-purple-600 hover:to-indigo-500 
                        hover:translate-x-1 hover:shadow-lg hover:shadow-purple-500/25
                        flex items-center gap-2
                      "
                    >
                      Ver proyecto
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Construction Overlay - Covers entire section */}
      <div className="absolute inset-0 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8">
        

        {/* Construction Content */}
        <div className="z-10 max-w-2xl mx-auto">
          {/* Construction Icon with Animation */}
          <div className="relative mb-8">
            <div className="animate-bounce">
              <span className="text-9xl">🚧</span>
            </div>
            
          </div>

          {/* Main Construction Text */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-yellow-400 animate-pulse">
              EN CONSTRUCCIÓN
            </h2>
            <p className="text-white/90 text-xl leading-relaxed max-w-lg mx-auto">
              Esta sección está siendo desarrollada. 
              ¡Pronto podrás ver todos mis proyectos!
            </p>
            {/* Progress dots animation */}
            <div className="flex justify-center space-x-3 mt-8">
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
            </div>
            

            
          </div>
        </div>

        
      </div>

    </div>
  );
};

export default ProjectsSection;