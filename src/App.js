import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AtlasPage from './components/BeeAtlas';
import ContactPage from './components/ContactPage';
import './styles/global.css';

const App = () => {
  const [activePage, setActivePage] = useState('inicio');
  
  // Función para cambiar de página
  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0); // Scroll al tope cuando cambia de página
  };
  
  // Asegurarnos que el scroll funciona correctamente
  useEffect(() => {
    // Restablecer cualquier bloqueo de scroll
    document.body.style.overflow = 'auto';
    
    // Comprobar si hay elementos con position: fixed que estén bloqueando el scroll
    const checkScrollable = () => {
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto';
      }
    };
    
    // Ejecutar al montar y cada vez que se cambia de página
    checkScrollable();
    
    return () => {
      // Limpiar cuando se desmonta
      document.body.style.overflow = 'auto';
    };
  }, [activePage]);
  
  return (
    <Layout activePage={activePage} navigate={navigate}>
      {activePage === 'inicio' && <HomePage navigate={navigate} />}
      {activePage === 'atlas' && <AtlasPage />}
      {activePage === 'contacto' && <ContactPage />}
    </Layout>
  );
};

export default App;