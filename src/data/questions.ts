import type { Question, Phase } from '../types/game';

// ── Fase de Grupos ────────────────────────────────────────────────────────────
export const faseGrupos: Question[] = [
  {
    pregunta: '¿Cuál es el principal objetivo de la inocuidad alimentaria?',
    tipo: 'opciones',
    opciones: [
      'A) Que el producto sea más barato',
      'B) Que el alimento no cause daño al consumidor',
      'C) Que tenga mejor sabor',
    ],
    correcta: 1,
    explicacion: 'El objetivo principal es proteger la salud del consumidor garantizando que el alimento sea seguro.',
  },
  {
    pregunta: '¿Cuándo debemos lavarnos las manos?',
    tipo: 'opciones',
    opciones: [
      'A) Solo al ingresar',
      'B) Antes de comenzar y cada vez que exista riesgo de contaminación',
      'C) Solo después del almuerzo',
    ],
    correcta: 1,
    explicacion: 'El lavado de manos debe ser antes de comenzar y ante cualquier riesgo de contaminación.',
  },
  {
    pregunta: '¿Qué hacemos si un elemento cae al piso?',
    tipo: 'opciones',
    opciones: [
      'A) Lo usamos igual',
      'B) Lo limpiamos según procedimiento o lo descartamos según corresponda',
      'C) Lo guarda otro compañero',
    ],
    correcta: 1,
    explicacion: 'Debe seguirse el procedimiento de limpieza o descarte adecuado según el tipo de elemento.',
  },
];

// ── Octavos de Final ──────────────────────────────────────────────────────────
export const octavos: Question[] = [
  {
    pregunta: '¿Qué es una contaminación cruzada?',
    tipo: 'opciones',
    opciones: [
      'A) Cuando dos jugadores se cruzan en la cancha',
      'B) Transferencia de microorganismos de un alimento/objeto a otro',
      'C) Cuando se mezcla limpieza con desinfección',
    ],
    correcta: 1,
    explicacion: 'La contaminación cruzada es la transferencia de patógenos entre alimentos, superficies o equipos.',
  },
  {
    pregunta: '¿Por qué se utilizan cofias y barbijos?',
    tipo: 'opciones',
    opciones: [
      'A) Por moda en la industria',
      'B) Para evitar contaminación por cabello y gotículas respiratorias',
      'C) Solo para cumplir con la normativa',
    ],
    correcta: 1,
    explicacion: 'Protegen contra contaminación por cabello, saliva y partículas respiratorias sobre los alimentos.',
  },
  {
    pregunta: '¿Qué debe hacerse ante una rotura de vidrio o plástico duro?',
    tipo: 'opciones',
    opciones: [
      'A) Continuar trabajando y limpiar después',
      'B) Detener producción, aislar área, limpiar completamente y revisar producto',
      'C) Solo barrer los trozos grandes',
    ],
    correcta: 1,
    explicacion: 'Se debe detener la producción inmediatamente para evitar contaminar el producto con fragmentos.',
  },
];

// ── Cuartos de Final ──────────────────────────────────────────────────────────
export const cuartos: Question[] = [
  {
    pregunta: 'Un operario encuentra suciedad en un equipo antes de iniciar producción. ¿Qué debe hacer?',
    tipo: 'opciones',
    opciones: [
      'A) Iniciar producción igual y limpiar después',
      'B) Limpiar y desinfectar el equipo antes de usarlo',
      'C) Avisar al supervisor y esperar indefinidamente',
    ],
    correcta: 1,
    explicacion: 'El equipo debe estar limpio y desinfectado antes de cualquier proceso de producción.',
  },
  {
    pregunta: "¿Qué significa 'si no está documentado, no existe'?",
    tipo: 'opciones',
    opciones: [
      'A) Que lo no escrito no importa',
      'B) Que en inocuidad, todo procedimiento debe estar registrado y documentado',
      'C) Que solo lo digital cuenta',
    ],
    correcta: 1,
    explicacion: 'En sistemas de inocuidad, la documentación es evidencia de que se cumplió el procedimiento.',
  },
  {
    pregunta: '¿Cuál es la diferencia entre limpieza y desinfección?',
    tipo: 'opciones',
    opciones: [
      'A) No hay diferencia, son lo mismo',
      'B) Limpieza quita suciedad visible; desinfección reduce microorganismos a nivel seguro',
      'C) Limpieza es con agua; desinfección es con químicos solamente',
    ],
    correcta: 1,
    explicacion: 'Limpieza remueve suciedad orgánica visible; desinfección elimina o reduce patógenos a niveles seguros.',
  },
];

// ── Semifinal ─────────────────────────────────────────────────────────────────
export const semifinal: Question[] = [
  {
    pregunta:
      'Caso práctico: Durante la producción observas un pallet apoyado contra una pared húmeda. ¿Qué riesgo existe y qué acción tomarías?',
    tipo: 'opciones',
    opciones: [
      'A) No hay riesgo, continuar trabajando',
      'B) Riesgo de contaminación por humedad/moho; separar pallet de pared, secar área y reportar',
      'C) Solo mover el pallet sin limpiar',
    ],
    correcta: 1,
    explicacion:
      'La humedad en paredes puede generar moho y contaminación. Se debe separar, secar el área y reportar el desvío.',
  },
  {
    pregunta: '¿Quién es responsable de la inocuidad alimentaria?',
    tipo: 'opciones',
    opciones: ['A) Calidad', 'B) Sanidad', 'C) Todos los colaboradores'],
    correcta: 2,
    explicacion: 'La inocuidad es responsabilidad de TODOS los colaboradores, no solo de un departamento.',
  },
];

// ── Gran Final ────────────────────────────────────────────────────────────────
export const granFinal: Question[] = [
  {
    pregunta:
      "Completar la frase: 'La inocuidad alimentaria comienza con ___________ y termina con ___________.'",
    tipo: 'abierta',
    instruccion:
      'No hay una única respuesta correcta; gana quien argumente mejor. Escribe tu respuesta completa y fundamentada.',
    explicacion:
      'Ejemplo: "La inocuidad alimentaria comienza con la prevención y termina con la satisfacción del consumidor."',
  },
];

// ── Index ─────────────────────────────────────────────────────────────────────
export const QUESTIONS: Record<Phase, Question[]> = {
  grupos: faseGrupos,
  octavos,
  cuartos,
  semifinal,
  final: granFinal,
};

// ── Pergamino text ────────────────────────────────────────────────────────────
export const PERGAMINO_COMPROMISOS = [
  'Lavarnos correctamente las manos.',
  'Cumplir los procedimientos establecidos.',
  'Mantener el orden y la limpieza.',
  'Cuidar las instalaciones y los equipos.',
  'Reportar cualquier desvío o situación de riesgo.',
  'Trabajar con responsabilidad y compromiso.',
];

export const PERGAMINO_INTRO =
  'Nosotros, integrantes del equipo de trabajo, asumimos el compromiso de elaborar alimentos seguros, protegiendo la salud de nuestros consumidores y manteniendo los más altos estándares de calidad e inocuidad.';

export const PERGAMINO_CIERRE =
  'Porque la inocuidad alimentaria no depende de una sola persona, sino del esfuerzo de todo el equipo.\n\nHoy renovamos nuestro compromiso de jugar para el mismo equipo, con un único objetivo:';

export const PERGAMINO_LEMA =
  '"QUE CADA ALIMENTO QUE PRODUCIMOS SEA TAN SEGURO COMO SI FUERA PARA NUESTRA PROPIA FAMILIA."';
