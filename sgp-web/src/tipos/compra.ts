import type { Ingrediente } from './ingrediente';
import type { StatusCompra } from './padaria';

export interface Compra {
  idCompra: number;
  data: string;
  nomeFornecedor: string;
  idIngrediente: number;
  quantidade: number;
  custoUnitario: number;
  status: StatusCompra;
}

export interface LinhaCompra extends Compra {
  ingrediente: Ingrediente;
  custoTotal: number;
}

export interface LinhaGastoFornecedor {
  nomeFornecedor: string;
  total: number;
  quantidadeCompras: number;
}

export interface LinhaGastoCategoria {
  categoria: string;
  total: number;
}
