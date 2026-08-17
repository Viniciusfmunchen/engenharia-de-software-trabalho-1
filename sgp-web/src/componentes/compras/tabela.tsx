import { Chip } from '@mui/material';
import { mensagens } from '@/constantes/mensagens';
import { formatarData, formatarMoeda, obterLinhasCompras } from '@/mocks/operacoes-mock';
import type { LinhaCompra } from '@/tipos/compra';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela';

interface PropriedadesTabelaCompras {
  linhas?: LinhaCompra[];
  rows?: LinhaCompra[];
}

const TabelaCompras = ({ linhas, rows }: PropriedadesTabelaCompras) => {
  const dados = linhas ?? rows ?? obterLinhasCompras();

  const colunas: ColunaTabela<LinhaCompra>[] = [
    {
      id: 'data',
      label: mensagens.common.date,
      render: (linha) => formatarData(linha.data),
      sortAccessor: (linha) => new Date(linha.data),
    },
    {
      id: 'nomeFornecedor',
      label: mensagens.common.supplier,
      render: (linha) => linha.nomeFornecedor,
      sortAccessor: (linha) => linha.nomeFornecedor,
    },
    {
      id: 'ingrediente',
      label: mensagens.common.ingredients,
      render: (linha) => linha.ingrediente.nomeIngrediente,
      sortAccessor: (linha) => linha.ingrediente.nomeIngrediente,
    },
    {
      id: 'quantidade',
      label: mensagens.common.quantity,
      align: 'right',
      render: (linha) =>
        `${linha.quantidade.toLocaleString('pt-BR')} ${linha.ingrediente.unidadeIngrediente.abreviacaoUnidade}`,
      sortAccessor: (linha) => linha.quantidade,
    },
    {
      id: 'custoTotal',
      label: mensagens.common.total,
      align: 'right',
      render: (linha) => formatarMoeda(linha.custoTotal),
      sortAccessor: (linha) => linha.custoTotal,
    },
    {
      id: 'status',
      label: mensagens.common.status,
      render: (linha) => (
        <Chip
          size="small"
          label={linha.status}
          color={linha.status === 'Recebida' ? 'success' : 'warning'}
          variant="outlined"
        />
      ),
      sortAccessor: (linha) => linha.status,
    },
  ];

  return (
    <Tabela
      columns={colunas}
      rows={dados}
      getRowId={(linha) => linha.idCompra}
      defaultSort={{ columnId: 'data', direction: 'desc' }}
    />
  );
};

export default TabelaCompras;
