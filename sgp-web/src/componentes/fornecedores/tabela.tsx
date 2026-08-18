import { mensagens } from '@/constantes/mensagens';
import type { Fornecedor } from '@/schemas/fornecedor';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela';

interface PropriedadesTabelaFornecedores {
  linhas?: Fornecedor[];
}

const TabelaFornecedores = ({ linhas = [] }: PropriedadesTabelaFornecedores) => {
  const dados = linhas;

  const colunas: ColunaTabela<Fornecedor>[] = [
    {
      id: 'nome',
      label: mensagens.comum.fornecedor,
      render: (linha) => linha.nome,
      sortAccessor: (linha) => linha.nome,
    },
    {
      id: 'documento',
      label: mensagens.comum.documento,
      render: (linha) => linha.documento,
      sortAccessor: (linha) => linha.documento,
    },
    {
      id: 'telefone',
      label: mensagens.comum.telefone,
      render: (linha) => linha.telefone,
      sortAccessor: (linha) => linha.telefone,
    },
    {
      id: 'nomeContato',
      label: mensagens.comum.nomeContato,
      render: (linha) => linha.nomeContato,
      sortAccessor: (linha) => linha.nomeContato,
    },
  ];

  return (
    <Tabela
      colunas={colunas}
      linhas={dados}
      obterIdLinha={(linha) => linha.idFornecedor}
      ordenacaoPadrao={{ columnId: 'nome', direction: 'asc' }}
    />
  );
};

export default TabelaFornecedores;
