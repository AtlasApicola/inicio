import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, Book, ArrowLeft, ArrowRight, Home } from 'lucide-react';
// Importar los estilos específicos del Atlas
import './Atlas.css';
// Importamos los componentes de páginas
import TableOfContentsPage from '../pages/TableOfContents'; 
import HistoriaAbeja from '../pages/BeeHistory';
import BeeStructure from '../pages/BeeSocialStructure'; 
import BeeReproduction from '../pages/BeeReproduction';
import BeeGenetics from '../pages/BeeGenetics';
import MeliferaBotany from '../pages/MelliferousBotany';
import BeeTemperature from '../pages/BeeTemperature';
import Apiculture from '../pages/Beekeeping';
import Apiaries from '../pages/Apiaries';
import Honey from '../pages/Honey';
import Colaboradores from '../pages/Colaboradores';
import MeliferaPage1 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0001.jpg';
import MeliferaPage2 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0002.jpg';
import MeliferaPage3 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0003.jpg';
import MeliferaPage4 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0004.jpg';
import MeliferaPage5 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0005.jpg';
import MeliferaPage6 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0006.jpg';
import MeliferaPage7 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0007.jpg';
import MeliferaPage8 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0008.jpg';
import MeliferaPage9 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0009.jpg';
import MeliferaPage10 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0010.jpg';
import MeliferaPage11 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0011.jpg';
import MeliferaPage12 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0012.jpg';
import MeliferaPage13 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0013.jpg';
import MeliferaPage14 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0014.jpg';
import MeliferaPage15 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0015.jpg';
import MeliferaPage16 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0016.jpg';
import MeliferaPage17 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0017.jpg';

const MeliferaImagePage = ({ imageSrc }) => {
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const [imgRef, setImgRef] = useState(null);
  
  useEffect(() => {
    if (!imgRef) return;
    
    const updateDimensions = () => {
      const container = imgRef.parentElement;
      if (container) {
        setContainerDimensions({
          width: container.clientWidth,
          height: container.clientHeight
        });
      }
    };
    
    // Actualizar dimensiones inicialmente
    updateDimensions();
    
    // Establecer un observador de redimensionamiento para el elemento contenedor
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (imgRef.parentElement) {
      resizeObserver.observe(imgRef.parentElement);
    }
    
    // Cleanup
    return () => {
      if (imgRef.parentElement) {
        resizeObserver.unobserve(imgRef.parentElement);
      }
      resizeObserver.disconnect();
    };
  }, [imgRef]);

  return (
    <div className="flex justify-center items-center h-full w-full relative bg-white overflow-hidden">
      <img 
        ref={setImgRef}
        src={imageSrc} 
        alt="Especies Melíferas" 
        className="max-w-full max-h-full object-contain"
        style={{ 
          width: "100%",
          height: "100%",
          objectFit: "contain",
          padding: "8px"
        }}
      />
    </div>
  );
};

// Componente de Splash con abeja en círculo y animación de carga
const BeeSplash = ({ onFinishLoading }) => {
  useEffect(() => {
    // Simulamos tiempo de carga
    const timer = setTimeout(() => {
      onFinishLoading();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onFinishLoading]);

  return (
    <div className="fixed inset-0 bg-green-50 flex flex-col items-center justify-center z-50">
      {/* Emoji de abeja con círculo */}
      <div className="relative mb-6">
        <div className="absolute inset-0 border-4 border-amber-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative h-20 w-20 bg-amber-400 rounded-full flex items-center justify-center">
          <span className="text-3xl">🐝</span>
        </div>
      </div>
      
      {/* Animación de carga con emojis de abeja */}
      <div className="flex space-x-3 mt-3">
        {[0, 1, 2, 3, 4].map((index) => (
          <div 
            key={index} 
            className="text-xl animate-bounce" 
            style={{ 
              animationDelay: `${index * 0.2}s`,
              animationDuration: '1s'
            }}
          >
            🐝
          </div>
        ))}
      </div>
      <p className="mt-3 text-gray-600">Cargando Atlas INIA Quilamapu...</p>
    </div>
  );
};

const AtlasPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Definir todas las variables y arreglos necesarios antes de usarlos
  
  // Array con todas las páginas de melifera
  const meliferaPages = [
    'melifera-botany',
    'melifera-page-1',
    'melifera-page-2',
    'melifera-page-3',
    'melifera-page-4',
    'melifera-page-5',
    'melifera-page-6',
    'melifera-page-7',
    'melifera-page-8',
    'melifera-page-9',
    'melifera-page-10',
    'melifera-page-11',
    'melifera-page-12',
    'melifera-page-13',
    'melifera-page-14',
    'melifera-page-15',
    'melifera-page-16',
    'melifera-page-17'
  ];
  
  // Array con el orden completo de las páginas para facilitar navegación
  const mainPages = [
    'table-of-contents',
    'bee-history',
    'bee-structure',
    'bee-reproduction',
    'bee-genetics',
    ...meliferaPages, // Incluye todas las páginas melifera
    'bee-temperature',
    'apiculture',
    'apiaries',
    'honey',
    'colaboradores' // Añadido colaboradores como última página
  ];

  // Lista completa de todas las páginas disponibles
  const allPages = [...mainPages];
  
  // Obtener el hash de la URL o usar un valor predeterminado
  const getInitialPage = () => {
    const hash = location.hash.replace('#', '');
    if (hash && allPages.includes(hash)) {
      return hash;
    }
    return 'table-of-contents';
  };
  
  // Estado para controlar si el menú lateral está abierto (en vista móvil)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Estado para controlar la página actual
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  // Estado para controlar si se muestra el splash
  const [isLoading, setIsLoading] = useState(true);
  // Estado para detectar si la pantalla es móvil
  const [isMobile, setIsMobile] = useState(false);
  // Estado para almacenar el tamaño de la ventana
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  // Estado para guardar la altura del contenido disponible
  const [contentHeight, setContentHeight] = useState(0);
  
  // Objeto con las imágenes de cada página
  const meliferaImages = {
    'melifera-page-1': MeliferaPage1,
    'melifera-page-2': MeliferaPage2,
    'melifera-page-3': MeliferaPage3,
    'melifera-page-4': MeliferaPage4,
    'melifera-page-5': MeliferaPage5,
    'melifera-page-6': MeliferaPage6,
    'melifera-page-7': MeliferaPage7,
    'melifera-page-8': MeliferaPage8,
    'melifera-page-9': MeliferaPage9,
    'melifera-page-10': MeliferaPage10,
    'melifera-page-11': MeliferaPage11,
    'melifera-page-12': MeliferaPage12,
    'melifera-page-13': MeliferaPage13,
    'melifera-page-14': MeliferaPage14,
    'melifera-page-15': MeliferaPage15,
    'melifera-page-16': MeliferaPage16,
    'melifera-page-17': MeliferaPage17
  };
  
  // Mapeo de IDs de secciones a páginas
  const sectionToPage = {
    1: 'bee-history',
    2: 'bee-structure',
    3: 'bee-reproduction',
    4: 'bee-genetics',
    5: 'melifera-botany',
    6: 'bee-temperature',
    7: 'apiculture',
    8: 'apiaries',
    9: 'honey',
    10: 'colaboradores' // Añadido mapeo para Colaboradores
  };

  // Mapeo inverso de páginas a IDs de secciones para la navegación principal
  const pageToMainSection = {
    'table-of-contents': 0,
    'bee-history': 1,
    'bee-structure': 2,
    'bee-reproduction': 3,
    'bee-genetics': 4,
    'melifera-botany': 5,
    'bee-temperature': 6,
    'apiculture': 7,
    'apiaries': 8,
    'honey': 9,
    'colaboradores': 10 // Añadido mapeo inverso para Colaboradores
  };

  // Array con información de títulos para la navegación
  const navItems = [
    { id: 1, number: "01", title: "Historia", page: "bee-history" },
    { id: 2, number: "02", title: "Estructura", page: "bee-structure" },
    { id: 3, number: "03", title: "Reproducción", page: "bee-reproduction" },
    { id: 4, number: "04", title: "Genética", page: "bee-genetics" },
    { id: 5, number: "05", title: "Botánica", page: "melifera-botany" },
    { id: 6, number: "06", title: "Temperatura", page: "bee-temperature" },
    { id: 7, number: "07", title: "Apicultura", page: "apiculture" },
    { id: 8, number: "08", title: "Apiarios", page: "apiaries" },
    { id: 9, number: "09", title: "Miel", page: "honey" },
    { id: 10, number: "10", title: "Colaboradores", page: "colaboradores" } // Añadido navItem para Colaboradores
  ];
  
  // Verifica si la página actual es una de las páginas de melifera
  const isMeliferaPage = meliferaPages.includes(currentPage);
  
  // Determina qué número de página de melifera es la actual
  const getMeliferaPageNumber = () => {
    if (currentPage === 'melifera-botany') return 0;
    const match = currentPage.match(/melifera-page-(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };
  
  // Calcular el progreso basado en la página actual
  const calculateProgress = () => {
    // Si es una página de melifera, calcular progreso específico para esta sección
    if (isMeliferaPage) {
      const meliferaPageNumber = getMeliferaPageNumber();
      const totalMeliferaPages = meliferaPages.length;
      // Calcular progreso relativo dentro de la sección melifera
      const meliferaProgress = meliferaPageNumber / totalMeliferaPages;
      
      // Obtener el rango de progreso entre las secciones principales 4 y 6
      const startProgress = 4 / 10; // Genética (sección 4)
      const endProgress = 6 / 10;   // Temperatura (sección 6)
      const progressRange = endProgress - startProgress;
      
      // Calcular progreso escalado dentro de este rango
      return (startProgress + (meliferaProgress * progressRange)) * 100;
    }
    
    // Para las demás páginas, usar el cálculo normal
    const sectionId = pageToMainSection[currentPage];
    if (sectionId === undefined) return 0;
    return (sectionId / 10) * 100; // 10 secciones en total (actualizado de 9 a 10)
  };

  // Actualizar la URL cuando cambia la página
  useEffect(() => {
    if (currentPage !== 'table-of-contents') {
      navigate(`/atlas#${currentPage}`, { replace: true });
    } else {
      navigate('/atlas', { replace: true });
    }
  }, [currentPage, navigate]);
  
  // Actualizar el tamaño de la ventana cuando cambia y calcular la altura disponible para el contenido
  useLayoutEffect(() => {
    const updateSize = () => {
      // Para dispositivos móviles, ajustar para la barra de direcciones del navegador
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      
      // Actualizar variables CSS personalizadas para usar en todo el componente
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      
      setWindowSize({
        width: vw,
        height: vh
      });

      // Obtener la altura del header para restar del contenido disponible
      const headerEl = document.querySelector('.atlas-header');
      const headerHeight = headerEl ? headerEl.offsetHeight : 0;
      
      // Calcular la altura disponible para el contenido
      const availableHeight = vh - headerHeight;
      setContentHeight(availableHeight);

      // Actualizar estado de móvil
      setIsMobile(vw < 768);
    };
    
    // Ejecutar inmediatamente
    updateSize();
    
    // Añadir evento de cambio de tamaño
    window.addEventListener('resize', updateSize);
    
    // Evento para orientación en dispositivos móviles
    window.addEventListener('orientationchange', () => {
      // Pequeño retraso para asegurar que se complete el cambio de orientación
      setTimeout(updateSize, 100);
    });
    
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('orientationchange', updateSize);
    };
  }, []);
  
  // Función para bloquear el scroll del body mientras el Atlas está activo
  useEffect(() => {
    // Guardar el valor original de overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Bloquear el scroll
    document.body.style.overflow = 'hidden';
    
    // Restaurar al desmontar
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Función para manejar cuando se selecciona un elemento en la tabla de contenidos
  const handleContentSelection = (sectionId) => {
    console.log(`Sección seleccionada: ${sectionId}`);
    
    // Mapear los IDs de sección a las páginas correspondientes
    const page = sectionToPage[sectionId];
    if (page) {
      setCurrentPage(page);
    } else {
      console.log(`Sección no implementada: ${sectionId}`);
    }
  };
  
  // Función para finalizar la carga
  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  // Función para navegar a la página anterior
  const goToPreviousPage = () => {
    const currentIndex = mainPages.indexOf(currentPage);
    if (currentIndex > 0) {
      setCurrentPage(mainPages[currentIndex - 1]);
    } else {
      // Si estamos en la primera página, ir a la última
      setCurrentPage(mainPages[mainPages.length - 1]);
    }
  };
  
  // Función para navegar a la página siguiente
  const goToNextPage = () => {
    const currentIndex = mainPages.indexOf(currentPage);
    if (currentIndex < mainPages.length - 1) {
      setCurrentPage(mainPages[currentIndex + 1]);
    } else {
      // Si estamos en la última página, volver a la primera
      setCurrentPage(mainPages[0]);
    }
  };
  
  // Escuchar cambios en el hash de la URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && allPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  // Calcular el valor actual de progreso
  const progress = calculateProgress();

  // Obtener el título que debe mostrarse en el header
  const getPageTitle = () => {
    // Títulos para las páginas principales
    const mainTitles = {
      'table-of-contents': 'Tabla de Contenidos',
      'bee-history': 'Historia de las Abejas',
      'bee-structure': 'Estructura Social',
      'bee-reproduction': 'Reproducción',
      'bee-genetics': 'Genética',
      'melifera-botany': 'Botánica Melífera',
      'bee-temperature': 'Temperatura',
      'apiculture': 'Apicultura',
      'apiaries': 'Apiarios',
      'honey': 'Miel',
      'colaboradores': 'Colaboradores' // Añadido título para Colaboradores
    };
    
    // Si es una página de melifera numerada
    if (currentPage.startsWith('melifera-page-')) {
      const pageNumber = currentPage.replace('melifera-page-', '');
      return `Botánica Melífera - Pág. ${pageNumber}`;
    }
    
    // Para las páginas principales
    return mainTitles[currentPage] || 'Atlas INIA Quilamapu';
  };

  return (
    <>
      {/* Splash Screen */}
      {isLoading && <BeeSplash onFinishLoading={handleFinishLoading} />}
      
      {/* Contenedor principal que ocupa toda la pantalla exactamente */}
      <div 
        className="flex flex-col w-full bg-white overflow-hidden atlas-fullscreen" 
        style={{ 
          height: 'var(--vh, 100vh)',
          maxHeight: 'var(--vh, 100vh)'
        }}
      >
        {/* Header compact del Atlas */}
        <div className="bg-green-700 text-white shadow-md flex-shrink-0 flex flex-col atlas-header">
          {/* Sección principal del header */}
          <div className="py-2 px-3 flex items-center justify-between">
            <div className="flex items-center">
              <Book className="mr-2" size={18} />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">Atlas INIA Quilamapu</h1>
                <span className="text-xs text-green-100 mt-px">
                  {getPageTitle()}
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigate('/')}
                className="text-white p-1.5 rounded-md hover:bg-green-600 transition-colors"
                aria-label="Volver a la página de inicio"
              >
                <Home size={18} />
              </button>
              
              <button 
                className="text-white p-1.5 rounded-md hover:bg-green-600 transition-colors"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label={sidebarOpen ? "Cerrar menú lateral" : "Abrir menú lateral"}
              >
                <ChevronRight size={18} className={`transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Barra de navegación con botones de secciones */}
          <div className="bg-green-800 pt-2 pb-0 px-2">
            <div className="overflow-x-auto">
              <div className="flex space-x-1 min-w-max pb-2">
                <button
                  onClick={() => setCurrentPage('table-of-contents')}
                  className={`px-2 py-1 text-xs rounded-t-md whitespace-nowrap transition-colors ${
                    currentPage === 'table-of-contents'
                      ? 'bg-green-500 text-white font-medium'
                      : 'bg-green-700 text-green-100 hover:bg-green-600 hover:text-white'
                  }`}
                >
                  <span className="font-medium">TOC</span>
                </button>
                
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.page)}
                    className={`px-2 py-1 text-xs rounded-t-md whitespace-nowrap transition-colors ${
                      currentPage === item.page || (isMeliferaPage && item.page === 'melifera-botany')
                        ? 'bg-green-500 text-white font-medium'
                        : 'bg-green-700 text-green-100 hover:bg-green-600 hover:text-white'
                    }`}
                  >
                    <span className="font-medium">{item.number}</span>
                    {!isMobile && <span className="ml-1">{item.title}</span>}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Barra de progreso - directamente debajo de los botones, sin espacio */}
            <div className="h-1 w-full bg-green-900 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-yellow-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Contenido principal con altura dinámica basada en el espacio disponible calculado */}
        <div 
          className="flex-grow relative overflow-hidden"
          style={{ height: `${contentHeight}px` }}
        >
          {/* Overlay para cuando el menú está abierto (solo en móviles) */}
          {sidebarOpen && (
            <div 
              className="absolute inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            ></div>
          )}
          
          {/* Menú lateral */}
          {sidebarOpen && (
            <div className="absolute inset-y-0 left-0 w-3/4 sm:w-64 md:w-72 bg-green-50 shadow-lg z-40 transform transition-transform duration-300 ease-in-out atlas-sidebar">
              <div className="p-4 h-full overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-green-800">Contenido</h2>
                  <button 
                    onClick={() => setSidebarOpen(false)}
                    className="p-1 rounded text-gray-500 hover:bg-green-100"
                    aria-label="Cerrar menú"
                  >
                    <ChevronRight size={20} className="rotate-180" />
                  </button>
                </div>
                
                <ul className="space-y-2">
                  {/* Categorías principales */}
                  <li>
                    <button
                      onClick={() => {
                        setCurrentPage('table-of-contents');
                        setSidebarOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        currentPage === 'table-of-contents' 
                          ? 'bg-green-200 text-green-800 font-medium' 
                          : 'text-gray-700 hover:bg-green-100'
                      }`}
                    >
                      Tabla de Contenidos
                    </button>
                  </li>
                  
                  {navItems.map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setCurrentPage(item.page);
                          setSidebarOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded transition-colors ${
                          currentPage === item.page || (isMeliferaPage && item.page === 'melifera-botany')
                            ? 'bg-green-200 text-green-800 font-medium' 
                            : 'text-gray-700 hover:bg-green-100'
                        }`}
                      >
                        {item.number}. {item.title}
                      </button>
                      
                      {/* Subpáginas de Botánica Melífera */}
                      {item.page === 'melifera-botany' && (
                        <div className="pl-6 mt-1 space-y-1">
                          {Array.from({ length: 17 }, (_, i) => i + 1).map(num => (
                            <button
                              key={`melifera-page-${num}`}
                              onClick={() => {
                                setCurrentPage(`melifera-page-${num}`);
                                setSidebarOpen(false);
                              }}
                              className={`w-full text-left px-3 py-1 rounded text-sm transition-colors ${
                                currentPage === `melifera-page-${num}`
                                  ? 'bg-green-100 text-green-800 font-medium' 
                                  : 'text-gray-600 hover:bg-green-50'
                              }`}
                            >
                              Página {num}
                            </button>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Contenedor del contenido actual con adaptación dinámica */}
          <div className="h-full w-full overflow-hidden atlas-content relative">
            <div className="atlas-section h-full w-full">
              {currentPage === 'table-of-contents' && (
                <TableOfContentsPage 
                  onChangePage={handleContentSelection} 
                  currentPageId={pageToMainSection[currentPage]} 
                />
              )}
              {currentPage === 'bee-history' && (
                <HistoriaAbeja />
              )}
              {currentPage === 'bee-structure' && (
                <BeeStructure />
              )}
              {currentPage === 'bee-reproduction' && (
                <BeeReproduction />
              )}
              {currentPage === 'bee-genetics' && (
                <BeeGenetics />
              )}
              {currentPage === 'melifera-botany' && (
                <MeliferaBotany />
              )}
              {/* Páginas de imágenes de melifera optimizadas para ajustarse al tamaño de pantalla */}
              {Object.keys(meliferaImages).map(page => (
                currentPage === page && (
                  <div 
                    key={page} 
                    className="h-full w-full flex justify-center items-center"
                    style={{ 
                      height: `${contentHeight}px`,
                      maxHeight: `${contentHeight}px`
                    }}
                  >
                    <MeliferaImagePage imageSrc={meliferaImages[page]} />
                  </div>
                )
              ))}
              {currentPage === 'bee-temperature' && (
                <BeeTemperature />
              )}
              {currentPage === 'apiculture' && (
                <Apiculture />
              )}
              {currentPage === 'apiaries' && (
                <Apiaries />
              )}
              {currentPage === 'honey' && (
                <Honey />
              )}
              {currentPage === 'colaboradores' && (
                <Colaboradores />
              )}
            </div>
          </div>
          
          {/* Botones de navegación flotantes */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-3 transform -translate-y-1/2 z-30 pointer-events-none">
            <button 
              onClick={goToPreviousPage}
              className="bg-green-600 text-white p-2 rounded-full shadow-md hover:bg-green-700 transition-colors pointer-events-auto nav-button"
              aria-label="Página anterior"
            >
              <ArrowLeft size={18} />
            </button>
            
            <button 
              onClick={goToNextPage}
              className="bg-green-600 text-white p-2 rounded-full shadow-md hover:bg-green-700 transition-colors pointer-events-auto nav-button"
              aria-label="Siguiente página"
            >
              <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Indicador de número de página para imágenes melíferas */}
          {isMeliferaPage && currentPage.startsWith('melifera-page-') && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
              <div className="bg-green-800 bg-opacity-90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                <span>Página {getMeliferaPageNumber()} de 17</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AtlasPage;