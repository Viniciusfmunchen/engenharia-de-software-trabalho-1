import { mensagens } from '@/constantes/mensagens';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela';
import type { Ingrediente } from '@/schemas/ingrediente';
import { formatarMoeda } from '@/utils/formatar-moeda';

interface PropriedadesTabelaIngredientes {
  ingredientes?: Ingrediente[];
}

const TabelaIngredientes = ({
  ingredientes,
}: PropriedadesTabelaIngredientes) => {
  const colunas: ColunaTabela<Ingrediente>[] = [
    {
      id: 'nomeIngrediente',
      label: mensagens.comum.ingredientes,
      render: (linha) => linha.nomeIngrediente,
      sortAccessor: (linha) => linha.nomeIngrediente,
    },
    {
      id: 'categoriaIngrediente',
      label: mensagens.comum.categoria,
      render: (linha) => linha.categoriaIngrediente.nomeCategoria,
      sortAccessor: (linha) => linha.categoriaIngrediente.nomeCategoria,
    },
    {
      id: 'estoqueAtual',
      label: mensagens.comum.estoque,
      align: 'right',
      render: (linha) =>
        `${linha.estoqueAtual.toLocaleString('pt-BR')} ${linha.unidadeIngrediente.abreviacaoUnidade}`,
      sortAccessor: (linha) => linha.estoqueAtual,
    },
    {
      id: 'estoqueMinimo',
      label: mensagens.comum.minimo,
      align: 'right',
      render: (linha) =>
        `${linha.estoqueMinimo.toLocaleString('pt-BR')} ${linha.unidadeIngrediente.abreviacaoUnidade}`,
      sortAccessor: (linha) => linha.estoqueMinimo,
    },
    {
      id: 'precoPorUnidade',
      label: mensagens.comum.custoUnitario,
      align: 'right',
      render: (linha) => formatarMoeda(linha.precoPorUnidade),
      sortAccessor: (linha) => linha.precoPorUnidade,
    },
    /*  {
       id: 'status',
       label: mensagens.comum.status,
       render: (linha) => {
         return (
           <Chip
             size="small"
             label={status}
             color={
               status === mensagens.tabela.statusEstoque.ok
                 ? 'success'
                 : status === mensagens.tabela.statusEstoque.baixo
                   ? 'warning'
                   : 'error'
             }
             variant="outlined"
           />
         );
       },
       sortAccessor: (linha) => obterStatusEstoque(linha),
     }, */
  ];

  if (!ingredientes) return <>Nenhum ingrediente cadastrados</>

  return (
    <Tabela<Ingrediente>
      colunas={colunas}
      linhas={ingredientes}
      obterIdLinha={(linha) => linha.idIngrediente}
      ordenacaoPadrao={{ columnId: 'estoqueAtual', direction: 'asc' }}
    />
  );
};

export default TabelaIngredientes;

