import { Chip } from '@mui/material';
import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda } from '@/utils/formatar-moeda';
import type { LinhaCompra } from '@/schemas/compra';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela/index';

// Função utilitária básica para não quebrar a página
const formatarData = (data: string) => new Date(data).toLocaleDateString('pt-BR');

interface PropriedadesTabelaCompras {
  linhas?: LinhaCompra[];
}

const TabelaCompras = ({ linhas = [] }: PropriedadesTabelaCompras) => {
  const dados = linhas;

  const colunas: ColunaTabela<LinhaCompra>[] = [
    {
      id: 'data',
      label: mensagens.comum.data,
      render: (linha) => formatarData(linha.data),
      sortAccessor: (linha) => new Date(linha.data),
    },
    {
      id: 'nomeFornecedor',
      label: mensagens.comum.fornecedor,
      render: (linha) => linha.nomeFornecedor,
      sortAccessor: (linha) => linha.nomeFornecedor,
    },
    {
      id: 'ingrediente',
      label: mensagens.comum.ingredientes,
      render: (linha) => linha.ingrediente.nomeIngrediente,
      sortAccessor: (linha) => linha.ingrediente.nomeIngrediente,
    },
    {
      id: 'quantidade',
      label: mensagens.comum.quantidade,
      align: 'right',
      render: (linha) =>
        `${linha.quantidade.toLocaleString('pt-BR')} ${linha.ingrediente.unidadeIngrediente.abreviacaoUnidade}`,
      sortAccessor: (linha) => linha.quantidade,
    },
    {
      id: 'custoTotal',
      label: mensagens.comum.total,
      align: 'right',
      render: (linha) => formatarMoeda(linha.custoTotal),
      sortAccessor: (linha) => linha.custoTotal,
    },
    {
      id: 'status',
      label: mensagens.comum.status,
      render: (linha) => (
        <Chip
          size="small"
          label={linha.status}
          color={linha.status === 'Concluída' ? 'success' : 'warning'}
          variant="outlined"
        />
      ),
      sortAccessor: (linha) => linha.status,
    },
  ];

  return (
    <Tabela
      colunas={colunas}
      linhas={dados}
      obterIdLinha={(linha) => linha.idCompra}
      ordenacaoPadrao={{ columnId: 'data', direction: 'desc' }}
    />
  );
};

export default TabelaCompras;
