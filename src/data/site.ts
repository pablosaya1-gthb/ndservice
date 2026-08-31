// ============================================================
// N/D SERVICE REPARACIONES — Configuración central de contenido
// Todos los datos del sitio viven acá. Cambiá este archivo y el
// sitio entero se actualiza. Los campos marcados con (PENDIENTE)
// necesitan la confirmación final del cliente antes del go-live.
// ============================================================

export const site = {
  name: 'N/D Service Reparaciones',
  legalName: 'N/D Service Reparaciones',
  tagline: 'Service técnico y reparación de electrodomésticos a domicilio',
  phoneDisplay: '(11) 5459-9180',
  phoneTel: '+5491154599180',
  whatsappNumber: '5491154599180',
  email: 'ndserviceoeste@gmail.com',
  address: 'Int. Villegas 1308, El Palomar, Buenos Aires',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Int.+Villegas+1308%2C+El+Palomar%2C+Buenos+Aires',
  instagram: 'https://www.instagram.com/ndserviceoeste',
  facebook: 'https://www.facebook.com/share/igjJvBL6mvXGydXa/',
  // Nombres de asset en public/ — los componentes los prefijan con Astro.base
  // para funcionar en la raíz (dev) y en el subpath de GitHub Pages (prod).
  logo: 'logo.svg', // (PENDIENTE) reemplazar por logo.png con el logo oficial
  map: 'mapa-zonas.svg',
  hours: [
    { days: 'Lunes a viernes', time: '9:00 a 18:00 hs' },
    { days: 'Sábados', time: '9:00 a 14:00 hs' },
    { days: 'Domingos', time: 'Cerrado' },
  ],
};

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const waDefault = waLink(
  'Hola, quiero pedir una visita técnica para mi electrodoméstico.'
);

export const stats = [
  { value: '10+', label: 'años de experiencia' },
  { value: '1.200+', label: 'servicios realizados' },
  { value: '1.700+', label: 'visitas técnicas' },
  { value: '30+', label: 'marcas reparadas' },
];

export interface Service {
  id: string;
  name: string;
  icon: string;
  short: string; // síntesis de fallas para la tarjeta rápida
  tagline: string;
  faults: string[];
  approach: string[];
  safety?: string;
  photoLabel: string;
  waMessage: string;
}

export const services: Service[] = [
  {
    id: 'lavarropas',
    name: 'Lavarropas',
    icon: 'washing',
    short: 'No desagota · No centrifuga · Hace ruidos',
    tagline:
      'El equipo que más se pone en reparar. Si no desagota, no centrifuga o hace ruidos extraños, sabemos qué mirar primero.',
    faults: [
      'No enciende',
      'No carga agua',
      'No desagota',
      'No centrifuga',
      'Hace ruidos extraños',
      'Pierde agua',
      'Tambor trabado',
      'Programa que no termina',
    ],
    approach: [
      'Según el síntoma, verificamos bomba de desagote, motor, rodamientos y tarjeta electrónica con mediciones reales.',
      'Distinguimos una falla eléctrica de una mecánica antes de recomendar cualquier repuesto.',
      'Trabajamos automáticos y semiautomáticos, de cualquier marca.',
    ],
    safety:
      'Si pierde agua, dejá de usarlo y desconectalo de la toma: el agua cerca de la parte eléctrica puede agrandar la falla o causar un cortocircuito.',
    photoLabel: 'Foto real: reparación de lavarropas a domicilio',
    waMessage: 'Hola, necesito un service para mi lavarropas. Síntoma: ',
  },
  {
    id: 'secarropas',
    name: 'Secarropas',
    icon: 'dryer',
    short: 'No calienta · No gira · No seca bien',
    tagline:
      'Cuando no calienta o la ropa sale húmeda, la falla tiene nombre: la gran mayoría se diagnostica en la misma visita.',
    faults: [
      'No calienta',
      'No gira',
      'No seca la ropa',
      'Hace ruidos inusuales',
      'Se apaga solo',
      'No responde',
    ],
    approach: [
      'Revisamos calefactor, termistor, sensor de humedad y motor para darte la causa exacta, no un repuesto al azar.',
      'Si el problema es acumulación de pelusa o limpieza del conducto, te lo explicamos y te enseñamos a evitar que vuelva a pasar.',
    ],
    safety:
      'Un secarropas que no calienta puede seguir consumiendo sin rendir: conviene cortar la falla a tiempo antes de que dañe la ropa o el propio equipo.',
    photoLabel: 'Foto real: reparación de secarropas',
    waMessage: 'Hola, necesito un service para mi secarropas. Síntoma: ',
  },
  {
    id: 'lavavajillas',
    name: 'Lavavajillas',
    icon: 'dishwasher',
    short: 'No enciende · Platos mojados o sucios · Fugas',
    tagline:
      'Que la vajilla vuelva a salir limpia y seca: trabajamos desde la bomba de agua hasta la resistencia.',
    faults: [
      'No enciende',
      'Platos que salen mojados',
      'Platos que salen sucios',
      'No carga agua',
      'Pierde agua',
      'Hace ruido',
      'No seca',
    ],
    approach: [
      'Detectamos si la falla está en el motor de la bomba, las boquillas de aspersión, la resistencia o la electrónica.',
      'Corregimos las fugas a tiempo: una pérdida pequeña hoy puede terminar dañando el mueble mañana.',
    ],
    safety:
      'Si notás olor a quemado dentro del lavavajillas, no lo enciendas hasta que lo revisemos.',
    photoLabel: 'Foto real: reparación de lavavajillas',
    waMessage: 'Hola, necesito un service para mi lavavajillas. Síntoma: ',
  },
  {
    id: 'microondas',
    name: 'Microondas',
    icon: 'microwave',
    short: 'No calienta · Olor a quemado · Chispazos',
    tagline:
      'Del fusible de alta tensión al magnetrón: lo diagnosticamos a fondo para que vuelva a calentar seguro.',
    faults: [
      'No calienta',
      'Olor a quemado',
      'Plato que no gira',
      'Botonera que no responde',
      'Luz interna que no prende',
      'Hace chispazos',
    ],
    approach: [
      'Revisamos fusible, condensador, diodo, puente y magnetrón en orden, desde lo más común a lo más complejo.',
      'El microondas trabaja con alto voltaje: la inspección requiere protocolo y herramienta adecuada, no prueba y error.',
    ],
    safety:
      'Si huele a quemado o ves chispazos, no lo uses más: apunta a un problema en el circuito de alta tensión que conviene revisar antes de que se agrande.',
    photoLabel: 'Foto real: reparación de microondas',
    waMessage: 'Hola, necesito un service para mi microondas. Síntoma: ',
  },
  {
    id: 'horno-electrico',
    name: 'Horno eléctrico',
    icon: 'oven',
    short: 'No calienta · Calienta irregular · Termostato',
    tagline:
      'El corazón de la cocina, de vuelta: reparamos elementos, termostatos y fallas eléctricas verificando la seguridad antes de cerrar.',
    faults: [
      'No calienta',
      'Calienta de forma irregular',
      'Elemento quemado',
      'Termostato que no mantiene la temperatura',
      'Puerta que no cierra bien',
      'No enciende',
    ],
    approach: [
      'Comenzamos con inspección visual y verificación de conexiones: nunca reemplazamos un componente sin medir.',
      'Si la falla es el elemento calefactor, lo reemplazamos con repuesto de calidad y verificamos que mantenga la temperatura.',
    ],
    safety:
      'Un horno que no calienta a veces tiene la falla en una conexión: un diagnóstico serio evita seguir usando el equipo con un riesgo eléctrico.',
    photoLabel: 'Foto real: reparación de horno eléctrico',
    waMessage: 'Hola, necesito un service para mi horno eléctrico. Síntoma: ',
  },
  {
    id: 'anafe-vitroceramico',
    name: 'Anafe vitrocerámico',
    icon: 'cooktop',
    short: 'No enciende · Táctil que no responde · Calienta mal',
    tagline:
      'Un equipo delicado que no se le deja a improvisados: diagnóstico de placa y zonas de potencia, con el cuidado que merece.',
    faults: [
      'No enciende',
      'Control táctil que no responde',
      'Luces que no encienden',
      'Calienta de forma irregular',
      'Zonas que no detectan la olla',
      'Grietas o rayones en la superficie',
    ],
    approach: [
      'Diagnóstico de la placa electrónica y de cada zona de potencia por separado.',
      'Trabajamos sobre superficie vitrificada con procedimientos específicos: es un equipo donde el primer intento importa.',
    ],
    safety:
      'Si el anafe se sobrecalienta o la superficie está rajada, dejá de usarlo: el vidrio en mal estado no debe seguir recibiendo calor.',
    photoLabel: 'Foto real: reparación de anafe vitrocerámico',
    waMessage: 'Hola, necesito un service para mi anafe vitrocerámico. Síntoma: ',
  },
];

export const steps = [
  {
    icon: 'chat',
    title: 'Contanos la falla',
    text: 'Escribinos por WhatsApp o completá el formulario con la marca, el modelo y qué hace el equipo. Te decimos si podemos ayudarte.',
  },
  {
    icon: 'wrench',
    title: 'Visita y diagnóstico',
    text: 'Pasamos a tu domicilio, inspeccionamos el equipo y medimos para darte la falla real, no una suposición.',
  },
  {
    icon: 'doc',
    title: 'Presupuesto claro',
    text: 'Antes de empezar te decimos cuánto sale y cuánto demora. Si no conviene repararlo, también te lo decimos.',
  },
  {
    icon: 'shield',
    title: 'Reparación con garantía',
    text: 'Usamos repuestos de calidad y cada trabajo queda respaldado por una garantía según el tipo de reparación.',
  },
];

export const reasons = [
  {
    icon: 'check',
    title: 'Transparencia en el costo',
    text: 'Presupuesto antes de empezar. Lo que te decimos es lo que pagás, sin sorpresas al final.',
  },
  {
    icon: 'clock',
    title: 'Experiencia que se mide',
    text: 'Más de 10 años, 1.200 servicios y 30 marcas. No somos un aviso de la guía telefónica.',
  },
  {
    icon: 'wrench',
    title: 'Repuestos de calidad',
    text: 'Trabajamos con repuestos que duran y te explicamos qué cambiamos y por qué.',
  },
  {
    icon: 'shield',
    title: 'Garantía por escrito',
    text: 'Cada trabajo tiene una garantía según el tipo de reparación realizado, informada antes de aceptar.',
  },
  {
    icon: 'phone',
    title: 'Atención personalizada',
    text: 'Hablás con el técnico que va a trabajar tu equipo, no con un call center.',
  },
  {
    icon: 'heart',
    title: 'Honestidad ante todo',
    text: 'Si conviene más reemplazar el equipo, te lo decimos. La confianza es lo que más nos cuesta: no se la gasta.',
  },
];

export const zones = [
  { name: 'Zona Oeste', detail: 'hasta Moreno / San Miguel' },
  { name: 'Zona Norte', detail: 'hasta Tigre' },
  { name: 'Zona Sur', detail: 'hasta Canning / Quilmes' },
  { name: 'CABA', detail: 'toda la ciudad' },
];

export const testimonials = [
  {
    name: 'Sabrina Escobar',
    text: 'Excelente atención, responsable. Súper recomendable. Muchas gracias por tu servicio.',
  },
  {
    name: 'Nahuel Cardozo',
    text: 'Excelente servicio. Lo recomiendo.',
  },
  {
    name: 'Cecilia Guillermaz',
    text: 'Excelente trabajo. Los recomiendo, todo impecable. Me solucionaron el problema de mi lavarropas.',
  },
];

export const faqs = [
  {
    q: '¿Cuánto cuesta la visita técnica y el diagnóstico?',
    a: 'El costo de la visita se te confirma al agendar. El diagnóstico se hace en tu casa, con inspección y mediciones reales, y antes de iniciar cualquier reparación te damos un presupuesto cerrado. No hay sorpresas: si no aceptás, no se toca el equipo.',
  },
  {
    q: '¿Cuánto demora la reparación?',
    a: 'La mayoría de las fallas se diagnostican en la misma visita y, cuando tenemos el repuesto a mano, se reparan el mismo día. Si la pieza no está disponible, te decimos un plazo concreto.',
  },
  {
    q: '¿Me conviene reparar o conviene reemplazar el equipo?',
    a: 'Eso se responde con el diagnóstico en mano: te contamos cuánto cuesta la reparación y lo ponemos en relación con la edad y el estado real del equipo. Si reemplazar es la mejor opción, también te lo decimos.',
  },
  {
    q: '¿Qué garantía tienen las reparaciones?',
    a: 'Cada trabajo tiene una garantía según el tipo de reparación realizado, y te la informamos antes de que aceptes el presupuesto.',
  },
  {
    q: '¿Qué marcas reparan?',
    a: 'Más de 30 marcas: Whirlpool, LG, Samsung, MPM, Induktion, Anfora, Torn y muchas más. Si tu marca no está en la lista, escribinos igual y te confirmamos.',
  },
  {
    q: '¿En qué horario atienden y cómo se agenda?',
    a: 'Atendemos de lunes a viernes de 9 a 18 hs y sábados de 9 a 14 hs. Las visitas se agendan por WhatsApp o teléfono, según tu zona de cobertura.',
  },
  {
    q: '¿Qué datos me piden para agendar?',
    a: 'La marca y el modelo del equipo, y qué está haciendo: no enciende, hace ruidos, pierde agua, un código de error… Con eso el técnico va preparado y la visita rinde.',
  },
];

// (PENDIENTE) Ajustar cuando el cliente confirme:
// - Costo de la visita/diagnóstico (hoy no se publica ningún número)
// - Garantía concreta por tipo de trabajo (días/meses)
// - Formas de pago
