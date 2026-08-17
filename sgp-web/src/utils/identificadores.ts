export const obterProximoId = <T extends Record<string, any>>(
  itens: T[],
  campoId: keyof T = 'id' as keyof T,
): number => {
  if (!itens.length) return 1;
  const ids = itens.map((item) => Number(item[campoId]) || 0);
  return Math.max(0, ...ids) + 1;
};
