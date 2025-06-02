/* eslint-disable no-unused-vars */
import { 
  Code2, 
  Atom, 
  FileText, 
  Server, 
  Database, 
  Palette, 
  Wind, 
  Github, 
  Container 
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: 'JavaScript',
      category: 'Frontend',
      icon: Code2,
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-500/5',
      borderColor: 'border-yellow-500/20',
      textColor: 'text-yellow-400'
    },
    {
      name: 'React',
      category: 'Frontend',
      icon: Atom,
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-cyan-500/5',
      borderColor: 'border-cyan-500/20',
      textColor: 'text-cyan-400'
    },
    {
      name: 'Python',
      category: 'Backend',
      icon: FileText,
      color: 'from-green-400 to-blue-500',
      bgColor: 'bg-green-500/5',
      borderColor: 'border-green-500/20',
      textColor: 'text-green-400'
    },
    {
      name: 'Node.js',
      category: 'Backend',
      icon: Server,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-600/5',
      borderColor: 'border-green-600/20',
      textColor: 'text-green-500'
    },
    {
      name: 'SQL Server',
      category: 'Database',
      icon: Database,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/5',
      borderColor: 'border-red-500/20',
      textColor: 'text-red-400'
    },
    {
      name: 'PHP',
      category: 'Backend',
      icon: Code2,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-500/5',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-400'
    },
    {
      name: 'HTML & CSS',
      category: 'Frontend',
      icon: Palette,
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-500/5',
      borderColor: 'border-orange-500/20',
      textColor: 'text-orange-400'
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      icon: Wind,
      color: 'from-teal-400 to-blue-500',
      bgColor: 'bg-teal-500/5',
      borderColor: 'border-teal-500/20',
      textColor: 'text-teal-400'
    },
    {
      name: 'GitHub',
      category: 'Tools',
      icon: Github,
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-500/5',
      borderColor: 'border-gray-500/20',
      textColor: 'text-gray-400'
    },
    {
      name: 'Docker',
      category: 'DevOps',
      icon: Container,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-600/5',
      borderColor: 'border-blue-600/20',
      textColor: 'text-blue-400'
    }
  ];

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Stack Tecnológico
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group relative p-6 rounded-lg border ${skill.borderColor} ${skill.bgColor} bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/50 hover:border-opacity-40 hover:-translate-y-1 opacity-100 translate-y-0`}
                
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${skill.bgColor} border ${skill.borderColor} flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${skill.textColor}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {skill.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {skill.category}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;