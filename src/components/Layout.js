import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// Importamos los logos que necesitaremos
import logoinia from './images/logoinia.png'; // Aquí deberás colocar la ruta del logo INIA
import logob from './images/logob.png'; // Aquí deberás colocar la ruta del segundo logo

const Layout = ({ children, activePage, navigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Efecto para el scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 flex flex-col min-h-screen">
      {/* Header */}
      <header className={`fixed w-full transition-all duration-300 z-50 ${scrolled ? 'bg-green-800/95 py-2 shadow-md' : 'bg-green-800 py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`flex items-center transition-all ${scrolled ? 'scale-90' : 'scale-100'}`}>
                {/* Reemplazamos el texto por las imágenes */}
                <img 
                  src={logoinia} 
                  alt="Logo INIA" 
                  className="h-8 md:h-10"
                />
                <img 
                  src={logob} 
                  alt="Logo Quilamapu" 
                  className="h-8 md:h-10 ml-2"
                />
              </div>
            </div>
            
            {/* Navegación Desktop */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {['inicio', 'atlas', 'contacto'].map((page) => (
                  <li key={page}>
                    <button 
                      onClick={() => navigate(page)}
                      className={`text-white uppercase font-medium hover:text-yellow-400 transition-colors relative ${activePage === page ? 'text-yellow-400' : ''}`}
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                      {activePage === page && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 mt-1"></span>}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Menú móvil toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Menú móvil desplegable */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-green-700 py-4 animate-slideDown">
            <div className="container mx-auto px-4">
              <ul className="space-y-3">
                {['inicio', 'atlas', 'contacto'].map((page) => (
                  <li key={page}>
                    <button 
                      onClick={() => {
                        navigate(page);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-white w-full text-left py-2 px-3 rounded ${activePage === page ? 'bg-green-600' : ''}`}
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>
      
      {/* Contenido principal */}
      <main className="flex-grow pt-24">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">INIA Quilamapu</h3>
              <p className="mb-4">
                Centro de Investigación Agropecuaria líder en desarrollo agroalimentario sostenible en Chile.
              </p>
              <div className="flex space-x-4">
                {/* Iconos de redes sociales */}
                <a href="#" className="text-white hover:text-yellow-400 transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-400 transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('inicio'); }} className="text-gray-300 hover:text-white transition">Inicio</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('atlas'); }} className="text-gray-300 hover:text-white transition">Atlas Digital</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('contacto'); }} className="text-gray-300 hover:text-white transition">Contacto</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Laboratorios</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Investigación</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-10 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} INIA Quilamapu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;