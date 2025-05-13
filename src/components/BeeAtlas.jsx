// src/components/BeeAtlas.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Home, Menu, X } from 'lucide-react';
import DynamicIcon from './DynamicIcon';
import atlasData from '../data/atlasData';

// Importar páginas
import TableOfContents from '../pages/TableOfContents';
import BeeHistory from '../pages/BeeHistory';
import BeeSocialStructure from '../pages/BeeSocialStructure';
import BeeReproduction from '../pages/BeeReproduction';
import BeeGenetics from '../pages/BeeGenetics';
import MelliferousBotany from '../pages/MelliferousBotany';
import BeeTemperature from '../pages/BeeTemperature';
import Beekeeping from '../pages/Beekeeping';
import Apiaries from '../pages/Apiaries';
import Honey from '../pages/Honey';

// Componente principal del Atlas Digital de Abejas
const BeeAtlas = () => {
  // Verificar si atlasData es un array
  console.log('atlasData:', atlasData);
  console.log('Is array:', Array.isArray(atlasData));

  const [currentPage, setCurrentPage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [animationClass, setAnimationClass] = useState('');
  const [contentHeight, setContentHeight] = useState(0);
  
  // Referencias para animaciones
  const pageRef = useRef(null);
  const containerRef = useRef(null);
  
  // Calcula la altura del contenido para que ocupe la pantalla completa
  useEffect(() => {
    const updateContentHeight = () => {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const windowHeight = window.innerHeight;
      setContentHeight(windowHeight - headerHeight);
    };
    
    window.addEventListener('resize', updateContentHeight);
    updateContentHeight();
    
    return () => {
      window.removeEventListener('resize', updateContentHeight);
    };
  }, []);
  
  // Efecto para la animación de carga inicial
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  
  // Función para cambiar de página con efectos
  const changePage = (direction) => {
    // Agregar clase de animación
    setAnimationClass(direction === 'next' ? 'page-exit-to-left' : 'page-exit-to-right');
    
    // Cambiar la página después de un breve retraso
    setTimeout(() => {
      let newPage;
      if (direction === 'next') {
        newPage = (currentPage + 1) % (Array.isArray(atlasData) ? atlasData.length : 10);
      } else {
        newPage = (currentPage - 1 + (Array.isArray(atlasData) ? atlasData.length : 10)) % (Array.isArray(atlasData) ? atlasData.length : 10);
      }
      setCurrentPage(newPage);
      
      // Cambiar la clase de animación para la entrada
      setAnimationClass(direction === 'next' ? 'page-enter-from-right' : 'page-enter-from-left');
      
      // Quitar la clase de animación después de completar la transición
      setTimeout(() => {
        setAnimationClass('');
      }, 500);
    }, 300);
  };
  
  // Función para renderizar la página actual
  const renderCurrentPage = () => {
    switch(currentPage) {
      case 0:
        return <TableOfContents onChangePage={setCurrentPage} />;
      case 1:
        return <BeeHistory />;
      case 2:
        return <BeeSocialStructure />;
      case 3:
        return <BeeReproduction />;
      case 4:
        return <BeeGenetics />;
      case 5:
        return <MelliferousBotany />;
      case 6:
        return <BeeTemperature />;
      case 7:
        return <Beekeeping />;
      case 8:
        return <Apiaries />;
      case 9:
        return <Honey />;
      default:
        return <TableOfContents onChangePage={setCurrentPage} />;
    }
  };
  
  // Renderizado condicional para la pantalla de carga
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-amber-50 flex flex-col items-center justify-center z-50">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-4 border-t-4 border-amber-800 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-t-4 border-amber-600 border-t-transparent border-r-transparent rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-4 border-4 border-t-4 border-amber-400 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
          
          <div className="absolute inset-0 flex items-center justify-center text-4xl animate-pulse">
            <span role="img" aria-label="abeja">🐝</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-amber-800 mt-8 animate-pulse">Cargando Atlas de Abejas</h2>
        <p className="text-gray-600 mt-6">Centro de Investigación Apícola</p>
        
        <div className="mt-8 flex items-center justify-center space-x-3">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="text-2xl" 
              style={{ 
                animation: `beeLoading 1s ease-in-out ${index * 0.2}s infinite alternate`,
                opacity: 0.7
              }}
            >
              <span role="img" aria-label="abeja animada">🐝</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col h-screen bg-amber-50 overflow-hidden">
      {/* Header */}
      <header className="bg-amber-800 text-white py-3 px-4 flex justify-between items-center shadow-md z-30">
        <div className="flex items-center space-x-4">  
        </div>
        
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-bold hidden md:block">Atlas Digital de Abejas</h1>
          <div className="hidden md:flex items-center space-x-1 ml-6">
            {Array.isArray(atlasData) ? atlasData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-8 h-2 rounded-full transition-all ${
                  index === currentPage ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir a la página ${index + 1}`}
              />
            )) : (
              // Fallback en caso de que atlasData no sea un array
              <div className="flex space-x-1">
                {[...Array(10)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-8 h-2 rounded-full transition-all ${
                      index === currentPage ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ir a la página ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="mr-1 hidden sm:inline text-white/80">Página</span>
          <div className="bg-white text-amber-800 font-bold px-3 py-1 rounded-full flex items-center justify-center min-w-[3rem]">
            {currentPage + 1}/{Array.isArray(atlasData) ? atlasData.length : 10}
          </div>
        </div>
      </header>
      
      {/* Menú lateral móvil */}
      <div className={`fixed inset-y-0 left-0 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-4 bg-amber-800 text-white">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">Menú Atlas</h2>
            <button 
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-amber-800 mb-4">Navegación</h3>
          <ul className="space-y-3">
            {Array.isArray(atlasData) ? atlasData.map((item, index) => (
              <li key={index}>
                <button 
                  className={`w-full text-left py-2 px-3 rounded flex items-center ${
                    currentPage === index 
                      ? `bg-${item.color}-100 text-${item.color}-800` 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setCurrentPage(index);
                    setMenuOpen(false);
                  }}
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <DynamicIcon name={item.icon} size={20} className={`text-${item.color}-600`} />
                  </div>
                  <span className="truncate">{item.title}</span>
                </button>
              </li>
            )) : (
              // Fallback en caso de que atlasData no sea un array
              <li>
                <button 
                  className="w-full text-left py-2 px-3 rounded flex items-center hover:bg-gray-100"
                  onClick={() => {
                    setCurrentPage(0);
                    setMenuOpen(false);
                  }}
                >
                  <span className="truncate">Inicio</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div 
        ref={containerRef}
        className="flex-grow relative overflow-hidden"
        style={{ height: `${contentHeight}px` }}
      >
        {/* Contenedor de la página con animación */}
        <div 
          ref={pageRef}
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${animationClass}`}
        >
          {/* Renderizamos la página actual como componente */}
          {renderCurrentPage()}
        </div>
        
        {/* Botones de navegación */}
        <button 
          onClick={() => changePage('prev')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-20 transition hover:scale-110"
          aria-label="Página anterior"
        >
          <ChevronLeft size={24} className={`text-${Array.isArray(atlasData) && atlasData[currentPage] ? atlasData[currentPage].color : 'amber'}-600`} />
        </button>
        
        <button 
          onClick={() => changePage('next')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-20 transition hover:scale-110"
          aria-label="Página siguiente"
        >
          <ChevronRight size={24} className={`text-${Array.isArray(atlasData) && atlasData[currentPage] ? atlasData[currentPage].color : 'amber'}-600`} />
        </button>
      </div>
    </div>
  );
};

// Estilos para animaciones
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .animate-fadeInLeft {
    animation: fadeInLeft 0.8s ease-out forwards;
  }
  
  .animate-fadeInRight {
    animation: fadeInRight 0.8s ease-out forwards;
  }
  
  .animate-zoomIn {
    animation: zoomIn 0.5s ease-out forwards;
  }
  
  .animate-spin-reverse {
    animation: spin 1.5s linear infinite reverse;
  }
  
  .page-exit-to-left {
    transform: translateX(-100%);
    opacity: 0;
  }
  
  .page-exit-to-right {
    transform: translateX(100%);
    opacity: 0;
  }
  
  .page-enter-from-right {
    transform: translateX(0);
    opacity: 1;
  }
  
  .page-enter-from-left {
    transform: translateX(0);
    opacity: 1;
  }
  
  .honeycomb-item {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .honeycomb-item:hover::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 2.81L3.75 9.15v12.69L15 28.19l11.25-6.35V9.15L15 2.81zm0 1.16l10 5.65v11.39L15 26.54l-10-5.65V9.62L15 3.96z' fill='%23F59E0B' fill-opacity='0.2'/%3E%3C/svg%3E");
    background-size: 30px 30px;
    opacity: 1;
    z-index: -1;
    animation: honeycomb-bg 10s linear infinite;
  }
  
  @keyframes honeycomb-bg {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100px 100px;
    }
  }
  
  @keyframes beeLoading {
    0% {
      transform: translateY(0) scale(0.8);
      opacity: 0.5;
    }
    100% {
      transform: translateY(-10px) scale(1);
      opacity: 1;
    }
  }
`;

// Componente para aplicar los estilos CSS y renderizar el Atlas
const BeeAtlasWrapper = () => {
  useEffect(() => {
    // Agregar estilos de animación
    const styleElement = document.createElement('style');
    styleElement.textContent = animationStyles;
    document.head.appendChild(styleElement);
    
    // Limpieza al desmontar
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return <BeeAtlas />;
};

export default BeeAtlasWrapper;