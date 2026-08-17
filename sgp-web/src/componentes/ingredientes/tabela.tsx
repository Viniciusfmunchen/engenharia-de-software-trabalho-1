import { Chip } from '@mui/material';
import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda } from '@/mocks/operacoes-mock';
import { ingredientesPaes } from '@/mocks/receitas-paes-mock';
import type { Ingrediente } from '@/tipos/ingrediente';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela';

interface PropriedadesTabelaIngredientes {
  linhas?: Ingrediente[];
  rows?: Ingrediente[];
}

const obterStatusEstoque = (ingrediente: Ingrediente) => {
  if (ingrediente.estoqueAtual <= ingrediente.estoqueMinimo * 0.5)
    return mensagens.table.stockStatus.critical;
  if (ingrediente.estoqueAtual <= ingrediente.estoqueMinimo)
    return mensagens.table.stockStatus.low;

  return mensagens.table.stockStatus.ok;
};

const TabelaIngredientes = ({
  linhas,
  rows = ingredientesPaes,
}: PropriedadesTabelaIngredientes) => {
  const dados = linhas ?? rows;

  const colunas: ColunaTabela<Ingrediente>[] = [
    {
      id: 'nomeIngrediente',
      label: mensagens.common.ingredients,
      render: (linha) => linha.nomeIngrediente,
      sortAccessor: (linha) => linha.nomeIngrediente,
    },
    {
      id: 'categoriaIngrediente',
      label: mensagens.common.category,
      render: (linha) => linha.categoriaIngrediente.nomeCategoria,
      sortAccessor: (linha) => linha.categoriaIngrediente.nomeCategoria,
    },
    {
      id: 'estoqueAtual',
      label: mensagens.common.stock,
      align: 'right',
      render: (linha) =>
        `${linha.estoqueAtual.toLocaleString('pt-BR')} ${linha.unidadeIngrediente.abreviacaoUnidade}`,
      sortAccessor: (linha) => linha.estoqueAtual,
    },
    {
      id: 'estoqueMinimo',
      label: mensagens.common.minimum,
      align: 'right',
      render: (linha) =>
        `${linha.estoqueMinimo.toLocaleString('pt-BR')} ${linha.unidadeIngrediente.abreviacaoUnidade}`,
      sortAccessor: (linha) => linha.estoqueMinimo,
    },
    {
      id: 'precoPorUnidade',
      label: mensagens.common.unitCost,
      align: 'right',
      render: (linha) => formatarMoeda(linha.precoPorUnidade),
      sortAccessor: (linha) => linha.precoPorUnidade,
    },
    {
      id: 'status',
      label: mensagens.common.status,
      render: (linha) => {
        const status = obterStatusEstoque(linha);

        return (
          <Chip
            size="small"
            label={status}
            color={
              status === mensagens.table.stockStatus.ok
                ? 'success'
                : status === mensagens.table.stockStatus.low
                  ? 'warning'
                  : 'error'
            }
            variant="outlined"
          />
        );
      },
      sortAccessor: (linha) => obterStatusEstoque(linha),
    },
  ];

  return (
    <Tabela
      columns={colunas}
      rows={dados}
      getRowId={(linha) => linha.idIngrediente}
      defaultSort={{ columnId: 'estoqueAtual', direction: 'asc' }}
    />
  );
};

export default TabelaIngredientes;
