/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { 
  FiMail, 
  FiUser, 
  FiMessageSquare, 
  FiSend, 
  FiCheckCircle, 
  FiAlertCircle,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiPhone
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://carlosm-production.up.railway.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Mensaje enviado correctamente. ¡Te responderé pronto!' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: result.error || 'Error al enviar el mensaje.' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Error al enviar el mensaje. Inténtalo de nuevo.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'carlosmarquezmolina1@gmail.com',
      href: 'mailto:carlosmarquezmolina1@gmail.com',
      color: 'hover:text-gray-300 text-blue-300'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/tuperfil',
      href: 'https://linkedin.com/in/tuperfil',
      color: 'hover:text-gray-300 text-blue-300'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'github.com/c4rlos-m',
      href: 'https://github.com/c4rlos-m',
      color: 'hover:text-gray-300 text-blue-300'
    },
    {
      icon: FiMapPin,
      label: 'Ubicación',
      value: 'Barcelona, España',
      href: null,
      color: 'text-gray-300'
    }
  ];

  return (
    <section className="py-20 px-4 " id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hablemos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Oportunidades</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            ¿Buscas talento para tu equipo? Me interesa conocer nuevas oportunidades profesionales y contribuir al crecimiento de tu empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <FiMessageSquare className="text-blue-400" />
              Envíame un mensaje
            </h3>

            {status && (
              <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                status.type === 'success' 
                  ? 'bg-green-900/50 border border-green-700/50 text-green-300' 
                  : 'bg-red-900/50 border border-red-700/50 text-red-300'
              }`}>
                {status.type === 'success' ? (
                  <FiCheckCircle className="text-green-400 flex-shrink-0" />
                ) : (
                  <FiAlertCircle className="text-red-400 flex-shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-200 font-medium flex items-center gap-2">
                    <FiUser className="text-blue-400" size={16} />
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                    className="w-full p-4 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 
                             focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 
                             transition-all duration-300 placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-200 font-medium flex items-center gap-2">
                    <FiMail className="text-blue-400" size={16} />
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full p-4 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 
                             focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 
                             transition-all duration-300 placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-200 font-medium flex items-center gap-2">
                  <FiMessageSquare className="text-blue-400" size={16} />
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  rows={6}
                  className="w-full p-4 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 
                           focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 
                           transition-all duration-300 placeholder-gray-400 resize-vertical"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-400 to-blue-800 text-white px-8 py-4 rounded-xl 
                          transition-all duration-300 font-semibold cursor-pointer
                         shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Información de contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="bg-gray-700/50 p-3 rounded-xl group-hover:bg-gray-600/50 transition-colors duration-300">
                        <IconComponent className="text-blue-400" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm font-medium">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${item.color} transition-colors duration-300 hover:underline`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className={item.color}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA adicional */}
            <div className="bg-gradient-to-r from-blue-400/20 to-blue-700/20 backdrop-blur-sm rounded-2xl p-8 
                          border border-blue-500/20 shadow-2xl">
              <h4 className="text-xl font-semibold text-white mb-4">
                ¿Buscas nuevo talento?
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Estoy abierto a nuevas oportunidades laborales.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30">
                  Posición Full-time
                </span>
                
                <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-lg text-sm font-medium border border-green-500/30">
                  Incorporación inmediata
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;