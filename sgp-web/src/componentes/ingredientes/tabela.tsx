import { mensagens } from '@/constantes/mensagens';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela';
import type { Ingrediente } from '@/schemas/ingrediente';
import { formatarMoeda } from '@/utils/formatar-moeda';
import { Chip } from '@mui/material';

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
        `${linha.estoqueAtual.toLocaleString('pt-BR')} ${linha.unidadeMedida.abreviacao}`,
      sortAccessor: (linha) => linha.estoqueAtual,
    },
    {
      id: 'estoqueMinimo',
      label: mensagens.comum.minimo,
      align: 'right',
      render: (linha) =>
        `${linha.estoqueMinimo.toLocaleString('pt-BR')} ${linha.unidadeMedida.abreviacao}`,
      sortAccessor: (linha) => linha.estoqueMinimo,
    },
    {
      id: 'custoPorUnidade',
      label: mensagens.comum.custoUnitario,
      align: 'right',
      render: (linha) => formatarMoeda(linha.custoPorUnidade),
      sortAccessor: (linha) => linha.custoPorUnidade,
    },
    {
      id: 'status',
      label: mensagens.comum.status,
      render: (linha) => {
        const estoqueBaixo = linha.estoqueAtual <= linha.estoqueMinimo;
        const estoqueEtiqueta = estoqueBaixo ? 'Cuidado' : 'OK'
        return (
          <Chip
            size="small"
            label={estoqueEtiqueta}
            color={
              linha.estoqueAtual > linha.estoqueMinimo
                ? 'success'
                : 'error'
            }
            variant="outlined"
          />
        );
      },
      sortAccessor: (linha) => (linha.estoqueAtual <= linha.estoqueMinimo ? 0 : 1),
    },
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

