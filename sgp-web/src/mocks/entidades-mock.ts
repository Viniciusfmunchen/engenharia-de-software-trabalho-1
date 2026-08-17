import type { Cliente } from '@/tipos/cliente';
import type { Fornecedor } from '@/tipos/fornecedor';

export const nomeClienteBalcao = 'Balcão da padaria';

export const fornecedoresMock: Fornecedor[] = [
  {
    idFornecedor: 1,
    nome: 'Moinho Boa Safra',
    documento: '12.345.678/0001-10',
    telefone: '(11) 4002-1000',
    nomeContato: 'Marcos Almeida',
  },
  {
    idFornecedor: 2,
    nome: 'Laticínios Serra',
    documento: '21.456.789/0001-22',
    telefone: '(31) 3555-2200',
    nomeContato: 'Helena Duarte',
  },
  {
    idFornecedor: 3,
    nome: 'Queijos Mantiqueira',
    documento: '33.987.654/0001-44',
    telefone: '(35) 3221-4500',
    nomeContato: 'Rafael Costa',
  },
  {
    idFornecedor: 4,
    nome: 'Distribuidora Alfa',
    documento: '45.876.321/0001-55',
    telefone: '(11) 3003-9090',
    nomeContato: 'Camila Prado',
  },
  {
    idFornecedor: 5,
    nome: 'Empório Temperos',
    documento: '56.111.222/0001-66',
    telefone: '(41) 3344-7000',
    nomeContato: 'Sofia Lima',
  },
  {
    idFornecedor: 6,
    nome: 'Grãos do Vale',
    documento: '67.222.333/0001-77',
    telefone: '(43) 3311-8100',
    nomeContato: 'Daniel Ribeiro',
  },
  {
    idFornecedor: 7,
    nome: 'Hortifruti Bela Vista',
    documento: '78.333.444/0001-88',
    telefone: '(11) 3444-6100',
    nomeContato: 'Laura Mendes',
  },
  {
    idFornecedor: 8,
    nome: 'Charcutaria Roma',
    documento: '89.444.555/0001-99',
    telefone: '(11) 3222-4600',
    nomeContato: 'Paulo Neri',
  },
];

export const clientesMock: Cliente[] = [
  {
    idCliente: 1,
    nome: nomeClienteBalcao,
    documento: '-',
    telefone: '-',
  },
  {
    idCliente: 2,
    nome: 'Padaria Central',
    documento: '10.222.333/0001-40',
    telefone: '(11) 3777-1200',
  },
  {
    idCliente: 3,
    nome: 'Mercado Aurora',
    documento: '20.333.444/0001-50',
    telefone: '(11) 3888-2100',
  },
  {
    idCliente: 4,
    nome: 'Café Jardim',
    documento: '30.444.555/0001-60',
    telefone: '(11) 3999-3200',
  },
  {
    idCliente: 5,
    nome: 'Hotel Primavera',
    documento: '40.555.666/0001-70',
    telefone: '(11) 3666-4300',
  },
  {
    idCliente: 6,
    nome: 'Mercearia União',
    documento: '50.666.777/0001-80',
    telefone: '(11) 3555-5400',
  },
  {
    idCliente: 7,
    nome: 'Empório São Bento',
    documento: '60.777.888/0001-90',
    telefone: '(11) 3444-6500',
  },
  {
    idCliente: 8,
    nome: 'Restaurante Villa',
    documento: '70.888.999/0001-00',
    telefone: '(11) 3333-7600',
  },
];

const chavesArmazenamento = {
  fornecedores: 'sgp.fornecedores.v2',
  clientes: 'sgp.clientes.v2',
};

const lerItensArmazenados = <T>(chave: string, valorPadrao: T[]) => {
  if (typeof window === 'undefined') return [...valorPadrao];

  try {
    const armazenado = window.localStorage.getItem(chave);
    return armazenado ? (JSON.parse(armazenado) as T[]) : [...valorPadrao];
  } catch {
    return [...valorPadrao];
  }
};

const persistirItens = <T>(chave: string, itens: T[]) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(chave, JSON.stringify(itens));
};

export const obterFornecedores = () =>
  lerItensArmazenados<Fornecedor>(chavesArmazenamento.fornecedores, fornecedoresMock);

export const salvarFornecedores = (fornecedores: Fornecedor[]) => {
  fornecedoresMock.splice(0, fornecedoresMock.length, ...fornecedores);
  persistirItens(chavesArmazenamento.fornecedores, fornecedores);
};

export const obterClientes = () =>
  lerItensArmazenados<Cliente>(chavesArmazenamento.clientes, clientesMock);

export const salvarClientes = (clientes: Cliente[]) => {
  clientesMock.splice(0, clientesMock.length, ...clientes);
  persistirItens(chavesArmazenamento.clientes, clientes);
};
