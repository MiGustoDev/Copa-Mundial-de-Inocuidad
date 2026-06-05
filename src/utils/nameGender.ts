const femaleNames = new Set([
  'ana', 'maria', 'maría', 'sofia', 'sofía', 'lucia', 'lucía', 'valentina', 'camila', 'paula', 'julieta', 'martina', 'luciana', 'gabriela', 'laura', 'natalia', 'florencia', 'isabela', 'isabela', 'romina', 'marina', 'silvia', 'monica', 'mónica', 'carla', 'ana', 'veronica', 'verónica', 'marcela', 'veronica', 'sandra', 'rosario'
]);

const maleNames = new Set([
  'julio', 'carlos', 'jose', 'josé', 'juan', 'luis', 'luis', 'martin', 'martín', 'diego', 'pablo', 'franco', 'gaston', 'gastón', 'federico', 'alejandro', 'fabian', 'fabián', 'manuel', 'ignacio', 'camilo', 'nicolas', 'nicolás', 'ricardo', 'roberto', 'eduardo', 'miguel', 'sebastian', 'sebastián'
]);

const removeAccents = (value: string) =>
  value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();

export function getFirstName(name: string) {
  return name.split(' ').find((part) => part.length > 0) ?? '';
}

export function getGenderEmoji(name: string) {
  const firstName = getFirstName(name);
  if (!firstName) return '';

  const normalized = removeAccents(firstName);

  if (femaleNames.has(normalized)) return '👩🏻‍🦰';
  if (maleNames.has(normalized)) return '🧑🏻';

  if (normalized.endsWith('a')) return '👩🏻‍🦰';
  return '🧑🏻';
}

export function getNameWithGenderEmoji(name: string) {
  const trimmed = name.trim();
  if (!trimmed) return '';
  const emoji = getGenderEmoji(trimmed);
  return `${emoji} ${trimmed}`;
}
