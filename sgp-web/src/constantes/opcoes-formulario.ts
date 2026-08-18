import { statusCompra } from '@/schemas/compra';

export interface OpcaoFormulario<T = string | number> {
  value: T;
  label: string;
}

export const opcoesStatusCompra: OpcaoFormulario<typeof statusCompra[number]>[] = [
  { value: 'Pendente', label: 'Pendente' },
  { value: 'Concluída', label: 'Concluída' },
  { value: 'Cancelada', label: 'Cancelada' },
];
