// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full  text-gray-100 py-4 z-50 ">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Botones de Navegación Centrados */}
        <nav className="flex justify-center gap-6 flex-1">
          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 px-4 py-2 rounded-md transition-all duration-300 font-semibold"
          >
            Sobre Mí
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-blue-400 px-4 py-2 rounded-md transition-all duration-300 font-semibold"
          >
            Habilidades
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-blue-400 px-4 py-2 rounded-md transition-all duration-300 font-semibold"
          >
            Proyectos
          </a>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;