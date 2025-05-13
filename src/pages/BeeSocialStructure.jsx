// src/pages/BeeSocialStructure.jsx
import React from 'react';
import PageBase from './PageBase';
import atlasData from '../data/atlasData';

const BeeSocialStructure = () => {
  // Obtenemos los datos de esta página desde nuestro archivo centralizado
  const pageData = atlasData[2];
  
  // Usamos el componente base con los datos específicos
  return <PageBase pageData={pageData} />;
};

export default BeeSocialStructure;