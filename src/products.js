// Catálogo CEAH: claves comerciales y datos técnicos de las fichas del cliente.
// La página /productos/ y el buscador del encabezado leen de aquí.

// Cada línea de producto tiene su propia página dentro de /productos/.
export const lines = [
  { id: 'rejillas', name: 'Rejillas FRP', tag: 'Fibra de vidrio', url: '/productos/rejillas/', image: '/rejilla-textura.jpg', text: 'Moldeadas y pultruidas para plataformas, pasarelas y ambientes corrosivos.', families: ['rejilla-moldeada', 'rejilla-pultruida'] },
  { id: 'paso-de-gato', name: 'Paso de gato FRP', tag: 'Techumbres', url: '/productos/paso-de-gato/', image: '/paso-gato-instalado.jpg', text: 'Tránsito seguro sobre cubiertas industriales y sistemas fotovoltaicos.', families: ['paso-de-gato'] },
  { id: 'lamina-pvc', name: 'Lámina tricapa PVC', tag: 'Cubiertas', url: '/productos/lamina-pvc/', image: '/lamina-cubierta.jpg', text: 'Cubierta ligera, aislante y anticorrosiva para ambientes agresivos.', families: ['lamina-pvc'] },
  { id: 'perfiles', name: 'Perfiles estructurales FRP', tag: 'Fibra de vidrio', url: '/productos/perfiles/', image: '/perfiles-frp.jpg', text: 'Ángulos, canales, vigas y tubos pultruidos, ligeros y dieléctricos.', families: ['perfiles'] },
];

export const families = [
  {
    id: 'rejilla-moldeada',
    name: 'Rejilla moldeada FRP',
    tag: 'Fibra de vidrio',
    image: '/rejilla-textura.jpg',
    summary: 'Panel monolítico de fibra de vidrio y resina con configuración reticular: distribuye cargas en varias direcciones y permite cortes especiales conservando una estructura continua.',
    apps: 'Plataformas industriales, pasarelas, pisos técnicos, cárcamos, plantas de tratamiento, zonas de mantenimiento y áreas expuestas a corrosión.',
    specs: [
      ['Paneles', ['1.00 × 3.05 m', '0.91 × 3.05 m (3 × 10 ft)', '1.22 × 3.05 m (4 × 10 ft)', '1.22 × 3.66 m (4 × 12 ft)']],
      ['Acabados', 'Cóncavo (antiderrapante sin arena) o con arena sílica para humedad y aceites'],
      ['Colores', 'Gris, amarillo y rojo; otros bajo solicitud'],
      ['Sujeción', 'Clips de acero inoxidable 304: sujetador, tornillo, tuerca y rondana de presión'],
      ['Servicio', 'Corte a la medida, piezas listas para instalar'],
    ],
    columns: ['Peralte', 'Malla', 'Área abierta', 'Peso aprox.'],
  },
  {
    id: 'rejilla-pultruida',
    name: 'Rejilla pultruida FRP',
    tag: 'Fibra de vidrio',
    image: '/rejilla-pultruida.jpg',
    summary: 'Fabricada con perfiles estructurales obtenidos por pultrusión continua. Alta capacidad mecánica en la dirección de las barras portantes, ideal para claros donde la resistencia en un sentido es determinante.',
    apps: 'Plataformas, pasarelas industriales, pisos elevados, corredores técnicos y estructuras sometidas a cargas específicas.',
    specs: [
      ['Paneles', ['1.22 × 3.05 m (4 × 10 ft)', '1.22 × 6.10 m (4 × 20 ft)']],
      ['Colores', 'Gris y amarillo'],
      ['Sujeción', 'Accesorios de acero inoxidable 304 según claro, apoyos y cargas de diseño'],
      ['Servicio', 'Corte a la medida según el proyecto'],
    ],
    columns: ['Peralte', 'Barras / ft', 'Área abierta', 'Peso aprox.'],
  },
  {
    id: 'paso-de-gato',
    name: 'Paso de gato FRP',
    tag: 'Techumbres',
    image: '/paso-gato-instalado.jpg',
    summary: 'Pasillo de polímero reforzado con fibra de vidrio que ofrece un camino elevado y seguro sobre cubiertas para acceso, inspección y mantenimiento, incluidos sistemas fotovoltaicos.',
    apps: 'Techumbres industriales, plantas con paneles solares, plataformas elevadas y torres de comunicación.',
    specs: [
      ['Línea estándar · CW-10', ['Ancho: 0.385 m', 'Largo: 3.66 m', 'Peralte: 1" (25.4 mm)', 'Peso: 18.8 kg aprox. por pieza', 'Incluye 5 tramos de riel tipo U de 500 mm y 10 end clamp de 30 mm']],
      ['Modelo CW-100', ['Ancho: 0.46 m o a requerimiento del cliente', 'Largo: 3.05 m', 'Peralte: 1" (25.4 mm)', 'Acabado antiderrapante con arena sílica', 'Clips de fijación de acero inoxidable con juego de tornillería']],
      ['Instalación', 'Paralela o perpendicular a las crestas de la lámina, con mordaza tipo C sin perforar la cubierta'],
    ],
    columns: ['Línea', 'Ancho', 'Largo', 'Peralte', 'Acabado', 'Fijación'],
    pdf: '/fichas/ficha-paso-de-gato-CW-10.pdf',
    pdfLabel: 'Ficha técnica CW-10',
  },
  {
    id: 'lamina-pvc',
    name: 'Lámina tricapa PVC',
    tag: 'Cubiertas',
    image: '/pasos-pvc.jpg',
    summary: 'Cubierta ligera de alto desempeño con capa central de compuesto aislante: aislamiento térmico y UV, anticorrosiva, reduce el ruido exterior hasta 38% y resiste agentes químicos.',
    apps: 'Parques industriales, agroindustria, minería, invernaderos, plantas químicas, almacenes, construcciones costeras e instalaciones deportivas.',
    specs: [
      ['Ancho', '1.36 m total · 1.26 m efectivo'],
      ['Largos', ['1.83 m', '2.44 m', '3.05 m', '3.66 m', '4.27 m', '4.88 m', '5.49 m', '6.10 m', '7.32 m', '11.60 m'], 'cols'],
      ['Pendiente', 'Mínima de 10%; con mayor pendiente puede aumentar la separación entre montenes'],
      ['Resistencia', 'Lluvia ácida, álcalis, ácido acético, amoníaco, cloruro de sodio, queroseno y alcoholes; con retardantes al fuego'],
    ],
    columns: ['Espesor', 'Peso', 'Separación montenes', 'Ancho efectivo'],
    pdf: '/fichas/ficha-lamina-tricapa-pvc.pdf',
    drawing: { src: '/fichas/dibujo-lamina-tricapa.png', alt: 'Dibujo técnico de la lámina tricapa PVC: ancho total 136 cm, ancho efectivo 126 cm, cresta de 24 mm de altura', caption: 'Dimensiones y perfil de la lámina (ficha técnica CEAH)' },
  },
  {
    id: 'perfiles',
    name: 'Perfiles estructurales FRP',
    tag: 'Fibra de vidrio',
    image: '/perfiles-frp.jpg',
    summary: 'Perfiles pultruidos de sección constante, ligeros, dieléctricos y resistentes a la corrosión para estructuras en ambientes húmedos, químicos y costeros.',
    apps: 'Plataformas y pasarelas, escaleras y barandales, soportes y marcos, plantas de tratamiento, instalaciones químicas e infraestructura eléctrica.',
    specs: [
      ['Familias', 'Ángulos, placas, canales, vigas I, vigas de patín ancho, tubos redondos, cuadrados y rectangulares, redondos y cuadrados sólidos'],
      ['Ejemplo', 'Ángulo de 1 × 1/8" a 6 × 1/2" (25.4 × 3.18 a 152.4 × 12.7 mm)'],
    ],
    columns: [],
    pdf: '/fichas/catalogo-perfiles-frp.pdf',
    pdfLabel: 'Catálogo',
  },
];

export const products = [
  { code: 'MG-10', family: 'rejilla-moldeada', name: 'Rejilla Moldeada FRP – 1"', data: ['1"', '1-1/2" cuadrada', '70%', '12.2 kg/m²'] },
  { code: 'MG-15', family: 'rejilla-moldeada', name: 'Rejilla Moldeada FRP – 1.5"', data: ['1.5"', '1-1/2" cuadrada', '70%', '18.6 kg/m²'] },
  { code: 'MG-20', family: 'rejilla-moldeada', name: 'Rejilla Moldeada FRP – 2"', data: ['2"', '2" cuadrada', '72%', '19.5 kg/m²'] },
  { code: 'PG-10', family: 'rejilla-pultruida', name: 'Rejilla Pultruida FRP – 1"', data: ['1"', '10 · centros 1.2"', '50%', '16.1 kg/m²'] },
  { code: 'PG-15', family: 'rejilla-pultruida', name: 'Rejilla Pultruida FRP – 1.5"', data: ['1.5"', '10 · centros 1.2"', '50%', '17.1 kg/m²'] },
  { code: 'PG-20', family: 'rejilla-pultruida', name: 'Rejilla Pultruida FRP – 2"', data: ['2"', '6 · centros 2"', '50%', '15.1 kg/m²'] },
  { code: 'CW-10', family: 'paso-de-gato', name: 'Paso de Gato FRP – Línea estándar 1"', data: ['Estándar', '0.385 m', '3.66 m', '1" (25.4 mm)', 'Antideslizante', 'Riel U + end clamp'] },
  { code: 'CW-100', family: 'paso-de-gato', name: 'Paso de Gato FRP – CW-100 1"', data: ['CW-100', '0.46 m o a requerimiento', '3.05 m', '1" (25.4 mm)', 'Antiderrapante con arena sílica', 'Clips de acero inoxidable con tornillería'] },
  { code: 'LTP-20', family: 'lamina-pvc', name: 'Lámina Tricapa PVC – 2.0 mm', data: ['2.0 mm', '3.60 kg/m²', '110 cm', '1.26 m'] },
  { code: 'LTP-25', family: 'lamina-pvc', name: 'Lámina Tricapa PVC – 2.5 mm', data: ['2.5 mm', '3.65 kg/m²', '120 cm', '1.26 m'] },
  { code: 'LTP-30', family: 'lamina-pvc', name: 'Lámina Tricapa PVC – 3.0 mm', data: ['3.0 mm', '3.90 kg/m²', '120 cm', '1.26 m'] },
  { code: 'LTP-35', family: 'lamina-pvc', name: 'Lámina Tricapa PVC – 3.5 mm', data: ['3.5 mm', '3.90 kg/m²', '125 cm', '1.26 m'] },
  { code: 'LTP-40', family: 'lamina-pvc', name: 'Lámina Tricapa PVC – 4.0 mm', data: ['4.0 mm', '5.10 kg/m²', '130 cm', '1.26 m'] },
];

export const familyById = Object.fromEntries(families.map((f) => [f.id, f]));
export const lineByFamily = Object.fromEntries(lines.flatMap((l) => l.families.map((id) => [id, l])));
// Liga a la página de la línea; con clave, resalta la fila correspondiente.
export const productUrl = (p) => `${lineByFamily[p.family].url}#${p.code}`;

const normalize = (value) => String(value).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// Índice de búsqueda: clave con y sin guion, nombre, familia y aplicaciones.
const haystack = (p) => {
  const f = familyById[p.family];
  return normalize([p.code, p.code.replace('-', ''), p.name, f.name, f.tag, f.apps, ...p.data].join(' '));
};

export const searchProducts = (query) => {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return products;
  return products
    .map((p) => {
      const text = haystack(p);
      const code = normalize(p.code);
      if (!terms.every((t) => text.includes(t))) return null;
      const name = normalize(p.name);
      const score = terms.reduce((s, t) => s + (code.startsWith(t) || code.replace('-', '').startsWith(t) ? 10 : 0) + (name.includes(t) ? 3 : 1), 0);
      return { p, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .map(({ p }) => p);
};

export const industries = [
  { image: '/industrias/petrolera.jpg', icon: 'flame', name: 'Petrolera y petroquímica', text: 'Plataformas, pasarelas y soportes en refinerías, terminales y plantas expuestas a hidrocarburos y ambientes salinos.', items: 'Rejillas moldeadas · Perfiles · Rejillas pultruidas' },
  { image: '/industrias/quimica.jpg', icon: 'flask', name: 'Química', text: 'Pisos técnicos, cárcamos y cubiertas donde los ácidos, álcalis y vapores corrosivos degradan el acero.', items: 'Rejillas moldeadas · Lámina tricapa PVC · Perfiles' },
  { image: '/industrias/alimenticia.jpg', icon: 'food', name: 'Alimenticia', text: 'Superficies de fácil limpieza y bajo mantenimiento para zonas de proceso con humedad y lavado constante.', items: 'Rejillas con arena sílica · Lámina PVC' },
  { image: '/industrias/agua.jpg', icon: 'drop', name: 'Tratamiento de agua', text: 'Pasarelas y cubiertas de cárcamos en plantas potabilizadoras y de aguas residuales.', items: 'Rejillas moldeadas · Perfiles · Barandales' },
  { image: '/industrias/solar.jpg', icon: 'bolt', name: 'Eléctrica y solar', text: 'Material no conductor para subestaciones y caminos seguros sobre techumbres con paneles fotovoltaicos.', items: 'Pasos de gato · Rejillas pultruidas · Perfiles' },
  { image: '/industrias/mineria.jpg', icon: 'mine', name: 'Minería', text: 'Estructuras ligeras y durables frente a humedad, lodos y agentes químicos de proceso.', items: 'Rejillas pultruidas · Lámina PVC' },
  { image: '/industrias/costera.jpg', icon: 'wave', name: 'Costera y marina', text: 'Soluciones que no se oxidan frente a la brisa salina, ideales para puertos e instalaciones costeras.', items: 'Lámina PVC · Rejillas · Perfiles' },
  { image: '/industrias/agro.jpg', icon: 'leaf', name: 'Agroindustria', text: 'Cubiertas y pisos para naves, invernaderos y granjas con ambientes amoniacales.', items: 'Lámina tricapa PVC · Rejillas' },
];
