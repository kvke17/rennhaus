/**
 * CATÁLOGO DE SERVICIOS - RENNHAUS
 * Especialista Porsche · Santiago, Chile
 *
 * Descripciones honestas y verificadas del alcance técnico del taller.
 */

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  technicalPoints: string[];
  technicalBadge?: string;
  whatsappMessage: string;
  featured?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "mantencion-programada",
    code: "SRV.01 // PROGRAMMED",
    title: "Mantención Programada",
    category: "Servicio Periódico",
    description:
      "Mantenimiento preventivo por kilometraje o tiempo según especificaciones del fabricante. Sustitución metódica de fluidos, filtros e inspección de puntos críticos de seguridad.",
    technicalPoints: [
      "Cambio de fluidos y filtros de especificación requerida",
      "Inspección de sistemas de seguridad y desgaste mecánico",
      "Revisión de circuitos de frenado y refrigeración",
      "Verificación y reseteo de intervalos de servicio",
    ],
    technicalBadge: "PAUTA DE SERVICIO",
    whatsappMessage:
      "Hola Rennhaus, quisiera consultar por la mantención programada para mi Porsche [indicar modelo y kilometraje aproximado].",
    featured: true,
  },
  {
    id: "diagnostico-electronico",
    code: "SRV.02 // DIAGNOSTICS",
    title: "Diagnóstico Electrónico",
    category: "Electrónica y Gestión de A Bordo",
    description:
      "Lectura y análisis de unidades de control, detección de anomalías intermitentes y verificación de parámetros de funcionamiento de la electrónica del vehículo.",
    technicalPoints: [
      "Lectura integral de unidades de control",
      "Detección y análisis de fallas registradas",
      "Verificación de parámetros de sensores y actuadores",
    ],
    whatsappMessage:
      "Hola Rennhaus, necesito realizar un diagnóstico electrónico a mi Porsche [indicar modelo y síntoma o testigo encendido].",
  },
  {
    id: "frenos-suspension",
    code: "SRV.03 // BRAKES & SUSP.",
    title: "Frenos y Suspensión",
    category: "Dinámica y Seguridad Activa",
    description:
      "Mantenimiento y sustitución de pastillas, discos y componentes hidráulicos, asegurando la respuesta de frenado y el aplomo dinámico característico de la marca.",
    technicalPoints: [
      "Sustitución de componentes de fricción y discos",
      "Renovación y purga de líquido de frenos",
      "Inspección de amortiguación, fuelles y líneas hidráulicas",
    ],
    whatsappMessage:
      "Hola Rennhaus, quisiera consultar por servicio de frenos y suspensión para mi Porsche [indicar modelo].",
  },
  {
    id: "motor-transmision",
    code: "SRV.04 // POWERTRAIN",
    title: "Motor y Transmisión",
    category: "Mecánica Mayor",
    description:
      "Intervención técnica en motores y sistemas de transmisión, abarcando mantención preventiva, control de fugas, sincronización y sustitución de fluidos específicos.",
    technicalPoints: [
      "Sustitución de fluidos de transmisión mecánica y automática",
      "Control de estanqueidad y circuito de refrigeración",
      "Revisión de soportes motrices y correas auxiliares",
    ],
    whatsappMessage:
      "Hola Rennhaus, quisiera consultar por servicio de motor y transmisión para mi Porsche [indicar modelo y año].",
  },
  {
    id: "tren-delantero-geometria",
    code: "SRV.05 // GEOMETRY",
    title: "Tren Delantero y Geometría",
    category: "Alineación y Dinámica",
    description:
      "Ajuste de cotas de suspensión para garantizar estabilidad direccional en alta velocidad, respuesta precisa de dirección y desgaste homogéneo de neumáticos.",
    technicalPoints: [
      "Ajuste de alineación y geometría de suspensión",
      "Revisión de bujes, terminales y barras estabilizadoras",
      "Balanceo y verificación de ruedas",
    ],
    whatsappMessage:
      "Hola Rennhaus, me interesa consultar por alineación y geometría para mi Porsche [indicar modelo].",
  },
];
