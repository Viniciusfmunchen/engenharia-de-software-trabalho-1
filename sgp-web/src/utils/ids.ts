export const getNextId = <T extends { id: number }>(items: T[]) =>
  Math.max(0, ...items.map((item) => item.id)) + 1;
