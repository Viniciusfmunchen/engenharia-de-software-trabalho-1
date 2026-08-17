import type { FormaPagamento } from './padaria';

export interface Venda {
  idVenda: number;
  data: string;
  nomeComprador: string;
  idReceita: number;
  quantidade: number;
  formaPagamento: FormaPagamento;
}

export interface LinhaVendasPao {
  idReceita: number;
  nomePao: string;
  quantidade: number;
  faturamento: number;
  lucroEstimado: number;
}

export interface LinhaVendasCliente {
  idComprador: string;
  nomeComprador: string;
  pedidos: number;
  quantidade: number;
  faturamento: number;
}

export interface LinhaPagamento {
  formaPagamento: FormaPagamento;
  pedidos: number;
  faturamento: number;
}
