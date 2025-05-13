import React, { useState, useEffect } from 'react';
import atlasData from '../data/atlasData';
import DynamicIcon from '../components/DynamicIcon';
import abeja from '../components/images/Abeja.png'; // Importamos la imagen de la abeja

const TableOfContents = ({ onChangePage }) => {
  const pageData = atlasData[0]; // Obtenemos los datos de la página de índice
  const [loaded, setLoaded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  // Simular carga de la página
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);
  
  // Secciones de contenido
  const sections = [
    {
      id: 1,
      number: "01",
      title: "Historia de las Abejas",
      items: ["Orígenes de las abejas", "Evolución a lo largo del tiempo"]
    },
    {
      id: 2,
      number: "02",
      title: "Estructura Social de las Abejas",
      items: ["Jerarquía en la colmena", "Roles de las abejas (reina, obreras, zánganos)"]
    },
    {
      id: 3,
      number: "03",
      title: "Reproducción de las Abejas",
      items: ["Ciclo de vida", "Mecanismos de reproducción"]
    },
    {
      id: 4,
      number: "04",
      title: "Genética de las Abejas",
      items: ["Diversidad genética", "Impacto en las colmenas"]
    },
    {
      id: 5,
      number: "05",
      title: "Botánica Melífera",
      items: ["Plantas que atraen a las abejas", "Descripción de sitios ecológicos", "Calendarios de floraciones por cada mes en tres sitios ecológicos"]
    },
    {
      id: 6,
      number: "06",
      title: "Relación de las Abejas con la Temperatura",
      items: ["Efectos del clima en la actividad de las abejas", "Datos de sensores de temperatura y horas efectivas de vuelo"]
    },
    {
      id: 7,
      number: "07",
      title: "Apicultura",
      items: ["Historia y desarrollo de la apicultura", "Prácticas y técnicas apícolas"],
      subsections: [
        {
          title: "Número de Apicultores en el país y Ñuble",
          items: ["Estadísticas actuales", "Tendencias en el crecimiento de la apicultura local"]
        },
        {
          title: "Apicultura Natural Regenerativa (ARN)",
          items: ["Principios de la apicultura natural", "Beneficios para el medio ambiente", "Calendario de mejo ARN"]
        }
      ]
    },
    {
      id: 8,
      number: "08",
      title: "Apiarios",
      items: ["Diseño y gestión de apiarios", "Importancia de la ubicación"]
    },
    {
      id: 9,
      number: "09",
      title: "Miel",
      items: ["Tipos de miel", "Incorruptibilidad de la miel", "Consumo de miel"]
    }
  ];

  // Determinar si una sección debe estar en la primera o segunda columna
  const isFirstColumn = (index) => index < 5;

  return (
    <div className="w-full pb-20 overflow-y-auto"> {/* Añadido overflow-y-auto para scroll */}
      <div className={`w-full flex transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Barra lateral verde */}
        <div className={`hidden md:flex w-28 bg-lime-500 flex-col items-center justify-center transform transition-transform duration-700 ${loaded ? 'translate-x-0' : '-translate-x-full'}`} style={{height: '600px', position: 'sticky', top: '64px'}}>
          <div className="h-full flex items-center justify-center">
            <div className={`text-2xl font-black text-white tracking-tighter -rotate-90 transform whitespace-nowrap transition-transform duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
              Tabla de Contenidos
            </div>
          </div>
        </div>
        
        {/* Contenido principal */}
        <div className="w-full bg-white p-4 overflow-y-auto"> {/* Añadido overflow-y-auto para scroll */}
          <div className="max-w-5xl mx-auto">
            
            {/* Filas de índice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-14 md:gap-y-6 relative">
              
              {/* Imagen de abeja en el centro */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none hidden md:block z-10 transition-all duration-1500 ${loaded ? 'opacity-80 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-180'} bee-float`}>
                <img 
                  src={abeja} 
                  alt="Abeja melífera" 
                  className="object-contain w-full h-full"
                />
              </div>

              <style jsx>{`
                @keyframes float {
                  0% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
                  25% { transform: translate(-50%, -50%) translateY(-15px) rotate(3deg); }
                  50% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
                  75% { transform: translate(-50%, -50%) translateY(15px) rotate(-3deg); }
                  100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
                }
                .bee-float {
                  animation: float 6s ease-in-out infinite;
                }
                .slide-in {
                  animation: slideIn 0.5s forwards;
                }
                @keyframes slideIn {
                  0% { opacity: 0; transform: translateY(20px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                .list-item-appear {
                  animation: fadeSlideIn 0.4s forwards;
                }
                @keyframes fadeSlideIn {
                  0% { opacity: 0; transform: translateX(-10px); }
                  100% { opacity: 1; transform: translateX(0); }
                }
              `}</style>
              
              {/* Primer grupo: columna izquierda */}
              <div className="space-y-6">
                {sections.filter((_, i) => isFirstColumn(i)).map((section, index) => (
                  <div 
                    key={section.id}
                    className={`flex items-start transition-all duration-500 ${loaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    onMouseEnter={() => setHoveredItem(section.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="mr-2">
                      <div 
                        className={`text-5xl font-black transition-all duration-300 ${hoveredItem === section.id ? 'text-lime-600 transform scale-110' : 'text-black'}`}
                      >
                        {section.number}
                      </div>
                    </div>
                    <div className="mt-1">
                      <button 
                        className={`text-sm font-bold mb-1 text-left transition-all duration-300 ${hoveredItem === section.id ? 'text-lime-600 transform translate-x-1' : 'hover:text-lime-600'}`}
                        onClick={() => onChangePage(section.id)}
                      >
                        {section.title}
                      </button>
                      <ul 
                        className={`list-disc pl-4 space-y-0.5 text-xs text-gray-700 transition-all duration-500 ${loaded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                        style={{ transitionDelay: `${index * 150 + 200}ms` }}
                      >
                        {section.items.map((item, idx) => (
                          <li 
                            key={idx}
                            className="list-item-appear"
                            style={{ animationDelay: `${index * 150 + 300 + idx * 100}ms` }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      {section.subsections?.map((subsection, subIdx) => (
                        <React.Fragment key={`sub-${subIdx}`}>
                          <p 
                            className="text-xs font-bold mt-1 list-item-appear"
                            style={{ animationDelay: `${index * 150 + 500 + subIdx * 100}ms` }}
                          >
                            {subsection.title}
                          </p>
                          <ul 
                            className={`list-disc pl-4 space-y-0.5 text-xs text-gray-700 transition-all duration-500 ${loaded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                            style={{ transitionDelay: `${index * 150 + 600 + subIdx * 100}ms` }}
                          >
                            {subsection.items.map((item, itemIdx) => (
                              <li 
                                key={itemIdx}
                                className="list-item-appear"
                                style={{ animationDelay: `${index * 150 + 700 + subIdx * 100 + itemIdx * 50}ms` }}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Segundo grupo: columna derecha */}
              <div className="space-y-6 relative pl-28">
                {sections.filter((_, i) => !isFirstColumn(i)).map((section, index) => (
                  <div 
                    key={section.id}
                    className={`flex items-start transition-all duration-500 ${loaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
                    style={{ transitionDelay: `${(index + 5) * 150}ms` }}
                    onMouseEnter={() => setHoveredItem(section.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="mr-2">
                      <div 
                        className={`text-5xl font-black transition-all duration-300 ${hoveredItem === section.id ? 'text-lime-600 transform scale-110' : 'text-black'}`}
                      >
                        {section.number}
                      </div>
                    </div>
                    <div className="mt-1">
                      <button 
                        className={`text-sm font-bold mb-1 text-left transition-all duration-300 ${hoveredItem === section.id ? 'text-lime-600 transform translate-x-1' : 'hover:text-lime-600'}`}
                        onClick={() => onChangePage(section.id)}
                      >
                        {section.title}
                      </button>
                      <ul 
                        className={`list-disc pl-4 space-y-0.5 text-xs text-gray-700 transition-all duration-500 ${loaded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                        style={{ transitionDelay: `${(index + 5) * 150 + 200}ms` }}
                      >
                        {section.items.map((item, idx) => (
                          <li 
                            key={idx}
                            className="list-item-appear"
                            style={{ animationDelay: `${(index + 5) * 150 + 300 + idx * 100}ms` }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      {section.subsections?.map((subsection, subIdx) => (
                        <React.Fragment key={`sub-${subIdx}`}>
                          <p 
                            className="text-xs font-bold mt-1 list-item-appear"
                            style={{ animationDelay: `${(index + 5) * 150 + 500 + subIdx * 100}ms` }}
                          >
                            {subsection.title}
                          </p>
                          <ul 
                            className={`list-disc pl-4 space-y-0.5 text-xs text-gray-700 transition-all duration-500 ${loaded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                            style={{ transitionDelay: `${(index + 5) * 150 + 600 + subIdx * 100}ms` }}
                          >
                            {subsection.items.map((item, itemIdx) => (
                              <li 
                                key={itemIdx}
                                className="list-item-appear"
                                style={{ animationDelay: `${(index + 5) * 150 + 700 + subIdx * 100 + itemIdx * 50}ms` }}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;