export interface UnidadeMedidaIngrediente {
  idUnidadeIngrediente: number;
  nomeUnidade: string;
  abreviacaoUnidade: string;
}

export interface CategoriaIngrediente {
  idCategoriaIngrediente: number;
  nomeCategoria: string;
}

export interface Ingrediente {
  idIngrediente: number;
  nomeIngrediente: string;
  categoriaIngrediente: CategoriaIngrediente;
  unidadeIngrediente: UnidadeMedidaIngrediente;
  precoPorUnidade: number;
  estoqueAtual: number;
  estoqueMinimo: number;
}

export interface IngredienteReceita extends Ingrediente {
  quantidade: number;
}

export interface AdicionarIngredienteReceita {
  idIngrediente: number;
  quantidade: number;
}
