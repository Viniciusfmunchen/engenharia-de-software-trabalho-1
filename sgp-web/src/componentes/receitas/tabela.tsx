import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda } from '@/utils/formatar-moeda';
import type { LinhaVendasPao } from '@/schemas/venda';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela/index';

interface PropriedadesTabelaReceitas {
  linhas?: LinhaVendasPao[];
}

const TabelaReceitas = ({ linhas = [] }: PropriedadesTabelaReceitas) => {
  const dados = linhas;

  const colunas: ColunaTabela<LinhaVendasPao>[] = [
    {
      id: 'nomePao',
      label: mensagens.tabela.tipoPao,
      render: (linha) => linha.nomePao,
      sortAccessor: (linha) => linha.nomePao,
    },
    {
      id: 'quantidade',
      label: mensagens.tabela.vendidos,
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
    {
      id: 'lucroEstimado',
      label: mensagens.comum.lucroEstimado,
      align: 'right',
      render: (linha) => formatarMoeda(linha.lucroEstimado),
      sortAccessor: (linha) => linha.lucroEstimado,
    },
  ];

  return (
    <Tabela
      colunas={colunas}
      linhas={dados}
      obterIdLinha={(linha) => linha.idReceita}
      ordenacaoPadrao={{ columnId: 'quantidade', direction: 'desc' }}
    />
  );
};

export default TabelaReceitas;
