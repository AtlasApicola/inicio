// src/pages/PageBase.jsx
// Componente base refactorizado para usar el componente de iconos dinámicos
import React, { useState, useEffect, useRef } from 'react';
import { BarChart2, Info, Leaf, Eye, Download } from 'lucide-react';
import DynamicIcon from '../components/DynamicIcon';

// Componente base para las páginas del atlas
const PageBase = ({ pageData }) => {
  const [countStats, setCountStats] = useState({
    especies: 0,
    polinizadores: 0,
    hectareas: 0,
    colmenas: 0
  });
  
  const [expandedSections, setExpandedSections] = useState({});
  
  // Valores finales para las estadísticas
  const finalStats = {
    especies: 87,
    polinizadores: 156,
    hectareas: 4250,
    colmenas: 322
  };
  
  // Referencias para animaciones
  const statsRef = useRef(null);
  const mainContentRef = useRef(null);
  
  // Efecto para animación de estadísticas
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };
    
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCountStats();
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  
  // Función para animar contadores de estadísticas
  const animateCountStats = () => {
    const duration = 2000; // 2 segundos
    const framesPerSecond = 60;
    const totalFrames = duration / 1000 * framesPerSecond;
    let frame = 0;
    
    setCountStats({
      especies: 0,
      polinizadores: 0,
      hectareas: 0,
      colmenas: 0
    });
    
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setCountStats({
        especies: Math.round(progress * finalStats.especies),
        polinizadores: Math.round(progress * finalStats.polinizadores),
        hectareas: Math.round(progress * finalStats.hectareas),
        colmenas: Math.round(progress * finalStats.colmenas)
      });
      
      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, 1000 / framesPerSecond);
  };
  
  // Función para alternar secciones expandidas
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  
  return (
    <div className="h-full flex flex-col md:flex-row">
      {/* Panel izquierdo: Imagen o video según la página */}
      <div className="w-full md:w-2/5 md:h-full relative overflow-hidden">
        {pageData.id === 9 ? (
          // Video de fondo para la página de miel
          <div className="absolute inset-0">
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover"
              src={pageData.backgroundVideo}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          </div>
        ) : (
          // Fondo normal para las otras páginas (con patrón hexagonal)
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-600"></div>
            
            {/* Superposición de efecto de panal de abeja */}
            <div className="absolute inset-0 bg-repeat opacity-30" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5.61L7.5 18.3v25.38L30 56.39l22.5-12.7V18.3L30 5.61zm0 2.31l20 11.31v22.77L30 53.08l-20-11.31V19.23L30 7.92z' fill='%23FFFFFF' fill-opacity='0.8'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </>
        )}
        
        {/* Superposición de texto flotante */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 z-10">
          <div className="mb-6 transform animate-fadeInLeft" style={{ animationDuration: '1s' }}>
            <div className={`inline-flex items-center px-3 py-1 rounded-full bg-${pageData.color}-500 text-white shadow-xl`}>
              <span className="font-medium">{`${pageData.id < 10 ? '0' : ''}${pageData.id}`}</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fadeInUp" style={{ animationDuration: '1s', animationDelay: '0.2s' }}>
            {pageData.title}
          </h2>
          
          <p className="text-xl text-white/80 max-w-lg animate-fadeInUp" style={{ animationDuration: '1s', animationDelay: '0.4s' }}>
            {pageData.subtitle}
          </p>
          
          <div className="mt-8 flex space-x-6 animate-fadeInUp" style={{ animationDuration: '1s', animationDelay: '0.6s' }}>
            <button 
              className={`px-6 py-3 bg-white text-${pageData.color}-600 rounded-lg shadow-xl flex items-center font-bold hover:bg-${pageData.color}-50 transition-transform hover:scale-105`}
            >
              <Eye size={18} className="mr-2" />
              Ver detalles
            </button>
            
            <button 
              className={`px-6 py-3 bg-${pageData.color}-500 text-white rounded-lg shadow-xl flex items-center font-bold hover:bg-${pageData.color}-600 transition-transform hover:scale-105`}
            >
              <Download size={18} className="mr-2" />
              Descargar
            </button>
          </div>
        </div>
      </div>
      
      {/* Panel derecho: Contenido detallado */}
      <div 
        className="w-full md:w-3/5 md:h-full bg-white relative"
        ref={mainContentRef}
      >
        <div 
          className="p-6 h-full overflow-auto honeycomb-bg"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5.61L7.5 18.3v25.38L30 56.39l22.5-12.7V18.3L30 5.61zm0 2.31l20 11.31v22.77L30 53.08l-20-11.31V19.23L30 7.92z' fill='%23FCD34D' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        >
          <div className="max-w-2xl mx-auto h-full flex flex-col">
            {/* Sección de descripción principal */}
            <div className="mb-4 animate-fadeIn" style={{ animationDuration: '1s', animationDelay: '0.2s' }}>
              <h3 className={`text-2xl font-bold text-${pageData.color}-600 mb-3 flex items-center`}>
                <DynamicIcon name={pageData.icon} size={36} className={`text-${pageData.color}-600`} />
                <span className="ml-2">Descripción</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {pageData.description}
              </p>
            </div>
            
            {/* Sección de estadísticas */}
            <div 
              ref={statsRef} 
              className="mb-4 bg-gray-50 rounded-xl p-4 shadow-inner animate-fadeIn" 
              style={{ animationDuration: '1s', animationDelay: '0.4s' }}
            >
              <h3 className={`text-lg font-bold text-${pageData.color}-600 mb-3 flex items-center`}>
                <BarChart2 size={18} className="mr-2" />
                Estadísticas Clave
              </h3>
              
              <div className="grid grid-cols-3 gap-2">
                {pageData.stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-lg p-2 shadow-sm text-center transform transition hover:scale-105 honeycomb-item"
                  >
                    <div className={`text-xl font-bold text-${pageData.color}-600 mb-1 counter-animation`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-white rounded-lg p-2 shadow-sm text-center honeycomb-item">
                  <div className="text-xl font-bold text-amber-600">
                    {countStats.especies}
                  </div>
                  <div className="text-xs text-gray-600">
                    Especies
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm text-center honeycomb-item">
                  <div className="text-xl font-bold text-amber-600">
                    {countStats.polinizadores}
                  </div>
                  <div className="text-xs text-gray-600">
                    Polinizadores
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm text-center honeycomb-item">
                  <div className="text-xl font-bold text-amber-600">
                    {countStats.hectareas}
                  </div>
                  <div className="text-xs text-gray-600">
                    Hectáreas
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm text-center honeycomb-item">
                  <div className="text-xl font-bold text-amber-600">
                    {countStats.colmenas}
                  </div>
                  <div className="text-xs text-gray-600">
                    Colmenas
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contenido detallado */}
            <div className="flex-grow overflow-auto">
              <h3 className={`text-lg font-bold text-${pageData.color}-600 mb-3 flex items-center`}>
                <Info size={18} className="mr-2" />
                Contenido Detallado
              </h3>
              
              <div className="space-y-4">
                {pageData.content.map((section, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-${pageData.color}-50 rounded-lg p-4 shadow-sm animate-fadeIn`}
                    style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                  >
                    <h4 className={`font-bold text-${pageData.color}-700 mb-2`}>
                      {section.title}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Aspectos destacados */}
            <div className="mt-4 animate-fadeIn" style={{ animationDuration: '1s', animationDelay: '0.8s' }}>
              <h3 className={`text-lg font-bold text-${pageData.color}-600 mb-3 flex items-center`}>
                <Leaf size={18} className="mr-2" />
                Aspectos Destacados
              </h3>
              
              <ul className="bg-white rounded-lg shadow p-3 space-y-2">
                {pageData.highlights.map((highlight, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start animate-fadeInRight" 
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-${pageData.color}-100 flex items-center justify-center mt-0.5 mr-2`}>
                      <div className={`w-2 h-2 rounded-full bg-${pageData.color}-500`}></div>
                    </div>
                    <span className="text-gray-700 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBase;