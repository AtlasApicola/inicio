// src/data/atlasData.js
// Este archivo contiene todos los datos del atlas centralizados
// Importamos el video y la imagen
import miel from '../components/images/miel.mp4';
import indice from '../components/images/indice.mp4';

// Creamos un objeto con todos los datos del atlas
const atlasData = [
  {
    id: 0,
    title: "Tabla de Contenidos",
    subtitle: "Atlas Digital de Abejas",
    color: "amber",
    icon: "Book",
    description: "Exploración completa del mundo de las abejas, su biología, ecología y su relación con los seres humanos a través de la apicultura.",
    stats: [
      { label: "Capítulos", value: 9 },
      { label: "Temas cubiertos", value: 26 },
      { label: "Contenido visual", value: "40%" }
    ],
    highlights: [
      "Historia y evolución de las abejas",
      "Estructura social y reproducción",
      "Apicultura y producción de miel"
    ],
    content: [],
    useCustomLayout: true,
    backgroundVideo: indice
  },
  {
    id: 1,
    title: "Historia de las Abejas",
    subtitle: "Orígenes y evolución",
    color: "amber",
    icon: "Book",
    description: "Exploración de los orígenes evolutivos de las abejas y su desarrollo a lo largo del tiempo. Las abejas son uno de los polinizadores más antiguos, con fósiles que datan de hace más de 100 millones de años.",
    stats: [
      { label: "Millones de años de evolución", value: 100 },
      { label: "Especies actuales", value: ">20,000" },
      { label: "Continentes habitados", value: 7 }
    ],
    highlights: [
      "Orígenes de las abejas desde sus ancestros avispas",
      "Evolución a lo largo del tiempo desde el Cretácico",
      "Adaptación a diversos ecosistemas en todos los continentes"
    ],
    content: [
      {
        title: "Orígenes de las abejas",
        text: "Las abejas evolucionaron a partir de avispas que cambiaron su dieta depredadora por una alimentación basada en polen y néctar. Los registros fósiles más antiguos de abejas datan del período Cretácico, hace aproximadamente 100 millones de años, coincidiendo con la diversificación de las plantas con flores (angiospermas)."
      },
      {
        title: "Evolución a lo largo del tiempo",
        text: "A través de millones de años, las abejas han desarrollado adaptaciones especializadas para la recolección de polen, como los pelos plumosos y las estructuras para transportar polen en sus patas traseras. La coevolución con las plantas con flores ha sido fundamental en su desarrollo, creando relaciones mutualistas donde ambas especies se benefician."
      },
      {
        title: "Diversificación global",
        text: "Las abejas se han diversificado en más de 20,000 especies conocidas distribuidas en todos los continentes excepto la Antártida. Esta diversificación incluye desde pequeñas abejas solitarias hasta colonias complejas con miles de individuos, adaptándose a prácticamente todos los ecosistemas terrestres donde florecen plantas."
      }
    ]
  },
  {
    id: 2,
    title: "Estructura Social de las Abejas",
    subtitle: "Organización y jerarquía en la colmena",
    color: "emerald", 
    icon: "Leaf",
    description: "Las abejas melíferas viven en sociedades altamente organizadas con división clara de roles y tareas. La colmena funciona como un superorganismo donde cada individuo contribuye al bienestar colectivo.",
    stats: [
      { label: "Abejas por colmena", value: "50,000+" },
      { label: "Roles distintos", value: "3-4" },
      { label: "Vida útil obrera", value: "6 semanas" }
    ],
    highlights: [
      "Jerarquía en la colmena con roles específicos",
      "Roles de las abejas: reina, obreras y zánganos",
      "Comunicación compleja a través de la danza"
    ],
    content: [
      {
        title: "Jerarquía en la colmena",
        text: "La colmena está estructurada en una jerarquía clara donde cada miembro cumple funciones específicas. Este sistema de organización permite que miles de individuos trabajen coordinadamente para mantener la temperatura, defender la colonia, recolectar alimentos y reproducirse efectivamente."
      },
      {
        title: "Roles de las abejas",
        text: "Dentro de la colonia existen tres castas principales: La reina, única hembra fértil encargada de la reproducción; las obreras, hembras estériles que realizan diversas tareas según su edad (limpieza, cuidado de larvas, producción de cera, recolección); y los zánganos, machos cuya función principal es fecundar a nuevas reinas."
      },
      {
        title: "División de tareas",
        text: "Las abejas obreras pasan por diferentes funciones durante su vida: comienzan como limpiadoras de celdas, luego se convierten en nodrizas que alimentan a las larvas, después producen cera y construyen panales, realizan tareas de ventilación y defensa, y finalmente se convierten en pecoreadoras que recolectan néctar, polen, agua y propóleos."
      }
    ]
  },
  {
    id: 3,
    title: "Reproducción de las Abejas",
    subtitle: "Ciclo de vida y mecanismos reproductivos",
    color: "sky",
    icon: "BarChart2",
    description: "El ciclo reproductivo de las abejas es fascinante y varía entre especies sociales y solitarias. En las abejas melíferas, la reproducción involucra procesos complejos desde el vuelo nupcial hasta el desarrollo de nuevas colonias.",
    stats: [
      { label: "Huevos diarios (reina)", value: "1,500+" },
      { label: "Días hasta adulto", value: "21" },
      { label: "Vida de la reina", value: "3-5 años" }
    ],
    highlights: [
      "Ciclo de vida completo: huevo, larva, pupa y adulto",
      "Mecanismos de reproducción y vuelo nupcial",
      "Diferenciación de castas a través de la alimentación"
    ],
    content: [
      {
        title: "Ciclo de vida",
        text: "El desarrollo de una abeja pasa por cuatro etapas: huevo, larva, pupa y adulto. El tiempo de desarrollo varía según la casta: 16 días para una reina, 21 días para una obrera y 24 días para un zángano. Esta diferencia temporal es crucial para la sucesión en la colonia y la división de tareas."
      },
      {
        title: "Mecanismos de reproducción",
        text: "La reina realiza un vuelo nupcial donde se aparea con 10-20 zánganos, almacenando el esperma para toda su vida. Utiliza un sistema peculiar llamado haplodiploide: los huevos fertilizados se desarrollan en hembras (reinas u obreras) y los no fertilizados en machos (zánganos)."
      },
      {
        title: "Enjambrazón",
        text: "Cuando la colonia crece demasiado, ocurre la enjambrazón: la reina vieja abandona la colmena con parte de las obreras para formar una nueva colonia, mientras que en la colmena original se desarrolla una nueva reina. Este proceso natural de reproducción de colonias asegura la dispersión y supervivencia de la especie."
      }
    ]
  },
  {
    id: 4,
    title: "Genética de las Abejas",
    subtitle: "Diversidad genética e impacto en las colmenas",
    color: "indigo",
    icon: "Zap",
    description: "La diversidad genética es crucial para la salud y supervivencia de las colonias de abejas. La estructura genética influye en la resistencia a enfermedades, la adaptación climática y el comportamiento social.",
    stats: [
      { label: "Cromosomas (hembra)", value: 32 },
      { label: "Cromosomas (macho)", value: 16 },
      { label: "Subespecies de A. mellifera", value: 29 }
    ],
    highlights: [
      "Diversidad genética y su importancia para la colonia",
      "Sistema haplodiploide de determinación sexual",
      "Impacto genético en la resistencia a enfermedades"
    ],
    content: [
      {
        title: "Diversidad genética",
        text: "Las colonias con mayor diversidad genética muestran mejor rendimiento en producción, resistencia a enfermedades y adaptabilidad. Esto se debe a que la reina se aparea con múltiples zánganos, creando una colonia con diversas subfamilias de obreras hermanas."
      },
      {
        title: "Impacto en las colmenas",
        text: "La composición genética afecta directamente características como la higiene, agresividad, tendencia a la enjambrazón, producción de miel y resistencia a patógenos. Los programas de mejoramiento genético buscan seleccionar rasgos beneficiosos mientras mantienen la diversidad necesaria para la adaptabilidad."
      },
      {
        title: "Riesgos de la endogamia",
        text: "La reducción de la diversidad genética por endogamia puede tener efectos devastadores, incluyendo el colapso del mecanismo de determinación sexual (produciendo zánganos diploides no viables) y disminuyendo la capacidad de respuesta a nuevos patógenos y condiciones ambientales cambiantes."
      }
    ]
  },
  {
    id: 5,
    title: "Botánica Melífera",
    subtitle: "Relación entre abejas y plantas",
    color: "rose",
    icon: "Leaf",
    description: "Las plantas melíferas son aquellas que producen recursos como néctar y polen aprovechables por las abejas. La relación entre abejas y plantas es uno de los ejemplos más importantes de coevolución en la naturaleza.",
    stats: [
      { label: "Especies melíferas", value: "3,000+" },
      { label: "Flores visitadas/día", value: "7,000" },
      { label: "Radio de pecoreo", value: "5 km" }
    ],
    highlights: [
      "Plantas que atraen a las abejas y sus características",
      "Descripción de sitios ecológicos importantes",
      "Calendarios de floraciones por cada mes en tres sitios ecológicos"
    ],
    content: [
      {
        title: "Plantas que atraen a las abejas",
        text: "Las plantas melíferas poseen características específicas que las hacen atractivas para las abejas: colores visibles en el espectro ultravioleta, aromas atrayentes, formas accesibles para las abejas y alta producción de néctar y polen. Ejemplos importantes incluyen lavanda, romero, castaño, tilo, eucalipto y frutales."
      },
      {
        title: "Descripción de sitios ecológicos",
        text: "Los sitios ecológicos más valiosos para las abejas incluyen praderas florales diversas, bosques naturales con sotobosque, humedales con vegetación floreciente y zonas agrícolas con gestión ecológica. La biodiversidad vegetal es clave para proporcionar alimentación continua durante toda la temporada activa."
      },
      {
        title: "Calendarios de floraciones",
        text: "La sucesión de floraciones varía según el ecosistema y la temporada. En primavera destacan frutales y vegetación de sotobosque; en verano, herbáceas y cultivos; en otoño, especies tardías como brezo o eucalipto. Conocer estos calendarios es fundamental para la gestión apícola y la planificación de la trashumancia."
      }
    ]
  },
  {
    id: 6,
    title: "Relación de las Abejas con la Temperatura",
    subtitle: "Efectos del clima en la actividad apícola",
    color: "purple",
    icon: "Droplets",
    description: "Las abejas son extremadamente sensibles a las condiciones climáticas. La temperatura afecta directamente su metabolismo, comportamiento de forrajeo y la actividad de la colonia completa.",
    stats: [
      { label: "Temperatura óptima colmena", value: "35°C" },
      { label: "Rango actividad exterior", value: "12-38°C" },
      { label: "Precisión termorregulación", value: "±0.5°C" }
    ],
    highlights: [
      "Efectos del clima en la actividad de las abejas",
      "Datos de sensores de temperatura y horas efectivas de vuelo",
      "Adaptaciones para la termorregulación colectiva"
    ],
    content: [
      {
        title: "Efectos del clima en la actividad",
        text: "La temperatura ambiental determina cuándo las abejas pueden volar para recolectar recursos. Por debajo de 12°C, prácticamente no hay actividad exterior; entre 14-35°C es el rango óptimo, y por encima de 38°C las abejas dedican más energía a enfriar la colmena que a forrajear, reduciéndose significativamente la productividad."
      },
      {
        title: "Datos de sensores y horas efectivas",
        text: "Los sistemas modernos de monitoreo proporcionan datos precisos sobre la temperatura interna de la colmena y su relación con la actividad. En condiciones óptimas, las abejas pueden mantener 8-10 horas efectivas de forrajeo diario, mientras que en condiciones extremas (frío o calor) pueden reducirse a 2-4 horas."
      },
      {
        title: "Cambio climático y abejas",
        text: "El cambio climático está alterando los patrones de floración y los ciclos de las abejas, creando desajustes fenológicos. Las floraciones más tempranas, olas de calor extremo y eventos climáticos irregulares suponen un desafío adaptativo para las colonias y requieren nuevas estrategias de manejo por parte de los apicultores."
      }
    ]
  },
  {
    id: 7,
    title: "Apicultura",
    subtitle: "Historia, desarrollo y técnicas apícolas",
    color: "amber",
    icon: "Zap",
    description: "La apicultura es el arte y ciencia del manejo de colonias de abejas con fines productivos y de conservación. Es una de las actividades ganaderas más antiguas, con evidencias que datan de hace más de 8,000 años.",
    stats: [
      { label: "Apicultores en Chile", value: "10,000+" },
      { label: "Producción anual de miel", value: "7,500 ton" },
      { label: "Colmenas promedio/apicultor", value: 32 }
    ],
    highlights: [
      "Historia y desarrollo de la apicultura moderna",
      "Prácticas y técnicas apícolas contemporáneas",
      "Número de apicultores en el país y tendencias"
    ],
    content: [
      {
        title: "Historia y desarrollo",
        text: "La apicultura moderna comenzó con Lorenzo Langstroth, quien descubrió el 'espacio de abeja' (1851) y diseñó la colmena de cuadros móviles que revolucionó la actividad. Otros avances importantes incluyen el extractor centrífugo, la cera estampada y las técnicas de cría de reinas, que han permitido profesionalizar la producción."
      },
      {
        title: "Prácticas y técnicas apícolas",
        text: "Las técnicas modernas incluyen el manejo estacional de las colonias, control integrado de plagas y enfermedades, alimentación suplementaria, polinización dirigida de cultivos y producción especializada de derivados como polen, propóleos y jalea real. La tecnología ha incorporado sensores, monitoreo remoto y análisis de datos."
      },
      {
        title: "Estadísticas y tendencias",
        text: "Las estadísticas actuales muestran un crecimiento en el número de apicultores, especialmente en el segmento de pequeños productores urbanos y periurbanos. La tendencia hacia prácticas sustentables, apicultura orgánica y producción local de alta calidad responde a la creciente conciencia sobre el valor de los polinizadores."
      }
    ]
  },
  {
    id: 8,
    title: "Apiarios",
    subtitle: "Diseño, gestión y ubicación óptima",
    color: "sky",
    icon: "MapPin",
    description: "El apiario es el conjunto de colmenas ubicadas en un lugar específico. Su diseño, orientación y localización son factores determinantes para el éxito apícola y la salud de las colonias.",
    stats: [
      { label: "Distancia entre colmenas", value: "1-2 m" },
      { label: "Colmenas por apiario", value: "20-50" },
      { label: "Distancia entre apiarios", value: "3+ km" }
    ],
    highlights: [
      "Diseño y gestión de apiarios eficientes",
      "Criterios para la ubicación ideal de colmenas",
      "Infraestructura necesaria para el manejo apícola"
    ],
    content: [
      {
        title: "Diseño y gestión de apiarios",
        text: "El diseño óptimo de un apiario considera la disposición de las colmenas para facilitar el trabajo del apicultor y evitar la deriva de abejas. Se recomiendan formaciones en semicírculo, grupos pequeños irregulares o líneas con marcas distintivas de color para orientación de las abejas y eficiencia en el manejo."
      },
      {
        title: "Importancia de la ubicación",
        text: "Los criterios para seleccionar un buen emplazamiento incluyen: acceso a recursos florales diversos en un radio de 3 km, disponibilidad de agua limpia, protección contra vientos dominantes, sombra parcial, buen drenaje, accesibilidad para el apicultor y distancia adecuada de viviendas, ganado y cultivos tratados con pesticidas."
      },
      {
        title: "Gestión estacional",
        text: "La gestión del apiario varía según las estaciones: preparación pre-invierno con reducción de espacio y alimentación; manejo de la expansión primaveral controlando la enjambrazón; ampliación durante los flujos principales de néctar; y evaluación post-cosecha para preparar el ciclo siguiente."
      }
    ]
  },
  {
    id: 9,
    title: "Miel",
    subtitle: "Tipos, características y producción",
    color: "amber",
    icon: "Droplets",
    description: "La miel es el producto principal de la apicultura, elaborada por las abejas a partir del néctar de las flores o secreciones de partes vivas de plantas, que transforman, combinan y almacenan en los panales.",
    stats: [
      { label: "Tipos de miel catalogados", value: "300+" },
      { label: "Tiempo de maduración", value: "1-3 semanas" },
      { label: "Consumo mundial anual", value: "1.9M ton" }
    ],
    highlights: [
      "Tipos de miel según origen botánico y geográfico",
      "Propiedades de incorruptibilidad y preservación",
      "Características organolépticas y nutricionales"
    ],
    content: [
      {
        title: "Tipos de miel",
        text: "Las mieles se clasifican principalmente por su origen floral: monoflorales, cuando provienen predominantemente de una especie vegetal (ej: lavanda, acacia, eucalipto); o multiflorales, con mezcla de diferentes orígenes. Cada tipo tiene características organolépticas distintivas: color, aroma, sabor y textura que reflejan su procedencia botánica."
      },
      {
        title: "Incorruptibilidad de la miel",
        text: "La miel natural posee propiedades excepcionales de conservación gracias a su alta concentración de azúcares (80%), bajo contenido de agua (menos del 18%), acidez natural (pH 3.5-4.5) y presencia de enzimas con efecto antimicrobiano como la glucosa oxidasa, que produce pequeñas cantidades de peróxido de hidrógeno."
      },
      {
        title: "Consumo y producción",
        text: "El consumo de miel varía significativamente entre países, con promedios que van desde menos de 100g hasta más de 1.5kg por persona al año. La producción mundial supera 1.9 millones de toneladas anuales, siendo los principales productores China, Turquía, Argentina, Ucrania y Estados Unidos. Chile produce aproximadamente 7,500 toneladas anuales."
      }
    ],
    backgroundVideo: miel
  }
];

export default atlasData;