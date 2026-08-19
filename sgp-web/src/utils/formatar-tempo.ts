export const formatarTempo = (minutos: number) => {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;

  if (!horas) return `${minutosRestantes} min`;
  if (!minutosRestantes) return `${horas} h`;

  return `${horas} h ${minutosRestantes} min`;
};
