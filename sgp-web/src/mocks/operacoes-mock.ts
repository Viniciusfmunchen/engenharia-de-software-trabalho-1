import {
  calcularCustoPorUnidade,
  formatarMoedaDeCentavos,
  ingredientesPaes,
  obterIngredientePorId,
  receitasPaes,
} from './receitas-paes-mock';
import { nomeClienteBalcao } from './entidades-mock';
import type { Compra, LinhaCompra } from '@/tipos/compra';
import type { Receita } from '@/tipos/receita';
import type { LinhaVendasCliente, LinhaVendasPao, Venda } from '@/tipos/venda';

export const vendasMock: Venda[] = [
  { idVenda: 1, data: '2026-01-08', nomeComprador: 'Padaria Central', idReceita: 1, quantidade: 420, formaPagamento: 'Pix' },
  { idVenda: 2, data: '2026-01-12', nomeComprador: 'Mercado Aurora', idReceita: 14, quantidade: 260, formaPagamento: 'Cartão' },
  { idVenda: 3, data: '2026-02-03', nomeComprador: 'Café Jardim', idReceita: 11, quantidade: 95, formaPagamento: 'Pix' },
  { idVenda: 4, data: '2026-02-18', nomeComprador: 'Mercado Aurora', idReceita: 2, quantidade: 88, formaPagamento: 'Cartão' },
  { idVenda: 5, data: '2026-03-02', nomeComprador: 'Empório São Bento', idReceita: 20, quantidade: 46, formaPagamento: 'Pix' },
  { idVenda: 6, data: '2026-03-15', nomeComprador: 'Café Jardim', idReceita: 13, quantidade: 150, formaPagamento: 'Dinheiro' },
  { idVenda: 7, data: '2026-04-06', nomeComprador: 'Hotel Primavera', idReceita: 47, quantidade: 360, formaPagamento: 'Pix' },
  { idVenda: 8, data: '2026-04-21', nomeComprador: 'Hotel Primavera', idReceita: 48, quantidade: 310, formaPagamento: 'Pix' },
  { idVenda: 9, data: '2026-05-09', nomeComprador: 'Mercearia União', idReceita: 7, quantidade: 140, formaPagamento: 'Cartão' },
  { idVenda: 10, data: '2026-05-20', nomeComprador: 'Café Jardim', idReceita: 18, quantidade: 72, formaPagamento: 'Pix' },
  { idVenda: 11, data: '2026-06-01', nomeComprador: 'Padaria Central', idReceita: 1, quantidade: 510, formaPagamento: 'Pix' },
  { idVenda: 12, data: '2026-06-04', nomeComprador: 'Empório São Bento', idReceita: 33, quantidade: 54, formaPagamento: 'Cartão' },
  { idVenda: 13, data: '2026-06-08', nomeComprador: 'Mercado Aurora', idReceita: 29, quantidade: 120, formaPagamento: 'Pix' },
  { idVenda: 14, data: '2026-06-11', nomeComprador: 'Restaurante Villa', idReceita: 46, quantidade: 80, formaPagamento: 'Dinheiro' },
  { idVenda: 15, data: '2026-06-13', nomeComprador: 'Restaurante Villa', idReceita: 42, quantidade: 65, formaPagamento: 'Pix' },
  { idVenda: 16, data: '2026-06-15', nomeComprador: 'Mercearia União', idReceita: 8, quantidade: 160, formaPagamento: 'Cartão' },
  { idVenda: 17, data: '2026-06-15', nomeComprador: nomeClienteBalcao, idReceita: 1, quantidade: 180, formaPagamento: 'Dinheiro' },
  { idVenda: 18, data: '2026-06-15', nomeComprador: nomeClienteBalcao, idReceita: 14, quantidade: 120, formaPagamento: 'Pix' },
  { idVenda: 19, data: '2026-06-16', nomeComprador: nomeClienteBalcao, idReceita: 8, quantidade: 95, formaPagamento: 'Cartão' },
];

export const comprasMock: Compra[] = [
  { idCompra: 1, data: '2026-01-04', nomeFornecedor: 'Moinho Boa Safra', idIngrediente: 1, quantidade: 18000, custoUnitario: 0.0042, status: 'Recebida' },
  { idCompra: 2, data: '2026-01-07', nomeFornecedor: 'Laticínios Serra', idIngrediente: 17, quantidade: 8000, custoUnitario: 0.0047, status: 'Recebida' },
  { idCompra: 3, data: '2026-02-02', nomeFornecedor: 'Distribuidora Alfa', idIngrediente: 8, quantidade: 700, custoUnitario: 0.055, status: 'Recebida' },
  { idCompra: 4, data: '2026-02-11', nomeFornecedor: 'Queijos Mantiqueira', idIngrediente: 51, quantidade: 2200, custoUnitario: 0.03, status: 'Recebida' },
  { idCompra: 5, data: '2026-03-01', nomeFornecedor: 'Moinho Boa Safra', idIngrediente: 2, quantidade: 9000, custoUnitario: 0.0062, status: 'Recebida' },
  { idCompra: 6, data: '2026-03-18', nomeFornecedor: 'Grãos do Vale', idIngrediente: 31, quantidade: 2500, custoUnitario: 0.0095, status: 'Recebida' },
  { idCompra: 7, data: '2026-04-04', nomeFornecedor: 'Laticínios Serra', idIngrediente: 21, quantidade: 1600, custoUnitario: 0.038, status: 'Recebida' },
  { idCompra: 8, data: '2026-04-16', nomeFornecedor: 'Empório Temperos', idIngrediente: 57, quantidade: 250, custoUnitario: 0.041, status: 'Recebida' },
  { idCompra: 9, data: '2026-05-05', nomeFornecedor: 'Hortifruti Bela Vista', idIngrediente: 29, quantidade: 1800, custoUnitario: 0.0052, status: 'Recebida' },
  { idCompra: 10, data: '2026-05-23', nomeFornecedor: 'Charcutaria Roma', idIngrediente: 53, quantidade: 1400, custoUnitario: 0.029, status: 'Recebida' },
  { idCompra: 11, data: '2026-06-03', nomeFornecedor: 'Moinho Boa Safra', idIngrediente: 1, quantidade: 22000, custoUnitario: 0.0043, status: 'Recebida' },
  { idCompra: 12, data: '2026-06-10', nomeFornecedor: 'Queijos Mantiqueira', idIngrediente: 49, quantidade: 2400, custoUnitario: 0.033, status: 'Pendente' },
  { idCompra: 13, data: '2026-06-14', nomeFornecedor: 'Empório Temperos', idIngrediente: 56, quantidade: 180, custoUnitario: 0.047, status: 'Pendente' },
];

export const formatarMoeda = (valor: number) =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export const formatarData = (data: string) =>
  new Date(`${data}T00:00:00`).toLocaleDateString('pt-BR');

export const obterReceitaPorId = (idReceita: number): Receita | undefined =>
  receitasPaes.find((receita) => receita.idReceita === idReceita);

export const obterFaturamentoVenda = (venda: Venda) => {
  const receita = obterReceitaPorId(venda.idReceita);
  return receita ? (receita.precoVenda / 100) * venda.quantidade : 0;
};

export const obterLucroVenda = (venda: Venda) => {
  const receita = obterReceitaPorId(venda.idReceita);
  return receita
    ? (receita.precoVenda / 100 - calcularCustoPorUnidade(receita)) * venda.quantidade
    : 0;
};

export const obterIngredientesEstoqueBaixo = () =>
  ingredientesPaes.filter((ingrediente) => ingrediente.estoqueAtual <= ingrediente.estoqueMinimo);

export const obterIngredientesEstoqueCritico = () =>
  ingredientesPaes.filter(
    (ingrediente) => ingrediente.estoqueAtual <= ingrediente.estoqueMinimo * 0.5,
  );

export const obterLinhasCompras = (): LinhaCompra[] =>
  comprasMock
    .map((compra) => {
      const ingrediente = obterIngredientePorId(compra.idIngrediente);

      return ingrediente
        ? {
            ...compra,
            ingrediente,
            custoTotal: compra.quantidade * compra.custoUnitario,
          }
        : null;
    })
    .filter((compra): compra is LinhaCompra => compra !== null);

export const obterLinhasVendasPaes = (): LinhaVendasPao[] => {
  const linhasPorReceita = new Map<number, LinhaVendasPao>();

  vendasMock.forEach((venda) => {
    const receita = obterReceitaPorId(venda.idReceita);
    if (!receita) return;

    const atual = linhasPorReceita.get(receita.idReceita) ?? {
      idReceita: receita.idReceita,
      nomePao: receita.nomeReceita,
      quantidade: 0,
      faturamento: 0,
      lucroEstimado: 0,
    };

    linhasPorReceita.set(receita.idReceita, {
      ...atual,
      quantidade: atual.quantidade + venda.quantidade,
      faturamento: atual.faturamento + obterFaturamentoVenda(venda),
      lucroEstimado: atual.lucroEstimado + obterLucroVenda(venda),
    });
  });

  return [...linhasPorReceita.values()].sort((a, b) => b.quantidade - a.quantidade);
};

export const obterLinhasVendasClientes = (): LinhaVendasCliente[] => {
  const linhasPorComprador = new Map<string, LinhaVendasCliente>();

  vendasMock.forEach((venda) => {
    const atual = linhasPorComprador.get(venda.nomeComprador) ?? {
      idComprador: venda.nomeComprador,
      nomeComprador: venda.nomeComprador,
      pedidos: 0,
      quantidade: 0,
      faturamento: 0,
    };

    linhasPorComprador.set(venda.nomeComprador, {
      ...atual,
      pedidos: atual.pedidos + 1,
      quantidade: atual.quantidade + venda.quantidade,
      faturamento: atual.faturamento + obterFaturamentoVenda(venda),
    });
  });

  return [...linhasPorComprador.values()].sort((a, b) => b.faturamento - a.faturamento);
};

export const obterResumoVendas = () => {
  const faturamento = vendasMock.reduce((total, venda) => total + obterFaturamentoVenda(venda), 0);
  const lucro = vendasMock.reduce((total, venda) => total + obterLucroVenda(venda), 0);
  const quantidade = vendasMock.reduce((total, venda) => total + venda.quantidade, 0);
  const linhasPaes = obterLinhasVendasPaes();
  const melhorPao = [...linhasPaes].sort((a, b) => b.quantidade - a.quantidade)[0];
  const piorPao = [...linhasPaes].sort((a, b) => a.quantidade - b.quantidade)[0];
  const paoMaisLucrativo = [...linhasPaes].sort(
    (a, b) => b.lucroEstimado - a.lucroEstimado,
  )[0];

  return {
    revenue: faturamento,
    profit: lucro,
    quantity: quantidade,
    orders: vendasMock.length,
    averageTicket: vendasMock.length ? faturamento / vendasMock.length : 0,
    bestBread: melhorPao ? { breadName: melhorPao.nomePao, quantity: melhorPao.quantidade } : undefined,
    lowestBread: piorPao ? { breadName: piorPao.nomePao, quantity: piorPao.quantidade } : undefined,
    mostProfitableBread: paoMaisLucrativo
      ? { breadName: paoMaisLucrativo.nomePao, estimatedProfit: paoMaisLucrativo.lucroEstimado }
      : undefined,
  };
};

export const obterResumoCompras = () => {
  const linhas = obterLinhasCompras();
  const total = linhas.reduce((soma, compra) => soma + compra.custoTotal, 0);
  const pendentes = linhas.filter((compra) => compra.status === 'Pendente');

  return {
    total,
    count: linhas.length,
    pendingCount: pendentes.length,
    pendingTotal: pendentes.reduce((soma, compra) => soma + compra.custoTotal, 0),
    suppliers: new Set(linhas.map((compra) => compra.nomeFornecedor)).size,
  };
};

export const obterResumoEstoque = () => {
  const estoqueBaixo = obterIngredientesEstoqueBaixo();
  const valorEstoque = ingredientesPaes.reduce(
    (soma, ingrediente) => soma + ingrediente.estoqueAtual * ingrediente.precoPorUnidade,
    0,
  );

  return {
    totalIngredients: ingredientesPaes.length,
    lowStockCount: estoqueBaixo.length,
    criticalStockCount: obterIngredientesEstoqueCritico().length,
    stockValue: valorEstoque,
  };
};

export const obterRotuloPrecoVenda = (idReceita: number) => {
  const receita = obterReceitaPorId(idReceita);
  return receita ? formatarMoedaDeCentavos(receita.precoVenda) : formatarMoeda(0);
};
