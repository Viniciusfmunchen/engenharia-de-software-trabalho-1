import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda } from '@/utils/formatar-moeda';
import type { LinhaVendasCliente } from '@/schemas/venda';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela/index';

interface PropriedadesTabelaVendas {
  linhas?: LinhaVendasCliente[];
}

const TabelaVendas = ({ linhas = [] }: PropriedadesTabelaVendas) => {
  const dados = linhas;

  const colunas: ColunaTabela<LinhaVendasCliente>[] = [
    {
      id: 'nomeComprador',
      label: mensagens.comum.comprador,
      render: (linha) => linha.nomeComprador,
      sortAccessor: (linha) => linha.nomeComprador,
    },
    {
      id: 'pedidos',
      label: mensagens.comum.pedidos,
      align: 'right',
      render: (linha) => linha.pedidos.toLocaleString('pt-BR'),
      sortAccessor: (linha) => linha.pedidos,
    },
    {
      id: 'quantidade',
      label: mensagens.comum.unidades,
      align: 'right',
      render: (linha) => linha.quantidade.toLocaleString('pt-BR'),
      sortAccessor: (linha) => linha.quantidade,
    },
    {
      id: 'faturamento',
      label: mensagens.comum.faturamento,
      align: 'right',
      render: (linha) => formatarMoeda(linha.faturamento),
      sortAccessor: (linha) => linha.faturamento,
    },
  ];

  return (
    <Tabela
      colunas={colunas}
      linhas={dados}
      obterIdLinha={(linha) => linha.idComprador}
      ordenacaoPadrao={{ columnId: 'faturamento', direction: 'desc' }}
    />
  );
};

export default TabelaVendas;
