// src/pages/Honey.jsx
import React from 'react';
import PageBase from './PageBase';
import atlasData from '../data/atlasData';

const Honey = () => {
  // Obtenemos los datos de esta página desde nuestro archivo centralizado
  const pageData = atlasData[9];
  
  // Usamos el componente base con los datos específicos
  return <PageBase pageData={pageData} />;
};

export default Honey;