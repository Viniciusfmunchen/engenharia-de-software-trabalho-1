import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda, obterLinhasVendasPaes } from '@/mocks/operacoes-mock';
import type { LinhaVendasPao } from '@/tipos/venda';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela';

interface PropriedadesTabelaReceitas {
  linhas?: LinhaVendasPao[];
  rows?: LinhaVendasPao[];
}

const TabelaReceitas = ({ linhas, rows }: PropriedadesTabelaReceitas) => {
  const dados = linhas ?? rows ?? obterLinhasVendasPaes();

  const colunas: ColunaTabela<LinhaVendasPao>[] = [
    {
      id: 'nomePao',
      label: mensagens.table.breadType,
      render: (linha) => linha.nomePao,
      sortAccessor: (linha) => linha.nomePao,
    },
    {
      id: 'quantidade',
      label: mensagens.table.sold,
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
    {
      id: 'lucroEstimado',
      label: mensagens.common.estimatedProfit,
      align: 'right',
      render: (linha) => formatarMoeda(linha.lucroEstimado),
      sortAccessor: (linha) => linha.lucroEstimado,
    },
  ];

  return (
    <Tabela
      columns={colunas}
      rows={dados}
      getRowId={(linha) => linha.idReceita}
      defaultSort={{ columnId: 'quantidade', direction: 'desc' }}
    />
  );
};

export default TabelaReceitas;
