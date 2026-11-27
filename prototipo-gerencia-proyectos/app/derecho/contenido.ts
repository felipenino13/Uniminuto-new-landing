import type { OfertaV02 } from "../components/contenido-v02";
import type { ContenidoProgramaV02 } from "../components/programa-v02";

export const ofertaDerecho: OfertaV02 = {
  nombre: "Derecho",
  nivel: "Pregrado universitario",
  mensaje: "Aprende a analizar casos, argumentar con fundamento y resolver conflictos.",
  duracion: 10,
  creditos: 149,
  snies: "118023",
  resolucion: "011561 del 11/06/2025",
  vigencia: "7 años",
  matricula: "$2.882.700",
  precioOficial: "$5.130.000",
};

export const imagenPerfil = "/landing/derecho/perfil.webp";

export const testimoniosDerecho = [
  {
    nombre: "Laura Mejía",
    imagen: "/landing/derecho/testimonio-laura.webp",
    texto: "Cuando analizaba un caso, quería ir directo a la respuesta. Con los ejercicios de argumentación aprendí a",
    destacado: "ordenar los hechos y explicar por qué una norma puede aplicar",
  },
  {
    nombre: "Andrés Ríos",
    imagen: "/landing/derecho/testimonio-andres.webp",
    texto: "Trabajo durante el día. Estudiar en modalidad virtual me ayudó a organizar mis lecturas y a",
    destacado: "reservar tiempo para estudiar los casos con calma",
  },
  {
    nombre: "Natalia Torres",
    imagen: "/landing/derecho/testimonio-natalia.webp",
    texto: "En un ejercicio de negociación entendí que escuchar a cada parte me ayuda a",
    destacado: "proponer acuerdos que respondan al problema de fondo",
  },
];

export const planDerecho: ContenidoProgramaV02 = {
  resumen: "149 créditos · 10 semestres · Modalidad virtual · Título: abogado o abogada",
  componentes: [
    { titulo: "Profesional", temas: ["Fundamentación y Argumentación Jurídica", "Contratos", "Procesal Penal", "Habilidades de Negociación y Resolución de Conflictos", "Consultorio Jurídico I–IV"] },
    { titulo: "Básico profesional", temas: ["Habilidades Digitales", "Lectura y escritura en el contexto digital", "Inglés I–III"] },
    { titulo: "Minuto de Dios", temas: ["Ética profesional", "Práctica en Responsabilidad Social", "Emprendimiento"] },
    { titulo: "Profesional complementario", temas: ["Electivas", "Opción de grado"] },
  ],
  documentos: [
    "Diploma o acta de grado de bachiller.",
    "Resultado de las pruebas de Estado para acceso a la educación superior.",
    "Copia del documento de identidad ampliada al 150 %.",
    "Soporte reciente de afiliación a salud o Sisbén.",
  ],
  pasos: [
    { titulo: "Regístrate como aspirante", descripcion: "Completa el registro en el portal de admisiones de UNIMINUTO." },
    { titulo: "Presenta tus documentos", descripcion: "Reúne los soportes de bachillerato, pruebas de Estado, identificación y afiliación." },
    { titulo: "Revisa el proceso con Admisiones", descripcion: "Confirma los requisitos aplicables, la entrevista y los pagos que correspondan." },
    { titulo: "Completa tu matrícula", descripcion: "Formaliza el contrato y el pago de matrícula según las indicaciones de la institución." },
  ],
  pdf: "https://www.uniminuto.edu/sites/default/files/programas/2026-02/Plan-de-estudios-Derecho-2.pdf",
  imagen: {
    src: "/landing/derecho/plan-estudios.webp",
    alt: "Una estudiante presenta un argumento oral en una audiencia simulada.",
  },
};

export const aprendizajesDerecho = [
  { icono: "heartbeat", titulo: "Argumenta con fundamento", texto: "Relaciona los hechos de un caso con las normas aplicables y explica las razones de tu postura." },
  { icono: "chart-line", titulo: "Analiza casos jurídicos", texto: "Aplica herramientas de distintas ramas del Derecho para formular alternativas ante un problema." },
  { icono: "network-wired", titulo: "Busca acuerdos", texto: "Explora técnicas de negociación y resolución de conflictos para facilitar el diálogo." },
  { icono: "store", titulo: "Aplica lo aprendido", texto: "Integra análisis jurídico, investigación y ética en actividades como el consultorio jurídico." },
];

export const beneficiosDerecho = [
  { icono: "trophy", titulo: "Aprende con docentes del área", texto: "Conoce perspectivas académicas y profesionales para analizar problemas jurídicos." },
  { icono: "clock", titulo: "Estudia en modalidad virtual", texto: "Organiza el tiempo de estudio según el calendario y las actividades del programa." },
  { icono: "laptop", titulo: "Encuentra apoyo durante tus estudios", texto: "Consulta los servicios académicos y de bienestar disponibles para estudiantes." },
  { icono: "divide", titulo: "Consulta opciones de pago", texto: "Revisa con un asesor el subsidio aplicable y las alternativas de financiación." },
];
