import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda, obterLinhasVendasClientes } from '@/mocks/operacoes-mock';
import type { LinhaVendasCliente } from '@/tipos/venda';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela';

interface PropriedadesTabelaVendas {
  linhas?: LinhaVendasCliente[];
  rows?: LinhaVendasCliente[];
}

const TabelaVendas = ({ linhas, rows }: PropriedadesTabelaVendas) => {
  const dados = linhas ?? rows ?? obterLinhasVendasClientes();

  const colunas: ColunaTabela<LinhaVendasCliente>[] = [
    {
      id: 'nomeComprador',
      label: mensagens.common.buyer,
      render: (linha) => linha.nomeComprador,
      sortAccessor: (linha) => linha.nomeComprador,
    },
    {
      id: 'pedidos',
      label: mensagens.common.orders,
      align: 'right',
      render: (linha) => linha.pedidos.toLocaleString('pt-BR'),
      sortAccessor: (linha) => linha.pedidos,
    },
    {
      id: 'quantidade',
      label: mensagens.common.units,
      align: 'right',
      render: (linha) => linha.quantidade.toLocaleString('pt-BR'),
      sortAccessor: (linha) => linha.quantidade,
    },
    {
      id: 'faturamento',
      label: mensagens.common.revenue,
      align: 'right',
      render: (linha) => formatarMoeda(linha.faturamento),
      sortAccessor: (linha) => linha.faturamento,
    },
  ];

  return (
    <Tabela
      columns={colunas}
      rows={dados}
      getRowId={(linha) => linha.idComprador}
      defaultSort={{ columnId: 'faturamento', direction: 'desc' }}
    />
  );
};

export default TabelaVendas;
