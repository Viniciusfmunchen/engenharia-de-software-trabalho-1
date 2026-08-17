import type { IngredienteReceita } from './ingrediente';

export interface Receita {
  idReceita: number;
  nomeReceita: string;
  precoVenda: number;
  rendimento: number;
  tempoPreparacao: number;
  ingredientes: IngredienteReceita[];
  precoPorUnidade?: number;
  precoPorReceita?: number;
}
