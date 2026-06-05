import type { Question, Phase } from '../types/game';

// ── Fase de Grupos ────────────────────────────────────────────────────────────
export const faseGrupos: Question[] = [
  {
    pregunta: '¿Cuál es el objetivo principal de la inocuidad alimentaria?',
    tipo: 'opciones',
    opciones: [
      'A) Garantizar que el producto mantenga sus características sensoriales durante toda su vida útil.',
      'B) Garantizar que el alimento no cause daño al consumidor cuando se prepare y/o consuma según su uso previsto.',
      'C) Garantizar que el producto cumpla con las especificaciones comerciales acordadas con el cliente.',
    ],
    correcta: 1,
    explicacion: 'El objetivo principal es proteger al consumidor asegurando que el alimento sea seguro en su uso previsto.',
  },
  {
    pregunta: '¿Cuándo debe realizarse el lavado y sanitización de manos?',
    tipo: 'opciones',
    opciones: [
      'A) Al inicio de la jornada y después de utilizar sanitarios.',
      'B) Antes de comenzar las tareas, después de interrupciones y siempre que exista riesgo de contaminación.',
      'C) Al ingresar a producción y al finalizar el turno.',
    ],
    correcta: 1,
    explicacion: 'El lavado y sanitización deben hacerse antes de iniciar tareas, tras interrupciones y siempre que haya riesgo de contaminación.',
  },
  {
    pregunta: '¿Qué tipo de peligro representa la presencia de un fragmento metálico en un alimento?',
    tipo: 'opciones',
    opciones: [
      'A) Peligro químico.',
      'B) Peligro físico.',
      'C) Peligro microbiológico.',
    ],
    correcta: 1,
    explicacion: 'Un fragmento metálico en el alimento es un peligro físico que puede causar daño al consumidor.',
  },
  {
    pregunta: '¿Qué acción corresponde si un utensilio cae al piso durante la producción?',
    tipo: 'opciones',
    opciones: [
      'A) Limpiarlo visualmente y volver a utilizarlo.',
      'B) Retirarlo temporalmente hasta el próximo cambio de producto.',
      'C) Retirarlo del proceso y aplicar el procedimiento de limpieza y sanitización antes de reutilizarlo.',
    ],
    correcta: 2,
    explicacion: 'El utensilio debe retirarse y limpiarse/sanitizarse antes de volver a utilizarlo.',
  },
  {
    pregunta: '¿Qué representan las siglas BPM?',
    tipo: 'opciones',
    opciones: [
      'A) Buenas Prácticas de Manufactura.',
      'B) Base de Procesos de Manufactura.',
      'C) Buenas Prácticas de Monitoreo.',
    ],
    correcta: 0,
    explicacion: 'BPM significa Buenas Prácticas de Manufactura y son fundamentales para la inocuidad.',
  },
  {
    pregunta: '¿Qué se entiende por contaminación cruzada?',
    tipo: 'opciones',
    opciones: [
      'A) La transferencia involuntaria de peligros biológicos, químicos o físicos desde una fuente contaminada hacia un alimento o superficie apta.',
      'B) El contacto entre dos materias primas diferentes durante la producción.',
      'C) La mezcla accidental de productos pertenecientes a distintos lotes.',
    ],
    correcta: 0,
    explicacion: 'La contaminación cruzada es la transferencia involuntaria de peligros desde una fuente contaminada a un alimento o superficie.',
  },
  {
    pregunta: '¿Cuál es el principal objetivo del uso correcto del barbijo en un establecimiento elaborador de alimentos?',
    tipo: 'opciones',
    opciones: [
      'A) Evitar que el operador inhale partículas suspendidas en el ambiente.',
      'B) Reducir el riesgo de contaminación del alimento mediante la retención de gotas respiratorias emitidas por el manipulador.',
      'C) Cumplir con los requisitos de indumentaria establecidos por la empresa.',
    ],
    correcta: 1,
    explicacion: 'El barbijo ayuda a reducir la contaminación del alimento por gotas respiratorias emitidas por el manipulador.',
  },
  {
    pregunta: '¿Cuál es la finalidad principal de los registros operativos?',
    tipo: 'opciones',
    opciones: [
      'A) Permitir el seguimiento de los costos asociados al proceso.',
      'B) Servir como evidencia objetiva de que los controles fueron realizados y cumplieron los requisitos establecidos.',
      'C) Facilitar la planificación de la producción diaria.',
    ],
    correcta: 1,
    explicacion: 'Los registros operativos son evidencia objetiva de que los controles se realizaron y cumplieron los requisitos.',
  },
];

// ── Octavos de Final ──────────────────────────────────────────────────────────
export const octavos: Question[] = [
  {
    pregunta: '¿Qué es un Punto Crítico de Control (PCC)?',
    tipo: 'opciones',
    opciones: [
      'A) Una etapa donde puede aplicarse una medida de control esencial para prevenir, eliminar o reducir un peligro significativo a un nivel aceptable.',
      'B) Una etapa donde se realiza una inspección visual obligatoria.',
      'C) Una etapa donde se registran los parámetros más importantes del proceso.',
    ],
    correcta: 0,
    explicacion: 'Un PCC es una etapa donde se aplica una medida esencial para controlar un peligro significativo.',
  },
  {
    pregunta: '¿Cuál es la diferencia entre limpieza y sanitización?',
    tipo: 'opciones',
    opciones: [
      'A) La limpieza elimina suciedad visible y la sanitización reduce los microorganismos a niveles aceptables.',
      'B) La limpieza elimina microorganismos y la sanitización elimina residuos orgánicos.',
      'C) La sanitización reemplaza a la limpieza cuando se utilizan productos químicos autorizados.',
    ],
    correcta: 0,
    explicacion: 'La limpieza elimina suciedad visible y la sanitización reduce microorganismos a niveles aceptables.',
  },
  {
    pregunta: 'Durante una producción, el detector de metales rechaza un producto. ¿Qué corresponde hacer?',
    tipo: 'opciones',
    opciones: [
      'A) Reprocesar el producto rechazado para verificar si la falla persiste.',
      'B) Retener el producto rechazado e iniciar la investigación definida en el procedimiento.',
      'C) Continuar produciendo y verificar el detector al finalizar el turno.',
    ],
    correcta: 1,
    explicacion: 'Hay que retener el producto rechazado e iniciar la investigación según el procedimiento.',
  },
  {
    pregunta: '¿Cuál es el objetivo principal de la trazabilidad?',
    tipo: 'opciones',
    opciones: [
      'A) Conocer el recorrido completo de materias primas, materiales y productos terminados a lo largo de la cadena productiva.',
      'B) Determinar los costos asociados a cada lote elaborado.',
      'C) Controlar el stock disponible en depósitos y cámaras.',
    ],
    correcta: 0,
    explicacion: 'La trazabilidad busca conocer el recorrido completo de materias primas, materiales y productos a lo largo de la cadena.',
  },
  {
    pregunta: 'Se detecta una pérdida de lubricante en un equipo que está en funcionamiento. ¿Cuál es la acción más adecuada?',
    tipo: 'opciones',
    opciones: [
      'A) Continuar operando mientras el lubricante no entre en contacto visible con el producto.',
      'B) Detener la operación y evaluar el riesgo de contaminación química sobre el producto elaborado.',
      'C) Registrar el hallazgo y programar la reparación para el siguiente turno.',
    ],
    correcta: 1,
    explicacion: 'Se debe detener la operación y evaluar el riesgo de contaminación química en el producto.',
  },
  {
    pregunta: '¿Qué define mejor una no conformidad?',
    tipo: 'opciones',
    opciones: [
      'A) Una situación que podría generar una mejora futura.',
      'B) Un incumplimiento de un requisito establecido por un procedimiento, norma o especificación.',
      'C) Un hallazgo detectado durante una auditoría externa.',
    ],
    correcta: 1,
    explicacion: 'Una no conformidad es un incumplimiento de un requisito establecido por un procedimiento, norma o especificación.',
  },
];

// ── Cuartos de Final ──────────────────────────────────────────────────────────
export const cuartos: Question[] = [
  {
    pregunta: 'Durante una recorrida se encuentra una arandela metálica en el piso junto a una línea que está produciendo. ¿Cuál es la mejor decisión?',
    tipo: 'opciones',
    opciones: [
      'A) Retirar la arandela y solicitar a mantenimiento que verifique el equipo al finalizar la producción.',
      'B) Verificar visualmente el producto elaborado y continuar operando.',
      'C) Detener la operación, identificar el origen de la pieza y evaluar el posible impacto sobre el producto elaborado.',
    ],
    correcta: 2,
    explicacion: 'La mejor decisión es detener la operación, identificar el origen y evaluar el impacto sobre el producto.',
  },
  {
    pregunta: 'Un lote permaneció fuera de refrigeración más tiempo que el máximo permitido por procedimiento. ¿Qué corresponde?',
    tipo: 'opciones',
    opciones: [
      'A) Enfriarlo nuevamente y continuar con el proceso.',
      'B) Retener el lote y realizar una evaluación de riesgo según los criterios establecidos por la empresa.',
      'C) Liberarlo si no presenta alteraciones visibles.',
    ],
    correcta: 1,
    explicacion: 'El lote debe retenerse y evaluarse el riesgo según los criterios establecidos.',
  },
  {
    pregunta: '¿Por qué es importante investigar la causa raíz de una no conformidad?',
    tipo: 'opciones',
    opciones: [
      'A) Porque permite identificar al responsable del incidente.',
      'B) Porque facilita el cierre documental de la no conformidad.',
      'C) Porque permite implementar acciones correctivas eficaces para evitar la recurrencia del problema.',
    ],
    correcta: 2,
    explicacion: 'Investigar la causa raíz permite implementar acciones correctivas eficaces para evitar recurrencias.',
  },
  {
    pregunta: '¿Qué representa una desviación en un Punto Crítico de Control?',
    tipo: 'opciones',
    opciones: [
      'A) Una situación que puede comprometer la inocuidad del producto y requiere una respuesta inmediata.',
      'B) Una variación normal dentro del proceso productivo.',
      'C) Una observación que debe revisarse durante la auditoría interna.',
    ],
    correcta: 0,
    explicacion: 'Una desviación en un PCC puede comprometer la inocuidad y requiere una respuesta inmediata.',
  },
];

// ── Semifinal ─────────────────────────────────────────────────────────────────
export const semifinal: Question[] = [
  {
    pregunta: 'Durante el control preoperacional se observa desprendimiento de pintura en una estructura ubicada sobre una línea lista para comenzar la producción. ¿Cuál es la acción más adecuada?',
    tipo: 'opciones',
    opciones: [
      'A) Iniciar la producción y programar la reparación para el siguiente paro de planta.',
      'B) Limpiar la zona afectada e iniciar la producción con monitoreos reforzados.',
      'C) No iniciar la producción, aislar el área afectada, corregir la condición y verificar la eliminación del riesgo antes de liberar la línea.',
    ],
    correcta: 2,
    explicacion: 'No debe iniciarse la producción; primero hay que aislar, corregir la condición y verificar la eliminación del riesgo.',
  },
  {
    pregunta: 'Durante la verificación rutinaria, el detector de metales falla la prueba con la probeta patrón. ¿Cuál es la acción correcta?',
    tipo: 'opciones',
    opciones: [
      'A) Ajustar el detector y continuar produciendo desde ese momento.',
      'B) Detener la línea, retener todo el producto elaborado desde la última verificación satisfactoria y gestionar la desviación según procedimiento.',
      'C) Repetir la prueba al finalizar el turno para confirmar el resultado.',
    ],
    correcta: 1,
    explicacion: 'Se debe detener la línea, retener el producto desde la última verificación satisfactoria y gestionar la desviación.',
  },
];

// ── Gran Final ────────────────────────────────────────────────────────────────
export const granFinal: Question[] = [
  {
    pregunta:
      'Son las 18:00 hs y un camión espera para retirar un pedido completo. Durante una inspección previa al despacho se detecta que falta una tuerca de una mezcladora utilizada en la elaboración del lote. Luego de revisar el equipo no puede demostrarse dónde se encuentra la pieza ni descartarse que haya ingresado al producto. El lote ya está elaborado, envasado y listo para despachar.\n\n¿Cuál es la decisión más adecuada?',
    tipo: 'opciones',
    opciones: [
      'A) Despachar el lote debido a que no existe evidencia de que la tuerca haya ingresado al producto y la entrega no puede demorarse.',
      'B) Retener únicamente las cajas producidas al final del proceso y despachar el resto del lote.',
      'C) Bloquear el despacho, retener la totalidad del lote, investigar el destino de la pieza faltante y liberar únicamente si existe evidencia objetiva de que el producto es inocuo.',
    ],
    correcta: 2,
    explicacion:
      'La opción correcta prioriza la inocuidad y exige evidencia objetiva antes de liberar el producto.',
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
