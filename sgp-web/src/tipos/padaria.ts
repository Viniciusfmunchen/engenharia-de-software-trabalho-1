export const unidadesIngrediente = ['g', 'ml', 'un'] as const;

export const categoriasIngrediente = [
  'farinha',
  'fermento',
  'tempero',
  'açucar',
  'liquido',
  'gordura',
  'vegetal',
  'grao',
  'recheio',
  'outro',
] as const;

export const formasPagamento = ['Pix', 'Cartão', 'Dinheiro'] as const;
export const statusCompra = ['Recebida', 'Pendente'] as const;

export type FormaPagamento = (typeof formasPagamento)[number];
export type StatusCompra = (typeof statusCompra)[number];
export type UnidadeIngredienteValor = (typeof unidadesIngrediente)[number];
export type CategoriaIngredienteValor = (typeof categoriasIngrediente)[number];
