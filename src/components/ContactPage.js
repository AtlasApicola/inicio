import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica para enviar el formulario
    setSubmitted(true);
    // Reiniciar el formulario
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      });
    }, 5000);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Contacto</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Estamos para ayudarte. Contacta con nuestro equipo para más información
            sobre investigaciones, servicios o colaboraciones.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-6">Información de contacto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-green-100 p-3 rounded-full text-green-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Dirección</h3>
                  <p className="text-gray-700">Avenida Vicente Méndez 515, Chillán, Región de Ñuble, Chile</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-green-100 p-3 rounded-full text-green-700">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Correo electrónico</h3>
                  <p className="text-gray-700">contacto@iniaquilamapu.cl</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-green-100 p-3 rounded-full text-green-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Teléfono</h3>
                  <p className="text-gray-700">+56 42 2206800</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">Horario de atención</h3>
              <p className="text-gray-700 mb-2">Lunes a viernes: 8:00 - 18:00 hrs</p>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-6">Envíanos un mensaje</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 animate-fadeIn">
                <h3 className="font-bold text-lg mb-2">¡Mensaje enviado con éxito!</h3>
                <p>Gracias por contactarnos. Responderemos a tu mensaje lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 font-medium mb-1">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="asunto" className="block text-gray-700 font-medium mb-1">Asunto</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-1">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;