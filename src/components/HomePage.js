import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

// Importar las imágenes desde la misma carpeta que el componente
import heroBackground from './images/Atlas.jpg';
import heroBackground3 from './images/logoblanco.jpg'; 
import item1 from './images/eco.webp';
import item2 from './images/Abeja.png';
import logo from './images/logoinia.png';

const HomePage = ({ navigate }) => {
  // Efecto de entrada para elementos animados
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    return () => animatedElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* Hero Section - Eliminado pt-16 para que se pegue al header */}
      <section className="relative h-screen flex items-center justify-center text-white" style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBackground})`,
        backgroundSize: 'contain', 
        backgroundPosition: 'center calc(50% + 0rem)', // Ajustado para compensar el cambio
        backgroundRepeat: 'no-repeat',
        marginTop: '0', // Asegurarnos que no hay margen
        paddingTop: '0' // Asegurarnos que no hay padding
      }}>
        
        {/* Botón con forma de panal mejorado - REPOSICIONADO con estilo inline para ajuste preciso */}
        <div 
          className="animate-fadeInUp absolute flex justify-center items-center flex-col"
          style={{
            top: "13%",            // Ajusta este valor (porcentaje) para mover arriba/abajo
            right: "24%",          // Ajusta este valor (porcentaje) para mover izquierda/derecha
            zIndex: 10             // Asegura que esté por encima de otros elementos
          }}
        >
          <button 
            onClick={() => navigate('atlas')}
            className="group relative bg-gradient-to-br from-amber-300 to-amber-500 text-green-900 font-bold
                      transition-all duration-300 hover:shadow-l hover:shadow-amber-300/30
                      border-2 border-amber-600 overflow-hidden w-32 h-32"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
            }}
          >
            {/* Fondo de panal animado */}
            <div className="absolute inset-0 opacity-20 z-0">
              <div className="honeycomb-pattern"></div>
            </div>
            
            {/* Efecto de brillo al pasar el cursor */}
            <div className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-20 skew-x-12"></div>
            
            {/* Abeja animada */}
            <div className="absolute w-5 h-5 top-3 left-16 group-hover:animate-bounce">
              <span className="text-2xl">🐝</span>
            </div>
            
            {/* Contenido del botón */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="text-4xl mb-1">🍯</div>
              <span className="text-center font-bold">Explorar ATLAS</span>
            </div>
          </button>
          
         
          
          {/* Estilos CSS para el patrón de panal */}
          <style jsx>{`
            button:hover {
              transform: translateY(-5px) scale(1.05);
            }
            .honeycomb-pattern {
              background-color: transparent;
              background-image: 
                radial-gradient(circle at center, rgba(0,0,0,0.1) 2px, transparent 2px);
              background-size: 12px 12px;
              width: 50%;
              height: 50%;
              animation: floatHoneycomb 8s infinite linear;
            }
            @keyframes floatHoneycomb {
              0% { background-position: 0 0; }
              100% { background-position: 12px 12px; }
            }
          `}</style>
        </div>
        
        
        {/* Overlay para parallax */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Sección Sobre Nosotros - Atlas INIA Quilamapu */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">¿Qué es el Atlas INIA Quilamapu?</h2>
              <p className="text-gray-700 mb-4">
                El Atlas INIA Quilamapu es una herramienta científica y educativa elaborada por el Instituto de Investigaciones Agropecuarias (INIA), específicamente desde su centro regional Quilamapu, ubicado en la región del Ñuble, Chile. Este atlas reúne y organiza conocimiento detallado sobre la apicultura en el territorio, con énfasis en la especie <em>Apis mellifera</em>.
              </p>
              <h3 className="text-xl font-bold text-green-700 mb-3">¿Qué investiga?</h3>
              <p className="text-gray-700 mb-4">
                Investiga aspectos clave relacionados con las abejas melíferas, incluyendo su historia, genética, estructura social, reproducción, interacción con el entorno (como temperatura y flora), y el desarrollo de la apicultura en la región. También considera la distribución de apicultores, prácticas sustentables y tendencias actuales.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl animate-on-scroll">
              <img src={heroBackground3} alt="Atlas INIA Quilamapu" className="w-full h-auto" />
              <div className="absolute inset-0 bg-green-800 opacity-20 transition-opacity hover:opacity-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de Áreas de Investigación */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Aplicaciones del Atlas</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              El Atlas INIA Quilamapu sirve como base fundamental para diversos aspectos de la apicultura regional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 animate-on-scroll">
              <div className="h-48 bg-green-200 flex items-center justify-center">
                <img src={item1} alt="¿Para qué sirve?" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">¿Para qué sirve?</h3>
                <p className="text-gray-700">
                  El propósito del atlas es servir como base de consulta para apicultores, estudiantes, investigadores y tomadores de decisiones. Su contenido busca apoyar la conservación de las abejas, la mejora en la producción apícola y la toma de conciencia sobre su rol ecológico y económico.
                </p>
              </div>
            </div>
            
            {/* Tarjeta 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 animate-on-scroll">
              <div className="h-48 bg-green-200 flex items-center justify-center">
                <img src={item2} alt="¿Qué se espera?" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">¿Qué se espera?</h3>
                <p className="text-gray-700">
                  Se espera que este atlas contribuya a fortalecer el conocimiento técnico y territorial sobre la apicultura, fomentando prácticas sostenibles, aumentando la productividad y resiliencia de las colmenas, y promoviendo la apicultura como una actividad estratégica para el desarrollo rural.
                </p>
              </div>
            </div>
            
            {/* Tarjeta 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 animate-on-scroll">
              <div className="h-48 bg-green-200 flex items-center justify-center">
                <img src={logo} alt="¿Cómo se desarrolla?" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">¿Cómo se desarrolla?</h3>
                <p className="text-gray-700">
                  El atlas se construye a partir de investigaciones de campo, recopilación de datos meteorológicos, análisis genéticos, censos de apicultores, y estudios ecológicos en diversas zonas de Ñuble. Se complementa con mapas, gráficos, fotografías y calendarios de floración, todo validado por expertos del INIA y actores del rubro apícola.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección CTA */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Explora nuestro Atlas Digital</h2>
          <p className="max-w-2xl mx-auto mb-8 animate-on-scroll">
            Accede a nuestro catálogo digital con información detallada sobre investigaciones, recursos y proyectos.
          </p>
          <button 
            onClick={() => navigate('atlas')}
            className="group relative bg-gradient-to-br from-amber-300 to-amber-500 text-green-900 font-bold
                      transition-all duration-300 hover:shadow-xl hover:shadow-amber-300/30
                      border-2 border-amber-600 overflow-hidden w-32 h-32"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
            }}
          >
            {/* Fondo de panal animado */}
            <div className="absolute inset-0 opacity-20 z-0">
              <div className="honeycomb-pattern"></div>
            </div>
            
            {/* Efecto de brillo al pasar el cursor */}
            <div className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-20 skew-x-12"></div>
            
            {/* Abeja animada */}
            <div className="absolute w-5 h-5 top-3 left-16 group-hover:animate-bounce">
              <span className="text-2xl">🐝</span>
            </div>
            
            {/* Contenido del botón */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="text-4xl mb-1">🍯</div>
              <span className="text-center font-bold">Explorar ATLAS</span>
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;