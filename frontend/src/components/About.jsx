import React, { useState, useEffect } from 'react';
import { User, Globe, MapPin, Code2, Briefcase, Target } from 'lucide-react';
import Flag from 'react-world-flags';

const About = () => {
  const [age, setAge] = useState(24);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('2001-05-25');
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      
      setAge(calculatedAge);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 24 * 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const languages = [
    { name: 'Español', level: 'Nativo', flagCode: 'ES' },
    { name: 'Catalán', level: 'Nativo', flagCode: 'ES-CT' },
    { name: 'Inglés', level: 'C1', flagCode: 'GB' }
  ];

  const profile = [
    { icon: User, label: 'Edad', value: `${age} años` },
    { icon: MapPin, label: 'Ubicación', value: 'Barcelona' },
    { icon: Briefcase, label: 'Rol', value: 'Full Stack' }
  ];

 

  return (
    <section className="py-12 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sobre mí
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full "></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Profile */}
          <div className="lg:col-span-8">
            {/* Introduction */}
            <div className="mb-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <User className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Desarrollador Full Stack</h3>
                  <p className="text-gray-400">Especializado en soluciones web innovadoras</p>
                </div>
              </div>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Profesional apasionado por la tecnología con sólida experiencia en el desarrollo 
                  de aplicaciones web. Mi enfoque se centra en crear soluciones eficientes y escalables 
                  que respondan a necesidades reales del negocio, combinando expertise técnico con 
                  una comprensión profunda de los objetivos del proyecto.
                </p>
                
                
              </div>
            </div>

           

            {/* Profile Data */}
            <div className="grid md:grid-cols-3 gap-4">
              {profile.map((item, index) => (
                <div 
                  key={index}
                  className="p-5 bg-slate-800/40 rounded-xl border border-slate-700/50 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <item.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Languages & Contact */}
          <div className="lg:col-span-4 space-y-8">
            {/* Languages */}
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                  <Globe className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">Competencias Lingüísticas</h4>
              </div>
              
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:bg-slate-700/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-6 rounded overflow-hidden border border-slate-500">
                        <Flag 
                          code={language.flagCode === 'ES-CT' ? 'ES' : language.flagCode} 
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                      <div>
                        <h5 className="font-medium text-white text-sm">{language.name}</h5>
                        <p className="text-xs text-gray-400">{language.level}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(language.level === 'Nativo' ? 5 : language.level === 'C1' ? 4 : 3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;